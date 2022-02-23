let store = {
    _state: {
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
    },
    getState() {
      return this._state;
    },
    _callSubscriber() {},
    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likes: '0'
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        // @ts-ignore
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: any) {
        this._state.profilePage.newPostText = newText;
        // @ts-ignore
        this._callSubscriber(this._state);
    },
    subscribe (observer: any) {
        this._callSubscriber = observer;
    }
}

export default store;