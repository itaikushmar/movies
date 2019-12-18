import React from 'react';
import PropTypes from 'prop-types';

import TMDBImage from './TMDBImage';
import './MovieListItem.css';

class MovieListItem extends React.Component {
  static propTypes = {
    movie: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
  };

  handleClick = () => {
    const { movie, onSelect } = this.props
    onSelect(movie)
  }

  render() {
    const { movie: { poster_path } } = this.props;

    return (
      <div className='movie-list-item' onClick={this.handleClick}>
        <TMDBImage src={poster_path} className='thumbnail' />
      </div>
    )
  }
}

export default MovieListItem;