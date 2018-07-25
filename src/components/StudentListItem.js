import React from 'react'
import {connect} from 'react-redux'
import{Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

export const StudentListItem = ({id,name,address,fees,phone,nextClassDate,note}) =>(

  <div className="list-item">
    <div>
      <Link to={`/edit/${id}`} className="list-item__title"><h3>{name}</h3></Link>  
    </div>
    <div>
      <a className="list-item__phone" href={`tel:${phone}`} ><img src="./images/phone_icon.png"/></a>
      </div>
    <div>
    <p>{moment(nextClassDate).format("MMMM Do, YYYY")}</p>
    {/* <p>{numeral(fees/100).format("$0,0.00")}</p> */}
    </div>
  </div>
);

const mapStateToProps=(state)=>{
  return{
    students:state.students
  }
}


export default connect(mapStateToProps)(StudentListItem)
