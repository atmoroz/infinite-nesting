import * as type from './types';

const initialState = {
    itemList: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case type.ADD_ITEM_SUCCESS:
            return {
                ...state,
                itemList: [
                    ...state.itemList,
                    {   
                        id: action.payload.id,
                        idParent: action.payload.idParent,
                        title: action.payload.title
                    }
                ]
            }
        case type.DELETED_ITEM_SUCCESS:
            return {
                ...state,
                itemList: [
                    ...action.payload
                ]
            }
        default:
            return state;
    }
}

export default reducer;