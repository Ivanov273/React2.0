import React from 'react';
import s from './FormControls.module.css'

export const FormControl = ({input,child, meta, ...props}) => {
    const haserror = meta.touched && meta.error
    return (
        <div className={s.FormControls + ' ' + (haserror ? s.error : ' ')}>
            <div>
                {props.children}
            </div>
            <div>
                {haserror && <span>{meta.error}</span>}
            </div>
        </div>
    )
}
export const Textarea = (props) => {
    const {input,child, meta, ...restProps} = props
       return <FormControl  {...props}> <textarea {...restProps} {...input} /></FormControl>
}
export const Input = (props) => {
    const {input,child, meta, ...restProps} = props
      return  <FormControl  {...props}> <input {...restProps} {...input} /></FormControl>
}