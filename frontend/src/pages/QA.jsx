import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import usersUtil from "../utils/axios/users.ts";
import qa from "../utils/stores/qa.ts";
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";
import { Requests } from "../utils/axios/auth.ts";
import articles from "../utils/axios/articels.ts";


const QA = observer(({data})=>{
    const [user, setUser]= useState(null)
    const nav = useNavigate()
    useEffect(()=>{
        const user= new usersUtil()
        user.getUser(data.author).then(v=>{
            setUser(v)
        })

    },[])
    const [state, setState] = useState(false)
    return <div className="qa" onClick={()=>{
        qa.setQA(data)
        nav(config.qa.question2+'/'+data.id)
    }}>
        <div className="h">
            <div className="date">
                <span>{new Date(data.pub_date).getFullYear()}-{String(new Date(data.pub_date).getMonth()).length==1?'0'+new Date(data.pub_date).getMonth():new Date(data.pub_date).getMonth()}-{new Date(data.pub_date).getDate()} {new Date(data.pub_date).getHours()}:{new Date(data.pub_date).getMinutes()}</span>
            </div>
            <div className="themes">
                {data.themes.map(v=>{
                    return <span>
                        {v}
                    </span>
                })}
            </div>
        </div>
        <div className="header">
            <h4>{data.header}</h4>
        </div>
        <div className="text">
            <p>{data.description.slice(0,100)}...</p>
        </div>
        <div className="author" onClick={()=>{nav(config.profile.way+'/'+user.login)}}>
            <div className="img">
                <img src={user&&user.avatar} alt="" />
            </div>
            <div className="name">
                <span>{user&&user.surname}</span>
                <span>{user&&user.name}</span>
            </div>
        </div>
    </div>
})

export default QA