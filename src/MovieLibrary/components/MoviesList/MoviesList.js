import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortTopRatedMovies, fetchTopRatedMovies } from '../../store/actions';

import { getMovies } from '../../store/selectors';
import SortingOptions from './components/SortingOptions';
import MovieListItem from './components/MovieListItem';
import SelectedMovieModal from '../SelectedMovieModal';
import './MoviesList.css';

class MoviesList extends React.PureComponent {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    sortTopRatedMovies: PropTypes.func.isRequired,
    fetchTopRatedMovies: PropTypes.func.isRequired
  };

  state = { selectedMovie: null, isModalOpen: false, page: 1 };

  componentDidMount() {
    const { fetchTopRatedMovies } = this.props;
    fetchTopRatedMovies();
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const nearBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (nearBottom) {
      const { fetchTopRatedMovies } = this.props;
      const { page } = this.state;
      this.setState({ page: page + 2 }, () => {
        fetchTopRatedMovies(page);
      });
    }
  };

  openModal = item => this.setState({ selectedMovie: item, isModalOpen: true });

  closeModal = () => this.setState({ selectedMovie: null, isModalOpen: false });

  handleSortingChange = sortingType => {
    this.props.sortTopRatedMovies(sortingType);
  };

  renderMoviesListItems = movies => {
    const { selectedMovie } = this.props;
    return movies.map(movie => {
      return (
        movie !== null && (
          <MovieListItem
            key={movie.id}
            movie={movie}
            isSelected={selectedMovie === movie}
            onSelect={this.openModal}
          />
        )
      )
    });
  };

  render() {
    const { movies } = this.props;
    const { selectedMovie, isModalOpen } = this.state;

    return (
      <div className='movies-list'>
        <SortingOptions onChange={this.handleSortingChange} />
        {movies.length ? (
          <div className='items'>{this.renderMoviesListItems(movies)}</div>
        ) : (
            <div>Loading...</div>
          )}
        {selectedMovie && (
          <SelectedMovieModal
            isOpen={isModalOpen}
            closeModal={this.closeModal}
            selectedMovie={selectedMovie}
          />
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    movies: getMovies(state)
  }),
  { sortTopRatedMovies, fetchTopRatedMovies }
)(MoviesList);
