const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    items: []
}

const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, items: [...state.items, ...action.items]};
        default: return state;
    }
}

export const followActionCreator = (id) => ({type: FOLLOW, id});
export const unfollowActionCreator = (id) => ({type: UNFOLLOW, id});
export const setUsersActionCreator = (items) => ({type: SET_USERS, items});

export default UsersReducer;