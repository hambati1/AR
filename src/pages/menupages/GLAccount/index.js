import React, { useEffect, useState, useRef } from "react";
// import '../../errorPages/Error500/index.style.scss'
import '../../menupages/GLAccount/index.style.scss'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
// import { saveBatchName } from '../../errorPages/APICalls.js'
import Table from 'react-bootstrap/Table';


const actions = [
  { id: 1, text: "Account Number" },
  { id: 2, text: "Description" },
  { id: 3, text: "Updated By" },
  { id: 4, text: "Update Date" },
  { id: 5, text: "Comments" },
]

const dropDownOptions = {
  height: 150,
  width: 130
};

const GLAccount = () => {
  const [active, setactive] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState(false);
  const [setFileType, setFileTypes] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 

 
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  

  return (
    <div >
      <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div>
      <Tabs>
        {/* // defaultActiveKey="profile"
        // id="uncontrolled-tab-example"
        // className="mb-3"> */}
        <Tab eventKey="GL account maintenance" title="GL Account Maintenance" className="tab">
          <div className="form-group">
            <div className="form-check mx-2">
              <input type="checkbox" className="form-check-input" name="option1" value="Active Only" />
              <label class="list">Active Only</label>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Actions
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={handleShow}>Add GL Code</Dropdown.Item>

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
                <Modal.Title>Add GL Code</Modal.Title>
              </Modal.Header>
              <Modal.Body className="pop-up">
                <div className="d-flex">
                  <div className="col-2 input-group-sm batch">
                    <label>Account Number
                    </label>
                  </div>
                  <div className="input-group col input-group-sm">
                    <input className="form-control" type="text"></input>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="col-2 input-group-sm batch">
                    <label>Description
                    </label>
                  </div>
                  <div className="input-group col input-group-sm">
                    <input className="form-control" type="text"></input>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="col-2 input-group-sm batch ">
                    <label>Comments
                    </label>
                  </div>
                  <div className="input-group col input-group-sm">
                    <input className="form-control pt-3" type="text"></input>
                  </div>
                </div>


                <div>
                  <button type="Save" className="btn  mb-3 ok " >Save</button>
                  <button type="Cancel" className="btn  mb-3 cancel ">Cancel</button>
                </div>

              </Modal.Body>
              {/* <Modal.Footer>
                
              </Modal.Footer> */}
            </Modal>
            <div id="data-grid-demo">
              <DataGrid
                dataSource={GLAccount}
                showBorders={true}>
                <Paging enabled={false} />
                <Editing mode="form" allowAdding={true} />
                <Column dataField={"account number"} caption="Account Number" />
                <Column dataField={"description"} caption="Description" />
                <Column dataField={"updated by"} caption="Updated By" />
                <Column dataField={"update date"} caption="Update Date" />
                <Column dataField={"comments"} caption="Comments" />

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
            <div className="form-check mx-2">
              <input type="checkbox" className="form-check-input" name="option1" value="Is Active" />
              <label className="list"> Is Active</label>
            </div>
            <form calssName=" input-selected record">

            <div className="mb-2 row">
                <label for="input account number" className="col-lg-2 col-form-label">Account Number</label>
                <div className="col-sm-3">
                  <input type="text"  className="form-control" id="input account number" />
                </div>
                </div>

                
            <div className="mb-2 row">
                <label for="input description" className="col-lg-2 col-form-label">Description</label>
                <div className="col-sm-3">
                  <input type="text"  className="form-control" id="input description" />
                </div>
                </div>

                <div className="mb-2 row">
                <label for="input commnets" className="col-lg-2 col-form-label">Comments</label>
                <div className="col-sm-3">
                  <input type="text"  className="form-control  pt-3" id="input comments" />
                </div>
                </div>
                <div>
                <button type="Save" className="btn  mb-3 save " >Save</button>
                <button type="Cancel" className="btn  mb-3 cancel ">Cancel</button>
              </div>
            </form>
          </div>


        </Tab>
      </Tabs>
    </div>
  );
};



export default GLAccount;




