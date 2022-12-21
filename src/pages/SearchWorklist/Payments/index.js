import React, { UseState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DataGrid, {
    Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';




const Payments = () => {

  return (
        <div>
            <div className='col-md-9 main-header'>
                <p>Accounts Receivable</p>
            </div>

            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3">
                <Tab eventKey="home" title="Search">
                    <div className="mb-2 row">
                        <label for="input search type" className="col-lg-2 col-form-label">Search Type</label>
                        <div className="col-sm-3">
                            <select className="form-select" Name="status" aria-label="Default select example" >
                                <option value="">Payments</option>
                                <option value="">Adjustments</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="inputCustomerid" className="col-lg-2 col-form-label">Customer ID</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="inputCustomerid" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="inputCustomername" className="col-lg-2 col-form-label">Customer Name</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="inputCustomername" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="inputfrom date" className="col-lg-2 col-form-label">Payment From Date</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="inputfrom date" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="inputTo date" className="col-lg-2 col-form-label"> Payment To Date</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="inputTodate" />
                        </div>
                    </div>
                    <div className="mb-2 row">
                        <label for="inputfrom amount" className="col-lg-2 col-form-label">Posted From Date</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="inputfrom amount" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="input to amount" className="col-lg-2 col-form-label">Posted To Date</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="input to amount" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="input from amount" className="col-lg-2 col-form-label">From Amount</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="input from amount" />

                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="input to amount" className="col-lg-2 col-form-label">To Amount</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="input to amount" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="input type" className="col-lg-2 col-form-label">Type</label>
                        <div className="col-sm-3">
                            <select className="form-select" Name="status" aria-label="Default select example" >
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>

                    </div>

                    <div className="mb-2 row">
                        <label for="input status" className="col-lg-2 col-form-label">Status</label>
                        <div className="col-sm-3">
                            <select className="form-select" Name="status" aria-label="Default select example" >
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="input check number" className="col-lg-2 col-form-label">Check Number</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="input check number" />
                        </div>
                    </div>
                    <div className="mb-2 row">
                        <label for="input batch id" className="col-lg-2 col-form-label">Batch ID</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="input batch id" />
                        </div>
                    </div>


                    <div>
                        <button type="Ok" className="btn  mb-3 ok ">Submit</button>
                        <button type="Cancel" className="btn  mb-3 cancel ">Reset</button>
                    </div>
                </Tab>
                <Tab eventKey="payments" title="Payments">
                    <div>

                        <DataGrid
                            className='card-body'
                            dataSource={Payments}
                            keyExpr={'fileName'}
                            allowColumnReordering={true}>
                            <Column dataField={'customer id'} caption={'Customer ID'} />
                            <Column dataField={'customer name'} caption={'Customer Name'} />
                            <Column dataField={'payment type'} caption={'Payment Type'} />
                            <Column dataField={'amount'} caption={'Amount'} />
                            <Column dataField={'payment date'} caption={'Payment Date'} />

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
              

                    <div class="container">
                        <div class="row">
                            <div class="col">

                                <div className="mb-2 row comment-margin">
                                    <label for="inputpayment id" className="col-lg-2 form-width col-form-label">Payment ID</label>
                                    <div className="col">
                                        <input type="text" className="form-control " id="inputpayment id" />
                                    </div>
                                </div>
                                <div className="mb-2 row comment-margin">
                                    <label for="inputcreated by" className="col-lg-2 form-width col-form-label">Created By</label>
                                    <div className="col">
                                        <input type="text" className="form-control" id="inputcreated by" />
                                    </div>
                                </div>
                                <div className="mb-2 row comment-margin">
                                    <label for="input batch id" className="col-lg-2 form-width col-form-label">Batch ID</label>
                                    <div className="col">
                                        <input type="text" className="form-control" id="inputbatch id" />
                                    </div>
                                </div>
                                <div className="mb-2 row comment-margin">
                                    <label for="inputcheck number" className="col-lg-2 form-width col-form-label">Check Number</label>
                                    <div className="col">
                                        <input type="text" className="form-control" id="inputcheck number" />
                                    </div>
                                </div>

                                <div className="mb-2 row comment-margin">
                                    <label for="input commnets" className="col-lg-2 form-width col-form-label">Comments</label>
                                    <div className="col">
                                        <input type="text" className="form-control" id="input comments" />
                                    </div>
                                </div>
                            </div>
                            <div class="col">

                                <div className="mb-2 row comment-margin">
                                    <label for="inputposted date" className="col-lg-2 form-width col-form-label">Posted Date</label>
                                    <div className="col">
                                        <input type="text" className="form-control " id="inputposted date" />
                                    </div>
                                </div>
                                <div className="mb-2 row comment-margin">
                                    <label for="inputagency fee" className="col-lg-2 form-width col-form-label">Agency Fee</label>
                                    <div className="col">
                                        <input type="text" className="form-control " id="inputagency fee" />
                                    </div>
                                </div>


                                <div className="mb-2 row comment-margin">
                                    <label for="inputcomments" className="col-lg-2 form-width col-form-label">Comments</label>
                                    <div className="col">
                                        <input type="text" className="form-control pt-3" id="inputcomments" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};
export default Payments;
