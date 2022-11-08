import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './index.module.scss';
import clsx from 'clsx';
import {useMeasure} from '../../../utility/hooks/useMeasure';
import ViewWrapper from '../../../utility/ViewWrapper';
import {Form} from 'formik';
import {Button, Col, Row} from 'react-bootstrap';

const AppFilterWrapper = ({
  searchVisible,
  placeholder = 'Search',
  children,
  actions,
  hideFilters,
  actionClass,
  contentClass,
  filterData,
  setFilterData,
  module,
  access,
}) => {
  const [isVisible, setVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [isLoaded, setLoaded] = useState(false);
  const [form] = Form.useForm();
  const textRef = useRef();
  useEffect(() => {
    if (search !== '' || (isLoaded && search === '')) {
      setFilterData({
        ...filterData,
        search,
      });
    }
  }, [search]);

  useEffect(() => {
    if (document.location.pathname === '/invoice') {
      form.setFieldsValue({
        dateType: 'invoice_date',
        amountType: 'invoice_amount',
      });
    }
    if (!isLoaded) {
      setLoaded(true);
    }
  }, []);

  const [rect, inputRef2] = useMeasure([isVisible]);

  return (
    <div className={styles.filterMain}>
      <div
        className={clsx(
          styles.filterContent,
          'd-flex flex-column flex-md-row align-items-md-center',
          contentClass,
        )}>
        <div
          className={clsx(
            styles.filterView,
            ' d-flex align-items-center flex-grow-1',
          )}>
          {hideFilters ? null : (
            <>
              <Button type='secondary' onClick={() => setVisible(!isVisible)}>
                Filter
                {!isVisible ? 'DownOutlined' : 'UpOutlined'}
              </Button>
              {searchVisible ? (
                <ViewWrapper module={module} access={access}>
                  <Form.Control
                    type='text'
                    placeholder={placeholder}
                    ref={textRef}
                    onChange={_.debounce((e) => {
                      setSearch(e.target.value.trim());
                    }, 1500)}
                  />
                </ViewWrapper>
              ) : null}
            </>
          )}
        </div>
        <div
          className={clsx(
            styles.filterRightAction,
            'd-flex flex-wrap align-items-center justify-content-md-end',
            actionClass,
          )}>
          {actions}
        </div>
      </div>
      <div
        style={{height: isVisible ? rect.height : 0}}
        className={clsx(styles.filterCard, {visible: isVisible})}>
        <div ref={inputRef2} className={clsx(styles.filterCardBody, 'border')}>
          <Form
            form={form}
            onFinish={(values) => {
              console.log('event triggered');
              setFilterData({
                ...values,
                search,
              });
            }}>
            <Row>
              {children}
              <Col xs={12}>
                <div
                  className={clsx(
                    styles.filterCardBtnView,
                    'd-flex align-items-center',
                  )}>
                  <Button type='primary' htmlType='submit'>
                    Apply Filter
                  </Button>
                  <Button
                    variant='primary'
                    onClick={() => {
                      if (textRef.current) textRef.current.value = '';
                      setSearch('');
                      form.resetFields();
                      setFilterData({search: ''});
                    }}>
                    Clear All
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AppFilterWrapper;

AppFilterWrapper.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.node,
  filterData: PropTypes.object,
  hideFilters: PropTypes.bool,
  actionClass: PropTypes.string,
  contentClass: PropTypes.string,
  placeholder: PropTypes.string,
  setFilterData: PropTypes.func,
  searchVisible: PropTypes.bool,
  access: PropTypes.string,
  module: PropTypes.string,
};

AppFilterWrapper.defaultProps = {
  setFilterData: () => {},
  filterData: {},
  hideFilters: false,
  searchVisible: true,
};
