import React from 'react'
import {renderIndex} from './../render'
let state = {
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
            ]
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
        },

    }

export let addPost = (n) => {
    let newtext = {
        id: 9,
        text: n,
        like: 5555555555
    }
    state.ProfilePage.PostData.push(newtext)
    renderIndex(state)

}

export default state