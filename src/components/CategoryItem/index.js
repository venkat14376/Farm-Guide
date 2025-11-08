import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import "./index.css";

const CategoryItem = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <h2 className="not-found">Product not found</h2>;
  }

  return (
    <div className="category-item-container">
      <div className="category-item-card">
        <div className="product-image-wrapper">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>

        <div className="product-details">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-category"><strong>Category:</strong> {product.category}</p>
          <p className="product-about"> About :-{product.about}</p>
          <p className="product-description">Explnation:- {product.details}</p>

          <div className="video-links"> 
            <h3>Watch Related Videos:</h3>
            <a href={product.telugu} target="_blank" rel="noopener noreferrer" className="video-button">Telugu</a>
            <a href={product.Hindi} target="_blank" rel="noopener noreferrer" className="video-button">Hindi</a>
            <a href={product.English} target="_blank" rel="noopener noreferrer" className="video-button">English</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
