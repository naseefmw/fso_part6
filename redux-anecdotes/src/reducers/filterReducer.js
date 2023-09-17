const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.payload
    default:
      return state
  }
}

export const searchAnecdotes = (filter) => {
  return {
    type: 'SEARCH',
    payload: filter,
  }
}

export default filterReducer
