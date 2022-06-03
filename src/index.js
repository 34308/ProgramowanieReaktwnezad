import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import  'font-awesome/css/font-awesome.min.css'
import Home from "./components/home";
import Posts from "./components/posts";
import NotFound from "./components/notFound";
import SignUpForm from "./components/signUp"
import { isExpired } from "react-jwt";
import { Navigate } from "react-router-dom"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import LoginForm from "./components/loginForms";
//pamiętać proszę o imporcie komponentu Posts oraz Home

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="login" element={<LoginForm/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="posts" element={isExpired(localStorage.getItem('token')) ? <Navigate replace to="/home"/> : <Posts/>}/>

                    <Route path="signUp" element={<SignUpForm/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();