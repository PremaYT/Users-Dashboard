import axios from 'axios'

export const startGetUsers = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    return (dispatch) => {
        axios.get(url)
            .then(({data}) => {
                dispatch(getUsers(data))
            })
            .catch(err => alert(err.message))
    }
}

const getUsers = (data) => {
    return {
        type : 'GET_USERS',
        payload : [...data]
    }
}

export const startDeleteUser = (id) => {
    return (dispatch) => {
        
        dispatch({
            type : 'DELETE_USER',
            payload : id
        })
    }
}

