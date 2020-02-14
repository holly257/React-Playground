import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem'

function MainContent (){
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default MainContent