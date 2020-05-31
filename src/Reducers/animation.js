const animationReducer = (state = false, action)=> {
    switch (action.type) {
        case 'animationOn':
            return !state
        case 'animationOff':
            return !state   
        default:
            return state
    }
}

export default animationReducer;