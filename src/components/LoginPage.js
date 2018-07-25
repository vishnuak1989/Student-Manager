import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../actions/auth'

const LoginPage = ({startLogin}) => {
 

  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className=".box-layout__title">Student Manager</h1>
         <button className="button" onClick={startLogin}>Login with Google</button>
      </div>
     
    </div>
  )
}

const mapDispatchToProps = (disptach) => ({
  startLogin:()=> disptach(startLogin())
});

export default connect(undefined,mapDispatchToProps)(LoginPage);

