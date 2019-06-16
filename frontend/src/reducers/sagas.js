import ListService  from '../services/listService';
import { put, takeLatest, all, takeEvery } from '@redux-saga/core/effects';


function* getList(){
    const list = yield ListService.getList();
    console.log("list: ", list);
    yield put( {type: "GET_LIST", payload: list})
}

function* updateItem(action){
    const id = action.payload.id;
    const item = action.payload.item;
    console.log(id);
    yield ListService.updateItem(id, item);
    const list =  yield ListService.getList();
    yield put ({type: 'GET_LIST', payload: list })
}

function* deleteItem(action){
    const id = action.payload;
    yield ListService.deleteItem(id);
    const list =  yield ListService.getList();
    yield put ({type: 'GET_LIST', payload: list })
}

function* createItem(action){
    const item = action.payload;
    yield ListService.createItem(item);
    const list = yield ListService.getList()
    yield put ({type: 'GET_LIST', payload: list })
}

function* getListWatcher(){
    yield takeLatest('REQUEST_LIST', getList)
}

function* updateItemWatcher(){
   yield takeEvery('UPDATE_ITEM', updateItem) 
}

function* deleteItemWatcher(){
    yield takeEvery('DELETE_ITEM', deleteItem)
}

function* createItemWatcher(){
    yield takeEvery('CREATE_ITEM', createItem)
}


export default function* rootSaga(){
    yield all([
        getListWatcher(),
        updateItemWatcher(),
        deleteItemWatcher(),
        createItemWatcher()
    ])
}