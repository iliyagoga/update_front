import { observer } from "mobx-react-lite";
import Player from "./Player.jsx";
import '../assets/css/players.css'
import { useEffect } from "react";
import challenges from "../utils/stores/challenges.ts";
import { competitions } from "../utils/axios/competitions.ts";
import { useParams } from "react-router-dom";
const Players = observer(()=>{
    const param = useParams()
    useEffect(()=>{
        const o = new competitions()
        o.getMembers(param.id)
    },[])
return <div className="players">
    <h3>Участники</h3>
    <div className="ps">
        {challenges.getPlayers().length>0&&challenges.getPlayers().map(v=>{
            return <Player member={v}></Player>
        })}
    </div>
</div>
})

export default Players