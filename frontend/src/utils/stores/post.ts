import { makeAutoObservable } from "mobx";

class postStore{
    constructor(){
        makeAutoObservable(this)
    }

    private _post: any;
    private _comments: any=[];
    private _comment: any;

    getPost(){
        return this._post;
    }

    setPost(post: any){
        this._post=post;
    }

    getComments(){
        return this._comments;
    }

    setComments(comments: any){
        this._comments=comments;
    }

    getComment(){
        return this._comment;
    }

    setComment(comment: any){
        this._comment=comment;
    }



}

export default new postStore()