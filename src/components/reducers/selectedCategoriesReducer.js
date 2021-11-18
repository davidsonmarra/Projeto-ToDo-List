export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_SELECTED_CATEGORY':
      return [...state, action.payload];
    case 'REMOVE_SELECTED_CATEGORY':
      return state.filter(ct => ct.title !== action.payload);
    default:
      return state;
  }
}