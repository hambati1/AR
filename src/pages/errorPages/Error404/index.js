import React, { useEffect, useState,useRef  } from "react";
import '../../errorPages/Error404/index.style.scss'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Dropdown, DropdownButton } from 'react-bootstrap';

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

 const path = 'http://172.20.51.231:8761/cm/api';
 const session = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYW1iYXRpIiwic2NvcGVzIjpbIlJFRlJFU0hfVE9LRU4iXSwiaXNzIjoiUE5HIiwiaWF0IjoxNjcwMzE4MjgxLCJleHAiOjE2NzA5MTgyODF9.Vc3DJOmtMHMXiKA3JfhiEaLIOHj0-D89aE3bgGEPHZJOpcckbmWPlfQF-tOsH9uEgVg2-uQYQPFILh1ZPZG7Mw";

const Error404 = () => {
const [active, setactive] = useState(true);
const [showModal, setShowModal] = useState(false);
const [state,setState ]=useState(false);
const activeChange=() =>{
console.log("ssss");
setactive(!active);
console.log(active);
getSearchData();
};

const getSearchData = async () => {
     const response = await fetch(path + '/ar/batch?isPayment='+active+'&isClosed=0', {
      method: 'GET',
      headers: { "Content-Type": 'application/json', Session: session }
    }
    ).then((response) => response.json());
    console.log(response.response);
     batchData=response.response;
          console.log(batchData);
  };


   const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
      setFunction(event.target.value)
    }
    const selectChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event);
    }

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
              <input className="form-check-input" type="checkbox" name="active" value="" id="flexCheckDefault" onChange={activeChange}  />
              <label className="form-check-label action" for="flexCheckDefault">Active Only</label>

            </div>
  <div className="mb-5 row selectList">
             <select name="selectList" id="selectList">
                    <option value="option 1">Option 1</option>
                    <option value="option 2">Option 2</option>
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




