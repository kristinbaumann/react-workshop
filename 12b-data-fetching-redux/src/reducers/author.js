// author reducer

const initialState = {
  loading: false,
  name: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_AUTHOR': 
      return { ...state,  name: action.payload };
    case 'REQUEST_AUTHOR':
      return { ...state,  loading: action.payload.loading };
    case 'RECEIVE_AUTHOR':
      return { ...state,  loading: action.payload.loading, name: action.payload.data };
    default:
      return state;
  }
};