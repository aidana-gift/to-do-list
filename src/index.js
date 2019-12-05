import React, { Component } from 'react';
import ReactDom from 'react-dom'
import AppHeader from './components/appHeader'
import ToDoList from './components/todoList'

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      })
  }

  deleteItem = (id) => {
    this.setState (({items}) => {
            const idx = items.findIndex((el) => el.id === id);
            
            const before = items.slice(0, idx);
            const after = items.slice(idx + 1);
            const newArray = [...before, ...after];
            return {
                items: newArray
            }
        })
    };

  render() {
    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading . . .</div>
    } else {

      
        return (
          <div>
              <AppHeader />
{/* 
              <ul>
              {items.map(item => (
                <li key={item.id}>
                  {item.title}
                </li>
              ))}
              
            </ul> */}
            <ToDoList 
            todos = {items}
            onDeleted = { this.deleteItem}/>
            
          </div>
        );
      
    }
  }
};

export default App;
ReactDom.render(<App />, document.getElementById('root'));