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

  openModal = item => this.setState({ selectedMovie: item, isModalOpen: true });

  closeModal = () => this.setState({ selectedMovie: null, isModalOpen: false });

  handleSortingChange = sortingType => console.log(sortingType);

  render() {
    const { movies } = this.props;
    const { selectedMovie, isModalOpen } = this.state;
    const modalStyle = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '50%',
        padding: 0,
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        backgroundColor: 'rgb(107, 107, 107)',
        border: '1px solid rgb(97, 97, 97)'
      }
    };

    return (
      <div className='movies-list'>
        <div>
          <span>Sort by:</span>
          <SortingOptions onChange={this.handleSortingChange} />
        </div>
        <div className='items'>
          {movies.map(movie => (
            <MovieListItem
              key={movie.id}
              movie={movie}
              isSelected={selectedMovie === movie}
              onSelect={this.openModal}
            />
          ))}
        </div>
        {selectedMovie && (
          <Modal
            isOpen={isModalOpen}
            onRequestClose={this.closeModal}
            style={modalStyle}
          >
            <button className='close-modal' onClick={this.closeModal}>
              x
            </button>
            <ExpandedMovieItem movie={selectedMovie} />
          </Modal>
        )}
      </div>
    );
  }
}

export default MoviesList;
