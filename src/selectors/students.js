import moment from 'moment'
export default (students,{text="",sortBy,startDate,endDate})=>{
  return students.filter((student)=>{
    const nextClassMoment = moment(student.nextClassDate)
    const startDateMatch = startDate ? startDate.isSameOrBefore(nextClassMoment, 'day'):true
    const endDateMatch = endDate ?endDate.isSameOrAfter(nextClassMoment,'day'):true
    const textMatch = student.name.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch
  }).sort((a,b)=>{
    if(sortBy === "date")
    {
      return a.nextClassDate < b.nextClassDate ? 1 : -1
    }
    else if (sortBy === "fees") {
        return a.fees < b.fees ? 1: -1
    }
  })

}
