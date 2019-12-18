import { FETCH_MOVIES, SORT_MOVIES } from '../../actionTypes';
import Axios from 'axios';

export const fetchTopRatedMovies = (page = 1) => async dispatch => {
  const API_KEY = '54ffed57deb5a7a8688be4de3007e578';
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
