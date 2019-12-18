import React from 'react';
import PropTypes from 'prop-types';

const TMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500/'

const TMDBImage = ({ src, ...restProps }) => {
  TMDBImage.PropTypes = {
    src: PropTypes.string.isRequired
  }

  return (
    <img
      alt="Click for more info!"
      src={`${TMDB_IMAGE_BASE_PATH}${src}`}
      {...restProps}
    />
  )
}

export default TMDBImage;