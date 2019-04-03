import React from 'react'
import TextField from '@material-ui/core/TextField';

class TypeName extends React.Component {

    state = {
        name: ''
    }

    nameChangeHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    render() {
        return (
            <div>
                <TextField
                    id="standard-dense"
                    label="Your text"
                    margin="dense"
                    style={{width: '240px'}}

                    value={this.state.name}             //kontrolowany input
                    onChange={this.nameChangeHandler}   //każdy event jest opakowany w SyntheticEvent
                />
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default TypeName