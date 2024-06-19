import { makeAutoObservable } from "mobx";

class challengesStore{
    constructor(){
        makeAutoObservable(this)
    }

    private _challenges: any = [];
    private _challenge: any;

    private _players: any = [];
    private _player: any;

    getChallenges(){
        return this._challenges;
    }

    setChallenges(chls: any){
        this._challenges=chls;
    }

    getChallenge(){
        return this._challenge;
    }

    setChallenge(chl: any){
        this._challenge=chl;
    }
    
    getPlayers(){
        return this._players;
    }

    setPlayers(players: any){
        this._players=players;
    }

    getPlayer(){
        return this._player;
    }

    setPlayer(player: any){
        this._player=player;
    }

 }

 export default new challengesStore()