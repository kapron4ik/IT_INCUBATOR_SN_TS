import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileStatus.module.css'


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: PropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
                : <div>
                    <span onDoubleClick={activateMode}> {props.status || '-------'}</span>
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;