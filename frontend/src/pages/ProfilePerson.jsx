import {observer} from 'mobx-react-lite'
import Background from '../components/Background'
import Sidebar from '../components/Sidebar'
import ava from '../assets/imgs/ava.png'
import git from '../assets/imgs/git.png'
import tg from '../assets/imgs/tg.png'
import email from '../assets/imgs/email.png'
import '../assets/css/profile.css'
import { useEffect, useState } from 'react'
import s from '../assets/imgs/search.svg'
import DemoMeArticle from '../components/DemoMeArticle.jsx'
import profilePerson from '../utils/stores/profilePerson.ts'
import Footer from '../components/Footer.jsx'
import { Requests } from '../utils/axios/auth.ts'
import { config } from '../config.ts'
import { useNavigate, useParams } from 'react-router-dom'
import seacrhCookies from '../utils/functions/searchCookies.ts'
import profileUtil from '../utils/axios/profile.ts'

const ProfilePerson =observer(()=>{
    const [state, setState] = useState(false)
    const param = useParams()
    const nav = useNavigate()

    useEffect(()=>{
        const data= seacrhCookies('auth')
        if(data==0){
            nav(config.auth.auth)
        }else{
            const p =new profileUtil()
            const res = p.request2(param.id,data)
            setState(res)
        }
    },[])
   
    if(state)
    return <>
    <div className='profilePerson'>
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="container">
            <div className="middle">
                <div className="fio">
                        {profilePerson.getRole()=='teacher'?
                        <span>{profilePerson.getSername()!=undefined?profilePerson.getSername()+' ':' '} {profilePerson.getName()!=undefined?profilePerson.getName()+' ':' '} {profilePerson.getPar()!=undefined?profilePerson.getPar():''} </span>
                    :
                        <span>{profilePerson.getName()!=undefined?profilePerson.getName()+' ':' '} {profilePerson.getSername()!=undefined?profilePerson.getSername():' '}</span>

                        }
                </div>
                <div className="aboutme">
                    <h3>О себе</h3>
                    <p>{profilePerson.getTextAboutMe()!=undefined?profilePerson.getTextAboutMe():''}</p>
                </div>
                <div className="projects_block">
                <span>{profilePerson.getRole()=='student'?'Проекты':'Статьи'}</span>
                    <div className="icons">
                        <img src={s} alt="" />
                    </div>
                </div>
                <div className="articles">
                    {profilePerson.getArticles().map(v=>{
                        return <DemoMeArticle id={v.id} author={v.author} title={v.header} img={v.headerImg} text={v.description} date={v.pub_date} themes={v.themes}></DemoMeArticle>
                    })}
                </div>
            </div>
            <div className="p_card">
                <div className="avatar">
                    <div className="img">
                        <input type="file" onChange={(e)=>{
                            if(e.target.files[0]!=undefined){
                                profilePerson.setLoadImage(e.target.files[0]); 
                                profilePerson.setAvatar(URL.createObjectURL(e.target.files[0]))
                            }
                      }}/>
                        <img src={profilePerson.getAvatar()!=undefined?profilePerson.getAvatar():''} alt="" />
                    </div>
                    <div className="write">
                        <span>Написать</span>
                    </div>
                </div>
                <div className="links">
                    {profilePerson.getGitLink()!=undefined&&<div className="link">
                        <a href={profilePerson.getGitLink()!=undefined&&profilePerson.getGitLink()}>
                            <img src={git} alt="" />
                            <span>{profilePerson.getGitLink()!=undefined&&profilePerson.getGitLink()}</span>
                        </a>
                    </div>}
                    {profilePerson.getTgLink()&&<div className="link">
                        <a href={profilePerson.getTgLink()!=undefined&&profilePerson.getTgLink()}>
                            <img src={tg} alt="" />
                            <span>{profilePerson.getTgLink()!=undefined&&profilePerson.getTgLink()}</span>
                        </a>
                    </div>}
                    {profilePerson.getEmailLink()&&<div className="link">
                        <a href={profilePerson.getEmailLink()!=undefined&&profilePerson.getEmailLink()}>
                            <img src={email} alt="" />
                            <span>{profilePerson.getEmailLink()!=undefined&&profilePerson.getEmailLink()}</span>
                        </a>
                    </div>}
                </div>
                <div className="skills">
                    <div className="s_top">
                      <span>Направления</span>
                    </div>
                    <div className="list">
                        {profilePerson.getSkills().map((v)=>{
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

export default ProfilePerson