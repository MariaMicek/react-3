import React from 'react'

class LifeCycle extends React.Component {
    constructor() {
        super()

        this.state = {
            number: 0
        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    render() {
        console.log('render')           //na początku wywołują się wszystkie metody, po kliknięciu na button wywołuje się tylko render!

        return (
            <div>
                <button
                    onClick={() => this.setState({ number: this.state.number + 1 })}
                >
                    CHANGE STATE
                </button>
            </div>
        )
    }
}

export default LifeCycle