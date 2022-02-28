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

     } ,
     getunFollowUsersApi (id= 1)  {

         return     instance.delete(`follow/${id}`)

     },
     getFollowUsersApi (id= 1)  {

         return     instance.post(`follow/${id}`)

     },
     getProfile (userid=5)  {
         return     ProfileAPI.getProfile(userid)

     },
     apiAuth ()  {
         return     instance.get(`auth/me`)

     }
 }
export const ProfileAPI = {
     getProfile (userid=5)  {
        return     instance.get(`profile/${userid}`)

    },
    getStatus(userid){
         return instance.get(`profile/status/`+userid)
    },
    updateStatus(status){
         return instance.put(`profile/status/`,{status: status})
    }
}
/*axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })*/