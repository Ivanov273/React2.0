import React from 'react';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength15, minLength2,  required} from "../../../utils/validators";
import {renderField} from "../../FormControls/FormsControl";
import s from  '../../Profile/PofileInfo/ProfileInfo.module.css'
window.props=[]
const MyPost = React.memo((props) => {
    window.props.push(props)
    let PostMass = props.posts.map(p => <Post message={p.text} key={p.id} like={p.like}/>)
    let addPost = (value) => {
        props.onaddDialogs(value.profile)
    }


    return (
        <div>
            <div>
               <ProfileFormRedux onSubmit={addPost} />
            </div>
            {PostMass}
        </div>
    );
}
)

const ProfileForm=(props)=>{
    const {handleSubmit}=props
    return (
        <form onSubmit={handleSubmit} ><p><b>Мои посты</b></p>
            <div>
                <Field placeholder='Enter your message' name='profile'  component={renderField} type='text' validate={[ maxLength15, minLength2]} />
            </div>
            <button className={s.button} type="submit">Отправить</button>

        </form>
    )
}
export default MyPost;
let ProfileFormRedux = reduxForm({
    // a unique name for the form
    form: 'profileform'
})(ProfileForm)
