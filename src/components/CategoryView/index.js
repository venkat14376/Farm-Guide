import { useState } from "react";
import './index.css';
import { Link } from "react-router-dom";
import { tabDetails } from "../../data/tabDetails";
import { products } from "../../data/products";

const CategoryView = () => {
  const [activeTab, setActiveTab] = useState(tabDetails[0].tabId);
  const [searchInput, setSearchInput] = useState("");

  const filteredProducts = products
    .filter(product => product.category === activeTab)
    .filter(product => product.name.toLowerCase().includes(searchInput.toLowerCase()));

  const Category = () => (
    <div>
      <h1 className="one">Categorys</h1>
    </div>
  );

  const TabItem = ({ item }) => {
    const { tabId, displayText } = item;
    return (
      <button
        className={`tab-button ${activeTab === tabId ? "active" : ""}`}
        onClick={() => setActiveTab(tabId)}
      >
        {displayText}
      </button>
    );
  };

  const ProjectDetails = ({ details }) => {
    const { name, category, image, about, id } = details;

    return (
      <Link className="no-underline" to={`/blogs/${id}`}>
        <div
          className="card"
          
          style={{ cursor: "pointer" }}
        >
          <img src={image} alt={name} className="card-image" />
          <div className="card-info">
            <h2 className="card-name">{name}</h2>
            <p className="card-category">Category: {category}</p>
            <p className="card-about">{about}</p>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="category-page">
      <Category />
      <ul className="tab-container">
        {tabDetails.map(tab => (
          <TabItem key={tab.tabId} item={tab} />
        ))}
      </ul>

      <input
        type="search"
        placeholder="Search For Your Products"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        className="search-input"
      />

      <div className="cards-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProjectDetails key={product.id} details={product} />
          ))
        ) : (
          <p className="no-results">🚫 No products found.</p>
        )}
      </div>
      
    </div>
  );
};

export default CategoryView;
