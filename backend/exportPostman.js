const fs = require("fs");
const { Collection } = require("postman-collection");

const collection = new Collection({
  info: {
    name: "ProductCatalog API",
  },
  item: [
    {
      name: "Get all products",
      request: {
        method: "GET",
        url: "http://localhost:5000/products",
      },
    },
    {
      name: "Get product by ID",
      request: {
        method: "GET",
        url: "http://localhost:5000/products/:id",
      },
    },
    {
      name: "Create a new product",
      request: {
        method: "POST",
        url: "http://localhost:5000/products",
        header: [{ key: "Content-Type", value: "application/json" }],
        body: {
          mode: "raw",
          raw: JSON.stringify({
            name: "Sample Product",
            description: "Test product",
            price: 100,
            image: "image.jpg",
          }),
        },
      },
    },
  ],
});

// Save to file
fs.writeFileSync("postman_collection.json", JSON.stringify(collection, null, 2));
console.log("✅ Postman collection exported!");
