import React from 'react';
import PropTypes from 'prop-types';

import SortingOptions from './SortingOptions';
import MovieListItem from './MovieListItem';
import ExpandedMovieItem from './ExpandedMovieItem';
import './MoviesList.css';

class MoviesList extends React.PureComponent {

  static propTypes = { movies: PropTypes.array.isRequired };

  state = { selectedMovie: null };

  handleSelectMovie = item => this.setState({selectedMovie: item});

  handleSortingChange = sortingType => console.log(sortingType);

  render() {

    const {movies} = this.props
    const {selectedMovie} = this.state

    return (
      <div className="movies-list">
        <div className="items">
          <div>
            <span>Sort by:</span>
            <SortingOptions onChange={this.handleSortingChange}/>
          </div>
          {
            movies.map(movie =>
              <MovieListItem key={movie.id} movie={movie} isSelected={selectedMovie===movie} onSelect={this.handleSelectMovie}/>
            )
          }
        </div>
        {
          selectedMovie && (
            <ExpandedMovieItem movie={selectedMovie} />
          )
        }
      </div>
    )
  }
}

export default MoviesList;