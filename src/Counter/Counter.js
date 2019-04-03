import React from 'react'                           //import React, {Component} from 'react
import Button from '@material-ui/core/Button';

class Counter extends React.Component {             //class Counter extends Component
    
    state = {           //Babel umozliwia pisanie wlaściwości luzem, które zostaną automatycznie wrzucone do constructora (tak jak metody jakos funkcje strzałkowe)
        number: 0
    }

    inc = () => this.setState({number: this.state.number + 1})      //to nie jest JavaScript! Babel umożliwia pisanie metod jako funkcji strzałkowych, ale wtedy nie będą one w prototypie

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
            </div>
        )
    }
}

export default Counter