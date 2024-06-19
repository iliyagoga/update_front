import { observer } from "mobx-react-lite";
import '../assets/css/sidebar.css'
import sstu from '../assets/imgs/sstu.png'
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";
import challenges from "../utils/stores/challenges.ts";
import profile from "../utils/stores/profile.ts";
import { useEffect, useState } from "react";
import menu from '../assets/imgs/menu.svg'
import exit from '../assets/imgs/exit.svg'
const Sidebar =observer(()=>{
    const nav = useNavigate()
    const [mode, setMode] = useState(false)
    const [click,setClick]=useState(true)
    useEffect(()=>{
        console.log(window.innerWidth)
        if(window.innerWidth<=425){
            setMode(true)
        }
        else{
            setMode(false)
        }
    },[])
    return <>
    {mode?<div className="s_m">
    {click?<div className="btn">
        <img src={menu}  onClick={()=>{setClick(false)}}alt="" />
    </div>:
    <div className="sideber_m">
        <div className="btn">
            <img src={exit}  onClick={()=>{setClick(true)}}alt="" />
        </div>
       <div className="sidebarr">
            <nav>
                <ul className="menu">
                    <li onClick={()=>{nav(config.profile.way+config.profile.me);setClick(false)}}>
                        <span>
                            Моя страница
                        </span>
                    </li>
                    <li onClick={()=>{nav(config.posts.posts);setClick(false)}}>
                        <span>
                            Статьи
                        </span>
                    </li>
                    <li onClick={()=>{nav(config.posts.challenges);setClick(false)}}>
                        <span>
                            Конкурсы
                        </span>
                    </li>
                    <li>
                        <span>
                            Уведомления
                        </span>
                    </li>
                    <li onClick={()=>{nav(config.qa.qa);setClick(false)}}>
                        <span>
                            Q&A
                        </span>
                    </li>
                </ul>
            </nav>
        
            <ul className="bottom">
                <li>
                    <span>
                        Редактировать
                    </span>
                </li>
                <li onClick={()=>{
                        document.cookie='auth="22"; max-age=0;'
                        nav('/')
                        challenges.setChallenges([])
                        challenges.setChallenge(undefined)
                        profile.setArticles([])
                        
                    }}>
                    <span>
                        Выйти
                    </span>
                </li>
                <li>
                    <a href="https://www.sstu.ru/" target="_blank">
                        <img src={sstu} alt="" />
                    </a>
                
                </li>
            </ul>
        </div>
    </div>}

    </div>:
    <div className="n">
    <div className="sidebar_cont">
        <div className="sidebar">
            <nav>
                <ul className="menu">
                    <li onClick={()=>{nav(config.profile.way+config.profile.me)}}>
                        <span>
                            Моя страница
                        </span>
                    </li>
                    <li onClick={()=>{nav(config.posts.posts)}}>
                        <span>
                            Статьи
                        </span>
                    </li>
                    <li onClick={()=>{nav(config.posts.challenges)}}>
                        <span>
                            Конкурсы
                        </span>
                    </li>
                    <li>
                        <span>
                            Уведомления
                        </span>
                    </li>
                    <li onClick={()=>{nav(config.qa.qa)}}>
                        <span>
                            Q&A
                        </span>
                    </li>
                </ul>
            </nav>
        
            <ul className="bottom">
                <li>
                    <span>
                        Редактировать
                    </span>
                </li>
                <li onClick={()=>{
                        document.cookie='auth="22"; max-age=0;'
                        nav('/')
                        challenges.setChallenges([])
                        challenges.setChallenge(undefined)
                        profile.setArticles([])
                        
                    }}>
                    <span>
                        Выйти
                    </span>
                </li>
                <li>
                    <a href="https://www.sstu.ru/" target="_blank">
                        <img src={sstu} alt="" />
                    </a>
                
                </li>
            </ul>
        </div>
    </div>
   
    </div>}
    </>
})

export default Sidebar