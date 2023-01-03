import React, { useEffect, useState,Suspense } from "react";
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import '../index.style.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import Button from 'devextreme-react/button';
import axios from 'axios';
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import DropDownButton from 'devextreme-react/drop-down-button';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { onPaymentList } from '../../../redux/actions/paymentList';
import { onGetContactList } from '../../../redux/actions/ContactApp';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {getFileTypeData,getimportSearchData,getImportFileTypeData,getImportFileNames,onSubmitImportHandler} from '../../menupages/APICalls.js'
  import 'react-dyn-tabs/style/react-dyn-tabs.min.css';
  import 'react-dyn-tabs/themes/react-dyn-tabs-basic.min.css';
  import useDynTabs from 'react-dyn-tabs';
import FileExportData from '../FileExport/index.js';
import BatchPaymentsData from '../BatchPayments/index.js';
import GLAccountData  from '../GLAccount/index.js';
import TaxViewerData from '../TaxViewer/index.js';

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
let FileImportData=[];

const FileImport = () => {
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
    FileImportData=getimportSearchData(event);
    console.log(FileImportData);
    let data =getImportFileTypeData(event)
     console.log(data);
      setselectfileType(event);
  }

  useEffect(() => {
  getFileTypeDataVal();
  }, []);

  const options = {
      tabs: [
        {id: '1', title: 'File Import', panelComponent: Panel1, iconClass: 'fa fa-home', closable: false}
      ],
      selectedTabID: '1',
      onLoad: function () {
        console.log('[onLoad]');
      },
      onInit: function () {
        //don't use setState inside the onInit callback because it leads to an infinite loop.
        console.log('[onInit]');
      },
      onChange: function () {
        console.log('[onChange]');
      },
      onOpen: function () {
        console.log('[onOpen]');
      },
      beforeSelect: function () {
        console.log('[beforeSelect]');
        return true;
      },
      onFirstSelect: function () {
        console.log('[onFirstSelect]');
      },
      onSelect: function () {
        console.log('[onSelect]');
      },
      beforeClose: function () {
        console.log('[beforeClose]');
        return true;
      },
      onClose: function () {
        console.log('[onClose]');
      },
      onDestroy: function () {
        console.log('[onDestroy]');
      },
    };

    function Panel1() {
          return <p>
                              <div className="form-group">
                                <form onSubmit={onSubmitHandler}>
                                  <div className="mb-3 row">
                                    <label for="inputFileType" className="col-lg-1 col-form-label ">File Type</label>

                                    <div className="col-sm-5 Dropdown">
                                      <select className="form-select select-style" Name="selectfileType" aria-label="Default select example"
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
                                    <div className="col-sm-4">
                                      <input type="text" readOnly Name="brand" className="filename" id="inputBrand" value="PNG"  />
                                    </div>
                                  </div>
                                  <div className="mb-3 row">
                                    <div className="col-lg-1">
                                   <label for="fileName" className="col-lg-1 col-form-label">FileName</label>
                                    </div>
                                    <div className="col-sm-4">
                                      {/* <label for="" className="visually-hidden"></label> */}
                                      <input type="text" Name="fileName" value={fileName}  className="filename"  />
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
                                dataSource={FileImportData}
                                keyExpr={'fileName'}
                                allowColumnReordering={true}>
                                <Column dataField={'fileName'} caption={'File Name'} />
                                <Column dataField={'cnFileType.fileTypeDesc'} caption={'Type'} />
                                <Column dataField={'recsImported'} caption={'Records Imported'} />
                                <Column dataField={'recsInError'} caption={'Records in Error'} />
                                <Column dataField={'amtImported'} caption={'Amount Imported'} />
                                <Column dataField={'amtrejected'} caption={'Amount Rejected'} visible={false}/>

                                <FilterRow visible={true} />
                                <ColumnChooser enabled={true} mode='select' />
                                <SearchPanel
                                  className='float-start'
                                  visible={true}
                                  width={240}
                                  placeholder="Search..."
                                />
                                <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} showNavigationButtons={true} />
                                <Paging defaultPageSize={10} />
                              </DataGrid>
                            {}

                            {}
                          </p>;
     }

  const [Tablist, Panellist, ready] = useDynTabs(options);
    let _instance, isVertical;
    ready((instance) => {
      _instance = instance;
      isVertical = _instance.getOption('isVertical');
    });

async function getFileTypeDataVal() {
  var data=await  getImportFileTypeData(6);
    console.log('Statement 2'+data);
    setFileTypes(data.response);
}


    const actions = {
      fileExport: () => {
        _instance
          .open({
            title: 'File Export',
            lazy: true,
            panelComponent: function PanelComponent() {
              return <p><FileExportData /> </p>;
            },
          })
          .then(() => {
            console.log('(new tab is open)');
          });
      },
      batch: () => {
              _instance
                .open({
                  title: 'Batch Payments',
                  lazy: true,
                  panelComponent: function PanelComponent() {
                    return <p><BatchPaymentsData /> </p>;
                  },
                })
                .then(() => {
                  console.log('(new tab is open)');
                });
            },
            gl: () => {
                    _instance
                      .open({
                        title: 'GL Account',
                        lazy: true,
                        panelComponent: function PanelComponent() {
                          return <p><GLAccountData /> </p>;
                        },
                      })
                      .then(() => {
                        console.log('(new tab is open)');
                      });
                  },
                  tax: () => {
                          _instance
                            .open({
                              title: 'Tax Viewer',
                              lazy: true,
                              panelComponent: function PanelComponent() {
                                return <p><TaxViewerData /> </p>;
                              },
                            })
                            .then(() => {
                              console.log('(new tab is open)');
                            });
                        }
      }
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.target;
    event.preventDefault();
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
       <Tablist>

       </Tablist>
       <Panellist></Panellist>

                   <div>
                      <button onClick={actions.fileExport}>FileExport</button>
                      <button onClick={actions.batch}>Batch</button>
                      <button onClick={actions.gl}>GL</button>
                      <button onClick={actions.tax}>Tax</button>
                    </div>


    </div>




  );
  
};

export default FileImport;
