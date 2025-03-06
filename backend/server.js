const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require('./api/productRoutes');
const app = express();

// Only allow requests from this domain
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(
    "mongodb+srv://sinsin1516:ProductTesting@productcatalog.o5xxv.mongodb.net/products_catalog",
    {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB:", err));

// Basic route
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to the Product Catalog API!</h1>
    <p>Here are the available routes:</p>
    
    <ul>
      <li><strong>/products</strong> - <em>GET</em> - Fetch all products</li>
      <li><strong>/products/:id</strong> - <em>GET</em> - Get a single product by ID</li>
      <li><strong>/products</strong> - <em>POST</em> - Add a new product</li>
    </ul>

  `);
});

app.use('/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
