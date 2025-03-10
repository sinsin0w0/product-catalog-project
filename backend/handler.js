module.exports.getProducts = async (event) => {
  // Simulating fetching all products (replace with actual database query)
  const products = [
    { id: "1", name: "Product 1", price: 100 },
    { id: "2", name: "Product 2", price: 200 },
    { id: "3", name: "Product 3", price: 300 },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify({ products }),
  };
};

module.exports.getProduct = async (event) => {
  // Logic for getting a single product by ID (you can replace with actual database logic)
  const productId = event.pathParameters.id;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Product ${productId}` }),
  };
};

module.exports.createProduct = async (event) => {
  // Logic for creating a product (e.g., saving to a database)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Product created" }),
  };
};
