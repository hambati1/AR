import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import Settings from './Setting';
import Common from './Common';
import UserList from './UserList';

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    common: Common,
    userList: UserList
  });
export default reducers;
