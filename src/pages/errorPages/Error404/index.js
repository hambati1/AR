import React, { useEffect, useState, useRef } from "react";
import '../../errorPages/Error404/index.style.scss'
import axios from 'axios';
import { getSearchData } from '../../errorPages/APICalls.js'
import { Button } from 'react-bootstrap';
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { saveBatchName } from '../../errorPages/APICalls.js'

const actions = [
  { id: 1, text: "Batch Name" },
  { id: 2, text: "Type" },
  { id: 3, text: "Name" },
  { id: 4, text: "Created By" },
  { id: 5, text: "Creation Date" },
  { id: 6, text: "Status" },
  { id: 7, text: "Total Records" },
  { id: 8, text: "Total Amount" },
  { id: 9, text: "Total Agency Fees" },

]

const dropDownOptions = {
  height: 150,
  width: 130
};
let batchData = [];
const Error404 = () => {
  const [active, setactive] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState(false);
  const [setFileType, setFileTypes] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const activeChange = () => {
    console.log("ssss");
    setactive(!active);
    console.log(active);
    getSearchDataDetails();
  };

  const getSearchDataDetails = () => {
    batchData = [];
    let data = getSearchData(active);
    if (data.length > 0) {
      batchData = data;
    }
  }

  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value)
  }
  const selectChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setShow(true);
  }

  const handleChange = event => {
    console.log(event.target.value);
    setShow(true);
  };

  const batchnamesave = event => {
    let json = {
      "batchName": "BDM Test2",
      "isPayment": 1,
      "isClosed": 0,
      "cmImportFile": {
        "importFileId": 10155091
      }
    }
    saveBatchName(json, 1);
  };

  return (
    <div >
      <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div>




      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="batchPayment" title="Batch Payment">
          <div className="form-group">
            <div className="mb-10 row">
              <input className="form-check-input" type="checkbox" name="active" value="" id="flexCheckDefault" onChange={activeChange} />
              <label className="form-check-label action" for="flexCheckDefault">Active Only</label>

            </div>

            <Dropdown style={{ textalign: 'right' }}>

              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Actions
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={handleShow}>Add payment Batch</Dropdown.Item>
                {/* <Dropdown.Item href="#/action-2" onClick={handleShow2}>Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
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
                    <input className="form-control" type="text"></input>
                  </div>
                </div>
                <div>

                  <button type="Ok" className="btn  mb-3 ok " onClick={batchnamesave}>Ok</button>
                  <button type="Cancel" className="btn  mb-3 cancel ">Cancel</button>
                </div>

                <div>
                  <h5>
                    Messages
                  </h5>
                </div>
                <div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Source</th>
                        <th>Message</th>

                      </tr>
                    </thead>
                  </table>
                </div>

              </Modal.Body>
              {/* <Modal.Footer>
                
              </Modal.Footer> */}
            </Modal>



            <div id="data-grid-demo">
              <DataGrid
                dataSource={batchData}
                showBorders={true}>
                <Paging enabled={false} />
                <Editing mode="form" allowAdding={true} />
                <Column dataField={"batchId"} caption="Batch ID" width={70} />
                <Column dataField={"type"} caption="Type" width={70} />
                <Column dataField={"batchName"} caption="Name" width={70} />
                <Column dataField={"createdBy"} caption="Created By" width={70} />
                <Column dataField={"isClosed"} caption="Status" width={70} />
                <Column dataField={"totalRecords"} caption="Total Records" width={70} />
                <Column dataField={"totalAmount"} caption="Total Amount" width={70} />
                <Column dataField={"totalAgencyFee"} caption="Total Agency Fees" width={70} />
              </DataGrid>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};



export default Error404;




