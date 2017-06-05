// favourites reducer

const initialState = {
    list: null,
    loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_FAVOURITES':
      return { ...state,  loading: action.payload.loading };
    case 'RECEIVE_FAVOURITES':
      return { ...state,  loading: action.payload.loading, list: action.payload.data };
    case 'ADD_FAVOURITE': 
      return { ...state, list: [...state.list, action.payload.id] }
    default:
      return state;
  }
};