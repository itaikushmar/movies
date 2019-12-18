import { FETCH_MOVIES, SORT_MOVIES } from '../../actionTypes';
import {uniqBy} from 'lodash';

const initialState = {
  movies: [],
  page: 4
};

export default function movies(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_MOVIES:
      const newMovies = [...state.movies, ...payload]
      const uniqueResponse = uniqBy(newMovies, 'id');
      return {
        ...state,
        movies: uniqueResponse
      };
    case SORT_MOVIES:
      let movies = [...state.movies];
      if (payload === 'name_asc') {
        movies.sort((a, b) => {
          const title1 = a.title.toUpperCase();
          const title2 = b.title.toUpperCase();
          return (title1 < title2) ? -1 : (title1 > title2) ? 1 : 0;
        });
      } else if (payload === 'name_desc') {
        movies.sort((a, b) => {
          const title1 = a.title.toUpperCase();
          const title2 = b.title.toUpperCase();
          return (title1 > title2) ? -1 : (title1 < title2) ? 1 : 0;
        });
      } else if (payload === 'rating') {
        movies.sort((a, b) => a.vote_average - b.vote_average);
      }
      return {
        ...state,
        movies
      };

    default:
      return state;
  }
}
