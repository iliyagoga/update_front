import { observer } from "mobx-react-lite";
import '../assets/css/demomearticle.css'
import { useNavigate } from "react-router-dom";
import profile from "../utils/stores/profile.ts";
import post from "../utils/stores/post.ts";
import { config } from "../config.ts";
const DemoMeArticle =observer(({id,author, title, img, text,date,themes})=>{
    const nav = useNavigate()
    return <div className="article">
        <h2>{title}</h2>
        <div className="img">
            <a href={img} target="_black">
                <img src={img} alt="" />
            </a>
        </div>
        <div className="text">
            <p>{text.slice(0,300)}...</p>
        </div>
        <div className="more" onClick={()=>{
               post.setPost({ author: author, header: title, headerImg: img, description:text, pub_date: date, themes})
               nav(config.posts.post2+'/'+id)
        }}>
            <span>Читать далее</span>
        </div>
    </div>
})

export default DemoMeArticle