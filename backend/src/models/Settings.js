import mongoose from 'mongoose';

const SocialSchema = new mongoose.Schema(
  {
    facebook: { type: String, default: '' },
    instagram: { type: String, default: '' },
    telegram: { type: String, default: '' },
  },
  { _id: false }
);

const HeroSchema = new mongoose.Schema(
  {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
  },
  { _id: false }
);

const BottomBarSchema = new mongoose.Schema(
  {
    enabled: { type: Boolean, default: true },
    message: { type: String, default: 'Ready to get started?' },
    buttonText: { type: String, default: 'Get Free Quote' },
    buttonLink: { type: String, default: '/contact' },
  },
  { _id: false }
);

const SettingsSchema = new mongoose.Schema(
  {
    siteName: { type: String, default: '' },
    phone: { type: String, default: '' },
    email: { type: String, default: '' },
    address: { type: String, default: '' },
    social: { type: SocialSchema, default: () => ({}) },
    hero: { type: HeroSchema, default: () => ({}) },
    bottomBar: { type: BottomBarSchema, default: () => ({}) },
  },
  { timestamps: true }
);

export default mongoose.model('Settings', SettingsSchema);


