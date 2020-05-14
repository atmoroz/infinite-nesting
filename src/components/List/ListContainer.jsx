import React from 'react';
import { useState } from 'react';
import uniqid from 'uniqid';

import ListItem from './ListItem'
import {addItemRequest, deleteItemList} from '../../store/createItemList/action';
import {addNewContainerRequest} from '../../store/createList/action';

import './listStyled.css';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

const ListContainer = ({id, itemList}) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    
    const changeInput = ({target:{value}}) => {
        setText(value);
    }

    const sendAddItemList = () => {
        const idContainer = uniqid();
        if(text.length < 1) {
            alert('enter text')
            return
        };
        dispatch(addItemRequest(idContainer, id, text));
        setText('');
    }

    const keyPressed = ({key}) => {
        if(key === 'Enter') {
            sendAddItemList();
        }
    }

    const addItemList = (e) => {
        sendAddItemList();
    }

    const addContainer = useCallback( (itemId) => {
        const idContainer = uniqid();
        dispatch(addNewContainerRequest(idContainer, itemId));
    }, []);
    
    const removeContainer = useCallback((idList) => {
        console.log('dlete')
        dispatch(deleteItemList(idList));
    }, []);
    return(
        <>
            <div className='container'>
                {
                    itemList && itemList.map(item => (
                        <ListItem 
                            key={item.id}
                            itemList={item}
                            addContainer={addContainer}
                            removeContainer={removeContainer}
                        />
                    ))
                }
                <div className='controls'>
                    <input type="text" onChange={changeInput} onKeyPress={keyPressed} value={text}/>
                    <button onClick={addItemList}>add Item</button>
                </div>
            </div>
        </>
    )
};
export default ListContainer;