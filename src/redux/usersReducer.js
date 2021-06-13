import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

let initialState = {
    items: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}

const follow = (id) => ({type: FOLLOW, id});
const unfollow = (id) => ({type: UNFOLLOW, id});
const setUsers = (items) => ({type: SET_USERS, items});
const setCurrentPage = (page) => ({type: SET_PAGE, page});
const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const toggleFollowingInProgress = (followingInProgress, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    followingInProgress,
    userId
});

export const setUsersTC = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        await usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const updateUsersTC = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
        });
    }
}

export const postFollowTC = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        usersAPI.postFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id));
            }
            dispatch(toggleFollowingInProgress(false, id));
        });
    }
}

export const deleteFollowTC = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        usersAPI.deleteFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(id));
            }
            dispatch(toggleFollowingInProgress(false, id));
        });
    }
}

export default UsersReducer;