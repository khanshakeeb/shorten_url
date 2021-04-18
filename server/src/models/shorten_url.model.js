// Schema for conversation
import mongoose from 'mongoose';

const {Schema} = mongoose;

const conversationSchema = Schema({
    shortCode: {type: String, required: true, index: true, unique: true},
    longUrl: {type: String, required: true},
    shortURL: {type: String, required: true},
}, {timestamps: true});

export default mongoose.model('shorten_urls', conversationSchema);