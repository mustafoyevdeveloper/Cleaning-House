import mongoose from 'mongoose';
import Message from './src/models/Message.js';

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/house-clean';

async function updateMessages() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Find all messages without category
    const messagesWithoutCategory = await Message.find({ 
      $or: [
        { category: { $exists: false } },
        { category: null },
        { category: '' }
      ]
    });

    console.log(`Found ${messagesWithoutCategory.length} messages without category`);

    // Update messages based on serviceNeeded
    for (const message of messagesWithoutCategory) {
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
      await Message.findByIdAndUpdate(message._id, { 
        category: category 
      });

      console.log(`Updated message ${message._id}: category = ${category}, service = ${message.serviceNeeded}`);
    }

    // Verify all messages now have category
    const allMessages = await Message.find();
    console.log('\nAll messages after update:');
    allMessages.forEach(msg => {
      console.log(`ID: ${msg._id}, Category: ${msg.category}, Service: ${msg.serviceNeeded}`);
    });

    console.log('\nUpdate completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error updating messages:', error);
    process.exit(1);
  }
}

updateMessages();
