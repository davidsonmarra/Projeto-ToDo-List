const allItems = []

export default function itemsReducer(state = allItems, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return action.payload;
    case 'INITIALIZE_ITEMS':
      return action.payload;
    default:
      return state;
  }
}

