import { makeAutoObservable } from "mobx";

class qaStore{
    constructor(){
        makeAutoObservable(this)
    }

    private _qas: any = [];
    private _qa: any;

    getQAs(){
        return this._qas;
    }

    setQAs(qas: any){
        this._qas=qas;
    }

    getQA(){
        return this._qa;
    }

    setQA(qa: any){
        this._qa=qa;
    }
}
export default new qaStore()