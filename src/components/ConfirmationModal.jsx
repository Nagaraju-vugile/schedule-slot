import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ConfirmationModal = ({ modal, toggle, handleCancel }) => {
  const cancelHandler = () => {
    handleCancel();
    toggle();
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Are you sure you want to cancel the slot?
        </ModalHeader>
        <ModalBody>Please confirm and proceed.</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={cancelHandler}>
            Confirm
          </Button>
          <Button color="secondary" onClick={toggle}>
            No
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
