import { increment, decrement, toggle, fetch } from './index';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: 'FETCH',
          payload: data
        })
    );
};