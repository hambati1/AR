import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import '../../menupages/index.style.scss';
import Payments from 'pages/SearchWorklist/Payments';
import Adjustments from 'pages/SearchWorklist/Adjustments';
import FileImport from '../FileImport';
import 'react-dyn-tabs/style/react-dyn-tabs.min.css';
import 'react-dyn-tabs/themes/react-dyn-tabs-basic.min.css';
import useDynTabs from 'react-dyn-tabs';
import FileExportData from '../FileExport/index.js';
import BatchPaymentsData from '../BatchPayments/index.js';
import GLAccountData from '../GLAccount/index.js';
import TaxViewerData from '../TaxViewer/index.js';


let _instance, isVertical;

const actions = {
  fileExport: () => {
    _instance
      .open({
        title: 'File Export',
        lazy: true,
        panelComponent: function PanelComponent() {
          return <p><FileExportData /> </p>;
        },
      })
      .then(() => {
        console.log('(new tab is open)');
      });
  },
  batch: () => {
    _instance
      .open({
        title: 'Batch Payments',
        lazy: true,
        panelComponent: function PanelComponent() {
          return <p><BatchPaymentsData /> </p>;
        },
      })
      .then(() => {
        console.log('(new tab is open)');
      });
  },
  gl: () => {
    _instance
      .open({
        title: 'GL Account',
        lazy: true,
        panelComponent: function PanelComponent() {
          return <p><GLAccountData /> </p>;
        },
      })
      .then(() => {
        console.log('(new tab is open)');
      });
  },
  tax: () => {
    _instance
      .open({
        title: 'Tax Viewer',
        lazy: true,
        panelComponent: function PanelComponent() {
          return <p><TaxViewerData /> </p>;
        },
      })
      .then(() => {
        console.log('(new tab is open)');
      });
  }
}



const options = {
  tabs: [
    { id: '1', title: 'File Import', panelComponent: Panel1, iconClass: 'fa fa-home', closable: false }
  ],
  selectedTabID: '1',
  onLoad: function () {
    console.log('[onLoad]');
  },
  onInit: function () {
    //don't use setState inside the onInit callback because it leads to an infinite loop.
    console.log('[onInit]');
  },
  onChange: function () {
    console.log('[onChange]');
  },
  onOpen: function () {
    console.log('[onOpen]');
  },
  beforeSelect: function () {
    console.log('[beforeSelect]');
    return true;
  },
  onFirstSelect: function () {
    console.log('[onFirstSelect]');
  },
  onSelect: function () {
    console.log('[onSelect]');
  },
  beforeClose: function () {
    console.log('[beforeClose]');
    return true;
  },
  onClose: function () {
    console.log('[onClose]');
  },
  onDestroy: function () {
    console.log('[onDestroy]');
  },
};


