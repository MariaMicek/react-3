import React from 'react'

class LifeCycle extends React.Component {
    constructor(){
        super()
        console.log('constructor')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    render(){
        console.log('render')
        return(
            <div> 
                Hello LifeCycle
            </div>
        )
    }
}

export default LifeCycle