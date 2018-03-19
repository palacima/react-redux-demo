
export function removeItem(index) {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

export function addItem(item){
  return {
    type: 'ADD_ITEM',
    item
  }
}
