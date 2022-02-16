import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Messages from './components/Messages/Messages';


const App = (props:any) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/messages' element={<Messages state={props.state.messagesPage}
                        />} />
                        <Route path='/profile' element={<Profile
                            state={props.state.profilePage}
                            addPost={props.addPost}/>} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
