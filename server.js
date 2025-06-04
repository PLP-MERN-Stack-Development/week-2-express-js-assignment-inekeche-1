

const express = require('express');
const app = express();
/*const PORT = 3000;*/

// Hello World route
app.get('/', (req, res) => {
  res.send('Hello World');
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// server.js
const express = require('express');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// API Routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const dotenv = require('dotenv');
dotenv.config();

app.use(express.json()); // Parses application/json


const logger = require('./middleware/logger');
const authMiddleware = require('./middleware/auth');

app.use(logger); // Logs all requests
app.use(authMiddleware); // Protects all routes (or apply selectively)


const errorHandler = require('./middleware/errorHandler');

// ...after all routes
app.use(errorHandler);




const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const asyncHandler = require('../utils/asyncHandler');
const NotFoundError = require('../errors/NotFoundError');

// GET /api/products/:id
router.get('/:id', asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) throw new NotFoundError('Product');
  res.json(product);
}));

// DELETE /api/products/:id
router.delete('/:id', asyncHandler(async (req, res) => {
  const removed = await Product.findByIdAndDelete(req.params.id);
  if (!removed) throw new NotFoundError('Product');
  res.json({ message: 'Product deleted' });
}));

// Add `asyncHandler(...)` to all other async route handlers similarly


