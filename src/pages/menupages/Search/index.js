import React, {useEffect, useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import '../../menupages/index.style.scss';
import Payments from 'pages/SearchWorklist/Payments';
import Adjustments from 'pages/SearchWorklist/Adjustments';
import {onSearchPayment} from '../../menupages/APICalls.js'

const Search = () => {
  const [active, setactive] = useState('');
  console.log(active);

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

  return (
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
            </form>
          </div>
    </div>
  );
};

export default Search;
