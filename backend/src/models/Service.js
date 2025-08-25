import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema(
  {
    before: { type: String, required: true }, // base64 data URL or binary gridFS id
    after: { type: String, required: true },
  },
  { _id: false }
);

const ServiceSchema = new mongoose.Schema(
  {
    category: { type: String, enum: ['residential', 'commercial'], required: true },
    serviceType: { 
      type: String, 
      enum: [
        // Residential services
        'standard-cleaning',
        'deep-cleaning', 
        'move-in-out-cleaning',
        'apartment-cleaning',
        'specialty-cleaning',
        // Newly added residential specialties
        'carpet-upholstery-cleaning',
        'window-cleaning',
        'fridge-oven-cleaning',
        'laundry-ironing-services',
        'bed-making-linen-changes',
        'organizing-services',
        // Commercial services
        'office-cleaning',
        'retail-cleaning',
        'medical-clinic-cleaning',
        'restaurant-cleaning',
        'post-construction-cleaning',
        // Newly added commercial specialties
        'floor-care-services',
        'high-touch-sanitizing',
        'pressure-washing',
        'event-clean-up'
      ], 
      required: true 
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    features: { type: [String], default: [] },
    duration: { type: String, default: '' },
    price: { type: String, default: '' },
    bestFor: { type: String, default: '' },
    images: { type: ImageSchema, required: true },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

ServiceSchema.index({ category: 1, order: 1 });

export default mongoose.model('Service', ServiceSchema);


