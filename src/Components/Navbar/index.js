import "./index.css";
import Logo from "../Logo";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <header className="navbar">
      <Logo />
      <nav>
        <ul className="links">
          <li>
            <Link className="link" to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <a className="link" href="mailto:timothynzhong@gmail.com">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
