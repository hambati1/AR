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

export const NonCitizenDetails = [
  {
    fileName: 'PNG-POWERNET 10212022.txt',
    type: 'Lockbox',
    recordsimported: '242',
    recordsinerror: '0',
    amountimported: '$8,418.99',

  },
  {
    fileName: 'out.remit_pngc_10212022.txt',
    type: '1-Pay File',
    recordsimported: '3',
    recordsinerror: '0',
    amountimported: '$40.14',
  },
  {
    fileName: 'pngpay.remit.20221018011236',
    type: 'Check Free',
    recordsimported: '23',
    recordsinerror: '2',
    amountimported: '$488.47',
  }
];

const NonCitizen = () => {
  const [searchType, setSearchTypes] = useState();
  const [fileType, setFileTypes] = useState();
  const [selectfileType, setselectfileType] = useState("")
  const [brand, setBrand] = useState("")
  const [selectedFile, setSelectedFile] = useState();
  const [fileName, setFileName] = useState();
  const path = 'http://172.20.51.231:8761/cm/api';
  const session = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYW1iYXRpIiwic2NvcGVzIjpbIlJFRlJFU0hfVE9LRU4iXSwiaXNzIjoiUE5HIiwiaWF0IjoxNjY5NjI5MjIwLCJleHAiOjE2NzAyMjkyMjB9.m2Xxkxh49l_DNsqfTVWHnnlLNLz_CdThAS-FJQGenl6TpEjXCHWEOX98_FXVUETMSvrFNRcKartwiQToCnd8yw";
  const b0 = { "custId": 10040003, "importFileId": 10053782, "batchId": 10043555, "page": 1, "size": 3 };

  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value)
  }
  const selectChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setselectfileType(event);
    getFileNames(event);
  }

  const getSearchData = async () => {
    const response = await fetch(path + "/ar/searchworklist", {
      method: 'POST',
      headers: { "Content-Type": 'application/json', Session: session },
      body: JSON.stringify(b0)
    }
    ).then((response) => response.json());
    console.log(response.response);
    setSearchTypes(response.response);
  };

  const getFileTypeData = async () => {
    const response = await fetch(path + "/cn/filetype?functionId=6&isActive=1&isImport=1", {
      method: 'GET',
      headers: { Session: session }
    }
    ).then((response) => response.json());
    console.log(response.response);
    setFileTypes(response.response);
  };

  useEffect(() => {
    getSearchData();
    getFileTypeData();
  }, []);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.target;
    event.preventDefault();
    const url = path + '/searchexportfile';
    const formData = new FormData();
    formData.append('fileNames', '%' + fileName + '%');
    //formData.append('exportedBy', "bmccullars");
    formData.append('fileTypeId', selectfileType);
    formData.append('page', 1);
    formData.append('size', 10);
    const json = Object.fromEntries(formData);
    const config = {
      headers: {
        'content-type': 'application/json',
        Session: session
      },
    };
    axios.post(url, json, config).then((response) => {
      console.log(response.data);
    });
  }

  const onExportHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.target;
    event.preventDefault();
    const url = path + '/searchexportfile';
    const formData = new FormData();
    formData.append('fileNames', '%' + fileName + '%');
    //formData.append('exportedBy', "bmccullars");
    formData.append('fileTypeId', selectfileType);
    formData.append('page', 1);
    formData.append('size', 10);
    const json = Object.fromEntries(formData);
    const config = {
      headers: {
        'content-type': 'application/json',
        Session: session
      },
    };
    axios.post(url, json, config).then((response) => {
      console.log(response.data);
    });
  }

  const getFileNames = async (event) => {
    console.log(event);
    if (event != undefined) {
      const url = path + '/ar/import/file/list?fileTypeId=' + event + '&brandId=1';
      const response = await fetch(url, {
        method: 'GET',
        headers: { Session: session }
      }
      ).then((response) => response.json());
      console.log(response.response);
      setFileName(response.response);
    }
  };

  const employees = [{
    ID: 1,
    FirstName: 'John',
    LastName: 'Heart',
    Prefix: 'Mr.',
    Position: 'CEO',
    BirthDate: '1964/03/16',
    HireDate: '1995/01/15',
    Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
    Address: '351 S Hill St.',
    StateID: 5,
  }];

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
                <select className="form-select" Name="searchType" aria-label="Default select example">
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
                    onChange={(e) => selectChangeHandler(selectfileType, e.target.value)}>
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
                  <input type="text" readOnly Name="brand" className="form-control" id="inputBrand" value="PNG" onChange={(e) => inputChangeHandler(setBrand, e)} />
                </div>
              </div>
              <div className="row g-3">
                <div className="col-lg-1">
               <label for="FileName" className="col-sm-10 col-form-label">File Name</label>
                </div>
                <div className="col-auto">
                  <label for="" className="visually-hidden"></label>
                  <input type="" className="form-control" id="input" placeholder="" />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn mb-3 btn-darkGray ">Browse</button>
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
            <Column dataField={'type'} caption={'Type'} />
            <Column dataField={'recordsimported'} caption={'Records Imported'} />
            <Column dataField={'recordsinerror'} caption={'Records in Error'} />
            <Column dataField={'amountimported'} caption={'Amount Imported'} />
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
        {/* <Tab eventKey="export" title="File Export">
          <div className="form-group">
            <form onSubmit={onExportHandler}>
              <div className="mb-3 row">
                <label for="inputFileType" className="col-lg-1 col-form-label">File Type</label>

                <div className="col-sm-5 Dropdown">
                  <select className="form-select" Name="selectfileType" aria-label="Default select example"
                    onChange={(e) => selectChangeHandler(selectfileType, e.target.value)}>
                    <option value=""></option>
                    {fileType &&
                      fileType.map((user) => (
                        <option value={user.fileTypeId}>{user.fileTypeDesc}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputFileType" className="col-lg-1 col-form-label">Brand Name</label>
                <div className="col-sm-5 Dropdown">
                  <select className="form-select" Name="selectfileType" aria-label="Default select example"
                    onChange={(e) => selectChangeHandler(selectfileType, e.target.value)}>
                    <option value=""></option>
                    {fileType &&
                      fileType.map((user) => (
                        <option value={user.fileTypeId}>{user.fileTypeDesc}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div>
                <button type="submit" className="btn  mb-3 btn-Gray ">Export</button>
                <button type="reset" className="btn  mb-3 btn-darkGray ">Clear</button>
              </div>
            </form>
          </div>
        </Tab> */}

        {/* <Tab eventKey="batchPayment" title="Batch Payment">
          <div className="form-group">
            <div className="mb-5 row">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">Active Only</label>
            </div>

            <div id="data-grid-demo">
              <DataGrid
                dataSource={employees}
                keyExpr="ID"
                showBorders={true}>
                <Paging enabled={false} />
                <Editing mode="form" allowAdding={true} />
                <Column dataField="batchName" caption="Batch ID" width={70} />
                <Column dataField="type" caption="Type" width={70} />
                <Column dataField="Name" caption="Name" width={70} />
                <Column dataField="createdBy" caption="Created By" width={70} />
                <Column dataField="status" caption="Status" width={70} />
                <Column dataField="totalRecords" caption="Total Records" width={70} />
                <Column dataField="totalAmount" caption="Total Amount" width={70} />
                <Column dataField="totalAgencyFee" caption="Total Agency Fees" width={70} />
              </DataGrid>
            </div>

          </div>
        </Tab> */}
      </Tabs>
    </div>
  );
  
};

export default NonCitizen;
