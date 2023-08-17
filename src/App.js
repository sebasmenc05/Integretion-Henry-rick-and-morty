import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Cards from './components/Cards/Cards';
import Datail from './components/datail/datail';
import Forms from './components/Forms/Forms';
import Favorites from './components/Favorites/Favorites';


function App() {

   const  [ characters, setCharacters] = useState ([]); 
   const onSearch = (id) => {
      if (characters.find(char => char.id === parseInt(id))){
         alert (`Ya existe el personaje con id ${id}`)
      }else {

         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if(data.name){
               setCharacters((oldChars) => [...oldChars, data]);
            }
            else{
               alert(`Ya existe el personaje con el id ${id}`)
            }
         
         }).catch(err => alert(err.response.data.error))
      }
   }

   function onClose(id){
      setCharacters(characters.filter((char) => char.id !== id));
   }

   const location = useLocation();

   const [acces, setAcces] = useState(false); 

   const navigate = useNavigate();
   const PASSWORD = 'Password%1';
   const EMAIL = 'ejemplo@gmail.com';


   function login (userData){
     if(userData.password === PASSWORD && userData.email === EMAIL) {
      setAcces(true);
      navigate("/home")
     }
   }

   useEffect (()=>{
      !acces && navigate("/")
   }, [acces])

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch = {onSearch}/> } 
         <Routes> 
            <Route path='/' element={<Forms login={login} />} > </Route> 
            <Route path='/home' element ={<Cards characters={characters} onClose={onClose} />} > </Route>      
            <Route path='/about' element = {<About />}> </Route>  
            <Route path='/datail/:id' element ={<Datail />} />    
            <Route path='/favorites' element ={<Favorites />} />    
            
         </Routes>
      </div>
   );
}

export default App;
