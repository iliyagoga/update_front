import { observer } from "mobx-react-lite";
import Background from "../components/Background";
import Sidebar from "../components/Sidebar";
import challenges from "../utils/stores/challenges.ts";
import { useEffect, useState } from "react";
import '../assets/css/challenges.css'
import ChallengeDemo from "../components/ChallengeDemo.jsx";
import Footer from "../components/Footer.jsx";
import { Requests } from "../utils/axios/auth.ts";
import { config } from "../config.ts";
import { useNavigate } from "react-router-dom";
import { competitions } from "../utils/axios/competitions.ts";
import Filters from "../components/Filters.jsx";
import seacrhCookies from "../utils/functions/searchCookies.ts";
const Challenges = observer(()=>{
    const [state, setState] = useState(false)
    const nav = useNavigate()
    useEffect(()=>{
        seacrhCookies('2')
        const data= seacrhCookies('auth')
        if(data==0){
            nav(config.auth.auth)
        }else{
            const o = new Requests()
            const res = o.auth(data.login, data.password)
            setState(res)
        }
    },[])
    useEffect(()=>{
        const c = new competitions()
        c.getAll()
    },[])
    if(state)
    return <>
    <div className="challenges">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="comps">
            <Filters mode='comp'></Filters>
            <div className="chals_cont">
                {challenges.getChallenges().map((v)=>{
                    return <ChallengeDemo id={v.id} author={v.author} title={v.header} img={v.headerImg} text={v.description} theme={v.themes} date={v.pub_date}></ChallengeDemo>
                })}
            </div>
        </div>
      
    </div>
    <Footer></Footer>
    </>
    return <></>
})

export default Challenges