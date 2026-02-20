import { useState } from "react";
import type { Product } from "../types/product";

interface ProductProps {
  product: Product
}

function ProductCard({ product }: ProductProps) {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const cardStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    width: "220px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
  };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "160px",
    objectFit: "contain",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: "bold",
    margin: 0,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };


  const priceStyle: React.CSSProperties = {
    fontSize: "18px",
    color: "#15803D",
    fontWeight: "bold",
    margin: 0,
  };

  const categoryStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "#64748B",
    textTransform: "capitalize",
    margin: 0,
  };

  const ratingStyle: React.CSSProperties = {
    fontSize: "13px",
    color: "#B45309",
    margin: 0,
  };


  return (
    <div style={cardStyle}>
      <img
        src={product.image}
        alt={product.title}
        style={imgStyle}
      />
      <p style={categoryStyle}>{product.category}</p>
      <p style={titleStyle}>{product.title}</p>
      <p style={priceStyle}>${product.price}</p>
      <p style={ratingStyle}>
        ⭐ {product.rating.rate} ({product.rating.count} reviews)
      </p>
      <button onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? "Hide Details" : "Show Details"}
      </button>
      {showDescription && <p style={{
        fontSize: "12px"
      }}>{product.description}</p>}
    </div>
  );
}
export default ProductCard;