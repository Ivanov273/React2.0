import axios from "axios";
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
       headers: {
        'API-KEY' : '86c79010-dccf-4af0-abdb-c44354c00af2'
    }
})

 export const headerAPI = {

     apiAuth ()  {
         return     instance.get(`auth/me`)

     }
 }
/*axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })*/