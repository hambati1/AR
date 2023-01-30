import React, { useEffect, useState, useRef } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DataGrid, {
    Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
// import '../../SearchWorklist/Adjustments/index.style.scss'
import '../../menupages/index.style.scss'

const Adjustments = () => {

    const [showModal, setShowModal] = useState(false);
    const [state, setState] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
         
                    <div>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Actions
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" onClick={handleShow}>Adjustment Allotment</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                    <Modal
                        className=""
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Adjustment Allotment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Invoice ID</th>
                                            <th>Amount</th>
                                        </tr>
                                        <tr>
                                            <th>41309169 </th>
                                            <th>($2.00)</th>
                                        </tr>

                                    </thead>
                                    <tbody>

                                    </tbody>
                                </Table>
                            </div>
                        </Modal.Body>


                        {/* <Modal.Footer>
                
              </Modal.Footer> */}
                    </Modal>
                     <div>

                        <DataGrid
                            className='card-body'
                            dataSource={Adjustments}
                            keyExpr={'fileName'}
                            allowColumnReordering={true}>
                            <Column dataField={'customer id'} caption={'Customer ID'} />
                            <Column dataField={'customer name'} caption={'Customer Name'} />
                            <Column dataField={'payment type'} caption={'Date'} />
                            <Column dataField={'amount'} caption={'Amount'} />
                            <Column dataField={'tax amount'} caption={'Tax Amount'} />
                            <Column dataField={'total amount'} caption={'Total Amount'} />
                            <Column dataField={'type'} caption={'Type'} />

                            <FilterRow visible={true} />
                            <ColumnChooser enabled={true} mode='select' />
                            <SearchPanel
                                className='float-start'
                                visible={true}
                                width={240}
                                placeholder="Search..."
                            />
                            <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} showNavigationButtons={true} />
                            <Paging defaultPageSize={5} />
                        </DataGrid>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">

                                <div className="mb-2 row comment-margin">
                                    <label for="inputpayment id" className="col-lg-2 form-width col-form-label">Adjustment ID</label>
                                    <div className="col">
                                        <input type="text" className="form-control " id="inputpayment id" />
                                    </div>
                                </div>
                                <div className="mb-2 row comment-margin">
                                    <label for="inputcreated by" className="col-lg-2 form-width col-form-label">Created By</label>
                                    <div className="col">
                                        <input type="text" className="form-control" id="inputcreated by" />
                                    </div>
                                </div>
                                <div className="mb-2 row comment-margin">
                                    <label for="input batch id" className="col-lg-2 form-width col-form-label">Batch ID</label>
                                    <div className="col">
                                        <input type="text" className="form-control" id="inputbatch id" />
                                    </div>
                                </div>
                                <div className="mb-2 row comment-margin">
                                    <label for="inputcheck number" className="col-lg-2 form-width col-form-label">Is Reversal</label>
                                    <div className="col">
                                        <input type="text" className="form-control" id="inputcheck number" />
                                    </div>
                                </div>

                                <div className="mb-2 row comment-margin">
                                    <label for="input commnets" className="col-lg-2 form-width col-form-label">Is Bad Debt</label>
                                    <div className="col">
                                        <input type="text" className="form-control" id="input comments" />
                                    </div>
                                </div>
                                <div className="mb-2 row comment-margin">
                                    <label for="input commnets" className="col-lg-2 form-width col-form-label">Posted Date</label>
                                    <div className="col">
                                        <input type="text" className="form-control" id="input comments" />
                                    </div>
                                </div>



                            </div>
                            <div class="col-lg-4">

                                <div className="mb-2 row comment-margin">
                                    <label for="inputposted date" className="col-lg-2 form-width col-form-label">Original Transaction Item</label>
                                    <div className="col">
                                        <input type="text" className="form-control " id="inputposted date" />
                                    </div>
                                </div>
                                <div className="mb-2 row comment-margin">
                                    <label for="inputagency fee" className="col-lg-3 form-width col-form-label">Original Transaction ID</label>
                                    <div className="col">
                                        <input type="text" className="form-control " id="inputagency fee" />
                                    </div>
                                </div>
                                <div className="mb-2 row comment-margin">
                                    <label for="inputagency fee" className="col-lg-2 form-width col-form-label">Original Invoice Date</label>
                                    <div className="col">
                                        <input type="text" className="form-control " id="inputagency fee" />
                                    </div>
                                </div>
                                <div className="mb-2 row comment-margin">
                                    <label for="inputagency fee" className="col-lg-2 form-width col-form-label">Orginial Invoice ID</label>
                                    <div className="col">
                                        <input type="text" className="form-control " id="inputagency fee" />
                                    </div>
                                </div>


                                <div className="mb-2 row comment-margin">
                                    <label for="inputcomments" className="col-lg-2 form-width col-form-label">Comments</label>
                                    <div className="col">
                                        <textarea type="text" className="form-control pt-3" id="inputcomments" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                    <p>Associated Taxes</p>
                   
                    <DataGrid
                    className='float-adjustment'
                            dataSource={Adjustments}
                            keyExpr={'fileName'}
                            allowColumnReordering={true}>
                            <Column dataField={'customer id'} caption={'Type'} />
                            <Column dataField={'customer name'} caption={'Level'} />
                            <Column dataField={'payment type'} caption={'Rate'} />
                            <Column dataField={'amount'} caption={'Amount'} />
                            
                            <FilterRow visible={true} />
                            <ColumnChooser enabled={true} mode='select' />
                            <SearchPanel
                                className='float-start'
                                visible={true}
                                width={240}
                                placeholder="Search..."
                            />
                            <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} showNavigationButtons={true} />
                            <Paging defaultPageSize={5} />
                    </DataGrid>
                    </div>
                    </div>
    );
};
export default Adjustments;
