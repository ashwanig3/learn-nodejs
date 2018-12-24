const url = 'http://localhost:8000/api'

export const signUpAction = (data) => {
    return (dispatch) => {
      fetch(`${url}/signup`, {
        method : "POST", 
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
      }).then(res => res.json())
      .then(data => {
          console.log(data)
        if(data.responseStatus === '200') {
          dispatch({type: 'SIGNUP_SUCCESS', data})
        } else {
          dispatch({type: 'SIGNUP_ERR', data})
        }
      })
    }
  }

  export const logInAction = (data) => {
    return (dispatch) => {
      fetch(`${url}/login`, {
        method : "POST", 
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
      }).then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.user._id) {
          dispatch({type: 'LOGIN_SUCCESS', data: data.user})
        } else {
          dispatch({type: 'LOGIN_ERR', data})
        }
      })
    }
    
  }

  export function addTodo(data) {
    return (dispatch) => {
      fetch(`${url}/create`, {
        method : "POST", 
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
      }).then(res => res.json())
      .then(data => {
        console.log(data)
        if(data) {
          dispatch({type: 'POST_SUCCESS', data})
        } else {
          dispatch({type: 'POST_ERR', data})
        }
      })
    }
  }

  export function getTodos(id) {
    return dispatch => {
      fetch(`${url}/user/${id}/todos`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch({type: 'GETTING_SUCCESSFULL', data})
      })
    }
  }

  export function deleteTodoItem(id) {
    return dispatch => {
      fetch(`${url}/delete`, {
        method : "DELETE", 
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({ id })
      }).then(res => res.json())
      .then(data => {
        console.log(data)
        if(data) {
          dispatch({type: 'GETTING_SUCCESSFULL', data})
        } else {
          dispatch({type: 'DELETE_ERR', data})
        }
      })
    }
  }

  export function isLoggedIn() {
    return dispatch => {
      fetch(`/api/isLoggedIn`)
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'LOGIN_SUCCESS', data: data.user})
      })
    }
  }
  export function loggedOut() {
    return dispatch => {
      fetch('/api/logout').then(res => res.json())
      .then(data => {
        dispatch({type: 'LOGOUT_SUCCESS', data})
      })
    }
  }
  

  export function loginByGoogle() {
    return dispatch => {
      fetch('/auth/google/callback').then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch({type: 'LOGIN_SUCCESS_GOOGLE', data})
      })
    }
  }