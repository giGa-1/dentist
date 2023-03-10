
const initialState = {
    isAuth: false
}


export const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_AUTH_CHANGE': {
            return {...state, isAuth: action.info.value}
        }
        default: 
            return state
    }
}

export const isAuthChange = (info)=>({
    type: 'IS_AUTH_CHANGE', info
})