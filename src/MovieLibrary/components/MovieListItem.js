import React from 'react';
import classNames from 'classnames';

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
        <div className={classNames('movie-list-item', {'selected': isSelected})} onClick={this.handleClick}>
          <TMDBImage src={poster_path} className='thumbnail' />
        </div>
      )
    }
  }

  export default MovieListItem;