import React from 'react'
import Counter from './Counter'
import TypeName from './TypeName'
import './index.css'
import LifeCycle from './LifeCycle/LifeCycle'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Counter number={0} />
      <TypeName />

      <BrowserRouter>
        <Route path={'/life-cycle'} component={LifeCycle} />
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/life-cycle'}>LifeCycle</Link>
          </li>
        </ul>
      </BrowserRouter>
    </div>
  )
}

export default App