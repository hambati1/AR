import React from 'react';

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
export const employees = [
  {
    batchId: '',
    type: '', 
    Name: '',
    createdBy: '',
    creationdate: '',
    status:'',
    totalRecords:'',
    totalAmount:'',
    totalAgencyFee:'',


  },
]


const Error404 = () => {
  

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
            <div className="mb-5 row">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">Active Only</label>
            </div>
            <div id="data-grid-demo">
              <DataGrid
                dataSource={employees}
                // keyExpr="ID"
                showBorders={true}>
                <Paging enabled={false} />
                <Editing mode="form" allowAdding={true} />
                <Column dataField={"batchId"} caption="Batch ID" width={70} />
                <Column dataField={"type" }caption="Type" width={70} />
                <Column dataField={"Name"} caption="Name" width={70} />
                <Column dataField={"createdBy"} caption="Created By" width={70} />
                <Column dataField={"status"} caption="Status" width={70} />
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




