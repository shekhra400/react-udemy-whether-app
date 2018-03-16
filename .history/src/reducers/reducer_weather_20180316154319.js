export default function(state=null, action){
    console.log(action.payload);
    switch (action.type) {
        case 'FETCH_WEATHER':
            return action.data;
        default:
            return state;
    }
}