// recipe reducer

const initialState = {
  loading: false,
  list: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECIPE': 
      if(!state.list){
        return { ...state,  list: [ action.payload ] };
      }
      return { ...state,  list: [ ...state.list, action.payload] };
    case 'REQUEST_RECIPES':
      return { ...state,  loading: action.payload.loading };
    case 'RECEIVE_RECIPES':
      return { ...state,  loading: action.payload.loading, list: action.payload.data };
    default: 
      return state;
  }
};