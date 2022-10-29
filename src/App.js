import React from 'react'
// import Login from './components/Login/Login'
import Landing from './components/Landing/Landing'

function App() {

  return (
    <div className="limiter" style={{overflowY:'scroll'}}>
      <div className='container-login100 backgroundImage'>
        {/* <Login/> */}
        <Landing/>
      </div>
    </div>
  )
}

export default App