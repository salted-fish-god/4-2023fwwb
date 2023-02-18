import React from "react"
// // 导入路由
// import {useNavigate} from "react-router-dom"
// // 导入css
// import "./css/tootip.css"
// // 导入其他东东
// import $ from "jquery"

// interface TootipProps{
//     User_information: {
//         id: string,
//         name: string,
//         account: string,
//         identity: string,
//         password: string
//     }
// }
// interface TootipState{}

// function Tootip(props: TootipProps, state: TootipState){
//     // props数据
//     const {User_information} = props
//     // 路由相关
//     const navigate = useNavigate()
//     // 相关常量
//     const Appellation = {
//         "学生": "同学",
//         "老师": "",
//         "管理员": "管理员" 
//     }

//     return (
//         <div className="Tootip">
//             <div>
//                 <h4>
//                     {User_information.name + (Appellation as any)[User_information.identity] + "，您确定要离开吗？"}
//                 </h4>
//                 <button className="studentpage-user-output-button" onClick={() => {
//                     $("#studentpage-user-output").css("display", "none")
//                     navigate("/")
//                 }}>确定</button>
//                 <button className="studentpage-user-output-button" onClick={() => {
//                     $("#studentpage-user-output").css("display", "none")
//                 }}>取消</button>
//             </div>
//         </div>
//     )
// }

// export default Tootip