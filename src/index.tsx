import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./components/Profile/MyPosts/Post/Post";
import DialogItem from "./components/Messages/DialogItem/DialogItem";
import Message from "./components/Messages/Message/Message";


let postsData = [
    {id: 1, message: 'Hello world!', likes: '12'},
    {id: 2, message: 'Aboba', likes: '228'},
    {id: 3, message: 'Я Богдан я богом дан', likes: '1488'}
];

let dialogs = [
    {id: 1, name: 'Vlados'},
    {id: 2, name: 'Antoha'},
    {id: 3, name: 'Slaviks'},
    {id: 4, name: 'Stason'},
    {id: 5, name: 'Suhoi'},
    {id: 6, name: 'Glad Valakas'}
];

let messages = [
    {id: 1, msg: 'Чё каво?'},
    {id: 2, msg: 'Мяу'},
    {id: 3, msg: 'Welcome to USA'},
    {id: 4, msg: 'Пиксельплекс'},
    {id: 5, msg: 'я пакакал'},
    {id: 6, msg: 'Хай гёрлс энд хаай зяблс'}
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
