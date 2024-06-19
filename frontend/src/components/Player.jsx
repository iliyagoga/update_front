import { observer } from "mobx-react-lite";

const Player = observer(({member})=>{
    return <div className="player">
        <div className="info">
            <div className="img">
                <img src={member.avatar} alt="" />
            </div>
            <div className="i">
                <h4>{member.surname} {member.name}</h4>
                <span>3 часа назад</span>
            </div>
        </div>
        <div className="text">
            <p>
                {member.description}
            </p>
        </div>
        <div className="btn">
            <span>Написать</span>
        </div>
    </div>
})

export default Player