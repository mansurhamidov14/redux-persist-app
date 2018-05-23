let nextUserId = 0;

export const addUser = (payload) => {
  payload.id = nextUserId++;
  return {
    type: 'ADD_USER',
    payload
  }
};

export const getUsers = () => ({
  type: 'GET_USERS'
});
