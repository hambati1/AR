import React, {useEffect} from 'react';
import AppRowContainer from '@crema/core/AppRowContainer';
import {useDispatch, useSelector} from 'react-redux';
import AppInfoView from '@crema/core/AppInfoView';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Col} from 'react-bootstrap';
// import styles from './index.module.scss';
import Table1 from './table1';
import Table2 from './table2';
import Form1 from './form1';
import Form2 from './form2';

const BatchPayment1 = () => {

  return (
    <>
      <AppPageMetadata title='Batch Payment' />
  <div>
          <Col>
            <Table1/>
          </Col>
          <Col>
            <Table2/>
          </Col>
          {/* <Col>
            <Form1 />
          </Col>
          <Col>
            <Form2/>
          </Col> */}
      </div>
      <AppInfoView />
    </>
  );
};

export default BatchPayment1;
