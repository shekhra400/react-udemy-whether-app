export default function(state=null, action){
    console.log();
    switch (action.type) {
        case 'FETCH_WEATHER':
            return action.payload.data;
        default:
            return state;
    }
}