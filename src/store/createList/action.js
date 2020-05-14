import * as type from './types.js';

export const addNewContainerRequest = (id, idItem) => {
    return {
        type: type.ADD_NEW_CONTAINER_REQUEST,
        payload: {
            id,
            idItem,
        }
    }
}

export const addNewContainer = (data) => {
    return{
        type: type.ADD_NEW_CONTAINER,
        payload: data
    }
}