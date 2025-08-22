import { Router } from 'express';
import Message from '../models/Message.js';
import { requireAdmin } from '../middleware/auth.js';
import nodemailer from 'nodemailer';

const router = Router();

// Debug helper: log only in non-production environments
function debug(...args) {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
}

// Create transporter from env
function buildTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST) return null;
  
  debug('Building SMTP transporter with:', { SMTP_HOST, SMTP_PORT, SMTP_USER });
  
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    tls: {
      rejectUnauthorized: false
    }
  });
}

// Public: submit message
router.post('/', async (req, res) => {
  try {
    debug('Received message data:', req.body);
    const msg = await Message.create(req.body);
    debug('Created message:', msg);

    // Send email if configured
    const { ADMIN_EMAIL_FROM, ADMIN_EMAIL_TO } = process.env;
    const transporter = buildTransporter();
    if (transporter && ADMIN_EMAIL_TO) {
      const subject = `New Contact Message: ${msg.firstName} ${msg.lastName}`;
      debug('Email template - category:', msg.category);
      debug('Email template - serviceNeeded:', msg.serviceNeeded);
      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1e3a8a; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Message</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">From: ${msg.page || 'Website'}</p>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h2 style="color: #1e3a8a; margin-bottom: 15px; border-bottom: 2px solid #06b6d4; padding-bottom: 5px;">Customer Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${msg.firstName} ${msg.lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${msg.email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${msg.phone}</td>
                </tr>
                ${msg.location ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Location:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${msg.location}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h2 style="color: #1e3a8a; margin-bottom: 15px; border-bottom: 2px solid #06b6d4; padding-bottom: 5px;">Service Request</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Category:</td>
                  <td style="padding: 8px 0; color: #6b7280; text-transform: capitalize;">${msg.category}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${msg.serviceNeeded.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                </tr>
              </table>
            </div>
            
            ${msg.details ? `
            <div style="margin-bottom: 20px;">
              <h2 style="color: #1e3a8a; margin-bottom: 15px; border-bottom: 2px solid #06b6d4; padding-bottom: 5px;">Additional Details</h2>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid #06b6d4;">
                <p style="margin: 0; color: #374151; line-height: 1.6;">${(msg.details || '').replace(/\n/g, '<br/>')}</p>
              </div>
            </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                <strong>Submitted:</strong> ${new Date(msg.createdAt).toLocaleString()}<br>
                <strong>Source:</strong> ${msg.page || 'Website Contact Form'}
              </p>
            </div>
          </div>
        </div>
      `;
      try {
        debug('Sending email to:', ADMIN_EMAIL_TO);
        debug('From email:', ADMIN_EMAIL_FROM || ADMIN_EMAIL_TO);
        
        await transporter.sendMail({
          from: ADMIN_EMAIL_FROM || ADMIN_EMAIL_TO,
          to: ADMIN_EMAIL_TO,
          subject,
          html,
        });
        
        debug('Email sent successfully!');
      } catch (e) {
        console.error('Email error:', e.message);
        console.error('Email error details:', e);
      }
    }

    res.status(201).json(msg);
  } catch (e) {
    res.status(400).json({ error: 'Failed to submit message', details: e.message });
  }
});

// Admin: list messages
router.get('/', requireAdmin, async (req, res) => {
  try {
    const items = await Message.find().sort({ createdAt: -1 });
    debug('Fetched messages:', items.map(m => ({ 
      id: m._id, 
      category: m.category, 
      serviceNeeded: m.serviceNeeded,
      firstName: m.firstName 
    })));
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// Admin: mark read
router.put('/:id/read', requireAdmin, async (req, res) => {
  try {
    const updated = await Message.findByIdAndUpdate(req.params.id, { status: 'read' }, { new: true });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (e) {
    res.status(400).json({ error: 'Failed to update' });
  }
});

// Admin: delete message
router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const deleted = await Message.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Message not found' });
    res.json({ message: 'Message deleted successfully' });
  } catch (e) {
    res.status(400).json({ error: 'Failed to delete message' });
  }
});

export default router;


