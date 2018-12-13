const initState = {
    users: [],
    currentUser: {}
}

export default function rootReducer(state = initState,  action) {
    switch(action.type) {
        case 'SIGNUP_SUCCESS': 
        return state;
        case 'LOGIN_SUCCESS': 
        console.log(action.data)
        return {
            currentUser: action.data
        }
        default:
            return state;
    }
    
}