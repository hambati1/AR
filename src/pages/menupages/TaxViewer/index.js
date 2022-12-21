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

const TaxViewer = () => {

  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState(false);
  const [setFileType, setFileTypes] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <div>
      <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div>
      <Tabs
        defaultActiveKey="profile"
        id='uncontrolled-tab-example'
        className="mb-3">
        <Tab eventKey="batchPayment" title="Tax Viewer">


          <div className="mb-3 row">
            <label for="inputfrom date" ReadOnly className="col-lg-2 col-form-label">P-Code</label>

            <div className="col-md-2">
              <form className="form" align-input-group="center">
                <div className="input-group col-sm-12 input-group-sm">
                  <div className="input-group col-md-12" id="adv-search">
                    <div className="input-group-btn">
                      <div className="btn-group" role="group">
                        <input type="text" className="form-control" id="search" autocmplete="off" />
                        <Button href="#/action-1" className="btn-color" onClick={handleShow}> <img src="/assets/images/notepad.png" /> </Button>

                        <Modal
                          className=""
                          show={show}
                          onHide={handleClose}
                          backdrop="static"
                          keyboard={false}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Choose P-Code</Modal.Title>
                          </Modal.Header>
                          <Modal.Body className="pop-up">
                          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="font col-form-label">Country</label>
                  <div className="col">
                  <select className="form-select" Name="status" aria-label="Default select example" >
                <option value=""> </option>
                <option value=""></option>
              </select>
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 font col-form-label">State</label>
                  <div className="col">
                  <select className="form-select" Name="status" aria-label="Default select example" >
                <option value=""></option>
                <option value=""></option>
              </select>
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 font  col-form-label">County</label>
                  <div className="col">
                  <select className="form-select" Name="status" aria-label="Default select example" >
                <option value=""> </option>
                <option value=""></option>
              </select>
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 font col-form-label">Locality</label>
                  <div className="col">
                  <select className="form-select" Name="status" aria-label="Default select example" >
                <option value=""> </option>
                <option value=""></option>
              </select>                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 font col-form-label">Zip Start</label>
                  <div className="col">
                  <select className="form-select" Name="status" aria-label="Default select example" >
                <option value=""> </option>
                <option value=""></option>
              </select>                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 font col-form-label">Zip End</label>
                  <div className="col">
                  <select className="form-select" Name="status" aria-label="Default select example" >
                <option value=""> </option>
                <option value=""></option>
              </select>                  </div>
                </div>
              </div>
<div className="vr"></div>
              <div class="col-sm">
                <div className="mb-2 row">
                  <label for="inputcardholder name" className="col-lg-2 font col-form-label">P-Code</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>               
              </div>
            </div>
          </div>

                            {/* <div className="d-flex">
                              <div className="col-2 input-group-sm batch">
                                <label>Description
                                </label>
                              </div>
                              <div className="input-group col input-group-sm">
                                <input className="form-control" type="text"></input>
                              </div>
                            </div>

                            <div className="d-flex">
                              <div className="col-2 input-group-sm batch ">
                                <label>Comments
                                </label>
                              </div>
                              <div className="input-group col input-group-sm">
                                <input className="form-control pt-3" type="text"></input>
                              </div>
                            </div> */}



                              <button type="button" className="btn mt-3 code" >Find P-Codes</button>
                              <button type="save" className="btn cancel">Clear</button>
                            

                          </Modal.Body>
                          <Modal.Footer>
                          <div>
                              <button type="Save" className="btn ok" >Save</button>
                              <button type="Cancel" className="btn cancel">Cancel</button>
                            </div>
                
              </Modal.Footer>
                        </Modal>

                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="mb-2 row">
            <label for="inputfrom date" className="col-lg-2 col-form-label">Amount</label>
            <div className="col-md-2">
              <input type="text" Name=" from date" className="form-control" id="inputfrom date" />
            </div>
          </div>

          <div className="mb-2 row">
            <label for="inputfrom date" className="col-lg-2 col-form-label">Lines</label>
            <div className="col-md-2">
              <input type="text" Name=" from date" className="form-control" id="inputfrom date" />
            </div>
          </div>

          <div className="mb-2 row">
            <label for="inputfrom date" className="col-lg-2 col-form-label">Locations</label>
            <div className="col-md-2">
              <input type="text" Name=" from date" className="form-control" id="inputfrom date" />
            </div>
          </div>

          <div className="mb-2 row">
            <label for="inputfrom date" className="col-lg-2 col-form-label">Origination NPA-NXX</label>
            <div className="col-md-2">
              <input type="text" Name="from date" className="form-control" id="inputfrom date" />
            </div>
            <div className="col-md-2">
              <input type="text" Name=" from date" className="form-control" id="inputfrom date" />
            </div>
          </div>

          <div className="mb-2 row">
            <label for="inputfrom date" className="col-lg-2 col-form-label">Terminating NPA-NXX</label>
            <div className="col-md-2">
              <input type="text" Name=" from date" className="form-control" id="inputfrom date" />
            </div>
            <div className="col-md-2">
              <input type="text" Name=" from date" className="form-control" id="inputfrom date" />
            </div>
          </div>
          <div className="mb-2 row">
            <label for="input transcation type" className="col-lg-2 col-form-label">Transcation Type</label>
            <div className="col-md-2">
              <select className="form-select" Name="status" aria-label="Default select example" >
                <option value="Residential"> Residential</option>
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="mb-2 row">
            <label for="input transcation type" className="col-lg-2 col-form-label">Incorporated</label>
            <div className="col-md-2">
              <select className="form-select" Name="status" aria-label="Default select example" >
                <option value="Withiin">Within</option>
                <option value=""></option>
              </select>
            </div>
          </div>

          <div className="mb-2 row">
            <label for="input transcation type" className="col-lg-2 col-form-label">Regulated</label>
            <div className="col-md-2">
              <select className="form-select" Name="status" aria-label="Default select example" >
                <option value="Regulated">Regulated</option>
                <option value=""></option>
              </select>
            </div>
          </div>

          <div className="mb-2 row">
            <label for="input transcation type" className="col-lg-2 col-form-label">Sale Type</label>
            <div className="col-md-2">
              <select className="form-select" Name="status" aria-label="Default select example" >
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
            <button type="Apply tax" className="btn  mb-3 Apply " >Apply Tax</button>
            <button type="Clear" className="btn  mb-3 cancel ">Clear</button>
          </div>
        </Tab>

        {/* ****************Tax View Results********************* */}
        <Tab eventKey="taxviewresult" title="Tax View Result">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">P-code</label>
                  <div className="col">
                    <input type="text" placeholder="" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Amount</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Lines</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Locations</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Account Type</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Incorporated</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>
              </div>

              <div class="col-sm">
                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Country</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">State</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Country</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Locality</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Zip Start</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Zip End</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>
              </div>

              <div class="col-sm">
                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Origination NPA-NXX</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Terminating NPA-NXX</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Transcation Type</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Regulated</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Sale Type</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Date</label>
                  <div className="col">
                    <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                  </div>
                </div>
              </div>


            </div>
          </div>

          {/* ****************Tax view results end***************** */}
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
