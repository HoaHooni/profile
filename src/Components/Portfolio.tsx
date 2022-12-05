import React from "react";
import IProjects from './interface/IProjects';
import { Fade } from "react-reveal";
import Project from "./Project";

type Props = {
  data: IProjects[] | [];
}

let id = 0;
const Portfolio: React.FC<Props> = (props) => {
  const data = props.data as IProjects[];
  if (!data) return null;

  const projects = data.map(function (project) {

    return (
      <div key={id++} className="columns portfolio-item">
        <Project data={project} />
      </div>
    );
  });

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>PROJECT LIST</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </Fade>

    </section>
  );

}

export default Portfolio;
