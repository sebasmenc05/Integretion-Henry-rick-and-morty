import Card from "../Card/Card";
import { Connect, connect } from "react-redux";
import SContainers from "../SContainer/SContainers";

export function Favorites({ favorites }) {
  return (
    <SContainers>
      {favorites.map((e, i) => (
        <Card 
        key={e.id}
        id={e.id}
        name={e.name}
        status={e.status}
        species={e.species}
        gender={e.gender}
        origin={e.origin.name}
        image={e.image}
        onClose={()=> onClose(e.id)}
     />      ))}
    </SContainers>
  );
}

export function mapStateToProps(state){
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, null)(Favorites)