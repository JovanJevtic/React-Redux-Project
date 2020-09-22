import { ADD_BOOKMARK, TOGGLE_BOOKMARK } from '../actionTypes'

const initialState = {
  allIds: [],
  byIds: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKMARK: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      }
    }
    case TOGGLE_BOOKMARK: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      }
    }
    default:
      return state
  }
}