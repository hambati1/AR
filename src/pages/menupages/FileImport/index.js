import React, { useState ,useEffect } from 'react';
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import '../index.style.scss';
import axios from 'axios';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import DropDownButton from 'devextreme-react/drop-down-button';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import {onexportList  } from '../../../redux/actions/paymentList';
import { onPaymentList } from '../../../redux/actions/paymentList';
import Button from 'devextreme-react/button';
import {getImportFileTypeData,getimportSearchData,getImportFileNames,onSubmitImportHandler} from '../../menupages/APICalls.js'

let FileImportData=[];
const FileImport = () => {
  const [searchType, setSearchTypes] = useState();
  const [setFileType, setFileTypes] = useState();
  const [ex_setFileType, ex_setFileTypes] = useState();
  const [selectfileType, setselectfileType] = useState("")
  const [fileName, setFileName] = useState();

 const selectChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setSearchTypes(event);
    FileImportData=getimportSearchData(event);
    console.log(FileImportData);
    let data =getImportFileTypeData(event)
     console.log(data);
     // setFileTypes(event.response);
  }

  const getFileNames = async (event) => {
    const data= getImportFileNames(event);
    console.log(data);
    setselectfileType(data);
  };


   useEffect(() => {
      getFileTypeDataVal()
     // getSearchData()
     }, []);

async function getSearchData() {
  var data=await  getExportSearchData(selectfileType,1);
  var a=data.response;
    console.log('getSearchData '+a);
    setSearchTypes(a);
}

async function getFileTypeDataVal() {
  var data=await  getImportFileTypeData();
  var a=data.response;
    console.log('Statement 2'+a);
    setFileTypes(a);
     console.log('Statement 12'+setFileType);
}

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("dd")
    const form = event.target;
    event.preventDefault();
    const formData = new FormData();
    formData.append('brandId', 1);
    formData.append('fileTypeId', searchType);
    const json = Object.fromEntries(formData);
    onSubmitImportHandler(json);
  }

  return (
    <div >
      <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div>
      <Tabs
              defaultActiveKey="fileImport"
              id="uncontrolled-tab-example"
              className="mb-3">

        <Tab eventKey="fileImport" title="File Import">
          <div>
          <form onSubmit={onSubmitHandler}>
              <div className="mb-3 row">
                <label for="inputFileType" className="col-lg-1 col-form-label">File Type</label>
              <div className="col-sm-5 Dropdown">
                  <select className="form-select select-style" Name="selectfileType" aria-label="Default select example"
                    onChange={(e) => selectChangeHandler(setFileType, e.target.value)}>
                    <option value=""></option>
                    {setFileType &&
                      setFileType.map((user) => (
                        <option value={user.fileTypeId}>{user.fileTypeDesc}</option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="mb-3 row">
                <label for="inputBrand" className="col-lg-1 col-form-label">Brand Name</label>
                <div className="col-sm-5">
                  <input type="text" readOnly Name="brand" className="brandname" id="inputBrand" value="PNG" />
                </div>
              </div>
              <div>
                <button  type="submit" className="btn  mb-3 btn-Gray " >Export</button>
                <button type="reset" className="btn  mb-3 btn-darkGray  ">Clear</button>
              </div>
            </form>
          </div>

          <div className=''>
            Import File Status
          </div>
          <DataGrid
            className='card-body'
            dataSource={selectfileType}
            keyExpr={'fileName'}
            allowColumnReordering={true}>

            <Column dataField={'fileName'} caption={'File Name'} />
            <Column dataField={'type'} caption={'Type'} />
            <Column dataField={'fileTypeId'} caption={'Records Exported'} />
            <Column dataField={'exportedBy'} caption={'Records in Error'} />
            <Column dataField={'debitamount'} caption={'Debit Amount'} />
            <Column dataField={'creditamount'} caption={'Credit Amount'} />
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
        </Tab>
      </Tabs>
    </div>
  );
};

export default FileImport;
