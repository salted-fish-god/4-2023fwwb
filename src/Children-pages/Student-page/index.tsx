/* 学生端界面 */
import React from "react";
// 路由
import {useLocation, Outlet, Link, useNavigate} from "react-router-dom"
// 子组件
import Analyse from "./components/analyse"
import Revise from "./components/revise"
// css
import "./css/index.css"
// 导入其他包
import $ from "jquery"

interface StudentPageProps{
}

interface StudentPageState{
}

function StudentPage(props: StudentPageProps, state: StudentPageState){
    // 获取路由跳转过来时，传入的数据
    const User_information = useLocation().state
    // 跳转
    const navigate = useNavigate()

    // 导航栏数据
    const Navigation = ["学习情况", "个人信息", "给我留言"]
    const Navigation_url = ["/student-page/analyse", "/student-page/revise", "/student-page/message"] // 导航栏跳转子路由
    const Navigation_element = Navigation.map((v, index) => {
        return <Link key={v + index.toString()} to={Navigation_url[index]} state={User_information}>
            <div className={index === 0 ? "studentpage-Navigation-item studentpage-Navigation-select" : "studentpage-Navigation-item"} onClick={(e) => {
                $(".studentpage-Navigation-item").removeClass("studentpage-Navigation-select")
                $(e.target).addClass("studentpage-Navigation-select")
            }}>
                {v}
            </div>
        </Link>
    })
    // 相关常量
    const Appellation = {
        "学生": "同学",
        "老师": "",
        "管理员": "管理员" 
    }
    
    React.useEffect(() => {
        console.log(User_information)
    }, [])

    return (
        <div className="StudentPage">
            {/* 顶部导航栏 */}
            <div id="studentpage-up">
                {/* Logo */}
                <div style={{width: 150, height: "100%", float: 'left', textAlign: 'center', lineHeight: "50px", fontWeight: "bold", fontSize: "25px", background: "skyblue", color: 'white'}}>Logo</div>
                {/* 导航栏 */}
                {Navigation_element} 
                {/* 用户头像等信息 */}
                <div id="studentpage-user" onClick={() => {
                    $("#studentpage-user-output").css("display", "inline")
                }}>
                    {/* 头像 */}
                    <svg id="studentpage-user-avatar" viewBox="0 0 1024 1024">
                        <path 
                            d="M504.59685925 253.55757036m-207.0452148 0a207.04521482 207.04521482 0 1 0 414.09042963 0 207.04521482 207.04521482 0 1 0-414.09042963 0ZM856.54945185 647.38038517C656.42192592 519.8279111 658.4850963 519.8279111 514.42725925 519.8279111c-141.63057778 0-141.99466667 0-358.02074073 132.64971852-47.81700741 31.7970963-75.85185185 188.59804445-75.85185185 230.22554074 0 108.86257778 192.48165925 78.88592592 429.86761481 78.88592593s429.86761482 29.97665185 429.86761482-78.88592593c0.12136297-43.93339259-31.06891852-202.67614815-83.74044445-235.32278519z"
                        ></path>
                    </svg>
                    {/* 用户名 */}
                    {User_information.name}
                </div>
            </div>

            {/* 底部内容 */}
            <div id="studentpage-down">
                {/* 路由接口 */}
                <Outlet></Outlet>
            </div>

            {/* 用户退出登录提示框 inline */}
            <div id="studentpage-user-output">
                <div>
                    <h4>
                        {User_information.name + (Appellation as any)[User_information.identity] + "，您确定要离开吗？"}
                    </h4>
                    <button className="studentpage-user-output-button" onClick={() => {
                        $("#studentpage-user-output").css("display", "none")
                        navigate("/")
                    }}>确定</button>
                    <button className="studentpage-user-output-button" onClick={() => {
                        $("#studentpage-user-output").css("display", "none")
                    }}>取消</button>
                </div>
            </div>

        </div>
    )
}

export default StudentPage