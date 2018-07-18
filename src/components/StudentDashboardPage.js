import React from 'react'
import StudentList from './StudentList'
import StudentListFilters from './StudentListFilters'


const StudentDashboardPage=()=>(
  <div>
    <StudentListFilters />
    <StudentList />
  </div>
);
export default StudentDashboardPage;
