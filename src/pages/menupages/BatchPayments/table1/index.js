import React, {useEffect, useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import '../../index.style.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import Button from 'devextreme-react/button';
import Modal from 'react-bootstrap/Modal';
import DataGrid, {Column,Pager,Paging,SearchPanel,Sorting,ColumnChooser,FilterRow,Toolbar,Editing} from 'devextreme-react/data-grid';
import DropDownButton from 'devextreme-react/drop-down-button';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import {Search} from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { getSearchData,getBatchDetailsByBatchIdService, saveBatchName } from '../../../menupages/APICalls.js'
import Table from 'react-bootstrap/Table';

let batchData = [];
let batchEditdata={};
const Table1 = () => {
  const [active, setactive] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [batchName, setbatchName] = useState();
  const [batchId, setbatchId] = useState();
  const [importFileId, setimportFileId] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [batchSubData, setbatchSubData] = useState([]);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const activeChange = () => {
  console.log('activeChange',!active);
    setbatchId('');
    setbatchName('');
    setactive(!active);
    getSearchDataDetails(!active);
  };

  useEffect(() => {
   console.log("search active");
   getSearchDataDetails(active);
     var s=[];
     setbatchSubData(s);
  }, []);

  const getSearchDataDetails = (val) => {
  console.log('val==',val);
    let data = getSearchData(val);
    if (data.length > 0) {
      batchData = data;
      console.log(batchData);
    }
  }

  const handlebatchName = event => {
    setbatchName(event.target.value);
  };

const getBatchDetailsByBatchId=async()=>{
    const response=await getBatchDetailsByBatchIdService(batchId);
    var s=[];
    s.push(response);
    setbatchSubData(s);
    console.log(s);
}

const handleEvent: GridEventListener<'rowClick'> = (params, event, details, // GridCallbackDetails
  ) => {
    console.log(params);
    if (params.data.cmImportFile != undefined) {
      console.log(params.data.cmImportFile.importFileId);
      setimportFileId(params.data.cmImportFile.importFileId);
    }
    setbatchId(params.data.batchId);
    getBatchDetailsByBatchId(params.data.batchId);
  };

const handleEditEvent: GridEventListener<'rowClick'> = (params, event, details, // GridCallbackDetails
  ) => {
    console.log('handleEditEvent',params.data);
    batchEditdata=params.data;
    console.log('handleEditEvent',batchEditdata.batchId);
  };


  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.target;
    event.preventDefault();
    let json ="" ;//{ "fileNames": fileName, "brandId": 1, "fileTypeId": parseInt(selectfileType), "page": 1, "size": 10 };
    console.log(json);
    let ab = JSON.stringify(json);
  }

  const batchNameSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('=batchName=' + batchName + ' = importFileId=' + importFileId);
    if (batchName != undefined) {
      let json = {
        "batchName": batchName, "isPayment": 1, "isClosed": 0,
        "cmImportFile": { "importFileId": importFileId }
      }
      let message = saveBatchName(json, batchId);
      console.log('message==' + message);
    }
  }
  const agencybatchnamesave = () => {
    console.log('======' + batchName);
  }

  return (
    <div>
      <div className='form-group'>
            <div class='form-check mx-2'>
            <div className="left">
              <input
                type='checkbox'
                class='form-check-input'
                name='active'
                value=''
                id='flexCheckDefault'
                checked={active}
                onChange={activeChange}
              />

              <label class='list'>Active Only</label>
              </div>
              <div className="right">
                <Dropdown>
                              <Dropdown.Toggle variant='primary' id='dropdown-basic' className='mb-10'>
                                Actions
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href='#/action-1' onClick={handleShow}>
                                  Add payment Batch
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-2' onClick={handleShow2}>
                                  Add Agency Payment Batch
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
              </div>
            </div>

            <Modal
              className=''
              show={show}
              onHide={handleClose}
              backdrop='static'
              keyboard={false}>
              <Modal.Header closeButton>
                <Modal.Title>Add Payment Batch</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='d-flex'>
                  <div className='col-2 input-group-sm batch'>
                    <label>Batch Name</label>
                  </div>
                  <div className='input-group col input-group-sm'>
                    <input
                      className='form-control'
                      name='batchName'
                      onChange={handlebatchName}
                      type='text'></input>
                  </div>
                </div>
                <div>
                  <button
                    type='submit'
                    className='btn  mb-3 ok '
                    onClick={batchNameSubmitForm}>
                    Ok
                  </button>
                  <button type='Cancel' className='btn  mb-3 batch-cancel '>
                    Cancel
                  </button>
                </div>

                <div>
                  <h5>Messages</h5>
                </div>
                <div>
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>Source</th>
                        <th>Messages</th>
                      </tr>

                    </thead>
                    <tbody>
                    <tr>
                    <td> {}</td>
                    <td>{} </td>
                    </tr>
                    </tbody>
                  </Table>
                </div>
              </Modal.Body>
            </Modal>
            <Modal
              className=''
              show={show2}
              onHide={handleClose2}
              backdrop='static'
              keyboard={false}>
              <Modal.Header closeButton>
                <Modal.Title>Add Agency Payment Batch</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='d-flex'>
                  <div className='col-2 input-group-sm batch'>
                    <label>Batch Name</label>
                  </div>

                  <div className='input-group col input-group-sm'>
                    <input className='form-control' type='text'></input>
                  </div>
                </div>
                <div>
                  <button
                    type='Ok'
                    className='btn  mb-3 ok '
                    onClick={agencybatchnamesave}>
                    Ok
                  </button>
                  <button type='Cancel' className='btn  mb-3 batch-cancel'>
                    Cancel
                  </button>
                </div>

                <div>
                  <h5>Messages</h5>
                </div>
                <div>
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>Source</th>
                        <th>Messages</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td> {}</td>
                     <td> {}</td>
                    </tr>
                    </tbody>
                  </Table>
                </div>
              </Modal.Body>
            </Modal>
           <div id='data-grid-demo'>
              <DataGrid
                onRowClick={handleEvent}
                dataSource={batchData}
                showBorders={true}>
                <Paging enabled={false} />
                <Column dataField={'batchId'} caption={'Batch ID'} minWidth={100} alignment="left"/>
                <Column dataField={'type'} caption={'Type'} minWidth={100} alignment="left"/>
                <Column dataField={'batchName'} caption={'Name'}minWidth={100} alignment="left" />
                <Column dataField={'createdBy'} caption={'Created By'} minWidth={100} alignment="left"/>
                <Column dataField={'creationDt'} caption={'Creation Date'} minWidth={100} alignment="left"/>
                <Column dataField={'status'} caption={'Status'} minWidth={100} alignment="left"/>
                <Column dataField={'totalRecords'} caption={'Total Records'} minWidth={100} alignment="left"/>
                <Column dataField={'totalAmount'} caption={'Total Amount'} minWidth={100} alignment="left"/>
                <Column dataField={'totalAgencyFee'}caption={'Total Agency Fees'} minWidth={100} alignment="left"/>

                <FilterRow visible={true} />
                <ColumnChooser enabled={true} mode='select' />
                <SearchPanel
                  className='float-start'
                  visible={true}
                  width={240}
                  placeholder='Search...'
                />
                <Pager
                  allowedPageSizes={[5, 10, 20]}
                  showPageSizeSelector={true}
                  showNavigationButtons={true}
                />
                <Paging defaultPageSize={5} />
              </DataGrid>
            </div>

             <div>Batch {batchId}</div>
                <div id='data-grid-demo2'>
                  <DataGrid
                    onRowClick={handleEditEvent}
                    dataSource={batchSubData}
                    showBorders={true}>
                    <Paging enabled={false} />
                    <Column dataField={'batchId'} caption={'Customer ID'} minWidth={100} alignment="left" />
                    <Column dataField={'batchEditdata.type'} caption={'Customer Name'} minWidth={100} alignment="left" />
                    <Column dataField={'batchName'} caption='Payment Type'minWidth={100} alignment="left" />
                    <Column dataField={'createdBy'} caption='Payment Amount'minWidth={100} alignment="left" />
                    <Column dataField={'creationDt'} caption='Agency Fee' minWidth={100} alignment="left"/>
                    <Column dataField={'isClosed'} caption='Check number' minWidth={100} alignment="left"/>
                    <Column dataField={'totalRecords'} caption='Payment Date' minWidth={100} alignment="left"/>
                    <FilterRow visible={true} />
                    <ColumnChooser enabled={true} mode='select' />
                    <SearchPanel
                      className='float-start'
                      visible={true}
                      width={240}
                      placeholder='Search...' />
                    <Pager
                      allowedPageSizes={[5, 10, 20]}
                      showPageSizeSelector={true}
                      showNavigationButtons={true} />
                    <Paging defaultPageSize={5} />
                  </DataGrid>
                </div>
          </div>
        <div class="col">
          <div className="row my-2">
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

<form onSubmit={onSubmitHandler}>
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
</form>
        </div>
    </div>
  );
};

export default Table1;
