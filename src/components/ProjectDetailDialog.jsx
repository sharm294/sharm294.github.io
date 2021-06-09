import React from "react";
import PropTypes from "prop-types";

import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const ProjectDetailDialog = ({
  onHide,
  header,
  subheader,
  link,
  content,
  extraInfo,
  ...restProps
}) => {
  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto">
        <p className="item-intro text-muted">{subheader}</p>
        <p>{content}</p>
        {extraInfo}
      </Modal.Body>
      <Modal.Footer>
        <div className="mx-auto">
          <a href={link} target="_blank" rel="noopener noreferrer" content=" (external">
          <Button variant="primary">
           Source code &nbsp;
           <FontAwesomeIcon icon={faExternalLinkAlt} />
          </Button>
          </a>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

ProjectDetailDialog.propTypes = {
  onHide: PropTypes.func,
  header: PropTypes.string,
  subheader: PropTypes.string,
  link: PropTypes.string,
  content: PropTypes.string,
  extraInfo: PropTypes.any,
};

ProjectDetailDialog.defaultProps = {
  onHide: null,
  header: "",
  subheader: "",
  link: "",
  content: "",
  extraInfo: null,
};

export default ProjectDetailDialog;
