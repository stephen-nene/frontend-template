// productReducer.js

const initialState = {
  count: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {


    case 'ADD_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'SUB_COUNT':
      return {
        ...state,
        count: state.count - 1,
      };

    case 'RESET_COUNT':
      return {
        ...state,
        count: 0,
      };




    default:
      return state;
  }
};

export default productReducer;