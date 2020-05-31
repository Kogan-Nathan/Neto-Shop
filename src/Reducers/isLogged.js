const isLoggedReducer = (state = false, action)=> {
    switch (action.type) {
        case 'isLogged':
            return !state   
        case 'isLoggedOut':
            return !state
        default:
            return state
    }
}

export default isLoggedReducer;