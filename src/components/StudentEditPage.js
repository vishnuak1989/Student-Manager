import React from 'react';
import { connect } from 'react-redux';
import StudentForm from './StudentForm';
import { startEditStudent,startRemoveStudent } from '../actions/students'


export class StudentEditPage extends React.Component{
  onSubmit=(student)=>{
    this.props.startEditStudent(this.props.student.id,student)
    this.props.history.push('/')
  }

  onRemove=()=>{
    this.props.startRemoveStudent({id: this.props.student.id})
    this.props.history.push('/')
  }
  render(){
    return(
      <div>
        <StudentForm
          student={this.props.student}
          onSubmit={this.onSubmit}/>
        <button onClick={this.onRemove}>Remove</button>
      </div>
    )
  }
}


const mapStateToProps = (state, props)=> ({student: state.students.find((student) => student.id === props.match.params.id)})


const mapDispatchToProps=(dispatch,props)=>({
  startEditStudent:(id,student) => dispatch(startEditStudent(id,student)),
  startRemoveStudent:(data) => dispatch(startRemoveStudent(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(StudentEditPage);
