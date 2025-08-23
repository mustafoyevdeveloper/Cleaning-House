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

const AboutUsSchema = new mongoose.Schema(
  {
    ourStory: { type: String, default: 'Founded in 2018, ALL AROUND YOUR HOUSE began with a simple mission: to provide exceptional cleaning and maintenance services that make homes and businesses shine. What started as a small local operation has grown into a trusted name in the Dallas-Fort Worth metroplex. Our journey has been driven by a commitment to quality, reliability, and customer satisfaction. We understand that every space is unique, and we\'ve developed our services to meet the diverse needs of our community. Today, we\'re proud to serve hundreds of satisfied customers across DFW, maintaining the same dedication to excellence that inspired us from the beginning.' },
    blueBox: {
      title: { type: String, default: 'Serving DFW Since 2018' },
      subtitle: { type: String, default: 'Over 5 years of excellence in cleaning and maintenance services' },
    },
    images: {
      blueBoxImage: { type: String, default: '' }, // base64 data URL
    },
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
    aboutUs: { type: AboutUsSchema, default: () => ({}) },
  },
  { timestamps: true }
);

export default mongoose.model('Settings', SettingsSchema);


