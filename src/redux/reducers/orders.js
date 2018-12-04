const initialState = {
  orders: [],
  order: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_ORDER':
      return {
        ...state,
        article: action.order
      };
    case 'LOAD_ORDERS' :
      return {
        ...state,
        articles: action.orders
      };
    default:
      return state
  }
}