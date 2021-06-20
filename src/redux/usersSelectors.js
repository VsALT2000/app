import {createSelector} from "reselect";

export const getUsers = (state) => state.usersData.items

export const a = createSelector((getUsers, users) => users.filter(() => true), null); //хз на счёт null

export const getPageSize = (state) => state.usersData.pageSize

export const getTotalUsersCount = (state) => state.usersData.totalUsersCount

export const getCurrentPage = (state) => state.usersData.currentPage

export const getIsFetching = (state) => state.usersData.isFetching

export const getFollowingInProgress = (state) => state.usersData.followingInProgress

export const getIsAuth = (state) => state.auth.isAuth
