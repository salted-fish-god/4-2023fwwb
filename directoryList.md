|-- undefined
    |-- .gitignore
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- tsconfig.json
    |-- 登录信息.md               // 用户登录信息表 (账号、密码等)
    |-- build                    // 项目打包后的文件夹 (后面部署项目用)
    |   |-- asset-manifest.json
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- logo192.png
    |   |-- logo512.png
    |   |-- manifest.json
    |   |-- robots.txt
    |   |-- static
    |       |-- css
    |       |   |-- main.f695e34f.css
    |       |   |-- main.f695e34f.css.map
    |       |-- js
    |           |-- 787.28cb0dcd.chunk.js
    |           |-- 787.28cb0dcd.chunk.js.map
    |           |-- main.74775574.js
    |           |-- main.74775574.js.LICENSE.txt
    |           |-- main.74775574.js.map
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- logo192.png
    |   |-- logo512.png
    |   |-- manifest.json
    |   |-- robots.txt
    |-- server              // 后端服务器1：连接服务器MySQL数据库用，现在暂时用于前端表单登录(go语言项目)
    |   |-- database.go
    |   |-- fileRead.go
    |   |-- fwwb.com        // 该服务器打包出来的Linux可执行文件
    |   |-- go.mod
    |   |-- go.sum
    |   |-- main.go
    |   |-- server.exe
    |   |-- server.exe~
    |   |-- data
    |       |-- login.csv
    |-- server_build            // 后端服务器2：用于部署前端界面 (部署项目至服务器) (go语言项目)
    |   |-- factor.com          // 该服务器打包出来的Linux可执行文件
    |   |-- factor.com.exe
    |   |-- go.mod
    |   |-- go.sum
    |   |-- main.go
    |-- src
        |-- index.css
        |-- index.tsx           // 项目入口文件 (集成了系统的所有路由接口)
        |-- logo.svg
        |-- react-app-env.d.ts
        |-- reportWebVitals.ts
        |-- setupTests.ts
        |-- Asset-components       // 静态组件库 (准备写些组件拿来复用，但现在还没搞 q(≧▽≦q))
        |   |-- Tootip.tsx         // 准备写个悬浮框，但没用上，搁置了就
        |   |-- css
        |       |-- tootip.css
        |-- Children-pages              // 页面组件 (所有)
        |   |-- Administrator-page      // 管理员页面组件
        |   |   |-- index.tsx
        |   |-- Error-page              // 未知错误触发页面 (注册按钮暂时报未知错误，可以借此查看该页面)
        |   |   |-- index.css
        |   |   |-- index.tsx
        |   |-- Login-page              // 登录注册页面 组件
        |   |   |-- index.tsx
        |   |   |-- css
        |   |       |-- index.css
        |   |-- Student-page            // 学生端页面 组件
        |   |   |-- index.tsx           // 学生端总组件
        |   |   |-- components          // 学生端页面子组件 
        |   |   |   |-- analyse.tsx         // 学习情况分析 页面
        |   |   |   |-- message.tsx         // 个人信息维护 页面
        |   |   |   |-- revise.tsx          // 给我留言 页面
        |   |   |-- css
        |   |       |-- index.css
        |   |-- Teacher-page            // 教师端页面 组件
        |       |-- index.tsx           // 教师端总组件
        |       |-- components          // 教师端页面子组件
        |       |   |-- addStudentList.tsx      // 添加学生 页面
        |       |   |-- individual.tsx          // 学生个人情况展示 页面
        |       |   |-- overall.tsx             // 班级整体情况展示 页面
        |       |   |-- studentList.tsx         // 学生管理 页面
        |       |-- css
        |           |-- index.css
        |-- Constant                    // 常量库
            |-- constant1.tsx           // 该文件暂时只存储了 后端服务器 的url连接头
