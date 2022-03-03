import React from 'react';
import {Field, reduxForm} from "redux-form";


const DialogForm = (props) => {
    //console.log(props.newPostText)
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field name={'formdialog'} component="textarea"  placeholder='Enter your message'
                    />
            </div>


            <div>
                <button  >добавить</button>

            </div>

        </form>
    )
}
const DialogsFormRedux = reduxForm({
    form: 'adddialogsform', // имя формы в state (state.form.login)
})(DialogForm)
export default DialogsFormRedux;