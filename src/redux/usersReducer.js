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
    followingInProgress: [],
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, items: state.items.map(u => u.id === action.id ? {...u, followed: true} : u)};
        case UNFOLLOW:
            return {...state, items: state.items.map(u => u.id === action.id ? {...u, followed: false} : u)};
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
    userId,
});

export const setUsersTC = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

export const updateUsersTC = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
}

const successAction = (dispatch, action, toggleInProgress, id, data) => {
    if (data.resultCode === 0)
        dispatch(action(id));
    dispatch(toggleInProgress(false, id));
}

export const postFollowTC = (id) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, id));
    const data = await usersAPI.postFollow(id)
    successAction(dispatch, follow, toggleFollowingInProgress, id, data);
}

export const deleteFollowTC = (id) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, id));
    const data = await usersAPI.deleteFollow(id)
    successAction(dispatch, unfollow, toggleFollowingInProgress, id, data);
}

export default UsersReducer;