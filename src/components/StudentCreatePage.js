import React from 'react'
import StudentForm from './StudentForm'
import {connect} from 'react-redux'
import {startAddStudent} from '../actions/students'

 export class StudentCreatePage extends React.Component{
  onSubmit=(student)=>{
    this.props.startAddStudent(student)
    this.props.history.push('/')
  }
  render(){
  return(  <div>
      <h1>Add a new student</h1>
      <StudentForm onSubmit={this.onSubmit}/>
    </div>
  )
  }


}

const mapDispatchToProps=(dispatch)=>({
  startAddStudent:(student) => dispatch(startAddStudent(student))
})
export default connect(undefined,mapDispatchToProps)(StudentCreatePage);
