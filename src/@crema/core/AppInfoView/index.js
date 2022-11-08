import React, {useEffect} from 'react';
// import {message} from 'react-bootstrap';
import AppLoader from '@crema/core/AppLoader';
import {useSelector} from 'react-redux';
// import {useDispatch} from 'react-redux';
// import {hideMessage} from '../../../redux/actions';

const AppInfoView = () => {
  const {loading, error, displayMessage} = useSelector(({common}) => common);
  // const dispatch = useDispatch();
  //
  // useEffect(() => {
  //   if (error) {
  //     message.error(error);
  //     dispatch(hideMessage());
  //   }
  // }, [error]);
  //
  // useEffect(() => {
  //   if (displayMessage) {
  //     message.success(displayMessage);
  //     dispatch(hideMessage());
  //   }
  // }, [displayMessage]);

  return <>{loading ? <AppLoader /> : null}</>;
};

export default AppInfoView;
