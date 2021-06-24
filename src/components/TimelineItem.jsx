import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Image from "components/Image";

import "./TimelineItem.scss";

const TimelineItem = ({
  invert,
  imageFileName,
  imageAlt,
  imageContent,
  header,
  subheader,
  content,
  link,
}) => {
  const headerPart = header ? <h4>{header}</h4> : null;
  const subheaderPart = subheader ? <h4 className="subheading">{subheader}</h4> : null;

  const liClassName = clsx("timeline-item", { "timeline-inverted": invert });

  return (
    <li className={liClassName}>
      <div className="timeline-image">
        {imageContent || (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Image
              className="rounded-circle img-fluid"
              fileName={imageFileName}
              alt={imageAlt || header || subheader}
            />
          </a>
        )}
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          {headerPart}
          {subheaderPart}
        </div>
        <div className="timeline-body">
          <p>{content}</p>
        </div>
      </div>
    </li>
  );
};

TimelineItem.propTypes = {
  invert: PropTypes.bool,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageContent: PropTypes.any,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
};

TimelineItem.defaultProps = {
  invert: false,
  imageFileName: "",
  imageAlt: "",
  imageContent: null,
  header: "",
  subheader: "",
  content: "",
  link: "",
};

export default TimelineItem;
