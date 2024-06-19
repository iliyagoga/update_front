import { observer } from "mobx-react-lite";
import loop from '../assets/imgs/search.svg'
import '../assets/css/chats.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";
import { Requests } from "../utils/axios/auth.ts";
import Background from "../components/Background.jsx";
import Sidebar from "../components/Sidebar.jsx";
import chats from "../utils/stores/chats.ts";
import ChatElement from "../components/ChatElement.jsx";
import seacrhCookies from "../utils/functions/searchCookies.ts";
import Footer from "../components/Footer.jsx";
const Chats = observer(()=>{
    const [state, setState] = useState(false)
    const nav = useNavigate()
    useEffect(()=>{
        const data= seacrhCookies('auth')
        if(data==0){
            nav(config.auth.auth)
        }else{
            const o = new Requests()
            const res = o.auth(data.login, data.password)
            setState(res)
        }
        chats.setChats([
            {
                avatar: 'https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/469202/confused-man-question-wondering-thinking.jpg&w=2000&op=resize',
                name: 'Александр Ермолович Витебский',
                text: 'Помогите...'
            },
            {
                avatar: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1614510957_41-p-na-belom-fone-chelovek-53.jpg',
                name: 'Иван Соболев Петрович',
                text: 'Очень познавательная статья!!'
            }
        ])
    },[])
    if(state)
    return <>
    <div className="chats_c">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="chats">
            <div className="left">
                <div className="search_b">
                    <div className="search">
                        <input type="text" />
                        <img src={loop} alt="" />
                    </div>
                </div>
                <div className="list">
                    {chats.getChats().map(v=>{
                        return <ChatElement avatar={v.avatar} name={v.name} text={v.text}></ChatElement>
                    })}
                </div>
            </div>
            <div className="right">
                <div className="def">
                    <span className="l">Пока пусто</span>
                    <span className="u">Добавьте чат</span>
                </div>
                
            </div>
        </div>
    </div>
    <Footer></Footer>
    </>
 
    return <></>
})

export default Chats