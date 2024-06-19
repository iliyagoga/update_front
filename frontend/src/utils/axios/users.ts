import axios from "axios";
import { api } from "../../api.ts";
import seacrhCookies from "../functions/searchCookies.ts";

export default class usersUtil{
    constructor(){}

    async getUser(login: string){
        try {
            const data = seacrhCookies('auth')
            const res = await axios.get(api.host+api.getUser+'/'+login, {auth:{
                username: data.login,
                password: data.password
            }})
            return res.data
        } catch (error) {
            
        }
    }
}