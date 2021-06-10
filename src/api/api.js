import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "20c5238c-c861-423e-84e3-86c6589b78e0"
    }
});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 4) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    postFollow: (id) => {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        })
    },
    deleteFollow: (id) => {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        })
    }
}

export const profileAPI = {
    getProfile: (id = 2) => {
        return instance.get(`profile/${id}`).then(response => {
            return response.data;
        })
    },
}

export const authAPI = {
    getAuthMe: () => {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },
}