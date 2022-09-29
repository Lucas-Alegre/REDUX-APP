import "./movieCard.css";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions"
// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.

const MovieCard = (props) => {
  const despachar= useDispatch()

  function borraPelicula(e) {
    e.preventDefault();
    despachar(actions.deleteMovie(props.id))
  }

  return (
    <div className="card">
      <button onClick={(e) => borraPelicula(e)}>x</button>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} />
      <p>ReleaseYear: {props.releaseYear}</p> 
      <p>Director: {props.director}</p>
      <Link to={`/movie/${props.id}`} >{props.name}</Link>
    </div>
  );
};

export default MovieCard;
