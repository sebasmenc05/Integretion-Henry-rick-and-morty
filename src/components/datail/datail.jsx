import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";




export default function Datail() {

    const {id} = useParams();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacters(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacters({});
     }, [id]);

    return(
        <div>
            <h1>Aca van los detalles de las cards</h1>
            <div>
                {characters.name && <p><b>Name: </b>{characters.name}</p>}
                {characters.status && <p><b>Status: </b>{characters.status}</p>}
                {characters.species && <p><b>Species: </b>{characters.species}</p>}
                {characters.gender && <p><b>Gender: </b>{characters.gender}</p>}
                {characters.origin && <p><b>Origin: </b>{characters.origin.name}</p>}
            </div>         
        </div>
    )
}