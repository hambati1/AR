import React, {useEffect} from 'react';
import AppRowContainer from '@crema/core/AppRowContainer';
import {useDispatch, useSelector} from 'react-redux';
import AppInfoView from '@crema/core/AppInfoView';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Col} from 'react-bootstrap';
// import styles from './index.module.scss';
import Table1 from './table1';
const BatchPayment = () => {
  return (
    <>
      {/* <AppPageMetadata title='Batch Payment' /> */}
      <div>
        <Col>
          <Table1 />
        </Col>

      </div>
      <AppInfoView />
    </>
  );
};

export default BatchPayment;
