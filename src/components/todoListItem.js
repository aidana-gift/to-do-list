import React, { Component } from 'react'
import './todoListItem.css'
import axios from 'axios'

export default class ToDoListItem extends Component {
   
    constructor(){
        super();
        this.state = {
            done: false
        };
    }

    onLabelClick = () => {
        this.setState({
            done: true
        })
    }
    render()
    {
        const { label, onDeleted } = this.props;
        const { done } = this.state;
        let classNames = "todoList-item ";
        if(done){
            classNames += "done";
        }
        return (
        < span className = {classNames}> 
            <span onClick = { this.onLabelClick.bind(this) } >
                { label }
            </span>
            <button type = "button" 
                className = "btn" onClick = {onDeleted}>
                    <i className = "fa fa-trash"></i>
            </button>
        </span>
    );
    };

}

