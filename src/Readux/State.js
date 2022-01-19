import React from 'react'

let store = {
    _subscriber() {
        alert('adafafd')
    },
    _state: {
        DialogPage: {
            TextData: [
                {id: 1, text: '4444444'},
                {id: 2, text: 'acascascascsac'},
                {id: 3, text: 'dvsvsdacascascascsac'},
                {id: 4, text: 'acascascascsac'}
            ],
            DialogData: [
                {id: 1, name: 'Mikee'},
                {id: 2, name: 'Denis'},
                {id: 3, name: 'Mikee'},
                {id: 4, name: 'Mikee'},
                {id: 5, name: 'Ylia'}
            ]
        },
        ProfilePage: {
            PostData: [
                {id: 1, text: '5555555555555', like: 22},
                {id: 2, text: 'acascascascsac', like: 22},
                {id: 3, text: 'acascascascsac', like: 22},
                {id: 4, text: 'acascascascsac', like: 22},
                {id: 5, text: 'acascascascsac', like: 22},
                {id: 6, text: 'acascascascsac', like: 22},
                {id: 7, text: 'acascavdvdvdscascsac', like: 22}
            ],
            newPostText: ''
        },
        SideBar: {
            SideBarData:
                [
                    {
                        name: "Sasha",
                        id: 0,
                        img: 'https://img.gazeta.ru/files3/29/6856029/Ted-2-2606346-pic700-700x467-79410.jpg'
                    },
                    {
                        name: "Sasha",
                        id: 0,
                        img: 'https://img.gazeta.ru/files3/29/6856029/Ted-2-2606346-pic700-700x467-79410.jpg'
                    },

                    {
                        name: "Sasha",
                        id: 0,
                        img: 'https://img.gazeta.ru/files3/29/6856029/Ted-2-2606346-pic700-700x467-79410.jpg'
                    }
                ]
        }
    },
    getState() {
        return this._state
    },
    setState(observer) {

        this._subscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newtext = {
                id: 9,
                text: this._state.ProfilePage.newPostText,
                like: 5555555555
            }
            this._state.ProfilePage.PostData.push(newtext)
            this._state.ProfilePage.newPostText = ''
            this._subscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-TEXT') {
            this._state.ProfilePage.newPostText = action.newText
            this._subscriber(this._state)
        }
    }

}


export default store