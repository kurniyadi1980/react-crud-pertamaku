import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loading from "./components/LoadingAnimasi";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Ninja from "./screens/Dashboard";
import AddScreen from "./screens/AddScreen";
import UpdateScreen from "./screens/UpdateScreen";
const App2 = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Loading>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ninja2" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ninja" element={<Ninja />} />
            <Route path="/add" element={<AddScreen />} />
            <Route path="/update/:id" element={<UpdateScreen />} />
          </Routes>
        </Loading>
      </div>
    </Router>
  );
};

export default App2;
