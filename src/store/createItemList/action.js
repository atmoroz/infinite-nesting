import * as type from './types';

export const addItemRequest = (id, idParent, title) => ({
    type: type.ADD_ITEM_REQUEST,
    payload: {
        id,
        idParent,
        title
    }
})


export const addItemSuccess = ({ id, idParent, title }) => {
    return ({
        type: type.ADD_ITEM_SUCCESS,
        payload: {
            id,
            idParent,
            title
        }
    })
}

export const deleteItemList = (id) => ({
    type: type.DELETED_ITEM_REQUEST,
    payload: { id }
});


export const deleteItemSuccess = (data) => ({
    type: type.DELETED_ITEM_SUCCESS,
    payload: data
})