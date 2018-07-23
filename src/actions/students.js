import database from '../firebase/firebase.js';

export const addStudent=(student)=>({
  type:"ADD_STUDENT",
  student
});

export const startAddStudent = (studentData = {}) =>{
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
    const {
      name="",
      address="",
      fees=0,
      phone="",
      note="",
      nextClassDate=0
    } = studentData;
    const student = {name,address,fees,phone,note,nextClassDate};
   return database.ref(`users/${uid}/students`).push(student).then((ref)=>{
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
  return (dispatch,getState)=>{
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/students/${id}`).remove().then(()=>{
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
 return (dispatch,getState) => {
  const uid = getState().auth.uid;
   return database.ref(`users/${uid}/students/${id}`).update(updates).then(()=>{
     dispatch(editStudent(id,updates));
   })
 }

};

export const setStudents=(students)=>({
  type: 'SET_STUDENTS',
  students
});

export const startSetStudents=()=>{
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/students`).once('value').then((snapshot)=>{
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