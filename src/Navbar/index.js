import "./index.css";

function Navbar() {
  return (
    <header className="navbar">
      <a className="logo">
        <strong className="primary-green">T</strong>
        imothy
        <strong className="primary-green">Z</strong>
        hong
      </a>
      <nav>
        <ul className="links">
          <li>
            <a className="link" href="#">
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
