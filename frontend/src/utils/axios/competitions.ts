import axios from "axios";
import { api } from "../../api.ts";
import challenges from "../stores/challenges.ts";
import filters from "../stores/filters.ts";
import createThemes from "../functions/createThemes.ts";
import seacrhCookies from "../functions/searchCookies.ts";
import usersUtil from "./users.ts";

export class competitions{
    async getAll(){
        try {
            const data = seacrhCookies('auth')
            const res = await axios.get(api.host+api.getAllComp, {auth:{
                username: data.login,
                password: data.password
            }})
            challenges.setChallenges(res.data)
            filters.setComps(res.data)
            filters.setThemes(createThemes(res.data))
        } catch (error) {
            
        }
    }

    async getCompById(id: string){
        try {
            const data = seacrhCookies('auth')
            const res = await axios.get(api.host+api.getCompById+'/'+id, {auth:{
                username: data.login,
                password: data.password
            }})
            challenges.setChallenge(res.data)
        } catch (error) {
            
        }
    }

    async getMembers(id: string){
        try {
            const data = seacrhCookies('auth')
            const res= await axios.get(api.host+api.getMembers+'/'+id,{auth:{
                username: data.login,
                password: data.password
            }})
            let members: any[] = [];
            const user = new usersUtil()
            for( let el of res.data){
                const r = await user.getUser(el)
                members.push(r)
            }
            challenges.setPlayers(members)

        } catch (error) {
            
        }
    }

    async subscribe(id: string, login: string){
        try {
            const data = seacrhCookies('auth')
            const res = await axios.post(api.host+api.subToComp+'?id='+id+'&login='+login, {}, {auth:{
                username: data.login,
                password: data.password
            }})
            this.getMembers(id)
        } catch (error) {
            
        }
    }
}