import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editmode: false
    }
activateEditMode =()=>{
        console.log(this)
       this.setState({
           editmode: true
       })
}
deactivateEditMode =()=>{
        console.log(this)
       this.setState({
           editmode: false
       })
}
    render() {
        return <div>
            {!this.state.editmode &&
                <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>
            }
            {this.state.editmode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.status}/>
                </div>
            }
        </div>
    }
}

export default ProfileStatus;