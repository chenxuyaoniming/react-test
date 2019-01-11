
import action from './action'

function reducer(state = {song:''},action){
    switch(action.type){
        case 'url':
            console.log(action.song,'action')
            return Object.assign({},state,{song:action.song}) ;

        default:

            return state
    }
}

export default reducer