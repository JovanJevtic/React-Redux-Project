import { fetchPosts } from '../actions/fetchActions';

const initialState = {
    items: []
};

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
      case fetchPosts:
        return {                                                                    
          ...state,
          items: action.payload
        };
      default:
        return state;
    }
  }

export default fetchReducer;