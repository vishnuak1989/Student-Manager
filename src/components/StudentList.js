import React from 'react'
import {connect} from 'react-redux';
import StudentListItem from './StudentListItem'
import studentsSelector from '../selectors/students'

export const StudentList = (props) =>(

  <div>
    { 
      props.students.length === 0 ?(<p> No students</p>):(props.students.map((student)=>{
        return <StudentListItem key={student.id} {...student} />
    })
    )}
  </div>
);

const mapStateToProps = (state)=>{
  return{
    students:studentsSelector(state.students,state.filters)


  }
}

export default  connect(mapStateToProps)(StudentList);
