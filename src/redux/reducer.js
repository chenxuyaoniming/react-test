
import action from './action'

function reducer(state = {song:''},action){
    switch(action.type){
        case 'url':
            console.log(action,'action')
            return Object.assign({},state,{song:action.song,id:action.type}) ;
        case 'list':
            return Object.assign({},state,{songList:action.song,id:action.type}) ;
        default:
            return state
    }
}

export default reducer