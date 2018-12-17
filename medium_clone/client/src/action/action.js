const url = 'http://localhost:4000'


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
        if(data.userData._id) {
          dispatch({type: 'LOGIN_SUCCESS', data: data.userData})
        } else {
          dispatch({type: 'LOGIN_ERR', errData: data})
        }
      })
    }
  }

  export const postArticle = (data) => {
    return (dispatch) => {
      fetch(`${url}/new`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.blog._id) {
            dispatch({type: 'PUBLISHED_SUCCESS', data})
          } else {
            dispatch({type: "PUBLISHED_UNSUCCESS", errData: data})
          }
        })
    }
  }