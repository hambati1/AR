import React, { useEffect, useState, Suspense } from "react";
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import '../index.style.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import Button from 'devextreme-react/button';
import axios from 'axios';
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
// import DropDownButton from 'devextreme-react/drop-down-button';
// import { Dropdown, DropdownButton } from 'react-bootstrap';
// import { Search } from 'react-bootstrap-icons';
// import { onPaymentList } from '../../../redux/actions/paymentList';
// import { onGetContactList } from '../../../redux/actions/ContactApp';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import { getFileTypeData, getimportSearchData, getImportFileTypeData, getImportFileNames, onSubmitImportHandler } from '../../menupages/APICalls.js'
import 'react-dyn-tabs/style/react-dyn-tabs.min.css';
import 'react-dyn-tabs/themes/react-dyn-tabs-basic.min.css';
import useDynTabs from 'react-dyn-tabs';
import SearchData from '../Search/index.js';
import FileExportData from '../FileExport/index.js';
import BatchPaymentsData from '../BatchPayments/index.js';
import GLAccountData from '../GLAccount/index.js';
import TaxViewerData from '../TaxViewer/index.js';
import CreditCardData from "../CreditCard/index.js";
import { BsBarChartLine, BsFonts, BsGear, BsGrid3X3Gap, BsStar } from "react-icons/bs";
import { IoFlameOutline } from "react-icons/io5";

let FileImportData = [];
let _instance, isVertical;
let tab = 1;

const actions = {
  search: () => {
    _instance
      .open({
        title: 'Search',
        id: '0',
        lazy: true,
        tooltip: 'Search',
        disable: false,
        closable: true,
        panelComponent: function PanelComponent() {
          return <p><SearchData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('0')) {
          _instance.select('0').then(() => {
            console.log('(tab 0 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },
  fileImport: () => {
    _instance
      .open({
        title: 'File Import',
        id: '1',
        lazy: true,
        tooltip: 'File Import',
        disable: false,
        closable: true,
        panelComponent: function PanelComponent() {
          return <p><FileImportData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('1')) {
          _instance.select('1').then(() => {
            console.log('(tab 1 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },
  fileExport: () => {
    _instance
      .open({
        title: 'File Export',
        id: '2',
        lazy: true,
        tooltip: 'File Export',
        disable: false,
        closable: true,
        panelComponent: function PanelComponent() {
          return <p><FileExportData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('2')) {
          _instance.select('2').then(() => {
            console.log('(tab 2 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },
  batch: () => {
    _instance
      .open({
        title: 'Batch Payments',
        id: '3',
        lazy: true,
        panelComponent: function PanelComponent() {
          return <p><BatchPaymentsData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('3')) {
          _instance.select('3').then(() => {
            console.log('(tab 3 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },
  gl: () => {
    _instance
      .open({
        title: 'GL Account',
        id: '4',
        lazy: true,
        panelComponent: function PanelComponent() {
          return <p><GLAccountData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('4')) {
          _instance.select('4').then(() => {
            console.log('(tab 4 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },
  tax: () => {
    _instance
      .open({
        title: 'Tax Viewer',
        id: '5',
        lazy: true,
        panelComponent: function PanelComponent() {
          return <p><TaxViewerData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('5')) {
          _instance.select('5').then(() => {
            console.log('(tab 3 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },
  creditcard: () => {
    _instance
      .open({
        title: 'Credit Card Transactions',
        id: '6',
        lazy: true,
        panelComponent: function PanelComponent() {
          return <p><CreditCardData /> </p>;
        },
      })
      .then(() => {
        if (_instance.isOpen('6')) {
          _instance.select('6').then(() => {
            console.log('(tab 6 is selected)');
          });
        }
        console.log('(new tab is open)');
      });
  },


}

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
    FileImportData = getimportSearchData(event);
    console.log(FileImportData);
    let data = getImportFileTypeData(event)
    console.log(data);
    setselectfileType(event);
  }

  useEffect(() => {
    getFileTypeDataVal();
  }, []);

  const options = {
    tabs: [
      { id: '0', title: 'Search', panelComponent: Panel0, iconClass: 'fa fa-home', closable: false },
      { id: '1', title: 'File Import', panelComponent: Panel1, iconClass: 'fa fa-home', closable: false }
    ],
    selectedTabID: tab,
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


  function Panel0() {
    return <p><SearchData /> </p>;

  }
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
              <input type="text" readOnly Name="brand" className="filename" id="inputBrand" value="PNG" />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-lg-1">
              <label for="fileName" className="col-lg-1 col-form-label">FileName</label>
            </div>
            <div className="col-sm-4">
              <input type="text" Name="fileName" value={fileName} className="filename" />
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
        <Column dataField={'amtrejected'} caption={'Amount Rejected'} visible={false} />

        <FilterRow visible={true} />
        <ColumnChooser enabled={true} mode='select' />
        <SearchPanel
          className='float-start'
          visible={true}
          width={240}
          placeholder="Search..."
        />
        {/* <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} showNavigationButtons={true} /> */}
        <Paging defaultPageSize={5} />
      </DataGrid>
      { }

      { }
    </p>;
  }

  const [Tablist, Panellist, ready] = useDynTabs(options);
  ready((instance) => {
    _instance = instance;
    console.log(instance);
    isVertical = _instance.getOption('isVertical');
    console.log("s");
  });


  async function getFileTypeDataVal() {
    var data = await getImportFileTypeData(6);
    console.log('Statement 2' + data);
    setFileTypes(data.response);
  }
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.target;
    event.preventDefault();
    let json = { "fileNames": fileName, "brandId": 1, "fileTypeId": parseInt(selectfileType), "page": 1, "size": 10 };
    console.log(json);
    let ab = JSON.stringify(json);
    onSubmitImportHandler(ab);
  }
  return (

    <div>
      <h1 className="head">Accounts Receivable</h1>
      <Tablist ></Tablist>
      <Panellist></Panellist>
    </div>

  );
};
export const HandleButtons = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className="col-6">
      <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        
        <div className="sidebar-position">
          <BsGear onClick={actions.fileImport} icon={BsGear} />
          <span onClick={actions.fileImport}>File Import</span>
        </div>

        <div className="sidebar-position">
          <BsBarChartLine onClick={actions.fileExport} icon={BsBarChartLine} />
          <span onClick={actions.fileExport}>File Export</span>
        </div>

        <div className="sidebar-position">
          <BsGrid3X3Gap onClick={actions.batch} icon={BsGrid3X3Gap} />
          <span onClick={actions.batch}>Batch Payment</span>
        </div>

        <div className="sidebar-position">
          <IoFlameOutline onClick={actions.gl} icon={IoFlameOutline} />
          <span onClick={actions.gl}>GL Account</span>
        </div>

        <div className="sidebar-position">
          <BsFonts onClick={actions.tax} icon={BsFonts} />
          <span onClick={actions.tax}>Tax Viewer</span>
        </div>

        <div className="sidebar-position">
          <BsStar onClick={actions.creditcard} icon={BsStar} />
          <span onClick={actions.creditcard}>Credit Card</span>
        </div>


      </div>
    </div>
  );

};

export default FileImport;
