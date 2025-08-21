import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/house-clean';

async function fixCategories() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const db = mongoose.connection.db;
    const messages = db.collection('messages');

    // Find all messages
    const allMessages = await messages.find({}).toArray();
    console.log(`Found ${allMessages.length} messages`);

    // Update each message
    for (const message of allMessages) {
      let category = 'residential'; // default

      // Determine category based on serviceNeeded
      if (message.serviceNeeded) {
        const service = message.serviceNeeded.toLowerCase();
        if (service.includes('office') || 
            service.includes('retail') || 
            service.includes('medical') || 
            service.includes('clinic') || 
            service.includes('restaurant') || 
            service.includes('construction')) {
          category = 'commercial';
        }
      }

      // Update the message
      await messages.updateOne(
        { _id: message._id },
        { $set: { category: category } }
      );

      console.log(`Updated message ${message._id}: category = ${category}, service = ${message.serviceNeeded}`);
    }

    console.log('All messages updated successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

fixCategories();
