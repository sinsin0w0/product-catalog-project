// src/pages/HomePage.js

import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (err) {
      setError("There was an error fetching the products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products by search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort products by price (ascending/descending)
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortAsc) {
      return a.price - b.price; // Ascending
    } else {
      return b.price - a.price; // Descending
    }
  });

  // Handle sorting button click
  const handleSortClick = () => {
    setSortAsc(!sortAsc);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true); // Show the modal when a product is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    setSelectedProduct(null);
  };

  return (
    <div className="home-page">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Product Catalog
      </h1>
      {/* Search bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
        style={{
         width:"300px",
        height: "35px"
        }}
          type="text"
          placeholder="🔍 Search products by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Sort button */}
        <button  style={{borderRadius:'5px', marginLeft:'10px'
        }}
        onClick={handleSortClick}>
        🎚 Sort by Price : ({sortAsc ? "🔼Ascending" : "🔽Descending"})
        </button>
      </div>
      <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px auto",
            }} >
        {loading ? (
            <Spinner></Spinner>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div
            className="product-list  "
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            {sortedProducts.map((product,i,arr) => (
              
              <ProductCard
                key={product._id}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
            
          </div>
          
        )}
      </div>

      <ProductModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default HomePage;
