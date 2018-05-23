import React from 'react';
import User from './user';
import { connect } from 'react-redux';

const Users = ({users}) => (
  <ul>
    {
      users.map (user => {
        return <User {...user} key={user.id}/>
      })
    }
  </ul>
);

const mapStateToProps = (state) => {
  return {
    users:  state.users
  }
}

export default connect(mapStateToProps)(Users);
