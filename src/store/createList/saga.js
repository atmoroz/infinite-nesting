import { put, call, takeLatest, select } from 'redux-saga/effects';
import * as type from './types';
import {addNewContainer} from './action';

function* watchAddNewItem({payload}) {
    try {
        yield put(addNewContainer(payload));
    }
    catch{
        console.log('error')
    }
}

function* watcher() {
    yield takeLatest(type.ADD_NEW_CONTAINER_REQUEST, watchAddNewItem);

}
export default watcher;