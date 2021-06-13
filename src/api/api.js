import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "20c5238c-c861-423e-84e3-86c6589b78e0"
    }
});

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 4) {
        return await instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    async postFollow(id) {
        return await instance.post(`follow/${id}`).then(response => {
            return response.data;
        })
    },
    async deleteFollow(id) {
        return await instance.delete(`follow/${id}`).then(response => {
            return response.data;
        })
    }
}

export const profileAPI = {
    async getProfile(id = 2) {
        return await instance.get(`profile/${id}`).then(response => {
            return response.data;
        })
    },
    async getStatus(id = 2) {
        return await instance.get(`profile/status/${id}`).then(response => {
            return response.data;
        })
    },
    async putStatus(status) {
        return await instance.put(`profile/status`, {status}).then(response => {
            return response.data;
        })
    },
}

export const authAPI = {
    async getAuthMe() {
        return await instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },
    async postAuthLogin(data) {
        return await instance.post(`auth/login`, {...data}).then(response => {
            return response.data;
        })
    },
    async deleteAuthLogin() {
        return await instance.delete(`auth/login`).then(response => {
            return response.data;
        })
    },
}