import React from 'react'
import ToDoListItem from './todoListItem'

const ToDoList = ({ todos, onDeleted }) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key = {id}>
                <ToDoListItem
                    { ...itemProps }
                    onDeleted ={ () => onDeleted(id)}  />
            </li>
        );
    });
    return (
        <ul>
            { elements }
        </ul>
    );
};

export default ToDoList;