import React from 'react'
import Button from '@material-ui/core/Button';

class Counter extends React.Component {

    constructor(props) {
        super()
        this.state = {
            initialNumber: props.number,        //bez konstruktora: initialNumber: this.props.number
            number: props.number                // number: props.number || 0 - na wypadek braku propsa (niżej defaultProps)
        }
    }

    inc = () => this.setState({ number: this.state.number + 1 })
    dec = () => this.setState({ number: this.state.number - 1 })
    reset = () => this.setState({ number: this.state.initialNumber })

    render() {

        return (
            <div>
                <h1
                    style={{
                        textAlign: 'center',
                        marginTop: '30px',
                        fontSize: '50px',

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
                    onClick={this.inc}
                >
                    +
                </Button>
                <Button
                    variant={"outlined"}
                    color={"secondary"}
                    style={{
                        fontSize: '25px',
                        width: '100px',
                        height: '100px',
                    }}
                    onClick={this.dec}
                >
                    -
                </Button>
                <div style={{ textAlign: "center" }}>
                    <Button
                        variant={"outlined"}
                        color={"secondary"}
                        style={{
                            fontSize: '20px',
                        }}
                        onClick={this.reset}
                    >
                        RESET
                    </Button>
                </div>
            </div>
        )
    }
}

Counter.defaultProps = {
    number: 0
}

export default Counter