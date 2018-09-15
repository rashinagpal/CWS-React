import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';

import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';

const AccountPage = ({ sessionStore }) =>
  <div>
    <h1>Account: {sessionStore.authUser.email}</h1>
    <PasswordChangeForm />
  </div>

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  inject('sessionStore'),
  observer
)(AccountPage);