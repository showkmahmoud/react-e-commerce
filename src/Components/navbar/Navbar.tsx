import "./Navbar.css";
import { NavbarItem } from "../../model/navbarItem";
import { Link } from "react-router-dom";
interface Props {
  items: NavbarItem[];
}
const Navbar = ({ items }: Props) => {
  return (
    <nav className="navbar">
      <div className="container flex justify-content-between align-items-center py-2">
        {items.map((item: NavbarItem, index: number) => (
          <Link className="nav-item" to={item.route} key={index}>
            <p>{item.label}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
