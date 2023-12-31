import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  adjective: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export const Product = mongoose.model("Product", ProductSchema);
