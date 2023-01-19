import React, {useEffect, useState, useRef} from 'react';
import '../../menupages/index.style.scss';
import axios from 'axios';
import {Button} from 'react-bootstrap';
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
import {Dropdown, DropdownButton} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import {
  getGLAccountData,
  accountUpdate,
  saveGLAccount,
} from '../../menupages/APICalls.js';
import DataSource from 'devextreme/data/data_source';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
const allowedPageSizes = [10, 20, 50];


const actions = [
  {id: 1, text: 'Account Number'},
  {id: 2, text: 'Description'},
  {id: 3, text: 'Updated By'},
  {id: 4, text: 'Update Date'},
  {id: 5, text: 'Comments'},
];

const dropDownOptions = {
  height: 150,
  width: 130,
};

const gldata = [
  {
    glcode: 1,
    accountNumber: 123,
    description: 'desc',
    updatedBy: 'hambati',
    updateDate: '24-12-2022',
    comments: 'comments',
  },
  {
    glcode: 2,
    accountNumber: 456,
    description: 'desc',
    updatedBy: 'hambati',
    updateDate: '24-12-2022',
    comments: 'comments',
  },
  {
    glcode: 3,
    accountNumber: 789,
    description: 'desc',
    updatedBy: 'hambati',
    updateDate: '24-12-2022',
    comments: 'comments',
  },
];

class GLAccount extends React.Component {
  show = false;
  constructor(props) {
    super(props);
    this.active = true;
    this.accountNumber;
    this.description;
    this.comments;
    this.show = false;
    this.activeChange = this.activeChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {connectionStarted: false, dataSource: null};
  }

  handleEvent: GridEventListener<'rowClick'> = (
    params,
    event,
    details, // GridCallbackDetails
  ) => {
    console.log(params);
    const rowsCount = params.component.getVisibleRows().length;
    const pageCount = params.component.pageCount();
    const pageIndex = params.component.pageIndex();
    const key = params.event && params.event.key;
    params.component.pageIndex(pageIndex - 1).done(() => {
      params.component.option('focusedRowIndex', rowsCount - 1);
    });
  };

  activeChange = () => {
    console.log(this.active);
    this.active = !this.active;
    let json = {
      isActive: this.active,
      page: 1,
      size: 20,
      sort: ['glAccNum,asc'],
    };
    this.setState({connectionStarted: true, dataSource: gldata});
    getGLAccountData(json);
  };
  handleShow = () => {
    this.show = true;
  };
  handleClose = (event: React.FormEvent<HTMLFormElement>) => {
    this.show = false;
    this.setState({show:false});
  };

  onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
  console.log("data push");
    const form = event.target;
    event.preventDefault();
    let json = {
      glcode: 1234,
      accountNumber: form[0].value,
      description: form[1].value,
      updatedBy: 'hambati',
      updateDate: '24-12-2022',
      comments: form[2].value,
    };
    gldata.push(json);
    this.setState({connectionStarted: true, dataSource: gldata});
    this.show = false;
  };

  onEditingStart = (e) => {
    console.log('edit', e);
  };

  onRowUpdating = (e) => {
    console.log('onRowUpdating', e);
    let accounum = e.key;
    let newData = e.newData;
    accountUpdate(accounum, newData);
  };

  onRowUpdated = (e) => {
    console.log('onRowUpdated', e);
  };
  updateFiled = (event) => {
    console.log(event);
    console.log(event.currentTarget.name);
    console.log(event.target.value);
  };
  inputChangeHandler = (event) => {};

  addGLAccount = () => {
    console.log('addGLAccount');
  };

  render() {
    return (
      <div>
            <div className='form-group'>
            <div>
              <div className='left'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  name='active'
                  value='Active Only'
                  checked={this.active}
                  onChange={this.activeChange}
                />
                <label class='list'>Active Only</label>
              </div>
              <div className='right'>
              <Dropdown>
                <DropdownToggle  id='dropdown-basic' className='btn-darkGray'>
                  Actions
                </DropdownToggle>
                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1' onClick={this.handleShow}>
                    Add GL Code
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
              </div>

              <Modal
                className=''
                show={this.show}
                onHide={this.handleClose}
                backdrop='static'
                keyboard={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Add GL Code</Modal.Title>
                </Modal.Header>
                <Modal.Body className='pop-up'>
                  <form onSubmit={this.onSubmitHandler}>
                    <div className='d-flex'>
                      <div className='col-2 input-group-sm batch'>
                        <label>Account Number</label>
                      </div>
                      <div className='input-group col input-group-sm'>
                        <input
                          className='form-control'
                          name='accountNumber'
                          type='text'
                          onChange={this.inputChangeHandler(this)}></input>
                      </div>
                    </div>

                    <div className='d-flex'>
                      <div className='col-2 input-group-sm batch'>
                        <label>Description</label>
                      </div>
                      <div className='input-group col input-group-sm'>
                        <input
                          className='form-control'
                          name='description'
                          type='text'
                          onChange={this.inputChangeHandler(this)}></input>
                      </div>
                    </div>

                    <div className='d-flex'>
                      <div className='col-2 input-group-sm batch '>
                        <label>Comments</label>
                      </div>
                      <div className='input-group col input-group-sm'>
                        <input
                          className='form-control pt-3'
                          name='comments'
                          type='text'
                          onChange={this.inputChangeHandler(this)}></input>
                      </div>
                    </div>
                    <div>
                      <button type='submit' className='btn  mb-3 ok '>
                        Save
                      </button>
                      <button type='reset' className='btn  mb-3 gl-cancel '>
                        Cancel
                      </button>
                    </div>
                  </form>
                </Modal.Body>
              </Modal>

              <div>
                <DataGrid
                  onRowClick={this.handleEvent}
                  className='card-body'
                  dataSource={this.state.dataSource}
                  keyExpr={'glcode'}
                  allowColumnReordering={true}
                  focusedRowEnabled={true}
                  showBorders={true}
                  onEditingStart={this.onEditingStart}
                  onRowUpdating={this.onRowUpdating}
                  onRowUpdated={this.onRowUpdated}
                  id='gldata_id'>
                  <Editing mode='row' allowUpdating={true} />
                  <Column
                    dataField={'glcode'}
                    caption={'GL Code'}
                    visible={false}
                  />
                  <Column
                    dataField={'accountNumber'}
                    caption={'Account Number'}
                  />
                  <Column dataField={'description'} caption={'Description'} />
                  <Column dataField={'updatedBy'} caption={'Updated By'} />
                  <Column dataField={'updateDate'} caption={'Update Date'} />
                  <Column dataField={'comments'} caption={'Comments'} />
                  <FilterRow visible={true} />
                  <Pager
                    allowedPageSizes={[5, 10, 20]}
                    showPageSizeSelector={true}
                    showNavigationButtons={true}
                  />
                   <ColumnChooser enabled={true} mode='select' />
                                <SearchPanel
                                  className='float-start'
                                  visible={true}
                                  width={240}
                                  placeholder="Search..."
                                />
                   <Pager
                    showPageSizeSelector={true}
                    allowedPageSizes={allowedPageSizes}
                    showNavigationButtons={true}
                />
                </DataGrid>
              </div>
              <div className='ml-60'>
                <div className='form-check mx-2'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    name='option1'
                    value='Is Active'
                  />
                  <label className='list'> Is Active</label>
                </div>
                <form calssName='input-selected record'>
                  <div className='mb-2 row'>
                    <label
                      for='input account number'
                      className='col-lg-2 col-form-label'>
                      Account Number
                    </label>
                    <div className='col-sm-3'>
                      <input
                        type='text'
                        className='form-control select-width'
                        id='input account number'
                      />
                    </div>
                  </div>

                  <div className='mb-2 row'>
                    <label
                      for='input description'
                      className='col-lg-2 col-form-label'>
                      Description
                    </label>
                    <div className='col-sm-3'>
                      <input
                        type='text'
                        className='form-control select-width'
                        id='input description'
                      />
                    </div>
                  </div>

                  <div className='mb-2 row'>
                    <label
                      for='input commnets'
                      className='col-lg-2 col-form-label'>
                      Comments
                    </label>
                    <div className='col-sm-3'>
                      <input
                        type='text'
                        className='form-control select-width  pt-3'
                        id='input comments'
                      />
                    </div>
                  </div>
                  <div>
                    <button type='Save' className='btn  mb-3 btn-Gray '>
                      Save
                    </button>
                    <button type='Cancel' className='btn  mb-3 btn-darkGray '>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          {/* </Tab>
        </Tabs> */}
      </div>
    );
  }
}

export default GLAccount;
