import React from 'react'                           //import React, {Component} from 'react
import Button from '@material-ui/core/Button';

class Counter extends React.Component {             //class Counter extends Component
    constructor() {
        super()               //trzeba wywołać constructor React.Component

        this.state = {
            number: 0,
        }
    }

    render() {
        return (
            <div>
                <h1
                    style={{
                        textAlign: 'center',
                        marginTop: '30px',
                        fontSize: '40px',

                    }}
                >
                    {this.state.number}
                </h1>

                <Button
                    variant={"outlined"}
                    color={"secondary"}
                    style={{
                        fontSize: '25px',
                        width: '100px',
                        height: '100px',
                    }}
                >
                    +
                </Button>
            </div>
        )
    }
}

export default Counter