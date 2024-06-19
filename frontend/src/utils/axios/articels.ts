import axios from "axios"
import lenta from "../stores/lenta.ts"
import { api } from "../../api.ts"
import { Requests } from "./auth.ts"
import filters from "../stores/filters.ts"
import createThemes from "../functions/createThemes.ts"
import post from "../stores/post.ts"
import seacrhCookies from "../functions/searchCookies.ts"


export default class articles{
    constructor(){}

    async getAll(){
        const data = seacrhCookies('auth')
        const res = await axios.get(api.host+api.getAllArticles, {auth:{
            username: data.login,
            password: data.password
        }})
        lenta.setPosts(res.data)
        filters.setPosts(res.data)
        filters.setThemes(createThemes(res.data))
        
    }

    async getPostById(id: string){
        const data = seacrhCookies('auth')
        const res = await axios.get(api.host+api.getArticleById+'/'+id, {auth:{
            username: data.login,
            password: data.password
        }})
        post.setPost(res.data)
        
    }
}