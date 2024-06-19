import { observer } from "mobx-react-lite";
import search from '../assets/imgs/search.svg'
import filters from "../utils/stores/filters.ts";
import '../assets/css/filters.css'
import qa from "../utils/stores/qa.ts";
import filtersFunctions from "../utils/functions/filtersFunctions.ts";
import lenta from "../utils/stores/lenta.ts";
import challenges from "../utils/stores/challenges.ts";
const Filters = observer(({mode})=>{
    return <div className="filters">
        <div className="search">
            <input type="text" />
            <img src={search} alt="" />
        </div>
        <div className="themes">
            {filters.getThemes()!=undefined&&filters.getThemes().map(v=>{
                return <span onClick={()=>{
                    const f = new filtersFunctions()
                    if(mode=='qa'){
                        qa.setQAs(filters.getQA())
                        qa.setQAs(f.filter(v,qa.getQAs()))
                    }
                    if(mode=='lenta'){
                        lenta.setPosts(filters.getPosts())
                        lenta.setPosts(f.filter(v, lenta.getPosts()))
                    }
                    if(mode=='comp'){
                        challenges.setChallenges(filters.getComps())
                        challenges.setChallenges(f.filter(v, challenges.getChallenges()))
                    }
                }}>{v}</span>
            })}
        </div>
    </div>
})

export default Filters