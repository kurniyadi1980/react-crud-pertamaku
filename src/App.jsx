import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import DataNinja from "./screens/Dashboard";
import AddScreen from "./screens/AddScreen";
import UpdateScreen from "./screens/UpdateScreen";

const Loading = () => {
  return <div className="loading">Loading...</div>;
};

const Page = ({ title }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <Loading /> : <div className="page">{title}</div>;
};

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/services">Services</Link>
//       <Link to="/contact">Contact</Link>
//     </nav>
//   );
// };

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page title="Home Page" />} />
        <Route path="/ninja" element={<DataNinja />} />
        <Route path="/add" element={<AddScreen />} />
        <Route path="/update/:id" element={<UpdateScreen />} />
        <Route path="/services" element={<Page title="Services Page" />} />
        <Route path="/contact" element={<Page title="Contact Page" />} />
      </Routes>
    </Router>
  );
}
