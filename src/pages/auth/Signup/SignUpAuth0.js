import React from 'react';

import IntlMessages from '@crema/utility/IntlMessages';
import {useAuthMethod} from '@crema/utility/AuthHooks';
import {Button} from 'react-bootstrap';

const SignUpAuth0 = () => {
  const signInUser = useAuthMethod();

  return (
    <div className='sign'>
      <div className='sign-content'>
        <Button
          type='primary'
          className='sign-btn sign-btn-full'
          onClick={() => signInUser()}>
          <IntlMessages id='auth.loginWithAuth0' />
        </Button>
      </div>
    </div>
  );
};

export default SignUpAuth0;
