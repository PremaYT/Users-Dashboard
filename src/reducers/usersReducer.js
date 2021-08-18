const initialValue = []

export const usersReducer = (state=initialValue, action) => {
    switch(action.type){
        case 'GET_USERS' : {
            return action.payload
        }
        case 'DELETE_USER' : {
            console.log(action.payload)
            const result = state.filter(ele => ele.id !== action.payload)
            return result
        }
        default : {
            return [...state]
        }
    }

}