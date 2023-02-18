/**
 * 未知错误页面组件
 */
import React from "react"
// 导入css
import "./index.css"

interface ErrorPageProps{}
interface ErrorPageState{}

function ErrorPage(props: ErrorPageProps, state: ErrorPageState){
    return(
        <div className="ErrorPage">
            <div>
                <h2>出错了φ(゜▽゜*)♪</h2>
                <h4>未知错误</h4>
                <h4>请联系系统开发同学解决此问题</h4>
            </div>
        </div>
    )
}

export default ErrorPage