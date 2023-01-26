import React, {useEffect, useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import '../../menupages/index.style.scss';
import { getFileTypeData, getimportSearchData, getImportFileTypeData, getImportFileNames, onSubmitImportHandler } from '../../menupages/APICalls.js'
import 'react-dyn-tabs/style/react-dyn-tabs.min.css';
import 'react-dyn-tabs/themes/react-dyn-tabs-basic.min.css';
import useDynTabs from 'react-dyn-tabs';
import SearchData from '../Search/index.js';
import FileImportData from '../FileImport/index.js'
import FileExportData from '../FileExport/index.js';
import BatchPaymentsData from '../BatchPayments/index.js';
import GLAccountData from '../GLAccount/index.js';
import TaxViewerData from '../TaxViewer/index.js';
import CreditCardData from "../CreditCard/index.js";
import PaymentsData from "../../SearchWorklist/Payments/index.js"
import AdjustmentsData from "../../SearchWorklist/Adjustments/index.js"
import { BsBarChartLine, BsFonts, BsGear, BsGrid3X3Gap, BsStar } from "react-icons/bs";
import { IoFlameOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import {onSearchPayment} from '../../menupages/APICalls.js';

let _instance, isVertical;
let tab = 0;
const actions = {
  search: () => {
    _instance
      .open({
        title: 'Search',
        id: '0',
        lazy: true,
        tooltip: 'Search',
        disable: false,
        closable: true,
        panelComponent: function PanelComponent() {
          return <p><SearchData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('0')) {
          _instance.select('0').then(() => {
            console.log('(tab 0 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },
  fileImport: () => {
    _instance
      .open({
        title: 'File Import',
        id: '1',
        lazy: true,
        tooltip: 'File Import',
        disable: false,
        closable: true,  
        panelComponent: function PanelComponent() {
          return <p><FileImportData/> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('1')) {
          _instance.select('1').then(() => {
            console.log('(tab 1 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },
  fileExport: () => {
    _instance
      .open({
        title: 'File Export',
        id: '2',
        lazy: true,
        tooltip: 'File Export',
        disable: false,
        closable: true,
        panelComponent: function PanelComponent() {
          return <p><FileExportData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('2')) {
          _instance.select('2').then(() => {
            console.log('(tab 2 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },
  batch: () => {
    _instance
      .open({
        title: 'Batch Payments',
        id: '3',
        lazy: true,
        panelComponent: function PanelComponent() {
          return <p><BatchPaymentsData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('3')) {
          _instance.select('3').then(() => {
            console.log('(tab 3 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },
  gl: () => {
    _instance
      .open({
        title: 'GL Account',
        id: '4',
        lazy: true,
        panelComponent: function PanelComponent() {
          return <p><GLAccountData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('4')) {
          _instance.select('4').then(() => {
            console.log('(tab 4 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },
  tax: () => {
    _instance
      .open({
        title: 'Tax Viewer',
        id: '5',
        lazy: true,
        panelComponent: function PanelComponent() {
          return <p><TaxViewerData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('5')) {
          _instance.select('5').then(() => {
            console.log('(tab 3 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },
  creditcard: () => {
    _instance
      .open({
        title: 'Credit Card Transactions',
        id: '6',
        lazy: true,
        panelComponent: function PanelComponent() {
          return <p><CreditCardData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('6')) {
          _instance.select('6').then(() => {
            console.log('(tab 6 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },
  payments: () => {
    _instance
      .open({
        title: 'Payments',
        id: '7',
        lazy: true,
        panelComponent: function PanelComponent() {
          return <p><PaymentsData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('7')) {
          _instance.select('7').then(() => {
            console.log('(tab 7 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },
  adjustments: () => {
    _instance
      .open({
        title: 'Adjustments',
        id: '8',
        lazy: true,
        panelComponent: function PanelComponent() {
          return <p><AdjustmentsData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('8')) {
          _instance.select('8').then(() => {
            console.log('(tab 8 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },


}


const Search = () => {
  const options = {
    tabs: [
      { id: '0', title: 'Search', panelComponent: Panel0, iconClass: 'fa fa-home', closable: false },
      // { id: '1', title: 'File Import', panelComponent: Panel1, iconClass: 'fa fa-home', closable: false }
    ],
    selectedTabID: tab,
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

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
      const form = event.target;
      event.preventDefault();
      console.log("dd",form[1])
      const formData = new FormData();
      formData.append('custId', form[1].value);
      formData.append('custName',  form[2].value);
      formData.append('paymentTypeId',  form[3].value);
      formData.append('fromAmt',  form[4].value);
      formData.append('toAmt',  form[5].value);
      formData.append('checkNum',  form[6].value);
      formData.append('batchId',  form[7].value);
      formData.append('paymentFromDate',  form[8].value);
      formData.append('paymentToDate',  form[9].value);
      formData.append('postedFromDate',  form[10].value);
      formData.append('statuses',  form[11].value);
      const json = Object.fromEntries(formData);
      console.log(json);
      onSearchPayment(json);
    }
  function Panel0(){
    const [active, setactive] = useState('');
    console.log(active);
  return <p>
    <div>
          <div className='form-group'>
          <form onSubmit={onSubmitHandler}>
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
                   <button type='submit' className='btn mb-3 btn-Gray'>
                    Submit
                  </button>
                  <button
                    type='reset'
                    value='Reset'
                    className='btn  mb-3 btn-darkGray '>
                    Reset
                  </button>
                </div>
              ) : null }

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
                          type='date'
                          className='form-control search-form-control'
                          id='inputfromdate'
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
                          type='date'
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
                  <button type='submit' onClick={actions.payments} className='btn mb-3 btn-Gray'>
                    Submit
                  </button>
                  <button
                    type='reset'
                    value='Reset'
                    className='btn mb-3 btn-darkGray '>
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
                  <button type='submit'onClick={actions.adjustments} className='btn  mb-3 btn-Gray'>
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
            </form>
          </div>
    </div>
    </p>
  };
  const [Tablist, Panellist, ready] = useDynTabs(options);
  ready((instance) => {
    _instance = instance;
    console.log(instance);
    isVertical = _instance.getOption('isVertical');
    console.log("s");
  });

  return (

    <div>
      <h1 className="head">Accounts Receivable</h1>
      <Tablist></Tablist>
      <Panellist></Panellist>
    </div>

  );
};
  export const HandleButtons = () => {
    const [isOpen, setIsOpen] = useState(true);
    const handleTrigger = () => setIsOpen(!isOpen);
  
    return (
      <div className="col-6">
        <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
  
        <div className="sidebar-position">
            <AiOutlineSearch onClick={actions.search} icon={AiOutlineSearch} />
            <span onClick={actions.search}>Search</span>
          </div>
          
          <div className="sidebar-position">
            <BsGear onClick={actions.fileImport} icon={BsGear} />
            <span onClick={actions.fileImport}>File Import</span>
          </div>
  
          <div className="sidebar-position">
            <BsBarChartLine onClick={actions.fileExport} icon={BsBarChartLine} />
            <span onClick={actions.fileExport}>File Export</span>
          </div>
  
          <div className="sidebar-position">
            <BsGrid3X3Gap onClick={actions.batch} icon={BsGrid3X3Gap} />
            <span onClick={actions.batch}>Batch Payment</span>
          </div>
  
          <div className="sidebar-position">
            <IoFlameOutline onClick={actions.gl} icon={IoFlameOutline} />
            <span onClick={actions.gl}>GL Account</span>
          </div>
  
          <div className="sidebar-position">
            <BsFonts onClick={actions.tax} icon={BsFonts} />
            <span onClick={actions.tax}>Tax Viewer</span>
          </div>
  
          <div className="sidebar-position">
            <BsStar onClick={actions.creditcard} icon={BsStar} />
            <span onClick={actions.creditcard}>Credit Card</span>
          </div>
  
  
        </div>
      </div>
    );
  
  };



export default Search;
