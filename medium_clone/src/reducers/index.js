const initState = {
    allUsers: [],
    currentUserData: {},
    allBlogs:[],
    currentUserId: ''
}

export default function rootReducer(state = initState,  action) {
    switch(action.type) {
        case 'SIGNUP_SUCCESS': 
        return state;
        case 'LOGIN_SUCCESS': {
            let user = {
                userInfo: action.data,
                allArticles:[]
            }
            console.log(user)
            return {
                currentUserData: user,
                currentUserId: action.data._id
            }
        }
       
        case 'PUBLISHED_SUCCESS': {
            const data = action.data.blog;
            console.log(data)
            return state;
            // {
            //     ...state,
            //     currentUserData: {
            //         userInfo: {...state.currentUserData.userInfo},
            //         allArticles: [...state.currentUserData.allArticles, data]
            //     }
                
            // }
        }
        
        default:
            return state;
    }
    
}