import React, { useEffect, useState, useRef } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../menupages/index.style.scss';
import DataGrid, {
  Column, Pager, Paging, SearchPanel, Sorting, ColumnChooser, FilterRow, Toolbar, Editing
} from 'devextreme-react/data-grid';
import { getTranscationTypeData, getCardTypeData, getStatusTypeData } from '../../menupages/APICalls.js';
// import { CreditCard } from 'react-bootstrap-icons';



const actions = [
  { id: 1, text: "Customer ID" },
  { id: 2, text: "Customer Name" },
  { id: 3, text: "Date" },
  { id: 4, text: "Amount" },
  { id: 5, text: "Card" },
  { id: 5, text: "Type" },
  { id: 5, text: "Transcation ID" },
  { id: 5, text: "Status" },

]

const dropDownOptions = {
  height: 150,
  width: 130
};


let CCCardData = [];
const CreditCard = () => {


  const [TranscationType, setTranscationTypes] = useState();
  const [selectTranscationType, setselectTranscationType] = useState('');

  const [CardType, setCardTypes] = useState();
  const [selectCardType, setselectCardType] = useState('');

  const [StatusType, setStatusTypes] = useState();
  const [selectStatusType, setselectStatusType] = useState('');


  const selectChangeHandler = (
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    // console.log(event);
    setselectTranscationType(event.target.value);
  };
  const selectChangeHandler2 = (
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    // console.log(event);
    setselectCardType(event.target.value);
  };

  const selectChangeHandler3 = (
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    // console.log(event);
    setselectStatusType(event.target.value);
  };
  
  useEffect(() => {
    getTranscationTypeDataVal();
    getCardDataVal();
    getStatusDataVal();
  }, []);

  async function getTranscationTypeDataVal() {
    var data = await getTranscationTypeData();
    console.log('Statement 2' + data);
    setTranscationTypes(data.response);

  }

  async function getCardDataVal() {
    var data = await getCardTypeData();
    console.log('Statement 2' + data);
    setCardTypes(data.response);
  }

  async function getStatusDataVal() {
    var data = await getStatusTypeData();
    console.log('Statement 2' + data);
    setStatusTypes(data.response);
  }
  return (
    <div>
      {/* <div className='col-md-9 main-header'>
        <p>Accounts Receivable</p>
      </div> */}

      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="profile" title="Search">
          <div className="mb-2 row">
            <label for="inputCustomerid" className="col-lg-2 col-form-label">Customer ID</label>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="inputCustomerid" />
            </div>
          </div>
          <div className="mb-2 row">
            <label for="inputCustomername" className="col-lg-2 col-form-label">Customer Name</label>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="inputCustomername" />
            </div>
          </div>
          <div className="mb-2 row">
            <label for="inputfrom date" className="col-lg-2 col-form-label">From Date</label>
            <div className="col-sm-3">
              <input type="date" className="datepicker" id="inputfrom date" />
            </div>
          </div>
          <div className="mb-2 row">
            <label for="inputTo date" className="col-lg-2 col-form-label">To Date</label>
            <div className="col-sm-3">
              <input type="date" className="datepicker" id="inputTodate" />
            </div>
          </div>
          <div className="mb-2 row">
            <label for="inputfrom amount" className="col-lg-2 col-form-label">From Amount</label>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="inputfrom amount" />
            </div>
          </div>

          <div className="mb-2 row">
            <label for="inputto amount" className="col-lg-2 col-form-label">To Amount</label>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="input to amount" />
            </div>
          </div>

          <div className="mb-2 row">
            <label for="inputtranscation type" className="col-lg-2 col-form-label">Transcation Type</label>
            <div className="col-sm-3">
              <select
                className='form-select'
                Name='selectTranscationType'
                aria-label='Default select example'
                onChange={(e) =>
                  selectChangeHandler(selectTranscationType, e.target.value)
                }>
                <option value=''></option>
                {TranscationType &&
                  TranscationType.map((user) => (
                    <option value={user.txnTypeDesc}>
                      {user.txnTypeDesc}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="mb-2 row">
            <label for="inputcard type" className="col-lg-2 col-form-label">Card Type</label>
            <div className="col-sm-3">
              <select
                className='form-select'
                Name='selectCardType'
                aria-label='Default select example'
                onChange={(e) =>
                  selectChangeHandler2(selectCardType, e.target.value)
                }>
                <option value=''></option>
                {CardType &&
                  CardType.map((user) => (
                    <option value={user.creditCardTypeDesc}>
                      {user.creditCardTypeDesc}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="mb-2 row">
            <label for="inputstatus" className="col-lg-2 col-form-label">Status</label>
            <div className="col-sm-3">
              <select
                className='form-select'
                Name='selectStatusType'
                aria-label='Default select example'
                onChange={(e) =>
                  selectChangeHandler3(selectStatusType, e.target.value)
                }>
                <option value=''></option>
                {StatusType &&
                  StatusType.map((user) => (
                    <option value={user.txnStatusDesc}>
                      {user.txnStatusDesc}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div>
            <button type="Ok" className="btn  mb-3 ok ">Submit</button>
            <button type="Cancel" className="btn  mb-3 batch-cancel ">Reset</button>
          </div>


        </Tab>
        <Tab eventKey="credit card" title="Credit Card Transactions">
          <DataGrid
            className='card-body'
            dataSource={CreditCard}
            keyExpr={'fileName'}
            allowColumnReordering={true}>
            <Column dataField={'customer id'} caption={'Customer Id'} />
            <Column dataField={'customer name'} caption={'Customer Name'} />
            <Column dataField={'date'} caption={'Date'} />
            <Column dataField={'amount'} caption={'Amount'} />
            <Column dataField={'card'} caption={'Card'} />
            <Column dataField={'type'} caption={'Type'} />
            <Column dataField={'transcation id'} caption={'Transction ID'} />
            <Column dataField={'status'} caption={'Status'} />
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
          {/* grid system */}
          <div class="container">
            <div class="row">
              <div class="col">
                <p>Transaction Information</p>
                <div className="mb-2 row comment-margin">
                  <label for="inputcardholder name" className="col-lg-2 form-width col-form-label">Cardholder Name</label>
                  <div className="col">
                    <input type="text" className="form-control " id="inputcardholder name" />
                  </div>
                </div>
                <div className="mb-2 row comment-margin">
                  <label for="inputcard number last 4" className="col-lg-2 form-width col-form-label">Card Number Last 4</label>
                  <div className="col">
                    <input type="text" className="form-control" id="inputcard number lastt 4" />
                  </div>
                </div>
                <div className="mb-2 row comment-margin">
                  <label for="inputexpiration date" className="col-lg-2 form-width col-form-label">Expiration Date</label>
                  <div className="col">
                    <input type="text" className="form-control" id="inputexpiration date" />
                  </div>
                </div>
                <div className="mb-2 row comment-margin">
                  <label for="inputzip code" className="col-lg-2 form-width col-form-label">Zip Code</label>
                  <div className="col">
                    <input type="text" className="form-control" id="inputzip code" />
                  </div>
                </div>
                <div className="mb-2 row comment-margin">
                  <label for="inputamount" className="col-lg-2 form-width col-form-label">Amount</label>
                  <div className="col">
                    <input type="text" className="form-control" id="inputamount" />
                  </div>
                </div>
                <div className="mb-2 row comment-margin">
                  <label for="inputcommnets" className="col-lg-2 form-width col-form-label">Comments</label>
                  <div className="col">
                    <input type="text" className="form-control  pt-3" id="input comments" />
                  </div>
                </div>
              </div>
              <div class="col">
                <p>Results Information</p>
                <div className="mb-2 row comment-margin">
                  <label for="inputresult code" className="col-lg-2 form-width col-form-label">Result Code</label>
                  <div className="col">
                    <input type="text" className="form-control " id="inputresult code" />
                  </div>
                </div>
                <div className="mb-2 row comment-margin">
                  <label for="inputresponse message" className="col-lg-2 form-width col-form-label">Response Message</label>
                  <div className="col">
                    <input type="text" className="form-control " id="inputresponse message" />
                  </div>
                </div>


                <div className="mb-2 row comment-margin">
                  <label for="inputtransaction id" className="col-lg-2 form-width col-form-label">Transaction ID</label>
                  <div className="col">
                    <input type="text" className="form-control " id="inputtransaction id" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcsc match" className="col-lg-2 form-width col-form-label">CSC Match</label>
                  <div className="col">
                    <input type="text" className="form-control " id="inputcsc match" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputavs zip code match" className="col-lg-2 form-width col-form-label">AVS Zip Code Match</label>
                  <div className="col">
                    <input type="text" className="form-control " id="inputavs zip code match" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputcreated by" className="col-lg-2 form-width col-form-label">Created By</label>
                  <div className="col">
                    <input type="text" className="form-control " id="inputcreated by" />
                  </div>
                </div>

                <div className="mb-2 row comment-margin">
                  <label for="inputparent transction id" className="col-lg-2 form-width col-form-label">Parent Transction Id</label>
                  <div className="col">
                    <input type="text" className="form-control " id="inputparent transction id" />
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div>
            <button type="Approve" className="btn  mb-3 styles" >Approve</button>
            <button type="Credit" className="btn  mb-3 styles1 ">Credit</button>
            <button type="Capture" className="btn  mb-3 styles2 " >Capture</button>
            <button type="Ignore" className="btn  mb-3 styles3 ">Ignore</button>
            <button type="Send letter" className="btn  mb-3 styles4" >Send Letter</button>
          </div>
          {/* grid system */}

        </Tab>
      </Tabs>
    </div>

  );
};

export default CreditCard;
