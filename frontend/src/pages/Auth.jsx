import { observer } from "mobx-react-lite";
import Background from "../components/Background";
import '../assets/css/auth.css'
import { useState } from "react";
import { Requests } from "../utils/axios/auth.ts";
import Background2 from "../components/Background2.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";

const Auth = observer(()=>{
    const [login,setLogin] = useState('')
    const [pass, setPass] = useState('')
    const nav=useNavigate()
    const o= new Requests()
return <>
    <div className="auth">
        <Background2></Background2>
        <div className="form">
            <h2>Вход</h2>
            <input type="text" value={login} placeholder="Логин" onChange={(e)=>{setLogin(e.target.value)}}/>
            <input type="password" value={pass} placeholder="Пароль" onChange={(e)=>{setPass(e.target.value)}}/>
            <div className="btn" onClick={async ()=>{
                try {
                  const r= await  o.auth(login,pass)
                  if(r){
                    nav(config.profile.way+config.profile.me)
                  }
                } catch (error) {
                    
                }
               }}>
                <span>Отправить</span>
            </div>
        </div>
    </div>
    <Footer></Footer>
</>
})

export default Auth