import React from 'react'
import StudentList from './StudentList'
import StudentListFilters from './StudentListFilters'
import {Link} from 'react-router-dom'
const StudentDashboardPage=()=>(
  <div>
    <div className="page-header">
      <div className="container">
      <div className="flex-box">
      <div><h1 className="page-header__title">Dashboard</h1></div>
      <div><Link className="button button--purple" to="/create">Add Student</Link></div>
      </div>
      </div>
      </div>

    <StudentListFilters />
    <StudentList />
  </div>
);
export default StudentDashboardPage;
