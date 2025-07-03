const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Product = require('./models/productModel');
const products = require('./data/products');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Product Data Imported!');
    process.exit();
  } catch (error) {
    console.error('Error with data import:', error.message);
    process.exit(1);
  }
};

importData();
