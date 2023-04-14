import { useDispatch, useSelector } from "react-redux"
import { actions } from "../actions/index"

export const UseStudent = () => {
    const dispatch = useDispatch();
    const listStudents = useSelector((state) => state.item.listStudent)
    const handleGetStudents = () => dispatch(actions.getRequest())
    const handleAddStudents = (data) => dispatch(actions.addRequest(data))
    const handleDeleteStudents = (data) =>{dispatch(actions.deleteRequest(data))
    console.log(data,'day la dattaa');}
    return {
        listStudents,
        handleGetStudents,
        handleAddStudents,
        handleDeleteStudents
    }
}