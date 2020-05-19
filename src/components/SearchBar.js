import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { onTermSubmit } = this.props;
    const { term } = this.state;
    onTermSubmit(term);
  }

  render() {
    const { term } = this.state;
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="ui field">
            <label>Video Search</label>
            <input
              name="term"
              type="text"
              value={term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
