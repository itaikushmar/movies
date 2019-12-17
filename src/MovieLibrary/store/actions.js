import { FETCH_MOVIES } from '../../actionTypes';
import topRatedMovies from '../mocks/topTatedMovies';
import Axios from 'axios';

export const fetchTopRatedMovies = () => async dispatch => {
  const API_KEY = '54ffed57deb5a7a8688be4de3007e578';
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  const { data } = await Axios.get(URL);
  dispatch({
    type: FETCH_MOVIES,
    payload: data.results
  });
};
