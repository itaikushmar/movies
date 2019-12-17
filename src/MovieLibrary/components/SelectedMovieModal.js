import React from 'react';
import Modal from 'react-modal';
import ExpandedMovieItem from './ExpandedMovieItem';

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

const SelectedMovieModal = ({ isOpen, closeModal, selectedMovie }) => (
  <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyle}>
    <button className='close-modal' onClick={closeModal}>
      x
    </button>
    <ExpandedMovieItem movie={selectedMovie} />
  </Modal>
);

export default SelectedMovieModal;
