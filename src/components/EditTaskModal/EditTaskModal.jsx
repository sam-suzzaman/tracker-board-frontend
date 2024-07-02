import React from "react";
import Modal from "react-responsive-modal";

const EditTaskModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose} center closeOnOverlayClick={false}>
            <h2>Simple centered modal</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
            </p>
        </Modal>
    );
};

export default EditTaskModal;
