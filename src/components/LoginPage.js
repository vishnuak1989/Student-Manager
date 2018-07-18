import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../actions/auth'

const LoginPage = ({startLogin}) => {
   

  return (
    <div>
      <button onClick={startLogin}>Login</button>
    </div>
  )
}

const mapDispatchToProps = (disptach) => ({
  startLogin:()=> disptach(startLogin())
});

export default connect(undefined,mapDispatchToProps)(LoginPage);

