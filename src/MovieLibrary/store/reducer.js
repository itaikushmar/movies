import { FETCH_MOVIES, SORT_MOVIES } from '../../actionTypes';
import {
  ascSortMovies,
  descSortMovies,
  ratingSortMovies
} from '../service/moviesService';
import { uniqBy } from 'lodash';

const initialState = {
  movies: []
};

export default function movies(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_MOVIES:
      const newMovies = [...state.movies, ...payload];
      const uniqueResponse = uniqBy(newMovies, 'id');
      return {
        ...state,
        movies: uniqueResponse
      };
    case SORT_MOVIES:
      let movies = [...state.movies];
      if (payload === 'name_asc') {
        movies = ascSortMovies(movies);
      } else if (payload === 'name_desc') {
        movies = descSortMovies(movies);
      } else if (payload === 'rating') {
        movies = ratingSortMovies(movies);
      }
      return {
        ...state,
        movies
      };

    default:
      return state;
  }
}
