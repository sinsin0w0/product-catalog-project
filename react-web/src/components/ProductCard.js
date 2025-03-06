import React from "react";
import Image from "./Image";

function ProductCard({ product, onClick }) {
  const cardStyle = {
    width: "270px",
    margin: "20px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const cardBodyStyle = {
    padding: "20px",
    backgroundColor: "#f8f9fa",
  };

  const cardTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const cardTextStyle = {
    fontSize: "1rem",
    height: "50px",
  };

  const imageUrl = product.imageUrl || "imageMissing.png";

  return (
    <div style={cardStyle} onClick={onClick}>
      <Image
        src={imageUrl}
        alt={product.name}
        style={{ width: "100%", height: "200px" }} // Set the size of the image
      />
      <div style={cardBodyStyle}>
        <h5 style={cardTitleStyle}>{product.name}</h5>
        <p
          style={
            {
              overflow: "hidden visible",
            ...cardTextStyle,
            }
          }
        >
          {product.description}
        </p>
        <p style={cardTextStyle}>Price: ${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
