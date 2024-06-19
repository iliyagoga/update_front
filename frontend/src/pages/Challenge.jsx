import { observer } from "mobx-react-lite";
import challenges from "../utils/stores/challenges.ts";
import Background from "../components/Background.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import { Requests } from "../utils/axios/auth.ts";
import { useNavigate, useParams } from "react-router-dom";
import { config } from "../config.ts";
import Players from "../components/Players.jsx";
import usersUtil from "../utils/axios/users.ts";
import { competitions } from "../utils/axios/competitions.ts";
import seacrhCookies from "../utils/functions/searchCookies.ts";
import '../assets/css/challenges.css'

const Challenge=observer(()=>{
    const [state, setState] = useState(false)
    const [user, setUser]= useState(null)
    const nav = useNavigate()
    const param = useParams()
    useEffect(()=>{
        const data= seacrhCookies('auth')
        if(data==0){
            nav(config.auth.auth)
        }else{
            const o = new Requests()
            const res = o.auth(data.login, data.password)
            setState(res)

            if(res){
                let author;
                if(challenges.getChallenge()==undefined){
                    const ch= new competitions()
                    ch.getCompById(param.id).then(v=>{
                        author= challenges.getChallenge().author
                        const user= new usersUtil()
                        user.getUser(author).then(v=>{
                            setUser(v)
                        })
                    })
                }
                else{
                    author= challenges.getChallenge().author
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
    <div className="challenges">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="chals_cont2">
            <div className="challenge_p">
                <div className="pre">
                    <div className="date">
                        <span>{new Date(challenges.getChallenge()&&challenges.getChallenge().pub_date).getFullYear()}-{String(new Date(challenges.getChallenge()&&challenges.getChallenge().pub_date).getMonth()).length==1?'0'+new Date(challenges.getChallenge()&&challenges.getChallenge().pub_date).getMonth():new Date(challenges.getChallenge()&&challenges.getChallenge().pub_date).getMonth()}-{new Date(challenges.getChallenge()&&challenges.getChallenge().pub_date).getDate()} {new Date(challenges.getChallenge()&&challenges.getChallenge().pub_date).getHours()}:{new Date(challenges.getChallenge()&&challenges.getChallenge().pub_date).getMinutes()}</span>
                    </div>
                    <div className="themes">
                        {challenges.getChallenge()&&challenges.getChallenge().themes.map(v=>{return  <span>{v}</span>})}
                    </div>
                </div>
                <h2>Конкурс «{challenges.getChallenge()&&challenges.getChallenge().header}»</h2>
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
                    <p>{challenges.getChallenge()&&challenges.getChallenge().description}</p>
                </div>
                <div className="imgg">
                    <a href={challenges.getChallenge()&&challenges.getChallenge().headerImg} target="_black">
                        <img src={challenges.getChallenge()&&challenges.getChallenge().headerImg} alt="" />
                    </a>
                </div>
        
                <div className="ye" onClick={()=>{
                }}>
                    <span onClick={()=>{
                        const cp = new competitions()
                        cp.subscribe(param.id, seacrhCookies('auth').login)
                    }}>Хочу участвовать</span>
                </div>
            </div>
            <Players></Players>
        </div>
        </div>
        
        
    <Footer></Footer>
    </>
    return <></>
})

export default Challenge