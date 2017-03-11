export default function(state=null, action){
    switch(action.type){
        case 'ADD_DATA':
            state = action.payload;
            break;
    }
    return state
}