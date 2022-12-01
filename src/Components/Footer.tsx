import React from "react";
import IFooter from "./interface/IFooter";
type Props = {
  data : IFooter | {};
}

const Footer:React.FC<Props> = (props) => {
  const data  = props.data as IFooter
  if (!props.data) return null;

  const networks = data.social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>
        </div>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
