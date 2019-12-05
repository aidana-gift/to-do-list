import React from 'react';
import ReactDom from 'react-dom'
import './appHeader.css'
const AppHeader = () => {
    return <h1>My ToDo List</h1>;
};

export default AppHeader;
ReactDom.render(<AppHeader />, document.getElementById('root'));