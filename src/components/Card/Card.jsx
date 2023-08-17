import styled from "styled-components";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/action";
import {useState, useEffect} from "react";
import { connect } from "react-redux";

const DivCard = styled.div`
  display: inline-block;
  background-color: rgba(11, 36, 11, 0.7);
  border-radius: 25px;
  color: white;
  overflow: hidden;
  margin: 15px 10px;
  max-width: 18.8rem;
`;

const Button = styled.button`
  background-color: grey;
  color: green;
  border: 0px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-weigth: bold;
  font-size: 15px;
  margin: 15px 15px 0px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const styleSpecies = {
  display: "inline-block",
  fontSize: "16px",
  color: "blue",
  marginRight: "15px",
  marginTop: "-10px",
};

const styleGender = {
  display: "inline-block",
  fontSize: "16px",
  color: "red",
  marginTop: "-10px",
};

export function Card({
  onClose,
  name,
  status,
  species,
  gender,
  origin,
  image,
  id,
  addFav,
  removeFav,
}) {
  const [isFav, setIsFav] = useState(false);


  useEffect(() => {
    favorites &&
    favorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [favorites]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        name: name,
        species: species,
        gender: gender,
        image: image,
        id: id,
      });
    }
  }

  return (
    <DivCard>
      {isFav ? (
        <Button onClick={handleFavorite}>❤️</Button>
      ) : (
        <Button onClick={handleFavorite}>🤍</Button>
      )}
      <Button onClick={onClose}>X</Button>
      <Link to={`/datail/${id}`}>
        {" "}
        <h2 style={{ color: "white", textDecoration: "none" }}>{name}</h2>{" "}
      </Link>
      {/*  <h4>{status}</h4> */}
      <h4 style={styleSpecies}>{species}</h4>
      <h4 style={styleGender}>{gender}</h4>
      {/* {<h4>{origin}</h4>} */}
      <img style={{ display: "block" }} src={image} alt="" />
    </DivCard>
  );
}

// en proximas implementaciones en un div style={{display: "flex", justifyContent: "space-between" }}

export function mapStateToProps(state){
  return {
    favorites: state.favorites
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (personaje) {
      dispatch(addFav(personaje));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export default connect(null, mapDispatchToProps);
