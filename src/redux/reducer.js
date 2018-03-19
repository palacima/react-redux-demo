import items from '../data/items'

const postReducer = function items(state = items, action) {
  console.log(action.type)
  switch(action.type) {
    case 'REMOVE_ITEM': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    case 'ADD_ITEM': return[...state, action.item]
    default: return state
  }
}

export default postReducer
