import React from 'react'
import {connect} from 'react-redux'
import{Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

export const StudentListItem = ({id,name,address,fees,phone,nextClassDate,note}) =>(

  <div>
    <Link to={`/edit/${id}`}><h3>{name}</h3></Link>
    <p>{address}</p>
    <p>
    {numeral(fees/100).format("$0,0.00")}
    </p>
    <p><a href={`tel:${phone}`}>{phone}</a></p>
 
    
    <p>{moment(nextClassDate).format("MMMM Do, YYYY")}</p>
    
    <p>{note}</p>

  </div>
);

const mapStateToProps=(state)=>{
  return{
    students:state.students
  }
}


export default connect(mapStateToProps)(StudentListItem)
