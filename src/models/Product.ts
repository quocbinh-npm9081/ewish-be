import { Schema, model } from 'mongoose';

const ProductShema = new Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String, required: true, unique: true },
    img: { type: String, require: true, unique: true },
    categories: { type: Array, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export default model('Product', ProductShema);
