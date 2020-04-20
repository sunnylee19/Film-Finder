import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Modal} from 'react-bootstrap';
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
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                            onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <PrivacyPolicyContentComponent/>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default PrivacyLinkComponent