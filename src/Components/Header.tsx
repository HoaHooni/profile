import React from "react";
import IHeader from './Interface/IHeader'


type Props = {
  data: IHeader | {};
}

const Header: React.FC<Props> = (props) => {
  if (!props) return null;
  
  const { project, github, name, description, image } = props.data as IHeader;


  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <div className="image">
            <img src={image} alt="">
            </img>
          </div>
          <h1 className="responsive-headline">I'm {name}</h1>
          <h3>{description}.</h3>
          <hr />
          <ul className="social">
            <li>
              <a href={project}>
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href={github}>
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  )
}
Header.defaultProps = {
  data: {
    project: "",
    name: "",
    description: "",
    image: "",
    github: ""
  }
}

export default Header;
