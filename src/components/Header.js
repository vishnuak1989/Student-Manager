import React from 'react'
import {NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogOut} from '../actions/auth'
const Header=({startLogOut})=>(
  <header>
    <h1>Student Manager</h1>
    <NavLink to="/" activeClassName="selected" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="selected">Add a Student</NavLink>
    <NavLink to="/help" activeClassName="selected">Help</NavLink>
    <button onClick={startLogOut}>Logout</button>
  </header>
)

const mapDispatchToProps = (dispatch) =>({
startLogOut: () =>dispatch(startLogOut())
})

export default connect(undefined,mapDispatchToProps)(Header);
