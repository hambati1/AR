import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import '../../menupages/Search/index.style.scss'

const Search = () => {
    return(

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
            <div className="mb-2 row">
              <label for="inputFileType" className="col-lg-1 col-form-label">Search Type :</label>
              <div className="col-sm-4 Dropdown">
                <select className="form-select" Name="searchType" aria-label="Default select example" >
                  <option value=""></option>
                 
                </select>
              </div>
              <div className="padding">
                <button type="submit" className="btn  mb-3 btn-Gray ">Submit</button>
                <button type="reset" value="Reset" className="btn  mb-3 btn-darkGray ">Reset</button>
              </div>
              </div>
            </div>
      
        </Tab>
        </Tabs>
      </div>
    );   
};

export default Search;