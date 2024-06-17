import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalResult = (props) => {
  const {showModalResult, setShowModalResult, dataModalResult } = props;

  const handleClose = () => setShowModalResult(false);

  return (
    <>

      <Modal show={showModalResult} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Your Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>Total Questions: <b>{dataModalResult.countTotal}</b></div>
            <div>Total Correct Answers: <b>{dataModalResult.countCorrect}</b></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Show answers
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalResult;