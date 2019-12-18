import React from 'react';

import TMDBImage from './TMDBImage';
import './MovieListItem.css';

class MovieListItem extends React.Component {

    handleClick = () => {
      const {movie, onSelect} = this.props
      onSelect(movie)
    }
  
    render() {
      const {movie: {title, poster_path, vote_average}, isSelected} = this.props;

      return (
        <div className='movie-list-item' onClick={this.handleClick}>
          <TMDBImage src={poster_path} className='thumbnail' />
        </div>
      )
    }
  }

  export default MovieListItem;