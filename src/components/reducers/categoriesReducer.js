const allCategories = [
  {
    color: "#e484b4",
    title: "compras"
  },
  {
    color: "#B0E0E6",
    title: "trabalho"
  },
  {
    color: "#D8BFD8",
    title: "escola"
  }
]

export default function categoriesReducer(state = allCategories, action) {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [...state, action.payload];
    // case 'REMOVE_CATEGORY':
    //   return 0;
    case 'INITIALIZE_CATEGORIES':
      return action.payload;
    default:
      return state;
  }
}