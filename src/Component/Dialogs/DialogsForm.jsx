import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormControls/FormControls";
import {maxleight, required} from "../../utils/validators/validators";

const  maxleight20 = maxleight(20)
const DialogForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field name={'formdialog'} component={Textarea} validate={[required,maxleight20]}  placeholder='Enter your message'
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