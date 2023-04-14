import { all } from "@redux-saga/core/effects";
import itemSaga from "./itemSaga";

function* rootSaga() {
  yield all([
    ...itemSaga
  ]);
}
export default rootSaga;