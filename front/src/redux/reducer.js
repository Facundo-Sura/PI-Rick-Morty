import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes"

const initialState = {
    myFavorites: [],
    allCharacters:[]
}
function reducer(state = initialState, { type, payload }){
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[payload, ...state.allCharacters],
                allCharacters:[payload, ...state.allCharacters]
                }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== payload),
                allCharacters: state.allCharacters.filter(char=> char.id !== payload)
            }
        case FILTER:
            const genderFiltered = state.allCharacters.filter(char => char.gender === payload)
            return {
                ...state,
                myFavorites:payload === 'All' ? state.allCharacters : genderFiltered
            }
        case ORDER:
            const orderCharacter = state.myFavorites.sort((a,b)=>{
                if(payload === 'ascendente') return a.id - b.id
                return b.id - a.id
            })
            return {
                ...state,
                myFavorites:[...orderCharacter]
            }
        default:
            return state
    }
}

export default reducer