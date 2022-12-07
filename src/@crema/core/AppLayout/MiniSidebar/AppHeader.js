import React from 'react';
import styles from './index.module.scss';
import { FiMoreVertical } from 'react-icons/fi';
import AppLogo from '../components/AppLogo';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppHeaderMessages from '../../AppHeaderMessages';
import AppNotifications from '../../AppNotifications';
import AppSearch from "../../AppSearchBar";
import clsx from "clsx";
import AppIconBtn from "../../AppIconBtn";
import { Dropdown } from "react-bootstrap";
import PropTypes from 'prop-types';
import { AiOutlineMenu } from "react-icons/ai";
import { toggleNavCollapsed } from "../../../../redux/actions";
import { useDispatch } from "react-redux";

const AppHeader = ({ isCollapsed, setCollapsed }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.appHeaderMini}>
      <a
        className={clsx(styles.trigger, 'me-3 d-none d-xl-flex')}
        onClick={() => setCollapsed(!isCollapsed)}>
        <AiOutlineMenu />
      </a>
      <a className={clsx(styles.trigger, 'me-3 d-xl-none w-auto')} onClick={() => dispatch(toggleNavCollapsed())}>
        <AiOutlineMenu />
      </a>
      <div className='me-3'>
        <AppLogo />
      </div>
      {/* <div className='flex-grow-1'/>
      <div className='me-2 me-md-4'>
        <AppSearch/>
      </div> */}

      <div className="header-container col-sm-6">
        <form className="form" align-input-group="center">
          <div className="input-group col-sm-12 input-group-sm">
            <div className="input-group col-md-12" id="adv-search">
              <div className="input-group-btn">
                <div className="btn-group" role="group">
                  <select className="form-control selectDropdown" id="sel1" name="searchoptions">
                    <option value="">ALL</option>
                    <option value="CustomerID">Customer ID</option>
                    <option value="CustomerName">Customer Name</option>
                    <option value="CheckNumber">Check Number</option>
                    <option value="BatchID">Batch Id</option>
                  </select>
                </div>
              </div>
              <input type="text" className="form-control" id="search" placeholder=" Search For CustomerID...." autocmplete="off" />
              <button type="button" className="btn btn-primary mainsearchbtn"><span class="glyphicon glyphicon-search" aria-hidden="true"></span>SEARCH</button>
            </div>
          </div>

        </form>
      </div>



      <div className='d-none d-md-flex mx-n2'>
        {/* <span className='px-2'>
          <AppLanguageSwitcher/>
        </span> */}



        {/* <span className='px-2'>
          <AppNotifications/>
        </span>
        <span className='px-2'>
          <AppHeaderMessages/>
        </span> */}
      </div>


    </div>
  );
};

export default AppHeader;
