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
        <ModalBody>Please confirm that you wish to cancel this event. A cancellation email will be sent out to you and invitee.</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={cancelHandler}>
            Yes, cancel
          </Button>
          <Button color="secondary" onClick={toggle}>
            Dont cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
