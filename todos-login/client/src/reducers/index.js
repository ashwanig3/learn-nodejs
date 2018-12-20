const initState = {
    currentUserData: {},
    currentUserId: '',
    errMsg: ''
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
        case 'LOGIN_ERR': {
            console.log(action.data)
            return {
                ...state,
                errMsg: action.data
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