import React from "react";
import Zmage from "react-zmage";
import IPortfolio from './Interface/IPortfolio'

 type Props = {
    data: IPortfolio | {};
 }

let id = 0;
const Portfolio:React.FC<Props> = (props) => {
  const data = props.data as IPortfolio;
  if (!data) return null;

  const projects = data.projects.map(function (projects) {
    let projectImage = "images/portfolio/" + projects.image;

    return (
      <div key={id++} className="columns portfolio-item">
        <div className="item-wrap">
          <Zmage alt={projects.title} src={projectImage} />
          <div style={{ textAlign: "center" }}>{projects.title}</div>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>PROJECT LIST</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
    </section>
  );

}

export default Portfolio;
