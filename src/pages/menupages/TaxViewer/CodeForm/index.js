import React, { useEffect, useState, useRef } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import { ModalHeader } from "reactstrap";
const CodeForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [state, setState] = useState(false);
    const [fileType, setFileTypes] = useState();
    const [selectfileType, setselectfileType] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button href="#/action-1" className="btn-color" onClick={handleShow}> <img src="/assets/images/notepad.png" /> </Button>
            <Modal
                className=""
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose P-Code</Modal.Title>
                </Modal.Header>
                <Modal.Body className="">
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <div className="mb-2 row">
                                    <label for="inputcardholder name" className="font col-form-label">Country</label>
                                    <div className="col">
                                        <select className="form-select" readOnly name="status" aria-label="Default select example" >
                                            <option value=""> </option>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-2 row">
                                    <label for="inputcardholder name" className="col-lg-2 font col-form-label">State</label>
                                    <div className="col">
                                        <select className="form-select" readOnly name="status" aria-label="Default select example" >
                                            <option value=""></option>                                                             
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-2 row">
                                    <label for="inputcardholder name" className="col-lg-2 font  col-form-label">County</label>
                                    <div className="col">
                                        <select className="form-select" readOnly name="status" aria-label="Default select example" >
                                            <option value=""> </option>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-2 row">
                                    <label for="inputcardholder name" className="col-lg-2 font col-form-label">Locality</label>
                                    <div className="col">
                                        <select className="form-select" name="status" aria-label="Default select example" >
                                            <option value=""> </option>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-2 row">
                                    <label for="inputcardholder name" className="col-lg-2 font col-form-label">Zip Start</label>
                                    <div className="col">
                                        <select className="form-select" name="status" aria-label="Default select example" >
                                            <option value=""> </option>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-2 row">
                                    <label for="inputcardholder name" className="col-lg-2 font col-form-label">Zip End</label>
                                    <div className="col">
                                        <select className="form-select" name="status" aria-label="Default select example" >
                                            <option value=""> </option>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="vr mx-3 row"></div>
                            <div class="col-sm">
                                <div className="mb-2">
                                    <label for="inputcardholder name" className="col-lg-2 font col-label">P-Code</label>
                                    <div className="col-8 my-2">
                                        <input type="text" readOnly className="col-md-2 form-control" id="inputcardholder name" />
                                    </div>
                                    <div className="col-8 my-2">
                                        <input type="text" readOnly className="col-md-2 form-control" id="inputcardholder name" />
                                    </div>
                                    <div className="col-8 my-2">
                                        <input type="text" readOnly className="col-md-2 form-control" id="inputcardholder name" />
                                    </div>
                                    <div className="col-8 my-2">
                                        <input type="text" readOnly className="col-md-2 form-control" id="inputcardholder name" />
                                    </div>
                                    <div className="col-8 my-2">
                                        <input type="text" readOnly className="col-md-2 form-control" id="inputcardholder name" />
                                    </div>
                                    <div className="col-8 my-2">
                                        <input type="text" readOnly className="col-md-2 form-control" id="inputcardholder name" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn code" >Find P-Codes</button>
                    <button type="button" className="btn mx-3 my-2 save">Clear</button>
                </Modal.Body>
                <Modal.Footer>
                    <div className="taxviewerbutton">
                        <button type="save" className="btn btn-save mx-3" >Save</button>
                        <button type="cancel" className="btn btn-save">Cancel</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default CodeForm;
