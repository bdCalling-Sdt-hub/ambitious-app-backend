import { Model } from 'mongoose';

export type ICategory = {
  name: string;
}

export type CategoryModel = Model<ICategory, Record<string, unknown>>