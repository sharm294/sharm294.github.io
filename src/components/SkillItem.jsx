import React from "react";
import PropTypes from "prop-types";

import CircleFAButton from "components/CircleFAButton";
import Image from "components/Image";
import "./SkillItem.scss";

const SkillItem = ({ iconName, imageFileName, header, content }) => {
  let iconPart;
  if (iconName) {
    iconPart = <CircleFAButton iconName={iconName} />;
  }

  let imagePart;
  if (imageFileName) {
    imagePart = <Image className="skill-item-image" fileName={imageFileName} />;
  }

  return (
    <>
      {iconPart}
      {imagePart}
      <h4 className="skill-item-heading">
        {header}
      </h4>
      <ul>
        {content.map(element => {
          return <li key={element}>{element}</li>
        })}
      </ul>
    </>
  );
};

SkillItem.propTypes = {
  iconName: PropTypes.string,
  imageFileName: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.string),
};

SkillItem.defaultProps = {
  iconName: null,
  imageFileName: null,
  header: "",
  content: [],
};

export default SkillItem;
