import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world!', likes: '161'},
                {id: 2, message: 'Aboba', likes: '228'},
                {id: 3, message: 'Я Богдан я богом дан', likes: '1488'}
            ],
            newPostText: 'mr bredman'
        },
        messagesPage: {
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
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },

    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        // @ts-ignore
        this._callSubscriber(this._state)
    }
}


export default store;