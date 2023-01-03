import React, { useEffect, useState } from "react";
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import '../../index.style.scss'
import AppPageMetadata from '@crema/core/AppPageMetadata';
import Button from 'devextreme-react/button';
import axios from 'axios';
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import DropDownButton from 'devextreme-react/drop-down-button';
import { Dropdown, DropdownButton } from 'react-bootstrap';
// import { Search } from 'react-bootstrap-icons';
// import { onPaymentList } from '../../../redux/actions/paymentList';
// import { onGetContactList } from '../../../redux/actions/ContactApp';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import {getBatchDetailsByBatchId,getImportFileTypeData,getImportFileNames,onSubmitImportHandler} from '../../APICalls.js'

const Table2 = () => {

  const [batchId, setbatchId] = useState();
  const [batchSubData, setbatchSubData] = useState([]);


  const handleEvent: GridEventListener<'rowClick'> = (
    params,
    event,
    details, // GridCallbackDetails
  ) => {
    console.log(params);
    if (params.data.cmImportFile != undefined) {
      console.log(params.data.cmImportFile.importFileId);
      setimportFileId(params.data.cmImportFile.importFileId);
    }
    setbatchId(params.data.batchId);
    getBatchDetailsByBatchId(params.data.batchId);
  };

  return (
    <>
   </>
  );
  
};

export default Table2;
