import React from 'react';

const User = (props) => (
  <li>
    <h4>{props.name} {props.lastname}</h4>
    <p>Age: {props.age}<br/>
      Phone: {props.phone}<br/>
    </p>
  </li>
);

export default User
