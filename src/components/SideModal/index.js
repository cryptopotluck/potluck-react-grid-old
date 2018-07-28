import React from "react";

import { Modal, ModalBody } from "reactstrap";

const SideModal = ({ active, children, header, searchForm, toggle }) => (
  <Modal toggle={toggle} isOpen={active} className="modal-dialog-vertical">
    {header}
    <ModalBody>
      {searchForm}
      <div className="list-group list-group-flush list my--3">{children}</div>
    </ModalBody>
  </Modal>
);

export default SideModal;
