import React, {useEffect, useState, useRef} from 'react';
import '../../menupages/index.style.scss';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import DataGrid, {Column,  Pager,  Paging,  SearchPanel,  Sorting,  ColumnChooser,  FilterRow,  Toolbar,  Editing} from 'devextreme-react/data-grid';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import {  getGLAccountData,  accountUpdate,  saveGLAccount} from '../../menupages/APICalls.js';
import DataSource from 'devextreme/data/data_source';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
const allowedPageSizes = [10, 20, 50];

let gldata = [];
let activeVal=0;
class GLAccount extends React.Component {
  show = false;
  constructor(props) {
    super(props);
    this.active = false ;
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
     this.activeChange();
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
   /* params.component.pageIndex(pageIndex - 1).done(() => {
      params.component.option('focusedRowIndex', rowsCount - 1);
    });*/
  };

   activeChange = async() => {
    this.active = !this.active;
    console.log(this.active);
    if(this.active)
       activeVal=1;

    let json = {
      isActive: activeVal,
      page: 1,
      size: 20,
      sort: ['glAcctNum,asc'],
    };

    let data=await getGLAccountData(json);
     if (data!=undefined ) {
            console.log(data.data);
            gldata=data.data.response;
            console.log(gldata);
            this.setState({connectionStarted: true, dataSource: gldata});
      }
  };
  handleShow = () => {
    this.show = true;
    this.setState({show:true});
    console.log('show',this.show);
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
    addGLCode(json);
    console.log("gldata",gldata);
    gldata.push(json);
    console.log("gldata",gldata);
    this.setState({connectionStarted: true, dataSource: gldata});
    this.show = false;
  };

  onEditingStart = (e) => {
    console.log('edit', e);
  };

  onRowUpdating = (e) => {
    console.log('onRowUpdating', e);
    let accounum = e.key;
    let oldData=e.oldData;
    console.log('oldData', oldData);
    let newData = e.newData;
    console.log('activeVal', activeVal);
    if(activeVal==undefined)
      activeVal=1;

    newData.isAcive=activeVal;
    console.log('newData', newData);
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
                        <textarea
                          className='form-control pt-3'
                          name='comments'
                          type='text'
                          onChange={this.inputChangeHandler(this)}></textarea>
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
                  keyExpr={'glAcctNum'}
                  allowColumnReordering={true}
                  focusedRowEnabled={true}
                  showBorders={true}
                  onEditingStart={this.onEditingStart}
                  onRowUpdating={this.onRowUpdating}
                  onRowUpdated={this.onRowUpdated}
                  id='gldata_id'>
                  <Editing mode='row' allowUpdating={true} />
                  <Column dataField={'glAcctNum'}caption={'Account Number'} minWidth={100} alignment="left"/>
                  <Column dataField={'glCdDesc'} caption={'Description'} minWidth={100} alignment="left" />
                  <Column dataField={'updtdBy'} caption={'Updated By'} allowEditing={false} minWidth={100} alignment="left" />
                  <Column dataField={'updtDt'} caption={'Update Date'} allowEditing={false}  dataType="date" minWidth={100} alignment="left"/>
                  <Column dataField={'glComment'} caption={'Comments'}  minWidth={100} alignment="left"/>
                  <FilterRow visible={true} />
                  <Pager
                    allowedPageSizes={allowedPageSizes}
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
            </div>
      </div>
    );
  }
}

export default GLAccount;
