import createApi from "./apiConfig";
import {API_SCHEME} from "./scheme"

export const itemApi = {
    getStudent: createApi(API_SCHEME.GET_STUDENT),
    addStudent: createApi(API_SCHEME.ADD_STUDENT),
    deleteStudent: createApi(API_SCHEME.DELETE_STUDENT)
}