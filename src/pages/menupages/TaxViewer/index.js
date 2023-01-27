import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Button, Modal, ModalBody } from 'react-bootstrap';
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
import { Dropdown, DropdownButton } from 'react-bootstrap';
import clsx from 'clsx';
import '../../menupages/index.style.scss';
import CodeForm from '../../menupages/TaxViewer/CodeForm';
import TaxViewerResult from './TaxViewerResult';
import {
  getTaxFileTypeData,
  onSubmitTaxHandler} from '../../menupages/APICalls.js';
// import CloseButton from '../../../../src/pages/menupages/CloseButton';

let TaxViewerData = [];

const TaxViewer = () => {
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState(false);

  const [fileType, setFileTypes] = useState();
  const [selectfileType, setselectfileType] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [StateType, setStateTypes] = useState();

  




  const selectChangeHandler = (
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log(event);
   
    console.log(TaxViewerData);
    let data = getTaxFileTypeData(event);
    console.log(data);
    setselectfileType(event);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    console.log()
    const form = event.target;
    event.preventDefault();
    let json = {
      amt: 100.0,
      taxTranTypeCd: 1,
      taxSvcTypeCd: '02',
      locations: 1,
      lines: 1,
      salesType: true,
      acctType: false,
      incorporated: false,
      regulated: false,
      date: '2022-12-07',
      pcode: 2887400,
      origNpa: 513,
      origNxx: 281,
      termNpa: 513,
      termNxx: 281,
    };
    console.log(json);
    let ab = JSON.stringify(json);
    onSubmitTaxHandler(ab);
  };
  useEffect(() => {
    getFileTypeDataVal();
    // getStateDataVal()
  }, []);
  // getStateDataVal
  // async function getStateDataVal() {
  //   let data = await getStateTypeData();
  //   // console.log('Statement 2' + data);
  //   console.log(data)
  //   setStateTypes(data);
  // }
  async function getFileTypeDataVal() {
    var data = await getTaxFileTypeData();
    console.log('Statement 2' + data);
    setFileTypes(data.response);
  }

  return (
    <div>
      {/* <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div> */}
      {/* <Button
        href='#/action-1'
        className='btn-close float-end'
        onHide={handleClose}></Button> */}
      <Tabs
        defaultActiveKey='batchPayment'
        id='uncontrolled-tab-example'
        className='mb-3'
        onHide={handleClose}>
        <Tab eventKey="batchPayment" title="Tax Viewer">
          <form >

            <div className="mb-2 row">
              <label for="inputp-code" readOnly className="col-lg-2 col-form-label">P-Code</label>
              <div className="col-md-2">
                <div className="input-group col-sm-12 input-group-sm">
                  <div className="input-group col-md-12" id="adv-search">
                    <div className="input-group-btn">
                      <div className="btn-group" role="group">
                        <input type="text" className="form-control" id="search" autocmplete="off" />
                        <CodeForm data={StateType}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mb-2 row'>
              <label for='inputamount' className='col-lg-2 col-form-label'>
                Amount
              </label>
              <div className='col-md-2'>
                <input type='text'name=' amount'className='form-control'id='inputamount'/>
              </div>
            </div>

            <div className='mb-2 row'>
              <label for='inputlines' className='col-lg-2 col-form-label'> Lines</label>
              <div className='col-md-2'>
                <input type='text'name='lines'className='form-control'id='inputlines'/>
              </div>
            </div>

            <div className='mb-2 row'>
              <label for='inputlocation' className='col-lg-2 col-form-label'>Locations</label>
              <div className='col-md-2'>
                <input type='text'name=' locations'className='form-control'id='inputlocations'/>
              </div>
            </div>

            <div className='mb-2 row'>
              <label for='inputorigination npa-nxx' className='col-lg-2 col-form-label'>Origination NPA-NXX</label>
              <div className='col-md-2'>
                <input type='text'name='origination npa-nxx'className='form-control'id='inputorigination npa-nxx'/>
              </div>
              <div className='col-md-2'>
                <input type='text'name='origination npa-nxx'className='form-control mx-2'id='inputorigination npa-nxx'/>
              </div>
            </div>


            <div className='mb-2 row'>
              <label for='inputterminating npa-nxx' className='col-lg-2 col-form-label'>Terminating NPA-NXX </label>
              <div className='col-md-2'>
                <input type='text'name=' terminating npa-nxx'className='form-control'id='inputterminating npa-nxx'/>
              </div>
              <div className='col-md-2'>
                <input type='text' name=' terminating npa-nxx'className='form-control mx-2'id='inputterminating npa-nxx'/>
              </div>
            </div>
            <div className='mb-2 row'>
              <label for='input transcation type'className='col-lg-2 col-form-label'>Transcation Type</label>
              <div className='col-md-2 Dropdown'>
                <select className='form-select'Name='selectfileType' aria-label='Default select example' onChange={(e) =>
                    selectChangeHandler(selectfileType, e.target.value)
                  }>
                  <option value=''></option>
                  {fileType &&
                    fileType.map((user) => (
                      <option value={user.taxCdDesc}>
                        {user.taxCdDesc}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className='mb-2 row'>
              <label for='inputincorporated'className='col-lg-2 col-form-label'>Incorporated </label>
              <div className='col-md-2'>
                <select className='form-select'Name='incorporated'aria-label='Default select example'>
                  <option value='Withiin'>Within</option>
                  <option value='Outside'>Outside</option>
                </select>
              </div>
            </div>
            <div className='mb-2 row'>
              <label for='inputregulated'className='col-lg-2 col-form-label'>Regulated</label>
              <div className='col-md-2'>
                <select className='form-select'name='regulated'aria-label='Default select example'>
                  <option value='Regulated'>Regulated</option>
                  <option value='Unregulated'>Unregulated</option>
                </select>
              </div>
            </div>

            <div className='mb-2 row'>
              <label for='inputsaletype'className='col-lg-2 col-form-label'>Sale Type </label>
              <div className='col-md-2'>
                <select className='form-select'Name='saletype'aria-label='Default select example'>
                  <option value='Sale'>Sale</option>
                  <option value='Wholesale'>Wholesale</option>
                </select>
              </div>
            </div>
            <div className='mb-2 row'>
              <label for='inputdate'className='col-lg-2 col-form-label'> Date</label>
              <div className='col-md-2'>
                <input className='datepicker' type='date' />
              </div>
            </div>

            <div>
              <button onClick={onSubmitHandler} className='btn  mb-3 Apply'>Apply Tax</button>
              <button  className='btn  mb-3 batch-cancel'>Clear</button>
            </div>
          </form>
        </Tab>
        <Tab eventKey='taxviewresult' title='Tax View Result'>
          <TaxViewerResult />
          <div>
            <DataGrid
              className='card-body'
              dataSource={TaxViewer}
              keyExpr={'fileName'}
              allowColumnReordering={true}>
              <Column dataField={'taxtype'} caption={'Tax Type'} />
              <Column dataField={'description'} caption={'Description'} />
              <Column dataField={'p-code'} caption={'P-Code'} />
              <Column dataField={'level'} caption={'Level'} />
              <Column dataField={'jurisdiction'} caption={'Jurisdiction'} />
              <Column dataField={'tax rate'} caption={'Tax Rate'} />
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
        </Tab>
      </Tabs>
    </div>
  );
};
export default TaxViewer;
