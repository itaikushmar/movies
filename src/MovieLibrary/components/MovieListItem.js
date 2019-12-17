import React from 'react';
import classNames from 'classnames';

class MovieListItem extends React.Component {

    handleClick = () => {
      const {movie, onSelect} = this.props
      onSelect(movie)
    }
  
    render() {
      const {movie: {title, vote_average}, isSelected} = this.props;

      return (
        <div className={classNames('movie-list-item', {'selected': isSelected})} onClick={this.handleClick}>{title}({vote_average})</div>
      )
    }
  }

  export default MovieListItem;