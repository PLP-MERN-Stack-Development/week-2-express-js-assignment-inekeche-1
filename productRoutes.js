const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products - list all
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/products/:id - get by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/products - create
router.post('/', async (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  const newProduct = new Product({ name, description, price, category, inStock });
  try {
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/products/:id - update
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Product not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/products/:id - delete
router.delete('/:id', async (req, res) => {
  try {
    const removed = await Product.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;



const { productValidationRules, validate } = require('../middleware/validateProduct');

// POST: Create product
router.post('/', productValidationRules, validate, async (req, res) => {
  // ... existing logic
});

// PUT: Update product
router.put('/:id', productValidationRules, validate, async (req, res) => {
  // ... existing logic
});




// routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');
const asyncHandler = require('../utils/asyncHandler');

// GET /api/products
router.get('/', asyncHandler(async (req, res) => {
  const { category, search, page = 1, limit = 10 } = req.query;

  const query = {};
  if (category) query.category = category;
  if (search) query.name = { $regex: search, $options: 'i' };

  const total = await Product.countDocuments(query);
  const products = await Product.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json({
    total,
    page: Number(page),
    limit: Number(limit),
    totalPages: Math.ceil(total / limit),
    products,
  });
}));
