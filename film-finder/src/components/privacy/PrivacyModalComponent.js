import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Modal,  Button } from 'react-bootstrap';
import PrivacyPolicyContentComponent from "./PrivacyPolicyContentComponent";
import { useLocation } from 'react-router';

function PrivacyModalComponent() {
    const hash = useLocation().hash;
    const [show, setShow] = useState(hash === '#privacy-policy');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="light" onClick={handleShow}>
                Privacy Policy
            </Button>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Privacy Policy</Modal.Title>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                            onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <PrivacyPolicyContentComponent/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        CLOSE
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default PrivacyModalComponent