import React from 'react'
import Counter from './Counter'
import TypeName from './TypeName'
import './index.css'

const App = () => {
  return (
    <div>
      <Counter number={'0'}/>
      <TypeName />
    </div>
  )
}

export default App