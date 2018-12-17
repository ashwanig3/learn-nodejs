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
                allBlogs: [...state.allBlogs],
                currentUserId: action.data._id
            }
        }
       
        case 'PUBLISHED_SUCCESS': {
            const data = action.data.blog;
            console.log(data)
            return {
                ...state,
                currentUserData: {...state.currentUserData,
                    userInfo: {...state.currentUserData.userInfo},
                    allArticles: [...state.currentUserData.allArticles, data]
                }
                
            }
            
            
        }
        case 'LOGOUT_SUCCESS': {
            return {
                ...state,
                allBlogs: [...state.allBlogs],
                currentUserData: {},
                currentUserId: ''
            }
        }
        case 'STORE_ARTICLES': {
            return {
                ...state,
                allBlogs: action.data
            }
        }
        
        default:
            return state;
    }
    
}