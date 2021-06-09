import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import ProjectItem from "components/ProjectItem";
import PageSection from "components/PageSection";
import "./Projects.scss";

const Projects = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, portfolios } = frontmatter;

  return (
    <PageSection className={clsx("portfolio-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {portfolios.map(
          ({ content, extraInfo, header, link, imageFileName, subheader }) => (
            <ProjectItem
              key={header}
              imageFileName={imageFileName}
              header={header}
              subheader={subheader}
              link={link}
              content={content}
              extraInfo={
                <ul>
                  {extraInfo.map((ei) => (
                    <li key={ei}>{ei}</li>
                  ))}
                </ul>
              }
            />
          ),
        )}
      </Row>
    </PageSection>
  );
};

Projects.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Projects.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Projects;
