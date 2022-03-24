import React, {useEffect, useState} from 'react';

const ProfileStatusHooc =(props)=>{
        let [editmode,Seteditmode] = useState(false)
        let [status,Setstatus] = useState(props.profilestatus)
    useEffect(()=>{

        Setstatus(props.profilestatus)
    },[props.profilestatus])
    const activateEditMode= ()=>{
            Seteditmode(true)
    }
    const deactivateEditMode= ()=>{
            Seteditmode(false)
        props.updateStatus(status)
    }
    const  UpdateStatus = (e) => {
        Setstatus(e.currentTarget.value)

    }
            return <div>
            {!editmode &&
                <div><span onDoubleClick={activateEditMode} >{props.profilestatus || '------'}</span></div>
            }
            {editmode &&
                <div>
                    <input
                        value={status} type="text" onBlur={deactivateEditMode} onChange={UpdateStatus} />
                </div>
            }
        </div>

}

export default ProfileStatusHooc;