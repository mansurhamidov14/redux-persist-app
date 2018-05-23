const initialState = [];

 const userApp = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
    return [...state];

    case 'ADD_USER':
    return [...state,
      action.payload
    ];

    default:
    return state;
  }
}

export default userApp;
