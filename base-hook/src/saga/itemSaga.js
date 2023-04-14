import { put, takeLatest } from "@redux-saga/core/effects";
import { actions } from "../actions/index"
import * as types from '../constant';
import { itemApi } from "../api/index"

function* getStudent() {
    try {
        const res = yield itemApi.getStudent(null, null, null)
        yield put(actions.getSuccess({
            listStudents: res.getData
        }))
    } catch (error) {
        yield put(actions.getFailure({
            message: error.message
        }))
    }
}

function* addStudent({ payload }) {
    try {
        yield itemApi.addStudent(null, null, payload)
        yield put(actions.addSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put(actions.addFailure(error))
    }
}
function* deleteStudent({payload}){
    try {
        yield itemApi.deleteStudent(null,null,payload)
        yield put(actions.deleteSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put(actions.deleteFailure(error))
    }
}
 const itemSaga = [
    takeLatest(types.GET_REQUEST, getStudent),
    takeLatest(types.ADD_REQUEST, addStudent),
    takeLatest(types.DELETE_REQUEST,deleteStudent)
]
export default itemSaga