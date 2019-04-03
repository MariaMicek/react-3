import React from 'react'

class LifeCycle extends React.Component {
    constructor() {
        super()

        this.state = {
            number: 0,
            time: (new Date()).toLocaleString()
        }
        this.intervalID = null

        console.log('constructor')
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
        console.log('--------------------')

        this.intervalID = setInterval(
            () => this.setState({time: (new Date()).toLocaleString()}),
            1000
        )
    }

    componentWillReceiveProps(nextProps){           //metoda wycofana
        console.log('componentWillReceiveProps')
    }

    componentWillUpdate(){                  //metoda wycofana
        console.log('componentWillUpdate')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        console.log("Current props: ", this.props)
        console.log("Next props: ", nextProps)
        console.log("Current state: ", this.state)
        console.log("Next state: ", nextState)

        return true
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.intervalID)
    }

    render() {
        console.log('render')          

        return (
            <div>
                <div>{this.state.time}</div>
                <div>
                    <button
                        onClick={() => this.setState({ number: this.state.number + 1 })}
                    >
                        CHANGE STATE
                    </button>
                </div>
            </div>
        )
    }
}

export default LifeCycle