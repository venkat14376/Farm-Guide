
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CategoryView from "./components/CategoryView";
import AboutUs from "./components/AboutUs";
import CategoryItem from "./components/CategoryItem";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorys" element={<CategoryView />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blogs/:id" element={<CategoryItem />}/ >
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;