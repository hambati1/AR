import React, { useEffect, useState, useRef } from "react";
// import '../../errorPages/Error404/index.style.scss'
import '../../menupages/BatchPayments/index.style.scss'
import axios from 'axios';
import { getSearchData, getBatchDetailsByBatchIdService } from '../../menupages/APICalls.js'
import { Button } from 'react-bootstrap';
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { saveBatchName } from '../../menupages/APICalls.js';
import Table from 'react-bootstrap/Table';
import DataSource from 'devextreme/data/data_source';

let batchData = [];
const BatchPayment = () => {
  const [active, setactive] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [batchName, setbatchName] = useState();
  const [batchId, setbatchId] = useState();
  const [importFileId, setimportFileId] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [batchSubData, setbatchSubData] = useState([]);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  const activeChange = () => {
    setbatchId('');
    setbatchName('');
    setactive(!active);
    getSearchDataDetails();
  };

  const getSearchDataDetails = () => {
    let data = getSearchData(active);
    if (data.length > 0) {
      batchData = data;
      console.log(batchData);
    }
  }

  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value)
  }
  const selectChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setShow(true);
  }

  const handlebatchName = event => {
    setbatchName(event.target.value);
  };

  const getBatchDetailsByBatchId = (batchId) => {
    let subdata = getBatchDetailsByBatchIdService(batchId);
    setbatchSubData(subdata);
    console.log(subdata);
  }

  const handleEvent: GridEventListener<'rowClick'> = (params, event, details, // GridCallbackDetails
  ) => {
    console.log(params);
    if (params.data.cmImportFile != undefined) {
      console.log(params.data.cmImportFile.importFileId);
      setimportFileId(params.data.cmImportFile.importFileId);
    }
    setbatchId(params.data.batchId);
    getBatchDetailsByBatchId(params.data.batchId);
  };

  const batchNameSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('=batchName=' + batchName + ' = importFileId=' + importFileId);
    if (batchName != undefined) {
      let json = {
        "batchName": batchName, "isPayment": 1, "isClosed": 0,
        "cmImportFile": { "importFileId": importFileId }
      }
      let message = saveBatchName(json, batchId);
      console.log('message==' + message);
    }
  }
  const agencybatchnamesave = () => {
    console.log('======' + batchName);
  }

  return (
    <div >
      <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div>

      <Tabs>
        <Tab eventKey="batchPayment" title="Batch Payment" className="tab">
          <div className="form-group">
            {/* <div className="row">
              <input className="form-check-input" type="checkbox" name="active" value="" id="flexCheckDefault" onChange={activeChange} />
              <label className="form-check-label action" for="flexCheckDefault">Active Only</label>
            </div> */}

            <div class="form-check mx-2">

              <input type="checkbox" class="form-check-input" name="active" value="" id="flexCheckDefault" onChange={activeChange} />

              <label class="list">Active Only</label>
            </div>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Actions
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={handleShow}>Add payment Batch</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={handleShow2}>Add Agency Payment Batch</Dropdown.Item>

                {/* ------------------------
                <Dropdown.Item href="#/action-1" onClick={handleShow}>Close</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={handleShow2}>Close</Dropdown.Item> */}

              </Dropdown.Menu>
            </Dropdown>
            {/* **************Action 1 PoP UP Starts************** */}
            <Modal
              className=""
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}>
              <Modal.Header closeButton>
                <Modal.Title>Add Payment Batch</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="d-flex">
                  <div className="col-2 input-group-sm batch">
                    <label>Batch Name
                    </label>
                  </div>
                  <div className="input-group col input-group-sm">
                    <input className="form-control" name="batchName" onChange={handlebatchName} type="text"></input>
                  </div>
                </div>
                <div>
                  <button type="submit" className="btn  mb-3 ok " onClick={batchNameSubmitForm}>Ok</button>
                  <button type="Cancel" className="btn  mb-3 cancel ">Cancel</button>
                </div>

                <div>
                  <h5>
                    Messages
                  </h5>
                </div>
                <div>
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>Source</th>
                        <th>Messages</th>
                      </tr>
                    </thead>
                    <tbody>

                    </tbody>
                  </Table>
                </div>
              </Modal.Body>
            </Modal>
            {/* ********************Action 1 POP UP end****************** */}

            {/* ************************Action 2 POP UP starts**************** */}
            <Modal
              className=""
              show={show2}
              onHide={handleClose2}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add Agency Payment Batch</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="d-flex">
                  <div className="col-2 input-group-sm batch">
                    <label>Batch Name
                    </label>
                  </div>

                  <div className="input-group col input-group-sm">
                    <input className="form-control" type="text"></input>
                  </div>
                </div>
                <div>
                  <button type="Ok" className="btn  mb-3 ok " onClick={agencybatchnamesave}>Ok</button>
                  <button type="Cancel" className="btn  mb-3 cancel ">Cancel</button>
                </div>

                <div>
                  <h5>
                    Messages
                  </h5>
                </div>
                <div>
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>Source</th>
                        <th>Messages</th>
                      </tr>
                    </thead>
                    <tbody>

                    </tbody>
                  </Table>
                </div>
              </Modal.Body>

            </Modal>
            {/* ******************Action 2 POP UP Ends***************** */}

            <div id="data-grid-demo">
              <DataGrid onRowClick={handleEvent}
                dataSource={batchData}
                showBorders={true}>
                <Paging enabled={false} />
                <Column dataField={"batchId"} caption="Batch ID" />
                <Column dataField={"type"} caption="Type" />
                <Column dataField={"batchName"} caption="Name" />
                <Column dataField={"createdBy"} caption="Created By" />
                <Column dataField={"creationDt"} caption="Creation Date" />
                <Column dataField={"isClosed"} caption="Status" />
                <Column dataField={"totalRecords"} caption="Total Records" />
                <Column dataField={"totalAmount"} caption="Total Amount" />
                <Column dataField={"totalAgencyFee"} caption="Total Agency Fees" />

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
          <div>
            Batch  {batchId}
          </div>

          <div id="data-grid-demo2">
            <DataGrid onRowClick={handleEvent}
              dataSource={batchSubData}
              showBorders={true}>
              <Paging enabled={false} />
              <Column dataField={"batchId"} caption="Customer ID" />
              <Column dataField={"type"} caption="Customer Name" />
              <Column dataField={"batchName"} caption="Payment Type" />
              <Column dataField={"createdBy"} caption="Payment Amount" />
              <Column dataField={"creationDt"} caption="Agency Fee" />
              <Column dataField={"isClosed"} caption="Check number" />
              <Column dataField={"totalRecords"} caption="Payment Date" />
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
          <div className=" row my-2 ">
            <label for="inputcustomer id" className="col-lg-2 col-form-label">Customer ID</label>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="input customer id" />
            </div>
          </div>
          <div className=" row my-2 ">
            <label for="inputpayment type" className="col-lg-2 col-form-label">Payment Type</label>
            <div className="col-sm-3">
              <select className="form-select" Name="status" aria-label="Default select example" >
                <option value="">Check Payment</option>
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className=" row my-2 ">
            <label for="inputaccount balance" className="col-lg-2 col-form-label">Account Balance</label>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="input account balance" />
            </div>
          </div>
          <div className=" row my-2 ">
            <label for="inputpayment amount" className="col-lg-2 col-form-label">Payment Amount</label>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="input payment amount" />
            </div>
          </div>
          <div class="form-check mx-2">
              <input className="form-check-input" type="checkbox" name="active" value="" id="flexCheckDefault" />
              <label className="form-check-label action" for="flexCheckDefault">Allocate to Invoices</label>
              
            </div> 

          <div className=" row my-2 ">
            <label for="inputcheck number" className="col-lg-2 col-form-label">Check Number</label>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="input check number" />
            </div>
          </div>

          <div>
                  <button type="clear" className="btn  mb-3 Clear ">Clear</button>
                  <button type="save" className="btn  mb-3 Save ">Save</button>
                  <button type="Cancel" className="btn  mb-3 cancel ">Cancel</button>
                </div>

        </Tab>
      </Tabs>
    </div>
  );
};

export default BatchPayment;




