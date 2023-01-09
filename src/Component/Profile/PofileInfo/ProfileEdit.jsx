import React from "react";
import {Field, reduxForm} from "redux-form";
import {
    renderFieldProfile,
    renderFieldProfileInput
} from "../../FormControls/FormsControl";

const ProfileEdit = ({handleSubmit, profile,error}) => {
    return <form onSubmit={handleSubmit}>
        <button>Save</button>
        {error &&<div>{error}</div>}
        <div>
            <b>Полное имя - </b> <Field name='fullName' component={renderFieldProfileInput} type='input' validate={[]}/>
        </div>
        <div>
            <b>ID - </b>
        </div>
        <div>
            <b>My professional skils -</b><Field name='lookingForAJobDescription' component={renderFieldProfile}
                                                 type='textarea' validate={[]}/>
        </div>
        <div>
            <b>AboutMe -</b><Field name='AboutMe' component={renderFieldProfile} type='textarea' validate={[]}/>
        </div>
        <div>
            <b>Ищу рабоу -</b><Field label='lookingForAJob' name='lookingForAJob' component='input' type='checkbox'
                                     description="Show the title of the item"/>
        </div>
        <div>
            <b>Контакты :</b>{Object.keys(profile.contacts).map(key => {
            return <div key={key}><b>{key}: <Field  placeholder={key} name={'contacts.' + key}
                                         component={renderFieldProfileInput} type='input' validate={[]}/></b>
            </div>
        })}
        </div>
    </form>
}
let ProfileFormRedux = reduxForm({
    // a unique name for the form
    form: 'profileform'
})(ProfileEdit)
export default ProfileFormRedux