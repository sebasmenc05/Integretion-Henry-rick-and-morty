import Card from './Card';

export default function Cards({characteres}) {

   
   return (
   <div>
      {characteres.map(characteres => 
         <Card 
            key={characteres.id}
            name={characteres.name}
            status={characteres.status}
            species={characteres.species}
            gender={characteres.gender}
            origin={characteres.origin.name}
            image={characteres.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />)}
   </div>
   );
}
