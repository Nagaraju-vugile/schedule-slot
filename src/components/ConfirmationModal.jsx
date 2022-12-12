import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { messages } from "../constants";

const ConfirmationModal = ({ modal, toggle, handleCancel }) => {
  const cancelHandler = () => {
    handleCancel();
    toggle();
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {messages.confirmationMessages.confirmCancelHeader}
        </ModalHeader>
        <ModalBody>{messages.confirmationMessages.confirmCancelBody}</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={cancelHandler}>
            {messages.buttons.yesCancel}
          </Button>
          <Button color="secondary" onClick={toggle}>
          {messages.buttons.dontCancel}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
