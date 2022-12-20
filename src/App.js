import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './shared/styles/crema.scss';

import AppContextProvider from '@crema/utility/AppContextProvider';
import AppLocaleProvider from '@crema/utility/AppLocaleProvider';
import AuthRoutes from '@crema/utility/AuthRoutes';
import AppLayout from '@crema/core/AppLayout';
import AppThemeProvider from '@crema/utility/AppThemeProvider';
import FirebaseAuthProvider from '@crema/services/auth/firebase/FirebaseAuthProvider';
import '@crema/services';

import configureStore from './redux/store';

const store = configureStore();

let session='';

/* TOKEN */
const payload={"userName":"hambati","password":"indicatecropwouldmelrose3849practice!","brandType":"png"};
 fetch('http://172.20.51.231:8761/home/userlogin', {
       method: 'POST',
       headers: { "Content-Type": 'application/json', Session: session },
       body: JSON.stringify(payload)
     }).then((response) => response.json())
     .then(function(data) {
         session = data.session;
         console.log(session);
         localStorage.setItem('token', session);
     });
/* END TOKEN */

const App = () => (
  <AppContextProvider>
    <Provider store={store}>
      <AppThemeProvider>
        <AppLocaleProvider>
          <BrowserRouter>
            <FirebaseAuthProvider>
              <AuthRoutes>
                <AppLayout />
              </AuthRoutes>
            </FirebaseAuthProvider>
          </BrowserRouter>
        </AppLocaleProvider>
      </AppThemeProvider>
    </Provider>
  </AppContextProvider>
);

export default App;
