import "./Navbar.css";
import { NavbarItem } from "../../model/navbarItem";
import { Link } from "react-router-dom";
// to use img
import logo from "../../assets/imgs/logo.png";
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { Store } from "../../shared/shared context/counterContext";
interface Props {
  items: NavbarItem[];
}

const Navbar = ({ items }: Props) => {
  const store = useContext(Store);

  return (
    <nav className="navbar">
      <div className="container flex justify-content-between align-items-center py-2">
        {/* navbar logo */}
        <img src={logo} className="nav-logo" alt="" />
        {/* navbar items */}
        {items.map((item: NavbarItem, index: number) => (
          <Link className="nav-item" to={item.route} key={index}>
            <p>{item.label}</p>
          </Link>
        ))}
        {/* cart */}
        <div className="cart d-flex align-items-start ">
          <Link className="nav-item" to="/cart">
            <p className="mx-4">Cart</p>
          </Link>
          <ShoppingCart size={32} />
          <span className="text-primary"> {store.cart.cartCounter}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
