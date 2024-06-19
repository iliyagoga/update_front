import { observer } from "mobx-react-lite";
import '../assets/css/mean.css'
import Footer from "../components/Footer";
import bg3 from '../assets/imgs/bg3.svg'
import i1 from '../assets/imgs/image 6.png'
import i2 from '../assets/imgs/image 6 (1).png'
import i3 from '../assets/imgs/image 6 (2).png'
import i4 from '../assets/imgs/image 7.png'
import logo from '../assets/imgs/logo.svg'
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";
const Mean = observer(()=>{
    const nav = useNavigate()
return <div className="mean">
    <div className="bg">
        <img src={bg3} alt="" />
    </div>
    <div className="header">
        <div className="btn" onClick={()=>{nav(config.auth.auth)}}>
            <span>Войти</span>
        </div>
    </div>
    <div className="body">
        <div className="h">
            <div className="l">
                <img src={logo} alt="" />
            </div>
            <div className="r">
                <h1>Участвуй в хакатонах и конкурсах с СГТУ!</h1>
                <h3>Платформа для студентов, которые хотят развиваться в сфере технологий и науки.</h3>
            </div>
        </div>

        <h2>Что мы предлагаем?</h2>
        <div className="blocks">
            <div className="block">
                <span>Хакатоны и конкурсы</span>
                <div className="img">
                    <img src={i1} alt="" />
                </div>
            </div>
            <div className="block">
                <span>Q&A</span>
                <div className="img">
                    <img src={i2} alt="" />
                </div>
            </div>
            <a className="block" >
                    <span>Git</span>
                    <div className="img">
                        <img src={i3} alt="" />
                    </div>
              
            </a>
            <div className="block"> 
                <span>Статьи</span>
                <div className="img">
                    <img src={i4} alt="" />
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>


</div>
})

export default Mean