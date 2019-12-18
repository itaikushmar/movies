import { FETCH_MOVIES, SORT_MOVIES } from '../../actionTypes';
import { API_KEY } from './constants';
import Axios from 'axios';

export const fetchTopRatedMovies = (page = 1) => async dispatch => {
  const numberOfPages = page + 2;
  let response = [];
  for (var i = page; i <= numberOfPages; i++) {
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${i}`;
    const { data } = await Axios.get(URL);
    response.push(...data.results);
  }
  dispatch({
    type: FETCH_MOVIES,
    payload: response
  });
};

export const sortTopRatedMovies = (sortType) => {
  return {
    type: SORT_MOVIES,
    payload: sortType
  }
}
