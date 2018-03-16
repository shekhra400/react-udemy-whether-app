export default function(state=null, action){
    switch (action.type) {
    console.log(action.payload.data);
        case 'FETCH_WEATHER':
            return action.payload.data;
        default:
            return state;
    }
}