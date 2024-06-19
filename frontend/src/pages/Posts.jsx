import { observer } from "mobx-react-lite";
import Background from "../components/Background";
import Sidebar from "../components/Sidebar";
import '../assets/css/lenta.css'
import { useEffect, useState } from "react";
import lenta from "../utils/stores/lenta.ts";
import Article from "../components/Article.jsx";
import Footer from "../components/Footer.jsx";
import { Requests } from "../utils/axios/auth.ts";
import { config } from "../config.ts";
import { useNavigate } from "react-router-dom";
import articles from "../utils/axios/articels.ts";
import Filters from "../components/Filters.jsx";
import seacrhCookies from "../utils/functions/searchCookies.ts";

const Posts = observer(()=>{
    const [state, setState] = useState(false)
    const nav  = useNavigate()
    useEffect(()=>{
        const data= seacrhCookies('auth')
        if(data==0){
            nav(config.auth.auth)
        }else{
            const o = new Requests()
            const r = new articles()
            const res = o.auth(data.login,data.password)
            if(res){
                r.getAll()
            }

            setState(res)
        }
    },[])
    if(state)
    return <>
    <div className="lenta">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="l_cont">
            <Filters mode='lenta'></Filters>
            <div className="lenta_cont">
                {lenta.getPosts().map(v=>{
                    return <Article id={v.id} author={v.author} title={v.header} img={v.headerImg} text={v.description} date={v.pub_date} themes={v.themes}></Article>
                })}
            </div>
        </div>
       
    </div>
    <Footer></Footer>
    </>
    return <></>
})

export default Posts