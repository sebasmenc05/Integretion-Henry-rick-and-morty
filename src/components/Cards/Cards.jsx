import Card from '../Card/Card';
import SContainers from '../SContainer/SContainers';
export default function Cards({characters}) {

   
   return (
   <SContainers>
      {characters.map(characters => 
         <Card 
            key={characters.id}
            name={characters.name}
            status={characters.status}
            species={characters.species}
            gender={characters.gender}
            origin={characters.origin.name}
            image={characters.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />)}
   </SContainers>
   );
}
