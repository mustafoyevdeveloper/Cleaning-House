import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    category: { type: String, required: true, enum: ['residential', 'commercial'] },
    serviceNeeded: { type: String, required: true },
    location: { type: String, default: '' },
    details: { type: String, default: '' },
    page: { type: String, default: '' },
    status: { type: String, enum: ['new', 'read'], default: 'new' }
  },
  { timestamps: true }
);

// Debug middleware to log all message operations
MessageSchema.pre('save', function(next) {
  console.log('Saving message with category:', this.category);
  console.log('Saving message with serviceNeeded:', this.serviceNeeded);
  next();
});

export default mongoose.model('Message', MessageSchema);


