import React, { useEffect, useState } from "react";
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import '../index.style.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import Button from 'devextreme-react/button';
import axios from 'axios';
import '../../errorPages/Error401/index.style.scss'
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import DropDownButton from 'devextreme-react/drop-down-button';
import style from '../Error401/index.style.scss';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { onPaymentList } from '../../../redux/actions/paymentList';
import { onGetContactList } from '../../../redux/actions/ContactApp';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {getFileTypeData,getimportSearchData,getImportFileTypeData,getImportFileNames,onSubmitImportHandler} from '../../errorPages/APICalls.js'

const actions = [
  { id: 1, text: "File Name" },
  { id: 2, text: "Type" },
  { id: 3, text: "Records Imported" },
  { id: 4, text: "Records in Error" },
  { id: 5, text: "Amount Imported" },

];
const dropDownOptions = {
  height: 150,
  width: 130
};
let NonCitizenDetails=[];

const NonCitizen = () => {
  const [searchType, setSearchTypes] = useState();
  const [fileType, setFileTypes] = useState();
  const [selectfileType, setselectfileType] = useState("")
  const [brand, setBrand] = useState("")
  const [selectedFile, setSelectedFile] = useState();
  const [fileName, setFileName] = useState();
  
  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value)
  }
  const selectChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setselectfileType(event);
    NonCitizenDetails=getimportSearchData(event);
        
  }

  useEffect(() => {
  getFileTypeDataVal();
 

  }, []);

async function getFileTypeDataVal() {
  var data=await  getImportFileTypeData(6);
    console.log('Statement 2'+data);
    setFileTypes(data.response);
}


  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.target;
    event.preventDefault();
    const formData = new FormData();
    const r=fileName;
    let a=JSON.stringify(r);
    console.log(a);
    let json={"fileNames":fileName,"brandId":1,"fileTypeId":parseInt(selectfileType),"page":1,"size":10};
    console.log(json);
     let ab=JSON.stringify(json);
     onSubmitImportHandler(ab);
  }

  return (
    <div >
      <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="home" title="Search">
          <div className="form-group">
            <div className="mb-3 row">
              <label for="inputFileType" className="col-lg-1 col-form-label">Search Type :</label>
              <div className="col-sm-5 Dropdown">
                <select className="form-select" Name="searchType" aria-label="Default select example" >
                  <option value=""></option>
                  {searchType &&
                    searchType.map((user) => (
                      <option value="{user.fileTypeId}">{user.fileTypeDesc}</option>
                    ))}
                </select>
              </div>
              <div className="padding">
                <button type="submit" className="btn  mb-3 btn-Gray ">Submit</button>
                <button type="reset" value="Reset" className="btn  mb-3 btn-darkGray ">Reset</button>
              </div>
              </div>
            </div>
      
        </Tab>

        <Tab eventKey="profile" title="File Import">
          <div className="form-group">
            <form onSubmit={onSubmitHandler}>
              <div className="mb-3 row">
                <label for="inputFileType" className="col-lg-1 col-form-label">File Type</label>

                <div className="col-sm-5 Dropdown">
                  <select className="form-select" Name="selectfileType" aria-label="Default select example"
                    onChange={(e) => selectChangeHandler(selectfileType, e.target.value)} >
                    <option value=""></option>
                    {fileType &&
                      fileType.map((user) => (
                        <option value={user.fileTypeId}>{user.fileTypeDesc}</option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="mb-3 row">
                <label for="inputBrand" className="col-lg-1 col-form-label">Brand</label>
                <div className="col-sm-5">
                  <input type="text" readOnly Name="brand" className="form-control" id="inputBrand" value="PNG"  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col-lg-1">
               <label for="fileName" className="col-lg-1 col-form-label">FileName</label>
                </div>
                <div className="col-sm-5">
                  <label for="" className="visually-hidden"></label>
                  <input type="text" readOnly Name="fileName" value={fileName}  className="form-control" id="inputFileName"  />
                </div>
              </div>

              <div>
                <button type="submit" className="btn  mb-3 btn-Gray ">Import</button>
                <button type="reset" className="btn  mb-3 btn-darkGray ">Clear</button>
              </div>
            </form>
          </div>

          <div className=''>
            Import File Status
          </div>
          <DataGrid
            className='card-body'
            dataSource={NonCitizenDetails}
            keyExpr={'fileName'}
            allowColumnReordering={true}>
            <Column dataField={'fileName'} caption={'File Name'} />
            <Column dataField={'cnFileType.fileTypeDesc'} caption={'Type'} />
            <Column dataField={'recsImported'} caption={'Records Imported'} />
            <Column dataField={'recsInError'} caption={'Records in Error'} />
            <Column dataField={'amtImported'} caption={'Amount Imported'} />

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
        {}

        {}
      </Tabs>
    </div>
  );
  
};

export default NonCitizen;
