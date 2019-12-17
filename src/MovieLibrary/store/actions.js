import { FETCH_MOVIES, SORT_MOVIES } from '../../actionTypes';
import {uniqBy} from 'lodash';
import Axios from 'axios';

export const fetchTopRatedMovies = () => async dispatch => {
  const API_KEY = '54ffed57deb5a7a8688be4de3007e578';
  const numberOfPages = 3;
  let response = [];
  for (var i=1; i<=numberOfPages; i++) {
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${i}`;
    const { data } = await Axios.get(URL);
    response.push(...data.results);
  }
  const uniqueResponse = uniqBy(response, 'id');
  dispatch({
    type: FETCH_MOVIES,
    payload: uniqueResponse
  });
};

export const sortTopRatedMovies = (sortType) => {
  return {
    type: SORT_MOVIES,
    payload: sortType
  }
}
