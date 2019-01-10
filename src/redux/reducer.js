
import action from './action'

function reducer(state = {url:null},action){
    switch(action.type){
        case 'url':
            return Object.assign({},state,{url:action.url})

        default:

            return state
    }
}

export default reducer