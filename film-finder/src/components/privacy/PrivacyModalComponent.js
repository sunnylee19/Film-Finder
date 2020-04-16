import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Modal,  Button } from 'react-bootstrap';

function PrivacyModalComponent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                Privacy Policy
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Privacy Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>We collect your data and don't care about your privacy. Just kidding, will update
                        this later!!!</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        I understand and agree to the privacy policy
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PrivacyModalComponent