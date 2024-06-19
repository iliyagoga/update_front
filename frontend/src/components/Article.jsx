import { observer } from "mobx-react-lite";
import post from "../utils/stores/post.ts";
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";
import { useEffect, useState } from "react";
import usersUtil from "../utils/axios/users.ts";

const Article = observer(({id,author, title, img, text,date,themes})=>{
    const nav = useNavigate()
    const [user, setUser]= useState(null)
    useEffect(()=>{
        const user= new usersUtil()
        user.getUser(author).then(v=>{
            setUser(v)
        })
    },[])
    return <div className="article_p">
           <div className="pre">
                <div className="date">
                    <span>{new Date(date).getFullYear()}-{String(new Date(date).getMonth()).length==1?'0'+new Date(date).getMonth():new Date(date).getMonth()}-{new Date(date).getDate()} {new Date(date).getHours()}:{new Date(date).getMinutes()}</span>
                </div>
                <div className="themes">
                    {themes.map(v=>{return  <span>{v}</span>})}
                </div>
            </div>
        <div className="header" onClick={()=>{nav(config.profile.way+'/'+user.login)}}>
            <div className="avatar">
                <img src={user&&user.avatar} alt="" />
            </div>
            <span>{user&&user.surname} {user&&user.name}</span>
        </div>
        <h2>{title}</h2>
        <div className="text">
            <p>{text.slice(0,300)}...</p>
        </div>
        <div className="img">
            <a href={img} target="_black">
                <img src={img} alt="" />
            </a>
        </div>
      
        <div className="more" onClick={()=>{
            post.setPost({ author: author, header: title, headerImg: img, description:text, pub_date: date, themes})
            nav(config.posts.post2+'/'+id)
        }}>
            <span>Читать далее</span>
        </div>
    </div>
})

export default Article