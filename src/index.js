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
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
//pamiętać proszę o imporcie komponentu Posts oraz Home

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>

                    <Route path="home" element={<Home/>}/>

                    <Route path="posts" element={<Posts/>}/>
                    <Route
                        path="*" element={<NotFound/>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();