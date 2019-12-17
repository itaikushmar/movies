import React from 'react';

class SortingOptions extends React.Component {

    state = { value: '' };
  
    handleChange = e => {
      const selectedValue = e.target.value
      const {onChange} = this.props
      this.setState({value: selectedValue})
      onChange(selectedValue)
    }
  
    render() {
  
      return (
        <select value={this.state.value} onChange={this.handleChange}>
          <option value=""></option>
          <option value="name_asc">A -> Z</option>
          <option value="name_desc">Z -> A</option>
          <option value="rating">Rating</option>
        </select>
      )
    }
  }

  export default SortingOptions;