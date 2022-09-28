import React from "react";
import s from './FormStyle.module.css'

export const renderField = ({
                                input,
                                meta: {touched, error}
                            }) => {
    return (
        <div>
            <textarea className={error ? s.formControls : ''} {...input}  />
            {touched &&
                ((error && <span className={s.error}>{error}</span>))}
        </div>
    )
}
export const renderFieldDialog = ({
                                      input,
                                      meta: {touched, error}
                                  }) => {
    return (
        <div>
            <textarea className={error ? s.formControls : ''} {...input}  />
            {touched &&
                ((error && <span className={s.error}>{error}</span>))}
        </div>
    )
}

export const renderFieldLoginEmail = ({
                                      input,
                                      meta: {touched, error}
                                  }) => {
    return (
        <div>
            <input placeholder='enter email' className={error ? s.formControls : ''} {...input}  />
            {touched &&
                ((error && <span className={s.error}>{error}</span>))}
        </div>
    )
}
export const renderFieldLoginPassword = ({
                                      input,
                                      meta: {touched, error}
                                  }) => {
    return (
        <div>
            <input placeholder='enter password' className={error ? s.formControls : ''} {...input}  />
            {touched &&
                ((error && <span className={s.error}>{error}</span>))}
        </div>
    )
}
