import React from "react";
import PropTypes from "prop-types";

import { Col } from "react-bootstrap";
import Image from "components/Image";
import Icon from "components/Icon";
import ProjectDetailDialog from "components/ProjectDetailDialog";

import "./ProjectItem.scss";

const ProjectItem = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  link,
  content,
  extraInfo,
}) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const handleShowDetail = React.useCallback(() => {
    setShowDetail(true);
  }, []);
  const handleHideDetail = React.useCallback(() => {
    setShowDetail(false);
  }, []);

  return (
    <>
      <Col md={4} sm={6} className="portfolio-item">
        <a
          role="button"
          tabIndex={-1}
          className="portfolio-link"
          data-toggle="modal"
          onClick={handleShowDetail}
        >
          <Image
            className="img-fluid"
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
          />
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <Icon iconName="PlusIcon" size="2x" />
            </div>
          </div>
        </a>
        <div className="portfolio-caption">
          <h4>{header}</h4>
          {subheader ? <p>{subheader}</p> : null}
        </div>
      </Col>
      <ProjectDetailDialog
        show={showDetail}
        onHide={handleHideDetail}
        header={header}
        subheader={subheader}
        link={link}
        content={content}
        extraInfo={extraInfo}
      />
    </>
  );
};

ProjectItem.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
  extraInfo: PropTypes.any,
};

ProjectItem.defaultProps = {
  imageAlt: "",
  subheader: "",
  content: "",
  link: "",
  extraInfo: null,
};

export default ProjectItem;
