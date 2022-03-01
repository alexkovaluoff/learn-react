const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likes: Math.round(Math.random()*1488)
            };
            // @ts-ignore
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            // @ts-ignore
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            // @ts-ignore
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            // @ts-ignore
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messages.push({id: 7, msg: body});
            // @ts-ignore
            this._callSubscriber(this._state)
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostElementActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;