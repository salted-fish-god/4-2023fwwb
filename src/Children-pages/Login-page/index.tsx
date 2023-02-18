import React from "react";
// 导入路由
import {Link, useNavigate} from "react-router-dom"
// 导入css样式
import "./css/index.css"
// 导入antd组件
import "antd/dist/reset.css"
import {Input, Radio} from "antd"
// 导入axios(后端POST请求)
import axios from "axios"
// 导入常量
import {Url_Head} from "../../Constant/constant1"
 
interface LoginPageProps{
}

interface LoginPageState{
    Identity: string, // 身份
    Account: string, // 账号
    Password: string, // 密码
}

/**
 * 当前问题解决方法：使用History(现在为Nagitive)，进行栈式跳转或者后退，如果判断成功，则跳转到主页面；否则，留在当前页
 */

function LoginPage(props: LoginPageProps, state: LoginPageState){
    // 路由跳转钩子(只能在函数内部调用)
    const navigate = useNavigate()
    // 初始化state里的变量
    const [Identity, Set_Identity] = React.useState("老师")
    const [Account, Set_Account] = React.useState("")
    const [Password, Set_Password] = React.useState("")

    // 相关常量
    const Identity_url = { // 职业 - 端口url请求
        "学生": "/student-page/analyse",
        "老师": "/teacher-page/overall",
        "管理员": "/administrator-page"
    }

    // 获取账号
    function Get_account(value: any){
        Set_Account(value.target.value)
    }
    // 获取密码
    function Get_password(value: any){
        Set_Password(value.target.value)
    }
    // 更改身份
    function Change_identity(value: any){
        Set_Identity(value.target.value.toString())
    }
    // 登录操作
    function Login_click(){
        // alert("登录成功")
        // // navigate("/student-page") // 不传参的路由跳转
        // navigate("/student-page", { state: {form: "Aisa", numbers: 123}, replace: true}) // 跳转到新的路由节点(添加 replace: true，使得前端路由跳转后不能再回跳，很神奇，nice)
        // // window.location.href = "http://localhost:3000/student-page" // 直接js重定向

        /* 判断是否登录成功 */
        let url = Url_Head + "database_login"
        axios({
            url: url,
            method: 'POST',
            data: {
                "identity": Identity,
                "account": Account,
                "password": Password
            }
        }).then(response => {
            let data_user = response.data
            if (data_user !== "") {
                alert(data_user.name + "登录成功！")
                navigate((Identity_url as any)[data_user.identity], {state: data_user, replace: true})
            } else {
                confirm("无该用户信息！")
            }
        })

        // /* 学生直接登录 */
        // let user_data = {id: '191960028', name: '徐增智', account: '20211004050', identity: '学生', password: '123'}
        // alert(user_data.name + "同学登录成功！")
        // // navigate("/student-page/analyse", {state: user_data, replace: true}) // 学生端
        // navigate("/teacher-page", {state: user_data, replace: true})
    }
    // 注册操作
    function Enroll_click(){
        alert("注册成功")
    }

    return (
        <div className="LoginPage">
            {/* 登录主界面 */} 
            <div id="login-main-content">
                <div style={{float: 'left', position: 'relative', marginTop: 20, marginBottom: 0, fontSize: '24px', color: 'black', fontWeight: "700", textAlign: 'center', width: "100%"}}>用户登录</div>
                <div className="login-item" style={{float: 'left'}}>
                    <div style={{float: 'left', width: '15%'}}>账号</div>
                    <Input placeholder="请输入账号" onChange={Get_account} style={{width: "85%", float: 'left'}}></Input>
                </div>
                <div className="login-item" style={{float: 'left'}}>
                    <div style={{float: 'left', width: '15%'}}>密码</div>
                    <Input.Password placeholder="请输入密码" onChange={Get_password} style={{width: "85%", float: 'left'}}></Input.Password>
                </div>
                <div className="login-item" style={{float: 'left'}}>
                    <Radio.Group onChange={Change_identity} value={Identity} style={{width: '100%'}}>
                        <Radio value={"老师"} className="login-radio-item">老师</Radio>
                        <Radio value={"学生"} className="login-radio-item">学生</Radio>
                        <Radio value={"管理员"} className="login-radio-item">管理员</Radio>
                    </Radio.Group>
                </div>
                <div className="login-item login-button" style={{float: 'left', marginTop: 10}} onClick={Login_click}>
                    {/* <Link to="/student-page" style={{width: '100%'}}> */}
                        <div className="login-button-text" style={{width: '100%', textAlign: 'center' }}>登录</div>
                    {/* </Link> */}
                </div>
                <div className="login-item login-button" style={{float: 'left', marginTop: 10}} onClick={Enroll_click}>
                    <Link to="/student-page" style={{width: '100%'}}>
                       <div className="login-button-text" style={{width: '100%', textAlign: 'center'}}>注册</div> 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage