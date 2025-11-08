import "./index.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="content">
        <h1 className="error-code">404</h1>
        <h2 className="error-text">Page Not Found</h2>
        <img src="/oops.png" alt="Oops" className="error-image" />
        <p className="description">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
