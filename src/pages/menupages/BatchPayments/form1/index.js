import React, { useEffect, useState } from "react";
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
// import '../index.style.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import Button from 'devextreme-react/button';
import axios from 'axios';
// import DataGrid, {
//   Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
// } from 'devextreme-react/data-grid';
// import DropDownButton from 'devextreme-react/drop-down-button';
// import { Dropdown, DropdownButton } from 'react-bootstrap';
// import { Search } from 'react-bootstrap-icons';
// import { onPaymentList } from '../../../redux/actions/paymentList';
// import { onGetContactList } from '../../../redux/actions/ContactApp';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import {getFileTypeData,getimportSearchData,getImportFileTypeData,getImportFileNames,onSubmitImportHandler} from '../../menupages/APICalls.js'

const Form1 = () => {

  return (
    <div>
    <div className=' row my-2 '>
      <label for='inputcustomer id' className='col-lg-2 col-form-label'>
        Customer ID
      </label>
      <div className='col-sm-3'>
        <input
          type='text'
          className='form-control'
          id='input customer id'
        />
      </div>
    </div>
    <div className=' row my-2 '>
      <label for='inputpayment type' className='col-lg-2 col-form-label'>
        Payment Type
      </label>
      <div className='col-sm-3'>
        <select
          className='form-select'
          name='status'
          aria-label='Default select example'>
          <option value=''>Check Payment</option>
          <option value=''></option>
        </select>
      </div>
    </div>
    <div className=' row my-2 '>
      <label
        for='inputaccount balance'
        className='col-lg-2 col-form-label'>
        Account Balance
      </label>
      <div className='col-sm-3'>
        <input
          type='text'
          className='form-control'
          id='input account balance'
        />
      </div>
    </div>
    <div className=' row my-2 '>
      <label
        for='inputpayment amount'
        className='col-lg-2 col-form-label'>
        Payment Amount
      </label>
      <div className='col-sm-3'>
        <input
          type='text'
          className='form-control'
          id='input payment amount'
        />
      </div>
    </div>
    <div class='form-check mx-2'>
      <input
        className='form-check-input'
        type='checkbox'
        name='active'
        value=''
        id='flexCheckDefault'
      />
      <label className='form-check-label action' for='flexCheckDefault'>
        Allocate to Invoices
      </label>
    </div>
    <div className=' row my-2 '>
      <label for='inputcheck number' className='col-lg-2 col-form-label'>
        Check Number
      </label>
      <div className='col-sm-3'>
        <input
          type='text'
          className='form-control'
          id='input check number'
        />
      </div>
    </div>
    <div>
      <button type='clear' className='btn  mb-3 Clear '>
        Clear
      </button>
      <button type='save' className='btn  mb-3 batch-Save '>
        Save
      </button>
      <button type='Cancel' className='btn  mb-3 batch-cancel '>
        Cancel
      </button>
    </div>
    </div>
  );
  
};

export default Form1;
