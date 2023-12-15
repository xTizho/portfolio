import "./index.css";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="footer dark-background">
      <Logo />
      <ul className="footer-links">
        <li>
          <a className="link" href="#">
            Resume
          </a>
        </li>
        <li>
          <a className="link" href="#">
            LinkedIn
          </a>
        </li>
        <li>
          <a className="link" href="#">
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
