import axios from 'axios'
import { api } from '../../api.ts';
import seacrhCookies from '../functions/searchCookies.ts';
export class Requests{
    
    async auth(login: string, pass: string){
        try {
            const res =  await axios.get(api.host+api.auth, {auth:{
                username: login,
                password: pass
            }})
            if(seacrhCookies('auth')==0){
                let date = new Date(Date.now() + 86400e3);
                document.cookie='auth='+JSON.stringify(res.data)+'; expires='+date.toUTCString()
            }
            return true
        } catch (error) {
            return false
        }
     
    }
}