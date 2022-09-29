import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions"
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateMovie = () => {
  const [input, setInput] = React.useState({
    name: "",
    releaseYear: 0,
    description: "",
    director: "",
  });

  const despachar = useDispatch();
  function escuchaCambios(e) {
    setInput({ ...input, [e.target.name]: e.target.value })

  }

  function despachoFuncion(e) {
    e.preventDefault();
    despachar(actions.createMovie(input))
  }



  return (
    <div>
      <form onSubmit={(e) => despachoFuncion(e)}>
        <label>Name: </label>
        <input type="text" name="name" onChange={(e) => escuchaCambios(e)} value={input.name} />

        <label>ReleaseYear: </label>
        <input type="number" name="releaseYear" onChange={(e) => escuchaCambios(e)} value={input.releaseYear} />

        <label>Description: </label>
        <textarea name="description" onChange={(e) => escuchaCambios(e)} value={input.description} ></textarea>

        <label>Director: </label>
        <input type="text" name="director" onChange={(e) => escuchaCambios(e)} value={input.director} />

        <button type="submit">Create Movie</button>
      </form>

    </div>
  );
};

export default CreateMovie;
