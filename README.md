[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19706999&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## API Endpoints

The API will have the following endpoints:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)







✅ README.md

# 📦 Products RESTful API with Express.js

This project is a fully functional RESTful API built using **Express.js** that supports standard **CRUD operations**, **middleware**, **error handling**, and **advanced features** such as **filtering**, **pagination**, and **search**.

---

## 🎯 Objective

Build a RESTful API using Express.js that implements:
- Standard CRUD operations
- Middleware (logger, auth, validation)
- Global error handling
- Advanced querying and product statistics

---

## 🛠️ Setup Instructions

### ✅ Prerequisites

- Node.js v18 or higher
- MongoDB instance or use a local/mock DB (you may adapt to a simple array if Mongo is not used)

---

### 📥 Installation

```bash
git clone <your-github-classroom-repo-url>
cd <your-project-folder>
npm install
cp .env.example .env
🚀 Start the Server

npm start
The server will start at: http://localhost:3000

🔌 API Endpoints
Root Route
GET /

{
  "message": "Hello World"
}
📦 Products Routes
GET /api/products
List all products. Supports:

Filtering by category

Pagination: ?page=1&limit=5

Search by name: ?search=maize

Example:
GET /api/products?category=Seeds&search=maize&page=1&limit=5

GET /api/products/:id
Get a specific product by its ID.

Example Response:


{
  "id": "1",
  "name": "Maize Seed A",
  "description": "High quality maize seed",
  "price": 150,
  "category": "Seeds",
  "inStock": true
}
POST /api/products (🔐 Requires API Key)
Create a new product.

Headers:

vbnet
Copy
Edit
x-api-key: your-api-key
Body:

{
  "name": "New Product",
  "description": "Description here",
  "price": 99.99,
  "category": "Tools",
  "inStock": true
}
PUT /api/products/:id (🔐 Requires API Key)
Update an existing product.

DELETE /api/products/:id (🔐 Requires API Key)
Delete a product by ID.

📊 Stats Endpoint
GET /api/products/stats
Returns count of products grouped by category.

Example Response:

{
  "stats": [
    { "category": "Seeds", "count": 8 },
    { "category": "Fertilizers", "count": 3 }
  ]
}
🔐 Middleware Implemented
Logger Middleware: Logs method, URL, and timestamp

Authentication Middleware: Checks for x-api-key header

Validation Middleware: Validates product input on create/update

Error Handler: Handles all API errors globally

JSON Parser: Parses JSON request bodies

⚠️ Error Handling
Uses custom error classes:

NotFoundError

ValidationError

Responses return appropriate HTTP status codes:

{
  "error": "Product not found"
}
🧪 Testing
Use Postman, Insomnia, or curl to test the API.

curl -X GET http://localhost:3000/api/products
📁 Project Structure

Copy
Edit
├── server.js
├── routes/
│   └── productRoutes.js
├── middleware/
│   ├── logger.js
│   ├── auth.js
│   ├── validateProduct.js
│   └── errorHandler.js
├── utils/
│   └── asyncHandler.js
├── models/
│   └── Product.js (or in-memory array)
├── .env.example
└── README.md
📄 .env File
See .env.example for required variables.

📤 Submission
Accept the GitHub Classroom invitation

Push the following files:

All source files (server.js, routes/, middleware/, etc.)

README.md

.env.example

📜 License
MIT © 2025 Your Name



---

## ✅ `.env.example`

PORT=3000
API_KEY=your-secret-api-key








