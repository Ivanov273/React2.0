import axios from "axios";
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
       headers: {
        'API-KEY' : '86c79010-dccf-4af0-abdb-c44354c00af2'
    }
})

 export const usersAPI = {
     getUsersApi (currentPage= 1,pagesize= 10)  {
         return     instance.get(`users?page=${currentPage}&count=${pagesize}`).then(response=>{
             return response.data
         })

     }
 }