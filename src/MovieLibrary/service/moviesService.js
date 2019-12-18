export const ascSortMovies = movies =>
  movies.sort((a, b) => {
    const title1 = a.title.toUpperCase();
    const title2 = b.title.toUpperCase();
    return title1 < title2 ? -1 : title1 > title2 ? 1 : 0;
  });

export const descSortMovies = movies =>
  movies.sort((a, b) => {
    const title1 = a.title.toUpperCase();
    const title2 = b.title.toUpperCase();
    return title1 > title2 ? -1 : title1 < title2 ? 1 : 0;
  });

export const ratingSortMovies = movies =>
  movies.sort((a, b) => a.vote_average - b.vote_average);
