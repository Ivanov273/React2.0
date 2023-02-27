import axios from "axios";
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY' : '28c22174-c814-44e0-8cd0-1256fb0570f4'
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
        return     instance.get(`profile/${userid}`)

    },
    apiAuth ()  {
        return     instance.get(`auth/me`)

    },
    apiLogin (email,password,rememberMe,captcha)  {

        return     instance.post(`auth/login`,{email:email,password:password,rememberMe:true,captcha:captcha})

    },
    apiDeleteLogin ()  {

        return     instance.delete(`auth/login`)

    },
    apiProfileStatus(userid){
        return instance.get(`profile/status/${userid}`)
    },
    apiUpdateProfileStatus(status){

        return instance.put(`profile/status/`,{status: status})
    },
    apiUpdateDataToProfile(data){
        return instance.put(`profile`,data)
    },
    apiCaptcha(){
        return instance.get(`security/get-captcha-url`)
    },
    savePhoto(photofile){
        const formData = new FormData()
        formData.append("image", photofile)
        return instance.put(`profile/photo/`,formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
/*axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })*/