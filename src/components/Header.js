import React from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogOut} from '../actions/auth'
const Header=({startLogOut})=>(
  <header className="header">
    <div className="container">
    <div className="header__content">
    <Link className="header__title" to="/dashboard" exact={"true"}><h1>Student Manager</h1></Link>
    <button className="button button--link" onClick={startLogOut}>Logout</button>
    </div>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) =>({
startLogOut: () =>dispatch(startLogOut())
})

export default connect(undefined,mapDispatchToProps)(Header);
