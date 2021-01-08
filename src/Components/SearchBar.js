import { Component } from "react";

export default class SearchBar extends Component {
  state = {
    searchQuerry: "",
  };

  handleChangeQuerry = (e) => {
    this.setState({ searchQuerry: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.searchQuerry);
  };

  render() {
    const { searchQuerry } = this.state;
    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={searchQuerry}
              onChange={this.handleChangeQuerry}
            />
          </form>
        </header>
      </div>
    );
  }
}
