import React from 'react'
import Counter from './Counter'
import TypeName from './TypeName'
import './index.css'
import LifeCycle from './LifeCycle/LifeCycle';

const App = () => {
  return (
    <div>
      <Counter number={0}/>
      <TypeName />
      <LifeCycle />
    </div>
  )
}

export default App