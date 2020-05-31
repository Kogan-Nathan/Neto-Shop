const userIndexReducer = (state = '', action)=> {
    switch (action.type) {
        case 'newIndex':
            return state = action.indexData  
        case 'resetIndex':
            return state = ''
        default:
            return state
    }
}

export default userIndexReducer;