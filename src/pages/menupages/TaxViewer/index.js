import React from 'react';

// import '../../errorPages/Error500/index.style.scss'
import axios from 'axios';
import {Button} from 'react-bootstrap';
import DataGrid, {
  Column,
  Pager,
  Paging,
  SearchPanel,
  Sorting,
  ColumnChooser,
  FilterRow,
  Toolbar,
  Editing,
} from 'devextreme-react/data-grid';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Dropdown, DropdownButton} from 'react-bootstrap';

const Error403 = () => {
  return (
    <div>
      <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div>
      <Tabs
        defaultActiveKey='profile'
        id='uncontrolled-tab-example'
        className='mb-3'>
        <Tab eventKey='batchPayment' title='Tax Viewer'></Tab>
      </Tabs>
    </div>
  );
};
export default Error403;
