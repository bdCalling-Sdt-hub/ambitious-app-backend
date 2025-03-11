import { Schema, model } from 'mongoose';
import { IBusiness, BusinessModel } from './business.interface';

const BusinessSchema = new Schema<IBusiness>(
  {
    category: { type: Schema.Types.ObjectId, required: true, ref: 'Category' },
    seller: { type: Schema.Types.ObjectId, required: true, ref: 'Seller' },
    name: { type: String, required: true },
    description: { type: String, required: true },
    logo: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    website: { type: String, required: true },
    socialMedia: { type: String, required: true },
    ownership: { type: String, required: true },
    revenue: { type: Number, required: true },
    employees: { type: Number, required: true },
    founded: { type: String, required: true },
    reason: { type: String, required: true },
    images: { type: [String], required: true },
    documents: { type: [String], required: true },
    status: { type: String, enum: ["Pending", "Approved", "Rejected", "Deleted"], required: true },
  }, 
  {timestamps: true}
);

const Business = model<IBusiness, BusinessModel>('Business', BusinessSchema);

export default Business;