import "./home.css";
import imagen from "../../img-cp2/main-image-cp2.jpg"
import { getAllMovies } from "../../redux/actions"

import React, { Component } from "react";

import { connect } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies()
  }
  render() {
    return (
      <div className="home">
        <h1>Henry Movies</h1>
        <img src={imagen} alt="henry-movies-logo" />
        <h3>Movies</h3>
        <h4>Checkpoint M2</h4>
        <span>
          {this.props.movies?.map((peli) => (
            <MovieCard
              key={peli.id}
              id={peli.id}
              name={peli.name}
              director={peli.director}
              releaseYear={peli.releaseYear}
              image={peli.image}
            />

          ))}
        </span>

      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

export const mapDispatchToProps = { getAllMovies }



export default connect(mapStateToProps, mapDispatchToProps)(Home);
