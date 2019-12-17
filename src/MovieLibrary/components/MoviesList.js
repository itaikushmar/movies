import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {sortTopRatedMovies} from '../store/actions';

import SortingOptions from './SortingOptions';
import MovieListItem from './MovieListItem';
import SelectedMovieModal from './SelectedMovieModal';

import './MoviesList.css';

class MoviesList extends React.PureComponent {
  static propTypes = { movies: PropTypes.array.isRequired };

  state = { selectedMovie: null, isModalOpen: false };

  openModal = item => this.setState({ selectedMovie: item, isModalOpen: true });

  closeModal = () => this.setState({ selectedMovie: null, isModalOpen: false });

  handleSortingChange = sortingType => {
    this.props.sortTopRatedMovies(sortingType);
  };

  render() {
    const { movies } = this.props;
    const { selectedMovie, isModalOpen } = this.state;

    return (
      <div className='movies-list'>
        <div>
          <span>Sort by:</span>
          <SortingOptions onChange={this.handleSortingChange} />
        </div>
        <div className='items'>
          {movies.map((movie, index) => (
            <MovieListItem
              key={movie.id}
              movie={movie}
              isSelected={selectedMovie === movie}
              onSelect={this.openModal}
            />
          ))}
        </div>
        {selectedMovie && (
          <SelectedMovieModal isOpen={isModalOpen} closeModal={this.closeModal} selectedMovie={selectedMovie}/>
        )}
      </div>
    );
  }
}

export default connect(null, {sortTopRatedMovies})(MoviesList);
