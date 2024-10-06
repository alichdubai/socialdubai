import { FETCH_POSTS } from './types';
import { fetchPosts as fetchPostsApi } from '../../services/api';

export const fetchPosts = () => async (dispatch) => {
  const { data } = await fetchPostsApi();
  dispatch({
    type: FETCH_POSTS,
    payload: data,
  });
};
