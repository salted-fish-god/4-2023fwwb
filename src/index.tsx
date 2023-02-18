import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// React 路由
import {createBrowserRouter, RouterProvider} from "react-router-dom"

// 组件
import LoginPage from './Children-pages/Login-page';
import StudentPage from './Children-pages/Student-page';
import TeacherPage from './Children-pages/Teacher-page';
import ErrorPage from './Children-pages/Error-page';
import AdministratorPage from './Children-pages/Administrator-page';
// StudentPage(学生端组件)
import Analyse from './Children-pages/Student-page/components/analyse';
import Revise from './Children-pages/Student-page/components/revise';
import Message from './Children-pages/Student-page/components/message';
// TeacherPage(教师端组件)
import AddStudentList from './Children-pages/Teacher-page/components/addStudentList';
import Individual from './Children-pages/Teacher-page/components/individual';
import Overall from './Children-pages/Teacher-page/components/overall';
import StudentList from './Children-pages/Teacher-page/components/studentList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage></LoginPage>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "student-page",
    element: <StudentPage></StudentPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "analyse",
        // path: "/",
        element: <Analyse></Analyse>
      },
      {
        path: "revise",
        element: <Revise></Revise>
      },
      {
        path: "message",
        element: <Message></Message>
      }
    ]
  },
  {
    path: "teacher-page",
    element: <TeacherPage></TeacherPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "student-list",
        element: <StudentList></StudentList>
      },
      {
        path: "add-student-list",
        element: <AddStudentList></AddStudentList>
      },
      {
        path: "individual",
        element: <Individual></Individual>
      },
      {
        path: "overall",
        element: <Overall></Overall>
      }
    ]
  },
  {
    path: "administrator-page",
    element: <AdministratorPage></AdministratorPage>,
    errorElement: <ErrorPage></ErrorPage>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
