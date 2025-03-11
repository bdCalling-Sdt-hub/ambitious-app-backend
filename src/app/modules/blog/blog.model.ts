import { Schema, model } from 'mongoose';
import { IBlog, BlogModel } from './blog.interface';

const blogSchema = new Schema<IBlog, BlogModel>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, }
);

export const Blog = model<IBlog, BlogModel>('Blog', blogSchema);
