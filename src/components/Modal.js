import React from "react";
import { Modal as RModal } from "react-bootstrap";

const Modal = ({ children, footer, ...props }) => {
  return (
    <RModal {...props}>
      <RModal.Header closeButton>
        <RModal.Title>{props.contentLabel}</RModal.Title>
      </RModal.Header>
      <RModal.Body>{children}</RModal.Body>
      {footer && <RModal.Footer>{footer}</RModal.Footer>}
    </RModal>
  );
};

export default Modal;
