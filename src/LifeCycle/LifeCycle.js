import React from 'react'

class LifeCycle extends React.Component {
    componentDidMount(){
        console.log('componentDidMount')        //4
    }

    componentWillMount(){
        console.log('componentWillMount')       //2
    }

    render(){
        console.log('render')                   //3
        return(
            <div> 
                Hello LifeCycle
            </div>
        )
    }

    constructor(){
        super()
        console.log('constructor')              //1
    }
}

export default LifeCycle