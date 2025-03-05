import mongoose from 'mongoose';

const shoeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  size: { type: Number, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

const hoodieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

const Shoe = mongoose.model('Shoe', shoeSchema);
const Hoodie = mongoose.model('Hoodie', hoodieSchema);

export { Shoe, Hoodie };