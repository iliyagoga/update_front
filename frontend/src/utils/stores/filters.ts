import { makeAutoObservable } from "mobx";

class filtersStore{
    constructor(){
        makeAutoObservable(this)
    }

    private _themes: string[]
    private _def_qas: any[]
    private _def_posts: any[]
    private _def_comps: any[]

    getThemes(){
        return this._themes;
    }

    setThemes(themes: string[]){
        this._themes=themes
    }

    getQA(){
        return this._def_qas;
    }

    setQA(qas: any[]){
        this._def_qas=qas
    }

    getPosts(){
        return this._def_posts;
    }

    setPosts(posts: any[]){
        this._def_posts=posts
    }

    getComps(){
        return this._def_comps;
    }

    setComps(comps: any[]){
        this._def_comps=comps
    }
}
export default new filtersStore()