export default function(state=[], action){
    switch(action.type){
        case 'ADD_DATA':
            state = action.payload;
            break;
    }
    return state
}