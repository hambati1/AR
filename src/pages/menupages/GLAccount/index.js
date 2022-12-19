import React from 'react';
import { useHistory } from 'react-router-dom';
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
// import '../index.style.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';

import { Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const actions = [
  { id: 1, text: "Account Number" },
  { id: 2, text: "Description" },
  { id: 3, text: "Updated By" },
  { id: 4, text: "Updated Date" },
  { id: 5, text: "Comments" },

];
const dropDownOptions = {
  height: 150,
  width: 130
};

export const employees = [
  {
    accountnumber: '',
    description: '',
    updatedby: '',
    updateddate: '',
    comments: '',


  },
]

const GLAccount = () => {
  return (

    <div >
      <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="GL account maintience" title="GL Account Maintience">
          <div className="form-group">
            <div className="mb-5 row">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">Active Only</label>
            </div>
          
          <div id="data-grid-demo">
            <DataGrid
              className='card-body'
              dataSource={employees}
              // keyExpr={'fileName'}
              allowColumnReordering={true}>
              <Column dataField={'accountnumber'} caption={'Account Number'} />
              <Column dataField={'description'} caption={'Description'} />
              <Column dataField={'updatedby'} caption={'Updated By'} />
              <Column dataField={'updatedby'} caption={'Updated Date'} />
              <Column dataField={'comments'} caption={'Comments'} />

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

        </Tab>
      </Tabs>
    </div>

  );
};
export default GLAccount;