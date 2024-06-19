import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";
import challenges from "../utils/stores/challenges.ts";
import { useEffect, useState } from "react";
import usersUtil from "../utils/axios/users.ts";

const ChallengeDemo=observer(({id, author, avatar, name, title, img, text, theme,date})=>{
    const [user, setUser]= useState(null)
    useEffect(()=>{
        const user= new usersUtil()
        user.getUser(author).then(v=>{
            setUser(v)
        })
    },[])
    const nav = useNavigate()
    return  <div className="challenge_p">
         <div className="pre">
            <div className="date">
                <span>{new Date(date).getFullYear()}-{String(new Date(date).getMonth()).length==1?'0'+new Date(date).getMonth():new Date(date).getMonth()}-{new Date(date).getDate()} {new Date(date).getHours()}:{new Date(date).getMinutes()}</span>
            </div>
            <div className="themes">
                {theme.map(v=>{return  <span>{v}</span>})}
            </div>
        </div>
        <h2>Конкурс «{title}»</h2>
        <div className="meaners">
            <span className="y">Организатор:</span>
            <div className="meaner" onClick={()=>{nav(config.profile.way+'/'+user.login)}}>
                <div className="img">
                    <img src={user&&user.avatar} alt="" />
                </div>
                <span>{user&&user.surname} {user&&user.name} {user&&user.patronymic}</span>
            </div>
        </div>
        <div className="text">
            <p>{text.slice(0,300)}...</p>
        </div>
        <div className="imgg">
            <a href={img} target="_black">
                <img src={img} alt="" />
            </a>
        </div>
  
        <div className="more" onClick={()=>{
            challenges.setChallenge({id, author, avatar, name, header: title, headerImg: img, description: text, themes: theme, pub_date: date})
            nav(config.posts.challenge2+'/'+id)
        }}>
            <span>Читать далее</span>
        </div>
       
    </div>
})

export default ChallengeDemo