function Panel1() {
  return <p>
    {/* const Search = () => {
  const [active, setactive] = useState('');
  console.log(active);
  return ( */}
    <div>
      <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div>
      <Tabs
        defaultActiveKey='search'
        id='uncontrolled-tab-example'
        className='mb-3'>
        <Tab eventKey='search' title='Search'>
          <div className='form-group'>
            <div className='mb-2 row'>
              <label for='inputFileType' className='col-lg-1 col-form-label'>
                Search Type
              </label>
              <div className='col-sm-4 Dropdown'>
                <select
                  className='form-select Search-type '
                  Name='searchType'
                  aria-label='Default select example'
                  onChange={(event) => {
                    setactive(event.target.value);
                    console.log(event);
                  }}>
                  <option value=''></option>
                  <option
                    value='Payments'
                    onClick={() => setactive('payments')}>
                    Payments
                  </option>
                  <option
                    value='Adjustments'
                    onClick={() => setactive('Adjustments')}>
                    Adjustments
                  </option>
                </select>
              </div>
              {active == '' ? (
                <div className='mt-10'>
                  <button type='submit' className='btn  mb-3 btn-Gray '>
                    Submit
                  </button>
                  <button
                    type='reset'
                    value='Reset'
                    className='btn  mb-3 btn-darkGray '>
                    Reset
                  </button>
                </div>
              ) : null}
              {active == 'Payments' ? (
                <div className='padding'>
                  {/* payments fields starts */}
                  <div>
                    <div className='mb-2 row'>
                      <label
                        for='inputCustomerid'
                        className='col-lg-2 col-form-label'>
                        Customer ID
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='inputCustomerid'
                        />
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='inputCustomername'
                        className='col-lg-2 col-form-label '>
                        Customer Name
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='inputCustomername'
                        />
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='inputfrom date'
                        className='col-lg-2 col-form-label'>
                        Payment From Date
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='inputfrom date'
                        />
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='inputTo date'
                        className='col-lg-2 col-form-label'>
                        {' '}
                        Payment To Date
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='inputTodate'
                        />
                      </div>
                    </div>
                    <div className='mb-2 row'>
                      <label
                        for='inputfrom amount'
                        className='col-lg-2 col-form-label'>
                        Posted From Date
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='inputfrom amount'
                        />
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='input to amount'
                        className='col-lg-2 col-form-label'>
                        Posted To Date
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='input to amount'
                        />
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='input from amount'
                        className='col-lg-2 col-form-label'>
                        From Amount
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='input from amount'
                        />
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='input to amount'
                        className='col-lg-2 col-form-label'>
                        To Amount
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='input to amount'
                        />
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='input type'
                        className='col-lg-2 col-form-label'>
                        Type
                      </label>
                      <div className='col-sm-3'>
                        <select
                          className='form-select search-form-select'
                          Name='status'
                          aria-label='Default select example'>
                          <option value=''></option>
                          <option value=''></option>
                        </select>
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='input status'
                        className='col-lg-2 col-form-label'>
                        Status
                      </label>
                      <div className='col-sm-3'>
                        <select
                          className='form-select search-form-select'
                          Name='status'
                          aria-label='Default select example'>
                          <option value=''></option>
                          <option value=''></option>
                        </select>
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='input check number'
                        className='col-lg-2 col-form-label'>
                        Check Number
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='input check number'
                        />
                      </div>
                    </div>
                    <div className='mb-2 row'>
                      <label
                        for='input batch id'
                        className='col-lg-2 col-form-label'>
                        Batch ID
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='input batch id'
                        />
                      </div>
                    </div>
                  </div>

                  {/* payments fields ends */}
                  <button type='submit' className='btn  mb-3 btn-Gray '>
                    Submit
                  </button>
                  <button
                    type='reset'
                    value='Reset'
                    className='btn  mb-3 btn-darkGray '>
                    Reset
                  </button>
                </div>
              ) : null}
              {active == 'Adjustments' ? (
                <div className='padding'>
                  {/* adjustments fields starts */}
                  <div>
                    <div className='mb-2 row'>
                      <label
                        for='inputCustomerid'
                        className='col-lg-2 col-form-label'>
                        Customer ID
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='inputCustomerid'
                        />
                      </div>
                    </div>
                    <div className='mb-2 row'>
                      <label
                        for='inputCustomername'
                        className='col-lg-2 col-form-label'>
                        Customer Name
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='inputCustomername'
                        />
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='inputfrom date'
                        className='col-lg-2 col-form-label'>
                        {' '}
                        From Date
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='inputfrom date'
                        />
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='inputTo date'
                        className='col-lg-2 col-form-label'>
                        To Date
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='inputTodate'
                        />
                      </div>
                    </div>
                    <div className='mb-2 row'>
                      <label
                        for='inputfrom amount'
                        className='col-lg-2 col-form-label'>
                        From Amount
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='inputfrom amount'
                        />
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='input to amount'
                        className='col-lg-2 col-form-label'>
                        To Amount
                      </label>
                      <div className='col-sm-3'>
                        <input
                          type='text'
                          className='form-control search-form-control'
                          id='input to amount'
                        />
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='input category'
                        className='col-lg-2 col-form-label'>
                        Category
                      </label>
                      <div className='col-sm-3'>
                        <select
                          className='form-select search-form-select'
                          Name='status'
                          aria-label='Default select example'>
                          <option value=''></option>
                          <option value=''></option>
                        </select>
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='input type'
                        className='col-lg-2 col-form-label'>
                        Type
                      </label>
                      <div className='col-sm-3'>
                        <select
                          className='form-select search-form-select'
                          Name='status'
                          aria-label='Default select example'>
                          <option value=''></option>
                          <option value=''></option>
                        </select>
                      </div>
                    </div>

                    <div className='mb-2 row'>
                      <label
                        for='input status'
                        className='col-lg-2 col-form-label'>
                        Status
                      </label>
                      <div className='col-sm-3'>
                        <select
                          className='form-select search-form-select'
                          Name='status'
                          aria-label='Default select example'>
                          <option value=''></option>
                          <option value=''></option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* adjustments  ends */}

                  <button type='submit' className='btn  mb-3 btn-Gray '>
                    Submit
                  </button>
                  <button
                    type='reset'
                    value='Reset'
                    className='btn  mb-3 btn-darkGray'>
                    Reset
                  </button>

                </div>
              ) : null}
            </div>
          </div>
        </Tab>
      </Tabs>

    </div>
    { }

    { }
  </p>;
  // }



  return (
    <div>
      <Tablist></Tablist>
      <Panellist></Panellist>
    </div>
  );
};

const [Tablist, Panellist, ready] = useDynTabs(options);
ready((instance) => {
  _instance = instance;
  isVertical = _instance.getOption('isVertical');
});
export const HandleButtons = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className="col-6">
      <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>

        <div className="sidebar-position">
          <img src="\assets\images\export-16.png" className="icons" onClick={actions.fileExport} />

          {/* <AiOutlineExport icon={AiOutlineExport} /> */}
          <span onClick={actions.fileExport}>File Export</span>
        </div>

        <div className="sidebar-position">
          <img src="\assets\images\dollar-coin-16.png" onClick={actions.batch} />

          {/* <AiFillDollarCircle icon={AiFillDollarCircle} /> */}

          <span className="btn-side" onClick={actions.batch}>Batch</span>
        </div>

        <div className="sidebar-position">
          <img src="\assets\images\AiFillAccountBook.png" className="icons" onClick={actions.gl} />

          {/* <AiFillAccountBook icon={AiFillAccountBook} /> */}
          <span onClick={actions.gl}>GL</span>
        </div>

        <div className="sidebar-position">
          <img src="\assets\images\icons-T.png" onClick={actions.tax} />
          {/* <AiOutlineFolderView icon={AiOutlineFolderView} /> */}
          <span onClick={actions.tax}>Tax</span>
        </div>
      </div>
    </div>

  );

};


export default Search;
