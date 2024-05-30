// export default {
//
// }

// export default class UserDetail{
//     constructor() {
//         this.id  = 1;
//         this.userName = '';
//         this.userEmail = '111@google.com';
//     }
// }
// class UserDetail{
//     constructor() {
//         this.id  = 1;
//         this.userName = 'jini';
//         this.userEmail = '111@google.com';
//     }
// }
//
// export default new UserDetail();
import {defineStore} from "pinia";
export const useUserDetailStore = defineStore('userDetail',{
    state:()=>{
        return {
            id:null,
            username: null,
            email:null
        }
    },
    actions:{
        isAuthenticated(){
            if(this.username)
                return true;
            return false;
        },

        invalidate(){
            this.id = null;
            this.username = null;
            this.email = null;
        },

        setAuth(userInfo){

        }
    }

})