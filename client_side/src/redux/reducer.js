const init = {
    user:[],
    role:{}
}


const userReducer = (state=init,action) =>{
    switch (action.type) {
        case 'ADD_USER':
        return{
            ...state,
            user:action.payload
        }
        case 'CURRENT':
        return{
            ...state,
            user:action.payload
        }
        case 'ROLE':
            return{
                ...state,
                role:action.payload
            }
        default: return state
    }
}

export default userReducer