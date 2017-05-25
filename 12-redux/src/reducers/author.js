// author reducer

const initialState = {
  name: 'Kristin'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_AUTHOR': {
      return { ...state,  name: action.payload };
    }
    default:
      return state;
  }
};