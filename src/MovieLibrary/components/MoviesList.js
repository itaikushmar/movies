import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import SortingOptions from './SortingOptions';
import MovieListItem from './MovieListItem';
import ExpandedMovieItem from './ExpandedMovieItem';
import './MoviesList.css';

class MoviesList extends React.PureComponent {

  static propTypes = { movies: PropTypes.array.isRequired };

  state = { selectedMovie: null, isModalOpen: false };

  openModal = item => this.setState({selectedMovie: item, isModalOpen: true});

  closeModal = () => this.setState({selectedMovie: null, isModalOpen: false});

  handleSortingChange = sortingType => console.log(sortingType);

  render() {

    const {movies} = this.props
    const {selectedMovie, isModalOpen} = this.state

    return (
      <div className="movies-list">
          <div>
            <span>Sort by:</span>
            <SortingOptions onChange={this.handleSortingChange}/>
          </div>
        <div className="items">
          {
            movies.map(movie =>
              <MovieListItem key={movie.id} movie={movie} isSelected={selectedMovie===movie} onSelect={this.openModal}/>
            )
          }
        </div>
        {
          selectedMovie && (
            <Modal
              isOpen={isModalOpen}
              onRequestClose={this.closeModal}
            >
              <ExpandedMovieItem movie={selectedMovie} />
            </Modal>
          )
        }
      </div>
    )
  }
}

export default MoviesList;