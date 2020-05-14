import React from 'react';
import { useSelector } from 'react-redux';
import ListContainer from '../List/ListContainer';
import { createSelector } from 'reselect'

const currentItemList = createSelector(
    state => state.createItemListReducer.itemList,
    (_, id) => id,
    (itemList, id) => itemList.filter(item => item.idParent === id)
)

const TodoContainer = ({id}) => {
    const itemList = useSelector(state => currentItemList(state, id));
    return(
        <ListContainer id={id} itemList={itemList}/>
    )

}
export default TodoContainer;
