import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SavedList extends Component {
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} key={movie.id}>
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <div className="home-button">
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
      </div>
    );
  }
}
