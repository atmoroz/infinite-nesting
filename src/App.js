import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { createSelector } from 'reselect'

import { addNewContainerRequest } from './store/createList/action';
import TodoContainer from './components/TodoContainer/TodoContainer';

const selectList = createSelector(
  state => state.createListReducer.list,
  list => list.find(list => list.itemId === undefined)
)

const  App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
      const id = uniqid();
      dispatch(addNewContainerRequest(id));
  }, [dispatch]);
  const list = useSelector(selectList);
  
  return (
    <div className="App">
        {list && list.id && <TodoContainer id={list.id} />}
    </div>
  );
}

export default App;
