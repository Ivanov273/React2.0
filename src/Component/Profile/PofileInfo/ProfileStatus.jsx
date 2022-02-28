import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editmode: false,
        status: this.props.profilestatus
    }
activateEditMode =()=>{
       this.setState({
           editmode: true
       })
}
deactivateEditMode =()=>{
       this.setState({
           editmode: false
       })
    this.props.updateStatus(this.state.status)
}
    UpdateStatus=(e)=>{
        let text = e.currentTarget.value
        this.setState({
            status: text
        })

    }
    render() {
        return <div>
            {!this.state.editmode &&
                <div><span onDoubleClick={this.activateEditMode}>{ this.props.profilestatus  || '------'   }</span></div>
            }
            {this.state.editmode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" onChange={this.UpdateStatus}/>
                </div>
            }
        </div>
    }
}

export default ProfileStatus;