import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            <div>
                <textarea name="" id="" cols="30" rows="1"></textarea>
                <button>добавить</button>
                <button>удалить</button>
            </div>
            <Post message={'Привет пост 1'} like={5} />
            <Post message={'Привет пост 2'} like={34} />
            <Post message={'Привет пост 3'} like={15} />
            <Post message={'Привет пост 4'} like={25} />
            <Post message={'Привет пост 5'} like={35} />

        </div>
    );
}
export default MyPost;