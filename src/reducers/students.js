const studentsReducerDefaultState = [];
export default (state = studentsReducerDefaultState,action)=>{
  switch (action.type) {
    case "ADD_STUDENT":
    return [...state,action.student]
    case "REMOVE_STUDENT":
    return state.filter(element => element.id != action.student.id)
    case "EDIT_STUDENT":
    return state.map((student)=>{
      if(student.id === action.id)
      {
      return {...student,
        ...action.updates
      }
      }
      else {
      return student;
      }

    })

    case "SET_STUDENTS":
    return action.students

    default:
    return state;

  }
};
