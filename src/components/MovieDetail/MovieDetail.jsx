import React from "react";
import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux'
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.
// TIP: Aqui seria un buen momento para utilizar el hook useSelector.

const MovieDetail = (props) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    let movieID = props.match.params.id;
    dispatch(actions.getMovieDetail(movieID));
  },
    [])



  let movieDetail = useSelector(state => state.movieDetail);

  return (
    <div>
      <h2>Name: {movieDetail.name}</h2>
      <img src={movieDetail.image} alt='Img not found' />
      <h4>Año: {movieDetail.releaseYear}</h4>
      <h4>Description: {movieDetail.description}</h4>
      <h4>Director: {movieDetail.director}</h4>
      <h4>id: {movieDetail.id}</h4>
    </div>
  );
};

export default MovieDetail;
