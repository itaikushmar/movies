import React from 'react';

import './SortingOptions.css';

class SortingOptions extends React.Component {

  state = { value: '' };

  handleChange = e => {
    const selectedValue = e.target.value;
    const { onChange } = this.props;
    this.setState({ value: selectedValue });
    onChange(selectedValue);
  }

  render() {

    return (
      <div className="custom-dropdown">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="" disabled defaultValue>Sort by...</option>
          <option value="name_asc">A to Z</option>
          <option value="name_desc">Z to A</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    )
  }
}

export default SortingOptions;