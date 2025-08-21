import { Router } from 'express';
import Message from '../models/Message.js';
import { requireAdmin } from '../middleware/auth.js';
import nodemailer from 'nodemailer';

const router = Router();

// Create transporter from env
function buildTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST) return null;
  
  console.log('Building SMTP transporter with:', { SMTP_HOST, SMTP_PORT, SMTP_USER });
  
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
    const msg = await Message.create(req.body);

    // Send email if configured
    const { ADMIN_EMAIL_FROM, ADMIN_EMAIL_TO } = process.env;
    const transporter = buildTransporter();
    if (transporter && ADMIN_EMAIL_TO) {
      const subject = `New Contact Message: ${msg.firstName} ${msg.lastName}`;
      const html = `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${msg.firstName} ${msg.lastName}</p>
        <p><b>Email:</b> ${msg.email}</p>
        <p><b>Phone:</b> ${msg.phone}</p>
        <p><b>Service Needed:</b> ${msg.serviceNeeded}</p>
        <p><b>Location:</b> ${msg.location}</p>
        <p><b>Details:</b><br/>${(msg.details || '').replace(/\n/g, '<br/>')}</p>
        <p><b>Page:</b> ${msg.page || ''}</p>
        <p><i>Submitted at ${msg.createdAt}</i></p>
      `;
      try {
        console.log('Sending email to:', ADMIN_EMAIL_TO);
        console.log('From email:', ADMIN_EMAIL_FROM || ADMIN_EMAIL_TO);
        
        await transporter.sendMail({
          from: ADMIN_EMAIL_FROM || ADMIN_EMAIL_TO,
          to: ADMIN_EMAIL_TO,
          subject,
          html,
        });
        
        console.log('Email sent successfully!');
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


