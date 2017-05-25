// recipe reducer

const initialState = {
  list: [
    {
      name: 'Hackbraten',
      time: '1 Stunde',
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECIPE': 
      return { ...state,  list: [ ...state.list, action.payload] };
    default:
      return state;
  }
};