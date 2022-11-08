import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import AppIconBtn from "@crema/core/AppIconBtn";
import {AiOutlineAppstore} from 'react-icons/ai';
import {FaBars} from 'react-icons/fa';
import styles from '../index.module.scss';

const ViewSelectButtons = ({pageView, onChangePageView}) => {
  const {messages} = useIntl();
  return (
    <div className={styles.contactViewSelect}>
      <div className='mx-1'>
        <AppIconBtn
          smallBtn
          title={messages['sidebar.ecommerce.gridView']}
          className={clsx({
            active: pageView === 'grid',
          })}
          onClick={() => onChangePageView('grid')}
        >
          <AiOutlineAppstore/>
        </AppIconBtn>
      </div>

      <div className='mx-1'>
        <AppIconBtn
          smallBtn
          title={messages['sidebar.ecommerce.listView']}
          className={clsx({
            active: pageView === 'list',
          })}
          onClick={() => onChangePageView('list')}
        >
          <FaBars/>
        </AppIconBtn>
      </div>
    </div>
  );
};

export default ViewSelectButtons;

ViewSelectButtons.propTypes = {
  pageView: PropTypes.string.isRequired,
  onChangePageView: PropTypes.func,
};
