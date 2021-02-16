import React, {ChangeEvent} from 'react';
import s from './ProfileStatus.module.css'


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status

    }

    activateEditMode=()=>{
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode=()=>{
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    // onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
    onStatusChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
       this.setState({
           status:e.currentTarget.value
       })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;