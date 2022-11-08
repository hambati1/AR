import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import '../index.style.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import Button from 'devextreme-react/button';
// import Button from 'react-bootstrap/Button';
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
// import 'devextreme/dist/css/dx.generic.ATD-DataGrid-md - Copy1.css';
import DropDownButton from 'devextreme-react/drop-down-button';
import style from '../Error401/index.style.scss';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

// import { Paper } from '@material-ui/core';



const actions = [
  { id: 1, text: "Name" },
  { id: 2, text: "FINS Number" },
  { id: 3, text: "File Number(A#)" },
  { id: 4, text: "State Number" },
  { id: 5, text: "FBI Number" },
  { id: 6, text: "Passport Number" },
  { id: 7, text: "Date of Birth" },
  { id: 8, text: "Country of Birth" },

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
    amountimported: '',
    
  },
  {
    filename: 'out.remit_pngc_10212022.txt',
    type: '1-Pay File',
    recordsimported: '3',
    recordsinerror: '0',
    amountimported: '',
    
  },
  {
    filename: 'pngpay.remit.20221018011236',
    type: 'Check File',
    recordsimported: '23',
    recordsinerror: '2',
    amountimported: '$488.47',
    
  },
  
];


const NonCitizen = () => {

  return (
    // <Paper>
    //   <Box>
    <div >
      <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div>
      <DataGrid
        className='card-body'
        dataSource={NonCitizenDetails}
        keyExpr={'filename'}
        allowColumnReordering={true}>
        
        <Column dataField={'filename'} caption={'File Name'} />
        <Column dataField={'type'} caption={'Type'} />
        <Column dataField={'recordsimported'} caption={'Records Imported'} />
        <Column dataField={'recordsinerror'} caption={'Records in Error'}/>
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
    </div>

    //    </Box>
    // </Paper>

  );
};

export default NonCitizen;
