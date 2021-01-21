import axios from "axios";


const instanse = axios.create({
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
        return instanse.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(response => {
                return response.data
            })
    }
}