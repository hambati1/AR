import React, { useEffect, useState,useRef  } from "react";
import '../../errorPages/Error404/index.style.scss'
import axios from 'axios';
import {getSearchData} from '../../errorPages/APICalls.js'
import { Button } from 'react-bootstrap';
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {saveBatchName} from '../../errorPages/APICalls.js'

const actions = [
  { id: 1, text: "Batch Name" },
  { id: 2, text: "Type" },
  { id: 3, text: "Name" },
  { id: 4, text: "Created By" },
  { id: 5, text: "Creation Date" },
  { id: 6, text: "Status" },
  { id: 7, text: "Total Records" },
  { id: 8,text:"Total Amount"},
  { id: 9, text:"Total Agency Fees"},

]

const dropDownOptions = {
  height: 150,
  width: 130
};
let batchData=[];
const Error404 = () => {
const [active, setactive] = useState(true);
const [showModal, setShowModal] = useState(false);
const [state,setState ]=useState(false);
const [setFileType, setFileTypes] = useState();
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


const activeChange=() =>{
console.log("ssss");
setactive(!active);
console.log(active);
getSearchDataDetails();
};

const getSearchDataDetails= () => {
    batchData=[];
    let data = getSearchData(active);
    if(data.length >0) {
         batchData=data;
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

 const batchnamesave = event =>{
    let json={
                 "batchName": "BDM Test2",
                 "isPayment": 1,
                 "isClosed": 0,
                 "cmImportFile":{
                     "importFileId": 10155091
                 }
             }
    saveBatchName(json,1);
  };

  return (
    <div >
      <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div>

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
              <div>
               Batch Name <input type="text" name="batchname"/>
               </div>
               <div>
                 <Button variant="secondary" onClick={batchnamesave}>
                  OK
                </Button>
                <Button variant="primary">Cancel</Button>
                </div>
              </Modal.Body>
              <Modal.Footer>
              <div>
               Messages
               </div>
               <div>
               Source Message
               </div>
              </Modal.Footer>
            </Modal>


      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="batchPayment" title="Batch Payment">
          <div className="form-group">
            <div className="mb-10 row">
              <input className="form-check-input" type="checkbox" name="active" value="" id="flexCheckDefault" onChange={activeChange}  />
              <label className="form-check-label action" for="flexCheckDefault">Active Only</label>

            </div>
  <div className="mb-5 row selectList">
             <select name="selectList" id="selectList" onChange={(e) => selectChangeHandler(setFileType, e.target.value)}>
              <option value=""></option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
             </select>
            </div>

            <div id="data-grid-demo">
              <DataGrid
                dataSource={batchData}
                showBorders={true}>
                <Paging enabled={false} />
                <Editing mode="form" allowAdding={true} />
                <Column dataField={"batchId"} caption="Batch ID" width={70} />
                <Column dataField={"type" }caption="Type" width={70} />
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




