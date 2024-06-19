import { observer } from "mobx-react-lite";

const ChatElement = observer(({avatar, name, text})=>{
    return <div className="chatel">
        <div className="img">
            <img src={avatar} alt="" />
        </div>
        <div className="n">
            <span>{name}</span>
            <p>{text.slice(0,20)}...</p>
        </div>
    </div>
})

export default ChatElement