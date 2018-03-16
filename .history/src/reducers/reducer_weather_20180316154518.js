export default function(state=null, action){
    switch (action.type) {
        case 'FETCH_WEATHER':
            console.log(action.payload.data);
            return action.payload.data;
        default:
            return state;
    }
}