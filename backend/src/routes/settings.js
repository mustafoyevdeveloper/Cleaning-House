import { Router } from 'express';
import Settings from '../models/Settings.js';
import { requireAdmin } from '../middleware/auth.js';

const router = Router();

// Get single settings doc (create if none)
router.get('/', async (req, res) => {
  try {
    let doc = await Settings.findOne();
    if (!doc) {
      doc = await Settings.create({});
    }
    res.json(doc);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

router.put('/', requireAdmin, async (req, res) => {
  try {
    const update = req.body || {};
    const doc = await Settings.findOneAndUpdate({}, update, { new: true, upsert: true });
    res.json(doc);
  } catch (e) {
    res.status(400).json({ error: 'Failed to update settings', details: e.message });
  }
});

export default router;


