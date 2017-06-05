// talks reducer

const initialState = {
    list: null,
    loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_TALKS':
      return { ...state,  loading: action.payload.loading };
    case 'RECEIVE_TALKS':
      return { ...state,  loading: action.payload.loading, list: action.payload.data }; 
    default:
      return state;
  }
};