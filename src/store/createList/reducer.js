import * as type from './types';
const initialState = {
    list: []
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case type.ADD_NEW_CONTAINER:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                    id: action.payload.id,
                    idItem: action.payload.idItem,
                }]               
            }
        default:
			return state;
    }
}
export default reducer;