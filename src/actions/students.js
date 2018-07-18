import database from '../firebase/firebase.js';

export const addStudent=(student)=>({
  type:"ADD_STUDENT",
  student
});

export const startAddStudent = (studentData = {}) =>{
  return (dispatch) => {
    const {
      name="",
      address="",
      fees=0,
      phone="",
      note="",
      nextClassDate=0
    } = studentData;
    const student = {name,address,fees,phone,note,nextClassDate};
   return database.ref('students').push(student).then((ref)=>{
      dispatch(addStudent({
        id:ref.key,
      ...student
      }));
    });
  };
};

export const removeStudent=({id} = {})=>({
  type:"REMOVE_STUDENT",
  student:{
    id
  }

});

export const startRemoveStudent=({id}={})=>{
  return (dispatch)=>{
    return database.ref(`students/${id}`).remove().then(()=>{
      dispatch(removeStudent({id}));
    })

  }

}

export const editStudent=(id,updates)=>({
  type:"EDIT_STUDENT",
  id,
  updates

});

export const startEditStudent=(id,updates)=>{
 return (dispatch) => {
   return database.ref(`students/${id}`).update(updates).then(()=>{
     dispatch(editStudent(id,updates));
   })
 }

};

export const setStudents=(students)=>({
  type: 'SET_STUDENTS',
  students
});

export const startSetStudents=()=>{
  return (dispatch) => {
    return database.ref('students').once('value').then((snapshot)=>{
      const students = [];
      snapshot.forEach((childSnapshot)=>{
        students.push({
          id:childSnapshot.key,
          ...childSnapshot.val()
        })
      });
      dispatch(setStudents(students));
    })
}
}