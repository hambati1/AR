import {
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    GET_USER_LIST,
  } from '../../shared/constants/ActionTypes';
  import {appIntl} from '@crema/utility/helper/Utils';
  import jwtAxios from '@crema/services/auth/jwt-auth';
  
  export const onexportList = () => {
  
  const getApiData = async () => {
      const response = await fetch(
        "http://172.20.51.231:8761/cn/filetype?functionId=6&isActive=1&isImport=0"
      ).then((response) => response.json());
  
      setUsers(response);
    };
  
    return (dispatch) => {
      jwtAxios
        .get('/api/user/list88888888888888888888888888888888')
        .then((data) => {
          if (data.status === 200) {
            dispatch({type: FETCH_SUCCESS});
            dispatch({type: GET_USER_LIST, payload: data.data});
          } else {
            dispatch({
              type: FETCH_ERROR,
              payload: messages['message.somethingWentWrong'],
            });
          }
        })
        .catch((error) => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    };
  };
  