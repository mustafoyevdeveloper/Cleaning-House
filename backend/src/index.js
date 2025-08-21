import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import servicesRouter from './routes/services.js';
import settingsRouter from './routes/settings.js';
import messagesRouter from './routes/messages.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/house_clean';
const DEFAULT_ALLOWED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:5173',
  'http://localhost:3000',
  // Production frontend (adjustable via env below)
  'https://freshc-cleaning-house.vercel.app',
];

const extraOriginsEnv =
  process.env.CORS_ORIGIN || process.env.CORS_ORIGINS || process.env.CLIENT_ORIGIN || '';
const EXTRA_ALLOWED_ORIGINS = extraOriginsEnv
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const ALLOWED_ORIGINS = Array.from(new Set([...DEFAULT_ALLOWED_ORIGINS, ...EXTRA_ALLOWED_ORIGINS]));

const corsOptions = {
  origin: (origin, callback) => {
    // Allow non-browser requests (e.g., curl, server-to-server)
    if (!origin) return callback(null, true);
    if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
    return callback(new Error(`Not allowed by CORS: ${origin}`));
  },
  credentials: false,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json({ limit: '15mb' }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/services', servicesRouter);
app.use('/api/settings', settingsRouter);
app.use('/api/messages', messagesRouter);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });


