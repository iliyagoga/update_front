import { makeAutoObservable } from "mobx";

class profilePersonStore{
    private _avatar: any;
    private _gitLink: string = 'https://git-scm.com/';
    private _tgLink: string = '@nickName';
    private _emailLink: string = 'email@gmail.com';

    private _loadImage: Blob;

    private _name: string;
    private _sername: string;
    private _par: string;
    private _textAboutMe: string;

    private _role: string;

    private _articles: any =[];

    private _skiils: string[] = [];
    constructor(){
        makeAutoObservable(this)
    }

    getAvatar(){
        return this._avatar;
    }

    setAvatar(avatar: any){
        this._avatar=avatar;
    }

    getTgLink(){
        return this._tgLink;
    }

    setTgLink(tg: string){
        this._tgLink=tg;
    }

    getGitLink(){
        return this._gitLink;
    }

    setGitLink(git: string){
        this._gitLink=git;
    }

    getEmailLink(){
        return this._emailLink;
    }

    setEmailLink(email: string){
        this._emailLink=email;
    }

    getLoadImage(){
        return this._loadImage;
    }

    setLoadImage(loadImage: Blob){
        this._loadImage=loadImage;
    }

    getName(){
        return this._name;
    }

    setName(name: string){
        this._name=name;
    }

    getSername(){
        return this._sername;
    }

    setSername(sername: string){
        this._sername=sername;
    }

    getPar(){
        return this._par;
    }

    setPar(par: string){
        this._par=par;
    }

    getTextAboutMe(){
        return this._textAboutMe;
    }

    setTextAboutMe(text: string){
        this._textAboutMe=text;
    }

    getArticles(){
        return this._articles;
    }

    setArticles(articles: any){
        this._articles=articles;
    }

    getSkills(){
        return this._skiils;
    }

    setSkills(skills: string[]){
        this._skiils=skills;
    }

    setRole(role: string){
        this._role=role;
    }

    getRole(){
        return this._role;
    }
    
    
}

export default new profilePersonStore()