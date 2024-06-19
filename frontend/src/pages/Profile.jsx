import {observer} from 'mobx-react-lite'
import Background from '../components/Background'
import Sidebar from '../components/Sidebar'
import ava from '../assets/imgs/ava.png'
import profile from '../utils/stores/profile.ts'
import git from '../assets/imgs/git.png'
import tg from '../assets/imgs/tg.png'
import email from '../assets/imgs/email.png'
import '../assets/css/profile.css'
import { useEffect, useState } from 'react'
import plus from '../assets/imgs/plus.svg'
import plus2 from '../assets/imgs/plus2.svg'
import s from '../assets/imgs/search.svg'
import DemoMeArticle from '../components/DemoMeArticle.jsx'
import Footer from '../components/Footer.jsx'
import { config } from '../config.ts'
import { useNavigate } from 'react-router-dom'
import profileUtil from '../utils/axios/profile.ts'
import seacrhCookies from '../utils/functions/searchCookies.ts'

const Profile =observer(()=>{
    const [state, setState] = useState(false)
    const nav =useNavigate()

    useEffect(()=>{
        const data= seacrhCookies('auth')
        if(data==0){
            nav(config.auth.auth)
        }else{
            const p =new profileUtil()
            const res = p.request(data)
            setState(res)
        }
       
    },[])
    if(state)
    return <>
    <div className='profile'>
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="container">
            <div className="middle">
                <div className="fio">
                    {profile.getRole()=='teacher'?
                        <span>{profile.getSername()!=undefined?profile.getSername()+' ':' '} {profile.getName()!=undefined?profile.getName()+' ':' '} {profile.getPar()!=undefined?profile.getPar():''} </span>
                    :
                        <span>{profile.getName()!=undefined?profile.getName()+' ':' '} {profile.getSername()!=undefined?profile.getSername():' '}</span>

                        }
                </div>
                <div className="aboutme">
                    <h3>О себе</h3>
                    <p>{profile.getTextAboutMe()!=undefined?profile.getTextAboutMe():''}</p>
                </div>
                <div className="projects_block">
                    <span>{profile.getRole()=='student'?'Проекты':'Статьи'}</span>
                    <div className="icons">
                        <img src={s} alt="" />
                        <img src={plus2} alt="" />
                    </div>
                </div>
                <div className="articles">
                    {profile.getArticles().map(v=>{
                        return <DemoMeArticle id={v.id} author={v.author} title={v.header} img={v.headerImg} text={v.description} date={v.pub_date} themes={v.themes}></DemoMeArticle>
                    })}
                </div>
            </div>
            <div className="p_card">
                <div className="avatar">
                    <div className="img">
                        <input type="file" onChange={(e)=>{
                            if(e.target.files[0]!=undefined){
                                profile.setLoadImage(e.target.files[0]); 
                                profile.setAvatar(URL.createObjectURL(e.target.files[0]))
                            }
                      }}/>
                        <img src={profile.getAvatar()!=undefined?profile.getAvatar():''} alt="" />
                    </div>
                </div>
                <div className="links">
                    {(profile.getGitLink()&&profile.getGitLink()!=undefined)&&<div className="link">
                        <a href={profile.getGitLink()!=undefined&&profile.getGitLink()}>
                            <img src={git} alt="" />
                            <span>{profile.getGitLink()!=undefined&&profile.getGitLink()}</span>
                        </a>
                    </div>}
                    {profile.getTgLink()&&profile.getTgLink()!=undefined&&
                    <div className="link">
                        <a href={profile.getTgLink()!=undefined&&profile.getTgLink()}>
                            <img src={tg} alt="" />
                            <span>{profile.getTgLink()!=undefined&&profile.getTgLink()}</span>
                        </a>
                    </div>
                    }
                    {profile.getEmailLink()&&profile.getEmailLink()!=undefined&&
                    <div className="link">
                        <a href={profile.getEmailLink()!=undefined&&profile.getEmailLink()}>
                            <img src={email} alt="" />
                            <span>{profile.getEmailLink()!=undefined&&profile.getEmailLink()}</span>
                        </a>
                    </div>
                    }
                </div>
                <div className="skills">
                    <div className="s_top">
                      <span>Направления</span>
                      <img src={plus} alt="" />
                    </div>
                    <div className="list">
                        {profile.getSkills().map((v)=>{
                            return <div className="skill">
                                <span>{v}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    <Footer></Footer>
    </>
    return <></>
})

export default Profile