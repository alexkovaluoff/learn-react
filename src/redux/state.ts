import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello world!', likes: '12'},
            {id: 2, message: 'Aboba', likes: '228'},
            {id: 3, message: 'Я Богдан я богом дан', likes: '1488'}
        ],
        newPostText: 'mr bredman'
    },
    messagesPage:  {
        messages: [
            {id: 1, msg: 'Заебал ты со своим ебучим инстаграмом'},
            {id: 2, msg: 'Мяу'},
            {id: 3, msg: 'Welcome to USA'},
            {id: 4, msg: 'Пиксельплекс'},
            {id: 5, msg: 'я пакакал'},
            {id: 6, msg: 'Хай гёрлс энд хаай зяблс'}
        ],
        dialogs: [
            {id: 1, name: 'Владос'},
            {id: 2, name: 'Антоха'},
            {id: 3, name: 'Славикс'},
            {id: 4, name: 'Стасяо'},
            {id: 5, name: 'Пабло Сухолетти'},
            {id: 6, name: 'Глад Валакас'}
        ]
    }
};

export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likes: '0'
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText: any) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;