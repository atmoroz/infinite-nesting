import { all } from 'redux-saga/effects';
import { saga as sagaCreateList } from './createList';
import { saga as sagaCreateItemList } from './createItemList'

export default function* rootSaga() {
    yield all([sagaCreateList(), sagaCreateItemList()]);
}