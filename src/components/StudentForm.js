import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const now = moment();
console.log(now.format('MMM Do, YYYY'))
console.log(Date())
export default class StudentForm extends React.Component{
constructor(props){
  super(props);
  this.state={
    name: props.student? props.student.name:"",
    address:props.student ? props.student.address:"",
    fees:props.student ? (props.student.fees/100).toString() :"",
    phone:props.student ? props.student.phone:"",
    note:props.student ? props.student.note:"",
    nextClassDate: props.student ? moment(props.student.nextClassDate): moment(),
    calenderFocused:false,
    error:""
        };
}
    onNameChange=(e)=>{
      const name = e.target.value;
      this.setState(()=>({name}));
    }
    onAddressChange=(e)=>{
      const address = e.target.value;
      this.setState(()=>({address}))
    }
    onNoteChange=(e)=>{
      const note = e.target.value;
      this.setState(()=>({note}))
    }
    onPhoneChange=(e)=>{
      const phone = e.target.value;
      this.setState(()=>({phone}))
    }
    onFeesChange=(e)=>{
      const fees = e.target.value;
      if(!fees || fees.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(()=>({fees}))
      }
    }
   onDateChange=(nextClassDate)=>{
     if(nextClassDate){
      this.setState(()=>({nextClassDate}))
   }}
   onFocusChange=({focused})=>{
     this.setState(()=>({calenderFocused:focused}))
   }

   onSubmit=(e)=>{
     e.preventDefault();
     if (!this.state.name || !this.state.nextClassDate) {
      this.setState(()=>({error:"Please rovide name and the date of the next class."}))
     }
     else{
       this.setState(()=>({error:""}))
       this.props.onSubmit({
         name:this.state.name,
         address:this.state.address,
         fees:parseFloat(this.state.fees,10) *100,
         phone:this.state.phone,
         nextClassDate:this.state.nextClassDate.valueOf(),
         note:this.state.note
       })
     }
   }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" autoFocus value={this.state.name} onChange={this.onNameChange}/>
          <label htmlFor="address">Address</label>
          <input type="text" placeholder="Address" value={this.state.address} onChange={this.onAddressChange}/>
          <label htmlFor="fees">Fees</label>
          <input type="text" placeholder="Fees" value={this.state.fees} onChange={this.onFeesChange}/>
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" onChange={this.onPhoneChange} value={this.state.phone}
            placeholder="XXX-XXX-XXXX"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required />
          <label htmlFor="date">Next Class</label>
          <SingleDatePicker
            date={this.state.nextClassDate}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
          />
          <label htmlFor="note">Notes</label>
          <textarea value={this.state.note} placeholder="Notes about the student" onChange={this.onNoteChange}>
          </textarea>
          <button>Save</button>
          {this.state.error && <p>{this.state.error}</p>}
        </form>
      </div>
    )
  }
}
