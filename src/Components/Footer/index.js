import "./index.css";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="footer dark-background">
      <Logo />
      <p className="footer-slogan light-white">
        Let's be the catalyst for positive change.
      </p>
      <div className="footer-divider light-gray"></div>
      <ul className="footer-links">
        <li>
          <a
            className="link"
            href={process.env.PUBLIC_URL + "/data/resume.pdf"}
            target="_blank"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://www.linkedin.com/in/timothy-zhong/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a className="link" href="https://github.com/xTizho" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
