import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';

class HomePage extends Component {
  componentDidMount() {
    const { userStore } = this.props;

    db.onceGetUsers().then(snapshot =>
      userStore.setUsers(snapshot.val())
    );
  }

  render() {
    const { users } = this.props.userStore;

    return (
      <div>
        <h1>TBI Application</h1>
		<Link to={routes.NEW_FUNCTIONAL_SCORE}>TBI Demo</Link>

       { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
   <h2>Team Members</h2>
   <p>(Saved on Sign Up in Firebase Database)</p>
    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  inject('userStore'),
  observer
)(HomePage);