import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "13670efa-b75d-4625-9a92-1a24a4b65c25"
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
    async getProfile(id) {
        return await instance.get(`profile/${id}`).then(response => {
            return response.data;
        })
    },
    async getStatus(id) {
        return await instance.get(`profile/status/${id}`).then(response => {
            return response.data;
        })
    },
    async putStatus(status) {
        return await instance.put(`profile/status`, {status}).then(response => {
            return response.data;
        })
    },
    async putPhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo);
        return await instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            return response.data;
        });
    },
    async putProfile(profile) {
        return await instance.put(`profile`, profile).then(response => {
            return response.data;
        });
    }
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
    async getCaptcha() {
        return await instance.get(`/security/get-captcha-url`).then(response => {
            return response.data;
        })
    },
}