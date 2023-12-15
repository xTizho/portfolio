import "./index.css";
import Logo from "../Logo";

function Navbar() {
  return (
    <header className="navbar">
      <Logo />
      <nav>
        <ul className="links">
          <li>
            <a className="link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
