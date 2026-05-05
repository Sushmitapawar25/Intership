import React, { Component } from 'react';

class Movie extends Component {
  state = {
    movies: [
      {title: "Terminator",       genre: "Action",  stock: 6, rate: 2.5 },
      {title: "Die Hard",         genre: "Action",  stock: 5, rate: 2.5 },
      {title: "Get Out",          genre: "Thriller",stock: 8, rate: 3.5 },
      {title: "Trip to Italy",    genre: "Comedy",  stock: 7, rate: 3.5 },
      {title: "Airplane",         genre: "Comedy",  stock: 7, rate: 3.5 },
      {title: "Wedding Crashers", genre: "Comedy",  stock: 7, rate: 3.5 },
      {title: "Gone Girl",        genre: "Thriller",stock: 7, rate: 4.5 },
      {title: "The Sixth Sense",  genre: "Thriller",stock: 4, rate: 3.5 },
      {title: "The Avengers",     genre: "Action",  stock: 7, rate: 3.5 }
    ],
    sortKey: ""
  };

  sortBy = (key) => { this.setState({ sortKey: key }); }

  deleteMovie = (index) => {
    const movies = [...this.state.movies];
    movies.splice(index, 1);
    this.setState({ movies });
  }

  render() {
    const { movies, sortKey } = this.state;

    const sorted = [...movies].sort((a, b) => {
      if (sortKey === "title") return a.title.localeCompare(b.title);
      if (sortKey === "genre") return a.genre.localeCompare(b.genre);
      if (sortKey === "")      return 0;
      return a[sortKey] - b[sortKey];
    });

    return (
      <div className="container mt-4">
        {movies.length === 0
          ? <h4>There are no movies.</h4>
          : <h5>{"Showing " + movies.length + " movies"}</h5>
        }
        {movies.length > 0 && (
          <table className="table table-bordered-bt table-hover">
            <thead className="table-light">
              <tr>
                <th onClick={() => this.sortBy("title")} style={{cursor:"pointer"}}>Title</th>
                <th onClick={() => this.sortBy("genre")} style={{cursor:"pointer"}}>Genre</th>
                <th onClick={() => this.sortBy("stock")} style={{cursor:"pointer"}}>Stock</th>
                <th onClick={() => this.sortBy("rate")}  style={{cursor:"pointer"}}>Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((m, index) => (
                <tr key={index}>
                  <td>{m.title}</td>
                  <td>{m.genre}</td>
                  <td>{m.stock}</td>
                  <td>{m.rate}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => this.deleteMovie(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default Movie;