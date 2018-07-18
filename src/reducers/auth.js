export default (state={},action)=>{
swtich (action.type){
    case "LOGIN":
    return {
        uid:action.uid
    };
    case "LOGOUT":
    return {

    }
    default return state
}
}