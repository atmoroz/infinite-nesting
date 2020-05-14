import React from 'react';

import TodoContainer from '../TodoContainer/TodoContainer';
import './listStyled.css';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect'
import { useState } from 'react';

const selectList = createSelector(
    state => state.createListReducer.list,
    (_, id) => id,
    (list, id) => list.find(item => item.idItem === id)
)

const ListItem = ({itemList: { title, id }, addContainer, removeContainer}) => {
    const [isAdd, setisAdd] = useState(false);
    const list = useSelector(store => selectList(store, id));
    
    const handleAddContainer = () => {
        addContainer(id);
        setisAdd(true)
    }

    const handleRemoveContainer = () => {
        removeContainer(id)
    }

    return(
        <div className='listItem'>
            <div className='item'>
                <h4>{title}</h4>
                <div className="controls">
                    {!isAdd && <button onClick={handleAddContainer}>ADD SUBLIST</button>}
                    {isAdd && <button onClick={handleRemoveContainer}>Remove SUBLIST</button>}
                </div>
            </div>
            {isAdd &&  <TodoContainer id={list.id} />}
        </div>
        
    )
}
export default React.memo(ListItem);