import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"4ea25f42-325c-423b-b922-486c47047752"
    }
})

// export const getUsers = (currentPage:number = 1, pagesSize:number = 10) => {
//     return instanse.get(`users?page=${currentPage}&count=${pagesSize}`)
//         .then(response => {
//         return response.data
//     })
// }

export const usersAPI ={
    getUsers (currentPage:number = 1, pagesSize:number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId:number){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId:number){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId:string){
        console.warn("Obsolete method. Please use profileAPI object")
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI ={
    getProfile(userId:string){
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId:string){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status:string){
        return instance.put(`profile/status/`, {status})
    }


}

export const authAPI ={
    me () {
        return instance.get(`auth/me`)
},
    login (email:string, password:string, rememberMe=false){
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    logout (){
        return instance.delete(`auth/login`)
    }

}