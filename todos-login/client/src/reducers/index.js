const initState = {
    currentUserData: {},
    currentUserId: ''
}

export default function rootReducer(state=initState, action) {
    switch(action.type) {
        case 'SIGNUP_SUCCESS': {
            return state;
        }
        case 'LOGIN_SUCCESS': {
            console.log(action.data)
            let user = {
                userInfo: action.data,
                userData: []
            }
            return {
                currentUserData: user,
                currentUserId: action.data._id
            }
        }
        case 'GETTING_SUCCESSFULL': {
            return {
                ...state,
                currentUserData: {
                    ...state.currentUserData, 
                    userData: action.data.todos
                }

            }
        } 
        case 'LOGOUT_SUCCESS': {
            return {
                ...state,
                currentUserData: {},
                currentUserId: ''
            }
        }
        default: 
        return state
    }
}