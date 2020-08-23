const togglerReducer = (state = false, action) => {
    switch (action.type) {
        case  'TOGGLE_ON':
            return !state;
        default:
            return state;
    }
}

export default togglerReducer;