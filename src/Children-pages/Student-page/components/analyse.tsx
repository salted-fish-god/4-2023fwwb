/* 学生个人信息分析界面 */
import React from "react";
// 路由
import {Link} from "react-router-dom"
// 样式
import "../css/analyse.css"

interface AnalyseProps {
}

interface AnalyseState{
}

function Analyse(props: AnalyseProps, state: AnalyseState){
    return (
        <div className="Analyse">
            <div className="studentPage-analyse-item"></div>
            <div className="studentPage-analyse-item"></div>
            <div className="studentPage-analyse-item"></div>
            <div className="studentPage-analyse-item"></div>
        </div>
    )
}

export default Analyse