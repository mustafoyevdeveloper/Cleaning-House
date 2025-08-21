import { Router } from 'express';
import Service from '../models/Service.js';
import { requireAdmin } from '../middleware/auth.js';

const router = Router();

// List services by category
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const query = {};
    if (category) query.category = category;
    const items = await Service.find(query).sort({ order: 1, createdAt: -1 });
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

// Get one
router.get('/:id', async (req, res) => {
  try {
    const item = await Service.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  } catch (e) {
    res.status(400).json({ error: 'Invalid id' });
  }
});

// Create (admin)
router.post('/', requireAdmin, async (req, res) => {
  try {
    const created = await Service.create(req.body);
    res.status(201).json(created);
  } catch (e) {
    res.status(400).json({ error: 'Failed to create', details: e.message });
  }
});

// Update (admin)
router.put('/:id', requireAdmin, async (req, res) => {
  try {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (e) {
    res.status(400).json({ error: 'Failed to update', details: e.message });
  }
});

// Delete (admin)
router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const deleted = await Service.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true });
  } catch (e) {
    res.status(400).json({ error: 'Failed to delete' });
  }
});

export default router;


