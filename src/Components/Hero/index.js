import Navbar from "../Navbar";
import "./index.css";
import { ReadCvLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

function Hero() {
  return (
    <>
      <div className="background-image"></div>
      <div className="hero">
        <Navbar />
        <div className="hero-content container light-white">
          <div className="hero-upper-container">
            <h1 className="heading-primary">
              My name is<br></br>
              <strong className="primary-green">Timothy Zhong</strong>.
            </h1>
            <ul className="hero-media">
              <a href="#" className="tooltip" dataText="Resume">
                <ReadCvLogo
                  className="primary-green-hover"
                  size={32}
                  color="white"
                  weight="fill"
                />
              </a>
              <a href="#" className="tooltip" dataText="LinkedIn">
                <LinkedinLogo
                  className="primary-green-hover"
                  size={32}
                  color="white"
                  weight="fill"
                />
              </a>
              <a href="#" className="tooltip" dataText="GitHub">
                <GithubLogo
                  className="primary-green-hover"
                  size={32}
                  color="white"
                  weight="fill"
                />
              </a>
            </ul>
          </div>
          <p className="hero-description">
            I am a first-year undergraduate student pursuing a double degree in
            computer science and psychology at the University of Washington.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
