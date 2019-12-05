import React from 'react'
import ToDoListItem from './todoListItem'

const ToDoList = ({ todos, onDeleted }) => {
    const elements = todos.map((item) => {
        const { id,  title} = item;
        return (
            <li key = {id}>
               {title} 
                <ToDoListItem
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