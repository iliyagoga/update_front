import { makeAutoObservable } from "mobx"

class chatsStore{
    constructor(){
        makeAutoObservable(this)
    }

    private _chats: any = [];

    getChats(){
        return this._chats;
    }

    setChats(chats: any){
        this._chats=chats;
    }
}
export default new chatsStore()