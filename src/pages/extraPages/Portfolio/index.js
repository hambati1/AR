import React, { useState ,useEffect } from 'react';
// import Gallery from 'react-photo-gallery';
// import photos from '@crema/services/db/gallery/photos';
// import IntlMessages from '@crema/utility/IntlMessages';
import styles from './index.module.scss';
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import axios from 'axios';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import DropDownButton from 'devextreme-react/drop-down-button';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import {onexportList  } from '../../../redux/actions/paymentList';
import { onPaymentList } from '../../../redux/actions/paymentList';



// import clsx from 'clsx';

import Button from 'devextreme-react/button';
const actions = [
  { id: 1, text: "File Name" },
  { id: 2, text: "Type" },
  { id: 3, text: "Records Imported" },
  { id: 4, text: "Records in Error" },
  { id: 5, text: "Amount Imported" },

];


const actions1 = [
  { id: 1, text: "File Name" },
  { id: 2, text: "Type" },
  { id: 3, text: "RecordsExported" },
  { id: 4, text: "Records in Error" },
  { id: 5, text: "DebitAmount" },
  { id: 6, text: "CreditAmount" },
];
const dropDownOptions = {
  height: 150,
  width: 130
};


export const portfolio = [
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


export const portfolio1 = [
  {
    fileName: '',
    type: '',
    recordsexported: '',
    recordsinerror: '',
    debitamount: '',
    creditamount: '',

  },

];

const Portfolio = () => {
  const [searchType, setSearchTypes] = useState();
  const [setFileType, setFileTypes] = useState();
  const [ex_setFileType, ex_setFileTypes] = useState();
  const [selectfileType, setselectfileType] = useState("")
  const [fileName, setFileName] = useState();

  // const path = 'http://172.20.51.231:8761/cm/api';
  // const session = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYW1iYXRpIiwic2NvcGVzIjpbIlJFRlJFU0hfVE9LRU4iXSwiaXNzIjoiUE5HIiwiaWF0IjoxNjcwMzE4MjgxLCJleHAiOjE2NzA5MTgyODF9.Vc3DJOmtMHMXiKA3JfhiEaLIOHj0-D89aE3bgGEPHZJOpcckbmWPlfQF-tOsH9uEgVg2-uQYQPFILh1ZPZG7Mw";
  const b0 = { "fileTypeId": 59,"brandId": 1,"fileName": "PrepaidCallRecs_Nov2022.txt","fromDate": "2022-01-01","toDate": "2022-10-31"};
  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value)
  }
  const selectChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setselectfileType(event);
    getFileNames(event);
  }
  const getSearchData = async () => {
    const response = await fetch(path + "/export/file", {
      method: 'POST',
      headers: { "Content-Type": 'application/json', Session: session },
      body: JSON.stringify(b0)
    }
    ).then((response) => response.json());
    console.log(response.response);
    setSearchTypes(response.response);
  };



const getFileTypeData = async () => {
  const response = await fetch(path + "/cn/filetype?functionId=6&isActive=1&isImport=0", {
    method: 'GET',
    headers: { Session: session }
  }
  ).then((response) => response.json());
 
  setFileTypes(response.response);

};

// const portfolios1 = async () => {
//   const response = await fetch(path + "/ar/import/file/list", {
//     method: 'GET',
//     headers: { Session: session }
//   }
//   ).then((response) => response.json());
 
//   setFileTypes(response.response);

// };




  useEffect(() => {
    getFileTypeData()
  getSearchData()
 
  }, []);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("dd")
    const form = event.target;
    event.preventDefault();
    const url = path + '/export/file';
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
    const url = path + '/export/file';
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
      const url = path + '/export/file/list?fileTypeId=' + event + '&brandId=1';
      const response = await fetch(url, {
        method: 'GET',
        headers: { Session: session }
      }
      ).then((response) => response.json());
      console.log(response.response);
      setFileName(response.response);
    }
  };





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
          <div className="mb-3 row">
            <label for="searchtype" className="col-lg-1 col-form-label">SearchType:</label>
            <div className="col-sm-5 Dropdown">
                <select className="form-select" Name="searchType" aria-label="Default select example">
                  <option value=""></option>
                  {searchType &&
                    searchType.map((user) => (
                      <option value="{user.fileTypeId}">{user.fileTypeDesc}</option>
                    ))}
                </select>
              </div>
</div>

{/* 
            <div className="col-sm-5 Dropdown">
              <input type="searchtype" class='form-control Dropdown' id="searchtype" />
            </div>
          </div> */}
          <div className="padding">
            <button type="submit" className="btn mb-3 btn-Gray">submit</button>
            <button type="reset" className="btn mb-3 btn-darkGray">Reset</button>
          </div>

        </Tab>
        <Tab eventKey="profile" title="File Import">

          <div>

            <form>
              <div className="mb-3 row">
                <label for="inputFileType" class="col-lg-1 col-form-label">File Type</label>

                <div className="col-sm-5 Dropdown">
                  <input type="filetype" class='form-control Dropdown' id="inputFiletype" />
                </div>
              </div>


              <div className="mb-3 row">
                <label for="inputBrand" className="col-lg-1 col-form-label">Brand </label>
                <div className="col-sm-5">
                  <input type="text" readOnly Name="brand" className="form-control" id="inputBrand" value="PNG" onChange={(e) => inputChangeHandler(setBrand, e)} />
                </div>
              </div>
              {/* <div className="mb-3 row">
                <div className="col-lg-1">
                  <label for="FileName" className="col-lg-1 col-form-label">FileName</label>
                </div>
                <div className="col-auto">
                  <label for="" className="visually-hidden"></label>
                  <input type="" className="form-control" id="input" placeholder="" />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn mb-3 btn-darkGray ">Browse</button>
                </div>
              </div> */}
              <div className="mb-3 row">
                <div className="col-lg-1">
               <label for="FileName" className="col-lg-1 col-form-label">FileName</label>
                </div>
                <div className="col-sm-5">
                  <label for="" className="visually-hidden"></label>
                  <input type="" className="form-control" id="input" placeholder="" />
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
            dataSource={portfolio}
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


        <Tab eventKey="export" title="File Export">


          <div>

          <form onSubmit={onSubmitHandler}>
              <div className="mb-3 row">
                <label for="inputFileType" className="col-lg-1 col-form-label">File Type</label>



              <div className="col-sm-5 Dropdown">
                  <select className="form-select" Name="selectfileType" aria-label="Default select example"
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
                  <input type="text" readOnly Name="brand" className="form-control" id="inputBrand" value="" onChange={(e) => inputChangeHandler(setBrand, e)} />
                </div>
              </div>
              <div>
                <button  type="submit" className="btn  mb-3 btn-Gray " >Export</button>
                <button type="reset" className="btn  mb-3 btn-darkGray ">Clear</button>
              </div>
            </form>
          </div>

          <div className=''>
            Export File Status
          </div>
          <DataGrid
            className='card-body'
            dataSource={portfolio1}
            keyExpr={'fileName'}
            allowColumnReordering={true}>

            <Column dataField={'fileName'} caption={'File Name'} />
            <Column dataField={'type'} caption={'Type'} />
            <Column dataField={'recordsexported'} caption={'Records Exported'} />
            <Column dataField={'recordsinerror'} caption={'Records in Error'} />
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

export default Portfolio;
