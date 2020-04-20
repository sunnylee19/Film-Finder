import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Button, Modal} from 'react-bootstrap';
import PrivacyPolicyContentComponent from "./PrivacyPolicyContentComponent";

function PrivacyLinkComponent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <p>
                I agree to the
                <span> </span>
            <a onClick={handleShow} href="#">
                privacy policy
            </a>
                <span> </span>
                of Film Finder.
            </p>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Privacy Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PrivacyPolicyContentComponent/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        I understand and agree to the privacy policy
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default PrivacyLinkComponent