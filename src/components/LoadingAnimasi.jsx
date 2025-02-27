import { useEffect, useState } from "react";
import "./Loading.css"; // Import CSS animasi

const LoadingAnimasi = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  ) : (
    children
  );
};

export default LoadingAnimasi;
