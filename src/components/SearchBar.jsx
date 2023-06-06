export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={() => props.onSearch('Esto es un Id')}>Agregar</button>
      </div>
   );
}
