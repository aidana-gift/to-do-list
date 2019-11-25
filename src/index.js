import React, { Component } from 'react'
import ReactDom from 'react-dom'
import AppHeader from './components/appHeader'
import ToDoList from './components/todoList'
import axios from 'axios'

export default class App extends Component {
    state = {
        todoData: [
            {label: 'Sleeeep', important: false, id: 1},
            {label: 'finish an app', important: true, id: 2},
            {label: 'do hw', important: true, id: 3},
        ]
    };

    deleteItem = (id) => {
    this.setState (({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);
            const newArray = [...before, ...after];
            return {
                todoData: newArray
            }
        })
    };


    render(){
        return (<div>
            <AppHeader toDo = {1} done = {3}/>
            <ToDoList 
            todos = {this.state.todoData}
            onDeleted = { this.deleteItem}/>
        </div>);
    }

};

ReactDom.render(<App />, document.getElementById('root'));