import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./components/Profile/MyPosts/Post/Post";
import DialogItem from "./components/Messages/DialogItem/DialogItem";
import Message from "./components/Messages/Message/Message";
import state, {addPost} from "./redux/state";




ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
