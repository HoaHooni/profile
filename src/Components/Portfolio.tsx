import React from "react";
import Zmage from "react-zmage";
import IProjects from './interface/IProjects'

type Props = {
  data: IProjects[] | [];
}

let id = 0;
const Portfolio: React.FC<Props> = (props) => {
  const data = props.data as IProjects[];
  if (!data) return null;

  const projects = data.map(function (projects) {
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
