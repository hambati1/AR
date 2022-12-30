import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import { Button, Modal, ModalBody } from 'react-bootstrap';
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import clsx from 'clsx';
import '../../menupages/TaxViewer/index.style.scss'
import CodeForm from '../../menupages/TaxViewer/CodeForm';
import TaxViewerResult from "./TaxViewerResult";



const TaxViewer = () => {
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (

    <div>

      <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div>
      <Button href="#/action-1" className="btn-close float-end" onClick={handleShow}></Button>
      <Tabs
        defaultActiveKey="profile"
        id='uncontrolled-tab-example'
        className="mb-3"
        onHide={handleClose}     >

        <Tab eventKey="batchPayment" title="Tax Viewer">
            <div className="mb-2 row">
              <label for="inputfrom date" readOnly className="col-lg-2 col-form-label">P-Code</label>
              <div className="col-md-2">
                <div className="input-group col-sm-12 input-group-sm">
                  <div className="input-group col-md-12" id="adv-search">
                    <div className="input-group-btn">
                      <div className="btn-group" role="group">
                        <input type="text" className="form-control" id="search" autocmplete="off" />
                        <CodeForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-2 row">
              <label for="inputfrom date" className="col-lg-2 col-form-label">Amount</label>
              <div className="col-md-2">
                <input type="text" name=" from date" className="form-control" id="inputfrom date" />
              </div>
            </div>

            <div className="mb-2 row">
              <label for="inputfrom date" className="col-lg-2 col-form-label">Lines</label>
              <div className="col-md-2">
                <input type="text" name=" from date" className="form-control" id="inputfrom date" />
              </div>
            </div>

            <div className="mb-2 row">
              <label for="inputfrom date" className="col-lg-2 col-form-label">Locations</label>
              <div className="col-md-2">
                <input type="text" name=" from date" className="form-control" id="inputfrom date" />
              </div>
            </div>

            <div className="mb-2 row">
              <label for="inputfrom date" className="col-lg-2 col-form-label">Origination NPA-NXX</label>
              <div className="col-md-2">
                <input type="text" name="from date" className="form-control" id="inputfrom date" />
              </div>
              <div className="col-md-2">
                <input type="text" name=" from date" className="form-control mx-2" id="inputfrom date" />
              </div>
            </div>

            <div className="mb-2 row">
              <label for="inputfrom date" className="col-lg-2 col-form-label">Terminating NPA-NXX</label>
              <div className="col-md-2">
                <input type="text" name=" from date" className="form-control" id="inputfrom date" />
              </div>
              <div className="col-md-2">
                <input type="text" name=" from date" className="form-control mx-2" id="inputfrom date" />
              </div>
            </div>
            <div className="mb-2 row">
              <label for="input transcation type" className="col-lg-2 col-form-label">Transcation Type</label>
              <div className="col-md-2">
                
              </div>
            </div>
            <div className="mb-2 row">
              <label for="input transcation type" className="col-lg-2 col-form-label">Incorporated</label>
              <div className="col-md-2">
                <select className="form-select" name="status" placeholder="within" aria-label="Default select example" >
                  <option value="Withiin">Within</option>
                  <option value=""></option>
                </select>
              </div>
            </div>

            <div className="mb-2 row">
              <label for="input transcation type" className="col-lg-2 col-form-label">Regulated</label>
              <div className="col-md-2">
                <select className="form-select" name="status" aria-label="Default select example" >
                  <option value="Regulated">Regulated</option>
                  <option value=""></option>
                </select>
              </div>
            </div>

            <div className="mb-2 row">
              <label for="input transcation type" className="col-lg-2 col-form-label">Sale Type</label>
              <div className="col-md-2">
                <select className="form-select" name="status" aria-label="Default select example" >
                  <option value="Sale">Sale</option>
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="mb-2 row">
              <label for="input transcation type" className="col-lg-2 col-form-label">Date</label>
              <div className="col-md-2">
                <input className='datepicker' type='date' />
              </div>
            </div>

            <div>
              <button type="submit" className="btn  mb-3 Apply" >Apply Tax</button>
              <button type="Clear" className="btn  mb-3 cancel ">Clear</button>
            </div>
        </Tab>
        <Tab eventKey="taxviewresult" title="Tax View Result">
          <TaxViewerResult />
          <div>
            <DataGrid
              className='card-body'
              dataSource={TaxViewer}
              keyExpr={'fileName'}
              allowColumnReordering={true}>
              <Column dataField={'tax type'} caption={'Tax Type'} />
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
                placeholder="Search..."
              />
              <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} showNavigationButtons={true} />
              <Paging defaultPageSize={5} />
            </DataGrid>
          </div>
        </Tab>
      </Tabs>
    </div>


  );
};
export default TaxViewer;
