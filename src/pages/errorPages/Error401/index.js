import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import '../index.style.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import Button from 'devextreme-react/button';
// import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../errorPages/Error401/index.style.scss'
import DataGrid, {
  Column,
  Pager,
  Paging,
  SearchPanel,
  Sorting,
  ColumnChooser,
  FilterRow,
  Toolbar
} from 'devextreme-react/data-grid';
// import 'devextreme/dist/css/dx.generic.ATD-DataGrid-md - Copy1.css';
import DropDownButton from 'devextreme-react/drop-down-button';
import style from '../Error401/index.style.scss';
import { DropdownButton } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


// import { Paper } from '@material-ui/core';

const actions = [
  { id: 1, text: "File Name" },
  { id: 2, text: "Type" },
  { id: 3, text: "Records Imported" },
  { id: 4, text: "Records in Error" },
  { id: 5, text: "Amount Imported" },

];
const dropDownOptions = {
  height: 150,
  width: 130
};

export const NonCitizenDetails = [
  {
    filename: 'PNG-POWERNET 10212022.txt',
    type: 'Lockbox',
    recordsimported: '242',
    recordsinerror: '0',
    amountimported: '$8,418.99',

  },
  {
    filename: 'out.remit_pngc_10212022.txt',
    type: '1-Pay File',
    recordsimported: '3',
    recordsinerror: '0',
    amountimported: '$40.14',

  },
  {
    filename: 'pngpay.remit.20221018011236',
    type: 'Check Free',
    recordsimported: '23',
    recordsinerror: '2',
    amountimported: '$488.47',

  },

];


const NonCitizen = () => {

  return (
    // <Paper>
    //   <Box>
    <div >
      <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div>

      <Tabs
        defaultActiveKey="fileimport"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="search" title="Search">

        </Tab>
        <Tab eventKey="fileimport" title="File Import">

          <div>

          
              <div className="mb-3 row">
                <label for="inputFileType" className="col-lg-1 col-form-label">File Type</label>
                <div className="col-sm-5">
                  <select className="form-select" aria-label="Default select example">
                    {/* <option value={}></option> */}
                    <option value="1"></option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  </div>



                {/* <div class="col-sm-5 Dropdown">
                  <input type="filetype" className='form-control Dropdown' id="inputFiletype" />
                </div> */}
              </div>


              <div className="mb-3 row">
                <label for="inputBrand" className="col-lg-1 col-form-label">Brand</label>
                {/* <input type="" class="form-control" id="input" placeholder="PNG" /> */}
                <div className="col-sm-5">
                  <input type="Brand" className="form-control" id="inputBrand"placeholder="PNG" />
                </div>
              </div>


              <div className="row g-3">
                <div className="col-lg-1">
                  <label for="Filename" className="col-sm-10 col-form-label">File Name</label>
                </div>
                <div className="col-auto">
                  <label for="" className="visually-hidden"></label>
                  <input type="" className="form-control" id="input" placeholder="" />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn mb-3 btn-darkGray ">Browse</button>
                </div>
              </div>
              <div>
                <button type="submit" className="btn  mb-3 btn-Gray ">Import</button>
                <button type="submit" className="btn  mb-3 btn-darkGray ">Clear</button>
              </div>
           
          </div>

          <div>
            Import File Status
          </div>
          <DataGrid
            className='card-body'
            dataSource={NonCitizenDetails}
            keyExpr={'filename'}
            allowColumnReordering={true}>

            <Column dataField={'filename'} caption={'File Name'} />
            <Column dataField={'type'} caption={'Type'} />
            <Column dataField={'recordsimported'} caption={'Records Imported'} />
            <Column dataField={'recordsinerror'} caption={'Records in Error'} />
            <Column dataField={'amountimported'} caption={'Amount Imported'} />
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

        </Tab>

      </Tabs>
    </div>

    //    </Box>
    // </Paper>

  );
};

export default NonCitizen;
