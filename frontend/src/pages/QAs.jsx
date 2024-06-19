import { observer } from "mobx-react-lite";
import Background from "../components/Background";
import Sidebar from "../components/Sidebar";
import '../assets/css/qa.css'
import { useEffect } from "react";
import qa from "../utils/stores/qa.ts";
import QA from "./QA.jsx";
import qaUtil from "../utils/axios/qa.ts";
import '../assets/css/qa.css'
import Filters from "../components/Filters.jsx";
import Footer from "../components/Footer.jsx";
const QAs = observer(()=>{
    useEffect(()=>{
        const q= new qaUtil()
        q.getAll()
    },[])
    return <>
    <div className="qas">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="qa_b">
            <Filters mode='qa'></Filters>
            <div className="b">
                {qa.getQAs()!=undefined&&qa.getQAs().map(v=>{
                return <QA data={v}></QA>
                })}
            </div>
        </div>
    </div>
    <Footer></Footer>
    </>
})

export default QAs