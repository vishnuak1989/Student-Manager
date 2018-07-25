import React from 'react'
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates'
import {sortByDate,sortByAmount,setTextFilter,setStartDate,setEndDate} from '../actions/filters'

export class StudentListFilters extends React.Component{
state={
  calenderFocused:null
  }
onDatesChange=({startDate,endDate})=>{
  this.props.setStartDate(startDate),
  this.props.setEndDate(endDate)
  }
onFocusChange=(calenderFocused)=>{
  this.setState(()=>({ calenderFocused }))
  }

  onTextChange=(e)=>{this.props.setTextFilter(e.target.value)}

  onSortChange=(e)=>{
    if(e.target.value === "date") {
    this.props.sortByDate()
    }
    else if (e.target.value === "amount") {
      this.props.sortByAmount()
    }
  }
  
  isOutsideRange=()=>{false}

render(){
  return(
  <div className="container">
  <div className="input-group">
    <div className="input-group__item"><input className="input-text" type="text" placeholder="Search by Name"value={this.props.filters.text} onChange={this.onTextChange}/></div>
    <div className="input-group__item"><select className="select"
      value = {this.props.filters.sortBy}
      onChange={this.onSortChange}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select></div>
    <div className="input-group__item">
    <DateRangePicker
      startDate={this.props.filters.startDate}
      startDateId="StartDate_1"
      endDate={this.props.filters.endDate}
      endDateId="EndDate_1"
      numberOfMonths={1}
      isOutsideRange={this.isOutsideRange}
      onDatesChange={this.onDatesChange}
      focusedInput={this.state.calenderFocused}
      onFocusChange={this.onFocusChange}
    />
    </div>
    </div>
  </div>
)
}};

const mapStateToProps=(state)=>{
  return{
    filters:state.filters
  };
};

const mapDispatchToProps=(dispatch)=>({
  setStartDate:(startDate)=> dispatch(setStartDate(startDate)),
  setEndDate:(endDate)=> dispatch(setEndDate(endDate)),
  setTextFilter:(text)=>dispatch(setTextFilter(text)),
  sortByDate:()=>dispatch(sortByDate()),
  sortByAmount:()=>dispatch(sortByAmount())

})

export default connect(mapStateToProps,mapDispatchToProps)(StudentListFilters)
