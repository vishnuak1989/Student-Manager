import React from 'react'
import {connect} from 'react-redux';
import StudentListItem from './StudentListItem'
import studentsSelector from '../selectors/students'

export const StudentList = (props) =>(

  <div className="container">
    <div className="list-header">
    <div>Student</div>
    <div>Next Class on</div>
      </div>
      <div className="list-body">
      { 
      props.students.length === 0 ?(<div className="list-item list-item--message"><span> No students</span></div>):(props.students.map((student)=>{
        return <StudentListItem key={student.id} {...student} />
    })
    )}

      </div>
  
  </div>
);

const mapStateToProps = (state)=>{
  return{
    students:studentsSelector(state.students,state.filters)


  }
}

export default  connect(mapStateToProps)(StudentList);
