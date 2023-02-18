import React from "react"
// 路由
import {useLocation, useNavigate, Outlet, Link} from "react-router-dom"
// 导入css样式
import "./css/index.css"
// 导入其他库
import $ from "jquery"

interface TeacherPageProps{}
interface TeacherPageState{}

function TeacherPage(props: TeacherPageProps, state: TeacherPageState){
    // 用户信息
    const User_information = useLocation().state
    // 路由跳转
    const navigate = useNavigate()

    React.useEffect(() => {
        console.log(User_information);
    }, [])

    // 导航栏数据信息
    const Navigation = [
        "个人主页",
        "课程管理",
        "班级管理",
        "学习情况",
        "反馈中心",
    ]
    const Navigation_url = [
        "",
        "",
        "",
        "",
        "",
    ]
    const Navigation_element = [
        <></>
    ]
    // const Navigation = [
    //     {
    //         name: "学生管理",
    //         children: [
    //             "学生名单",
    //             "学生添加"
    //         ]
    //     },
    //     {
    //         name: "课堂分析",
    //         children: [
    //             "班级整体分析",
    //             "学生个人分析"
    //         ]
    //     }
    // ]
    // const Navigation_url = [
    //     ["/teacher-page/student-list", "/teacher-page/add-student-list"],
    //     [ "/teacher-page/overall", "/teacher-page/individual"]
    // ]
    // const Navigation_element = Navigation.map((v1, index1) => {
    //     let Navigation_element_item = v1.children.map((v2, index2) => {
    //         return(
    //             <Link key={v1.name + "-" + v2 + index2} to={Navigation_url[index1][index2]} state={User_information}>
    //                 <div className={(index1 === 1 && index2 === 0) ? "teacherPage-down-left-item-children teacherPage-down-left-item-children-click" : "teacherPage-down-left-item-children"}
    //                     onClick={(e) => {
    //                         $(".teacherPage-down-left-item-children").removeClass("teacherPage-down-left-item-children-click")
    //                         $(e.target).addClass("teacherPage-down-left-item-children-click")
    //                     }}
    //                 >{v2}</div>
    //             </Link>
    //         )
    //     })
    //     return(
    //         <div key={v1.name + index1} className="teacherPage-down-left-item">
    //             <div className="teacherPage-down-left-item-father">{v1.name}</div>
    //             <div>{Navigation_element_item}</div>
    //         </div>
    //     )
    // })

    return(
        <div className="TeacherPage">
            {/* 在css里面，我们使用弹性布局，主轴起点在下沿 (反向 and 反向 = 正向) */}

            {/* 下部 */}
            <div id="teacherPage-down">
                {/* 左侧导航栏 */}
                <div id="teacherPage-down-left">
                    {Navigation_element}
                </div>
                {/* 右侧主要展示界面 */}
                <div id="teacherPage-down-right">
                    {/* 路由接口 */}
                    <Outlet></Outlet>
                </div>
            </div>

            {/* 上侧 */} 
            <div id="teacherPage-up">
                {/* 项目Logo */}
                <div>Logo</div>
                {/* 用户 */}
                <div
                    onMouseOver={() => {
                        $("#teacherPage-user").css('display',  'inline')
                    }}
                >
                    <svg viewBox="0 0 1024 1024">
                        <path
                            d="M951.616 893.12c0 0-28.736-62.912-129.472-199.808-25.984-35.328-59.328-77.12-94.4-119.68C670.208 626.048 594.752 658.176 512 658.176c-83.072 0-158.784-32.384-216.448-85.184-35.264 42.752-68.736 84.8-94.912 120.32-100.8 136.96-129.472 199.808-129.472 199.808-17.344 39.232-2.496 77.824 36.544 77.824l807.36 0C954.112 970.944 971.712 928.448 951.616 893.12zM512 593.088c145.088 0 262.656-120.896 262.656-270.016 0-149.12-117.632-270.016-262.656-270.016-145.088 0-262.656 120.896-262.656 270.016C249.344 472.192 366.912 593.088 512 593.088z"
                        ></path>
                    </svg>
                    {User_information.name}
                </div>
            </div>

            {/* 用户信息及退出悬浮框 */}
            <div id="teacherPage-user">
                {/* 用于控制鼠标悬浮显示范围的div */}
                <div
                    // 鼠标悬停
                    onMouseOver={() => {
                        $("#teacherPage-user").css('display',  'inline')
                    }}
                    // 鼠标不在此悬停
                    onMouseOut={() => {
                        $("#teacherPage-user").css('display',  'none')
                    }}
                >
                    {/* 包裹主要信息的 div */}
                    <div>
                        <h4>{User_information.identity}</h4>
                        <h6>{"ID: " + User_information.account}</h6>
                        <button
                            onClick={() => {
                                navigate("/")
                            }}
                        >退出登录</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherPage