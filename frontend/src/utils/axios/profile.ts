import axios from 'axios'
import { config } from '../../config'
import { api } from '../../api.ts'
import profile from '../stores/profile.ts'
import { Requests } from './auth.ts'
import seacrhCookies from '../functions/searchCookies.ts'
import profilePerson from '../stores/profilePerson.ts'
class profileUtil{

    async request(data: any){
        try {
            const o = new Requests()
            const res = await o.auth(data.login, data.password)
            if(!res){
               return false 
            }
            await this.getUserByMe()
            await this.getMePosts()
            profile.setSkills(['1C','Java','Js','C++'])
            return true
            
        } catch (error) {
            
        }
    }
    async request2(login: string, data: any){
        try {
            const o = new Requests()
            const res = await o.auth(data.login, data.password)
            if(!res){
               return false 
            }
            await this.getUserByLogin(login)
            await this.getLoginPosts(login)
            profilePerson.setSkills(['1C','Java','Js','C++'])
            return true
            
        } catch (error) {
            
        }
    }
    async getUserByMe(){
        try {
            const data = seacrhCookies('auth')
            const res = await axios.get(api.host+api.getUserByLogin+'/'+data.login, {auth:{
                username: data.login,
                password: data.password
            }})
            profile.setName(res.data.name)
            profile.setSername(res.data.surname)
            profile.setPar(res.data.patronymic)
            profile.setAvatar(res.data.avatar)
            profile.setEmailLink(res.data.email)
            profile.setTgLink(res.data.telegram)
            profile.setGitLink(res.data.git)
            profile.setTextAboutMe(res.data.description)
            profile.setRole(res.data.status)
        } catch (error) {
            
        }
    }
    async getUserByLogin(login: string){
        try {
            const data = seacrhCookies('auth')
            const res = await axios.get(api.host+api.getUserByLogin+'/'+login, {auth:{
                username: data.login,
                password: data.password
            }})
            profilePerson.setName(res.data.name)
            profilePerson.setSername(res.data.surname)
            profilePerson.setPar(res.data.patronymic)
            profilePerson.setAvatar(res.data.avatar)
            profilePerson.setEmailLink(res.data.email)
            profilePerson.setTgLink(res.data.telegram)
            profilePerson.setGitLink(res.data.git)
            profilePerson.setTextAboutMe(res.data.description)
            profilePerson.setRole(res.data.status)
        } catch (error) {
            
        }
    }
    
    async getMePosts(){

        try {
            const data = seacrhCookies('auth')
            if(profile.getRole()=='student'){
                const res = await axios.get(api.host+api.getAllArticles, {auth:{
                    username: data.login,
                    password: data.password
                }})
                res.data=res.data.filter((v)=>{if(v.author==data.login) return v})
                profile.setArticles(res.data)
            }
            if(profile.getRole()=='teacher'){
                const res = await axios.get(api.host+api.getAllComp, {auth:{
                    username: data.login,
                    password: data.password
                }})
                res.data=res.data.filter((v)=>{if(v.author==data.login) return v})
                profile.setArticles(res.data)
            }
           

        } catch (error) {
            
        }
        

    }

    async getLoginPosts(login: string){

        try {
            const data = seacrhCookies('auth')
            if(profilePerson.getRole()=='student'){
                const res = await axios.get(api.host+api.getAllArticles, {auth:{
                    username: data.login,
                    password: data.password
                }})
                res.data=res.data.filter((v)=>{if(v.author==login) return v})
                profilePerson.setArticles(res.data)
            }
            if(profilePerson.getRole()=='teacher'){
                const res = await axios.get(api.host+api.getAllComp, {auth:{
                    username: data.login,
                    password: data.password
                }})
                res.data=res.data.filter((v)=>{if(v.author==login) return v})
                profilePerson.setArticles(res.data)
            }
           

        } catch (error) {
            
        }
        

    }
}

export default profileUtil