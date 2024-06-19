import { observer } from "mobx-react-lite";
import post from "../utils/stores/post.ts";
import Comment from "./Comment.jsx";
import send from '../assets/imgs/send.svg'
import o from '../assets/imgs/o.svg'
import '../assets/css/comments.css'
import { useEffect } from "react";
import profile from "../utils/stores/profile.ts";
const Comments =observer(()=>{
    useEffect(()=>{
        post.setComments([
            {
                avatar: 'https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/469202/confused-man-question-wondering-thinking.jpg&w=2000&op=resize',
                name: 'Александр Ермолович Витебский',
                comment: 'Автор молодец!'
            },
            {
                avatar: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1614510957_41-p-na-belom-fone-chelovek-53.jpg',
                name: 'Иван Соболев Петрович',
                comment: 'Очень познавательная статья!!'
            }
        ])
    },[])
    return <div className="comments">
        <h3>Комментарии</h3>
        <div className="cs">
            {post.getComments().map(v=>{
                return <Comment avatar={v.avatar} name={v.name} comment={v.comment}></Comment>
            })}
        </div>
        <div className="form">
            <h4>Написать комметарий</h4>
            <div className="r">
                <div className="input">
                    <textarea type="text" placeholder="Комментарий"/>
                    <img src={o} alt="" />
                </div>
                <div className="send">
                    <img src={send} alt="" />
                </div>
            </div>
        </div>
        
    </div>
})

export default Comments