export default function(state=null, action){
	console.log('but this one is also called ')
	switch(action.type){
		case 'ADD_DATA':
			state = action.payload;
			break;
	}
	return state
}