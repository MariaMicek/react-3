import React from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

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
                        fontSize: '50px'

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
                        margin: '10px'
                    }}
                    onClick={this.dec}
                >
                    -
                </Button>
                <Button
                    variant={"outlined"}
                    color={"secondary"}
                    style={{
                        fontSize: '25px',
                        width: '100px',
                        height: '100px',
                        margin: '10px'
                    }}
                    onClick={this.inc}
                >
                    +
                </Button>
                <div style={{ textAlign: "center" }}>
                    <Button
                        variant={"outlined"}
                        color={"secondary"}
                        style={{
                            fontSize: '20px',
                            margin: '10px'
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

Counter.propTypes = {
    number: PropTypes.number.isRequired,
}

export default Counter