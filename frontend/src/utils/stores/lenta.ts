import { makeAutoObservable } from "mobx"

class lentaStore{
    constructor(){
        makeAutoObservable(this)
    }

    private _posts: any = [];

    getPosts(){
        return this._posts;
    }

    setPosts(posts: any){
        this._posts=posts;
    }
}
export default new lentaStore()