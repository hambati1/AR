import React, { useEffect, useState } from "react";
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import '../index.style.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import Button from 'devextreme-react/button';
import axios from 'axios';
import '../../errorPages/Error401/index.style.scss'
import DataGrid, {
  Column,
  Pager,
  Paging,
  SearchPanel,
  Sorting,
  ColumnChooser,
  FilterRow,
  Toolbar
} from 'devextreme-react/data-grid';
import DropDownButton from 'devextreme-react/drop-down-button';
import style from '../Error401/index.style.scss';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import {onPaymentList} from '../../../redux/actions/paymentList';
import {onGetContactList} from '../../../redux/actions/ContactApp';
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
    filename: 'PNG-POWERNET 10212022.txt',
    type: 'Lockbox',
    recordsimported: '242',
    recordsinerror: '0',
    amountimported: '$8,418.99',

  },
  {
    filename: 'out.remit_pngc_10212022.txt',
    type: '1-Pay File',
    recordsimported: '3',
    recordsinerror: '0',
    amountimported: '$40.14',
  },
  {
    filename: 'pngpay.remit.20221018011236',
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
    const [file, setFile] = useState();
     const path='http://172.20.51.231:8761/cm/api';
    const session="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYW1iYXRpIiwic2NvcGVzIjpbIlJFRlJFU0hfVE9LRU4iXSwiaXNzIjoiUE5HIiwiaWF0IjoxNjY4MDgwOTQ5LCJleHAiOjE2Njg2ODA5NDl9.pGLmio8UUaAIg0gDZ0ufMYg2STgxs0SYiA-DBWi4OUYlSYOhToRWxAu2jt1JiKmD4wxuqLGfARky4mSdX-qYpA";
    const b0={"custId": 10040003,"importFileId": 10053782,"batchId": 10043555,"page": 1,"size": 3};

 const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value)
    }
     const selectChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event);
            setselectfileType(event);
        }

const handleChange = (event) => {
    setFileTypes(event.target.value)
  }

const changeHandler=(event)=>{
		setFile(event.target.files[0]);
	};

    const getSearchData = async () => {
    const response = await fetch(path+"/ar/searchworklist",{ method: 'POST',
       headers: {"Content-Type":'application/json',Session: session},
       body:JSON.stringify(b0)}
    ).then((response) => response.json());
console.log(response.response);
    setSearchTypes(response.response);
  };

const getFileTypeData = async () => {
    const response = await fetch(path+"/cn/filetype?functionId=6&isActive=1&isImport=1",{ method: 'GET',
       headers: {Session: session}}
    ).then((response) => response.json());
console.log(response.response);
    setFileTypes(response.response);
  };

  useEffect(() => {
    getSearchData();
    getFileTypeData();
  }, []);

   const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
         const form=event.target;
         event.preventDefault();
     const url = path+'/import/file';
    const formData = new FormData();
    formData.append('fileNames', file);
     formData.append('brandId', 1);
      formData.append('fileTypeId', selectfileType);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        Session: session
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

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
         <div class="form-group">
           <div class="mb-3 row">
                        <label for="inputFileType" class="col-lg-1 col-form-label">Search Type :</label>
 <div class="col-sm-5 Dropdown">
                         <select class="form-select" name="searchType" aria-label="Default select example">
                              {searchType &&
                                searchType.map((user) => (
                                 <option value="{user.fileTypeId}">{user.fileTypeDesc}</option>
                                ))}
                         </select>
                         </div>

                         <div className="padding">
                                         <button type="submit" class="btn  mb-3 btn-Gray ">Submit</button>
                                         <button type="reset" value="Reset" class="btn  mb-3 btn-darkGray ">Reset</button>
                         </div>
           </div>
           </div>
        </Tab>

        <Tab eventKey="profile" title="File Import">
         <div class="form-group">
            <form onSubmit={onSubmitHandler}>
              <div class="mb-3 row">
                <label for="inputFileType" class="col-lg-1 col-form-label">File Type</label>

                <div class="col-sm-5 Dropdown">
                   <select class="form-select" name="selectfileType" aria-label="Default select example" onChange={(e)=>selectChangeHandler(selectfileType,e.target.value)}>
                                               {fileType &&
                                                 fileType.map((user) => (
                                                  <option value={user.fileTypeId}>{user.fileTypeDesc}</option>
                                                 ))}
                                          </select>
                </div>
              </div>


              <div class="mb-3 row">
                <label for="inputBrand" class="col-lg-1 col-form-label">Brand</label>
                {/* <input type="" class="form-control" id="input" placeholder="PNG" /> */}
                <div class="col-sm-5">
                  <input type="Brand" name="brand" class="form-control" id="inputBrand"  onChange={(e)=>inputChangeHandler(setBrand, e)} />
                </div>
              </div>

              <div class="row g-3">
                <div class="col-lg-1">
                  <label for="Filename" class="col-sm-10 col-form-label">File Name</label>
                </div>
                <div class="col-auto">
                  <label for="" class="visually-hidden"></label>
                  <input type="text" name="file" class="form-control" id="input" onChange={(e)=>inputChangeHandler(setFile, e)}  />
                </div>

              </div>
              <div>
                <button type="submit" class="btn  mb-3 btn-Gray ">Import</button>
                <button type="reset"  class="btn  mb-3 btn-darkGray ">Clear</button>
              </div>
            </form>
          </div>

          <div className=''>
            Import File Status
          </div>
          <DataGrid
            className='card-body'
            dataSource={NonCitizenDetails}
            keyExpr={'filename'}
            allowColumnReordering={true}>

            <Column dataField={'filename'} caption={'File Name'} />
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
      </Tabs>
    </div>
  );
};

export default NonCitizen;
