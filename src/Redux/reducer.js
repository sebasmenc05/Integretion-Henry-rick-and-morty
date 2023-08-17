import { ADD_FAV, REMOVE_FAV } from "./action"  


const initialState = {
    favorites: []
}

const reducer =(state = initialState, {type, payload}) =>{
    switch(type){
        case ADD_FAV:
            return{
                ...state,
                favorites:[...state.favorites ,payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                favorites : state.favorites.filter((fav) => fav.id !== Number(payload) )
            }
        default:
            return{
                ...state
            }    
    }

}

export default reducer