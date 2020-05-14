import { put, takeLatest, select } from 'redux-saga/effects';
import * as type from './types';
import { addItemSuccess, deleteItemSuccess } from './action';
import { createSelector } from 'reselect'

function* watchAddNewItemList({ payload }) {
    try {
        yield put(addItemSuccess(payload));
    } catch (e) {
        console.log('error add Item')
    }
}
const newItemList = createSelector(
    state => state.createItemListReducer.itemList,
    (_, id) => id,
    (itemList, id) => itemList.filter(item => item.id !== id)
)
function* watchDeleteItemList({ payload: { id } }) {
    try {
        const itemList = yield select(state => newItemList(state, id));
        yield put(deleteItemSuccess(itemList))
    } catch (e) {
        console.log('catch')
    }
}

function* watcher() {
    yield takeLatest(type.ADD_ITEM_REQUEST, watchAddNewItemList);
    yield takeLatest(type.DELETED_ITEM_REQUEST, watchDeleteItemList)
}
export default watcher;