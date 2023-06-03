import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavbarItem } from "./model/navbarItem";
function App() {
  const navbaItems: NavbarItem[] = [
    { label: "Home", route: "/" },
    { label: "Cart", route: "/cart" },
    { label: "Contact Us", route: "" },
  ];
  return (
    <div className="App">
      <Router>
        <Navbar items={navbaItems} />
        <div className="container">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/cart" Component={Cart} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
