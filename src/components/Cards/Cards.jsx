import Card from '../Card/Card';
import SContainers from '../SContainer/SContainers';



export default function Cards({characters, onClose}) {   
   return (
   <SContainers>
      {characters.map(characters => 
         <Card 
            key={characters.id}
            id={characters.id}
            name={characters.name}
            status={characters.status}
            species={characters.species}
            gender={characters.gender}
            origin={characters.origin.name}
            image={characters.image}
            onClose={()=> onClose(characters.id)}
         />)}
   </SContainers>
   );
}
