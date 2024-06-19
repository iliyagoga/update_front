import { observer } from "mobx-react-lite";
import Background from "../components/Background";
import Sidebar from "../components/Sidebar";
import post from "../utils/stores/post.ts";
import '../assets/css/post.css';
import Footer from "../components/Footer.jsx";
import { Requests } from "../utils/axios/auth.ts";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { config } from "../config.ts";
import Comments from "../components/Comments.jsx";
import articles from "../utils/axios/articels.ts";
import usersUtil from "../utils/axios/users.ts";
import seacrhCookies from "../utils/functions/searchCookies.ts";
const Post = observer(()=>{
    const [state, setState] = useState(false)
    const [user,setUser] = useState(null)
    const nav = useNavigate()
    const param =useParams()
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
                if(post.getPost()==undefined){
                    const p= new articles()
                    p.getPostById(param.id).then(v=>{
                        author= post.getPost().author
                        const user= new usersUtil()
                        user.getUser(author).then(v=>{
                            setUser(v)
                        })
                    })
                }
                else{
                    author= post.getPost().author
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
    <div className="post">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="post_cont">
            <div className="c">
                <div className="pre">
                    <div className="date">
                        <span>{new Date(post.getPost()!=undefined&&post.getPost().pub_date).getFullYear()}-{String(new Date(post.getPost()!=undefined&&post.getPost().pub_date).getMonth()).length==1?'0'+new Date(post.getPost()!=undefined&&post.getPost().pub_date).getMonth():new Date(post.getPost()!=undefined&&post.getPost().pub_date).getMonth()}-{new Date(post.getPost()!=undefined&&post.getPost().pub_date).getDate()} {new Date(post.getPost()!=undefined&&post.getPost().pub_date).getHours()}:{new Date(post.getPost()!=undefined&&post.getPost().pub_date).getMinutes()}</span>
                    </div>
                    <div className="themes">
                        {post.getPost()!=undefined&&post.getPost().themes.map(v=>{return  <span>{v}</span>})}
                    </div>
                </div>
                <div className="header" onClick={()=>{nav(config.profile.way+'/'+user.login)}}>
                    <div className="avatar">
                        <img src={user&&user.avatar} alt="" />
                    </div>
                    <span>{user&&user.surname} {user&&user.name}</span>
                </div>
                <h2>{post.getPost()!=undefined&&post.getPost().header}</h2>
                <div className="img">
                    <a href={post.getPost()!=undefined&&post.getPost().headerImg} target="_black">
                        <img src={post.getPost()!=undefined&&post.getPost().headerImg} alt="" />
                    </a>
                </div>
                <div className="text">
                    <p>{post.getPost()!=undefined&&post.getPost().description}</p>
                </div>
               
            </div>
            <Comments></Comments>
          
        </div>
    </div>
    <Footer></Footer>
    </>
    return <></>
})
export default Post