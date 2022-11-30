import React, { useState } from 'react';
// import Gallery from 'react-photo-gallery';
// import photos from '@crema/services/db/gallery/photos';
// import IntlMessages from '@crema/utility/IntlMessages';
import styles from './index.module.scss';
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import DropDownButton from 'devextreme-react/drop-down-button';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import AppPageMetadata from '@crema/core/AppPageMetadata';
// import clsx from 'clsx';

import Button from 'devextreme-react/button';
const actions = [
  { id: 1, text: "File Name" },
  { id: 2, text: "Type" },
  { id: 3, text: "Records Imported" },
  { id: 4, text: "Records in Error" },
  { id: 5, text: "Amount Imported" },

];


const actions1 = [
  { id: 1, text: "File Name" },
  { id: 2, text: "Type" },
  { id: 3, text: "RecordsExported" },
  { id: 4, text: "Records in Error" },
  { id: 5, text: "DebitAmount" },
  { id: 6, text: "CreditAmount" },
];
const dropDownOptions = {
  height: 150,
  width: 130
};

export const portfolio = [
  {
    fileName: 'PNG-POWERNET 10212022.txt',
    type: 'Lockbox',
    recordsimported: '242',
    recordsinerror: '0',
    amountimported: '$8,418.99',

  },
  {
    fileName: 'out.remit_pngc_10212022.txt',
    type: '1-Pay File',
    recordsimported: '3',
    recordsinerror: '0',
    amountimported: '$40.14',
  },
  {
    fileName: 'pngpay.remit.20221018011236',
    type: 'Check Free',
    recordsimported: '23',
    recordsinerror: '2',
    amountimported: '$488.47',
  }
];


export const portfolio1 = [
  {
    fileName: 'PNG_NACHA_BW_20221017084624',
    type: 'ACH Web Export File',
    recordsexported: '181',
    recordsinerror: '0',
    debitamount: '$20,640.22',
    creditamount: '$0',

  },

];

const Portfolio = () => {

  return (

    <div >
      <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="home" title="Search">
          <div className="mb-3 row">
            <label for="searchtype" className="col-lg-1 col-form-label">Search Type :</label>

            <div className="col-sm-5 Dropdown">
              <input type="searchtype" class='form-control Dropdown' id="searchtype" />
            </div>
          </div>
          <div className="padding">
            <button type="submit" className="btn mb-3 btn-Gray">submit</button>
            <button type="reset" className="btn mb-3 btn-darkGray">Reset</button>
          </div>

        </Tab>
        <Tab eventKey="profile" title="File Import">

          <div>

            <form>
              <div className="mb-3 row">
                <label for="inputFileType" class="col-lg-1 col-form-label">File Type</label>

                <div className="col-sm-5 Dropdown">
                  <input type="filetype" class='form-control Dropdown' id="inputFiletype" />
                </div>
              </div>


              <div className="mb-3 row">
                <label for="inputBrand" className="col-lg-1 col-form-label">Brand</label>
                <div className="col-sm-5">
                  <input type="text" readOnly Name="brand" className="form-control" id="inputBrand" value="PNG" onChange={(e) => inputChangeHandler(setBrand, e)} />
                </div>
              </div>
              <div className="row g-3">
                <div className="col-lg-1">
                  <label for="FileName" className="col-sm-10 col-form-label">File Name</label>
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
                <button type="reset" className="btn  mb-3 btn-darkGray ">Clear</button>
              </div>
            </form>
          </div>

          <div className=''>
            Import File Status
          </div>
          <DataGrid
            className='card-body'
            dataSource={portfolio}
            keyExpr={'fileName'}
            allowColumnReordering={true}>

            <Column dataField={'fileName'} caption={'File Name'} />
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


        <Tab eventKey="export" title="File Export">


          <div>

            <form>
              <div className="mb-3 row">
                <label for="inputFileType" className="col-lg-1 col-form-label">File Type</label>

                <div className="col-sm-5 Dropdown">
                  <input type="filetype" className='form-control Dropdown' id="inputFiletype" />
                </div>
              </div>


              <div className="mb-3 row">
                <label for="inputBrand" className="col-lg-1 col-form-label">Brand</label>
                <div className="col-sm-5">
                  <input type="text" readOnly Name="brand" className="form-control" id="inputBrand" value="" onChange={(e) => inputChangeHandler(setBrand, e)} />
                </div>
              </div>
              <div>
                <button type="submit" className="btn  mb-3 btn-Gray ">Export</button>
                <button type="submit" className="btn  mb-3 btn-darkGray ">Clear</button>
              </div>
            </form>
          </div>

          <div className=''>
            Export File Status
          </div>
          <DataGrid
            className='card-body'
            dataSource={portfolio1}
            keyExpr={'fileName'}
            allowColumnReordering={true}>

            <Column dataField={'fileName'} caption={'File Name'} />
            <Column dataField={'type'} caption={'Type'} />
            <Column dataField={'recordsexported'} caption={'Records Exported'} />
            <Column dataField={'recordsinerror'} caption={'Records in Error'} />
            <Column dataField={'debitamount'} caption={'Debit Amount'} />
            <Column dataField={'creditamount'} caption={'Credit Amount'} />
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
  );
};

export default Portfolio;
