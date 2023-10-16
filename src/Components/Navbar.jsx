import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <h1>CrypCoin</h1>
        </Link>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
