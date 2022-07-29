import React, { Component } from "react";

import { getMovies } from "../services/fakeMovieService";

import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movie[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movie });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movie in the database</p>;

    return (
      <>
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <p>Showing {count} movies in the database</p>
            </div>
          </div>

          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="text-center">Title</th>
                  <th className="text-center">Genre</th>
                  <th className="text-center">Stock</th>
                  <th className="text-center">Rate</th>
                  <th className="text-center">Likes</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map((movie) => (
                  <tr key={movie._id}>
                    <td className="text-start">{movie.title}</td>
                    <td className="text-center">{movie.genre.name}</td>
                    <td className="text-center">{movie.numberInStock}</td>
                    <td className="text-center">{movie.dailyRentalRate}</td>
                    <td className="text-center">
                      <Like
                        liked={movie.liked}
                        onClick={() => this.handleLike(movie)}
                      />
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
