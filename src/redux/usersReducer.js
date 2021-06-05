const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    items: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
            return {...state, items: action.items};
        case SET_PAGE:
            return {...state, currentPage: action.page};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default: return state;
    }
}

export const follow = (id) => ({type: FOLLOW, id});
export const unfollow = (id) => ({type: UNFOLLOW, id});
export const setUsers = (items) => ({type: SET_USERS, items});
export const setCurrentPage = (page) => ({type: SET_PAGE, page});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default UsersReducer;