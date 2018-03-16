export default function(state=null, action){
    switch (action.type) {
        case 'FETCH_WEATHER':
            return action.data.list;            
    
        default:
            return state;
    }
}