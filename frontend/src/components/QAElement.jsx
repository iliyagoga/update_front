import { observer } from "mobx-react-lite";
import Background from "./Background";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import usersUtil from "../utils/axios/users.ts";
import { config } from "../config.ts";
import { Requests } from "../utils/axios/auth.ts";
import { useNavigate, useParams } from "react-router-dom";
import qa from "../utils/stores/qa.ts";
import qaUtil from "../utils/axios/qa.ts";
import seacrhCookies from "../utils/functions/searchCookies.ts";
import Footer from "./Footer.jsx";

const QAElement=observer(()=>{
    const [user, setUser]= useState(null)
    const [state, setState] = useState(false)
    const nav = useNavigate()
    const param=useParams()
    useEffect(()=>{
        const data= seacrhCookies('auth')
        if(data==0){
            nav(config.auth.auth)
        }else{
            const o = new Requests()
            const res = o.auth(data.login,data.password)
            if(res){
                let author;
                if(qa.getQA()==undefined){
                    const q= new qaUtil()
                    q.getQA(param.id).then(v=>{
                        author= qa.getQA().author
                        const user= new usersUtil()
                        user.getUser(author).then(v=>{
                            setUser(v)
                        })
                    })
                }
                else{
                    author= qa.getQA().author
                    const user= new usersUtil()
                    user.getUser(author).then(v=>{
                        setUser(v)
                    })
                }
            }

            setState(res)
        }
    },[])

    if(state)
    return <>
    <div className="qaelement">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="qae_b">
            <div className="header">
                <div className="info">
                    <div className="img">
                        <img src={user&&user.avatar} alt="" />
                    </div>
                    <div className="i">
                        <div className="name">
                            <span>{user&&user.surname} {user&&user.name}</span>
                        </div>
                        <div className="date">
                            <span>{new Date(qa.getQA()!=undefined&&qa.getQA().pub_date).getFullYear()}-{String(new Date(qa.getQA()!=undefined&&qa.getQA().pub_date).getMonth()).length==1?'0'+new Date(qa.getQA()!=undefined&&qa.getQA().pub_date).getMonth():new Date(qa.getQA()!=undefined&&qa.getQA().pub_date).getMonth()}-{new Date(qa.getQA()!=undefined&&qa.getQA().pub_date).getDate()} {new Date(qa.getQA()!=undefined&&qa.getQA().pub_date).getHours()}:{new Date(qa.getQA()!=undefined&&qa.getQA().pub_date).getMinutes()}</span>
                        </div>
                    </div>
                </div>
                <div className="themes">
                    <div className="themes">
                        {qa.getQA()!=undefined&&qa.getQA().themes.map(v=>{return  <span>{v}</span>})}
                    </div>
                </div>
            </div>
            <div className="body">
                <h3>{qa.getQA()!=undefined&&qa.getQA().header}</h3>
                <p>{qa.getQA()!=undefined&&qa.getQA().description}</p>
                <div className="img">
                    <img src={qa.getQA()!=undefined&&qa.getQA().headerImg} alt="" />
                </div>
                <div className="link">
                    <span>Ссылка:</span>
                    <a href={qa.getQA()!=undefined&&qa.getQA().link}>{qa.getQA()!=undefined&&qa.getQA().link}</a>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </>
    return <></>
})

export default QAElement