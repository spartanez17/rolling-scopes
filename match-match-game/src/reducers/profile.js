import { SET_PROFILE_INFO } from '../actions'

const initialState = {
        firstName: "First Name",
        secondName: "Second Name",
        email: "Your@email.pls",
    
};

const profile = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_INFO:
            return action.profile
        default:
            return state
    }
}

export default profile;
