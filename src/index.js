import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoItem = ( props ) => {
	return (
		<div className="todo-item">
			<div className="todo-title">{props.item}</div>
			<div className="todo-close" onClick={ () => props.deleteItem }>X</div>
		</div>
	)
}

const ToDoList = ( props ) => {
	if( props.list.length ) {
		return (
			<div className="todo-list-wrap mt-5">
				<h3>Todo List</h3>
				<div className="todo-list mt-2">
					{props.list.map( ( item, key ) => <ToDoItem key={key} item={item} deleteItem={props.deleteItem} /> )}
				</div>
			</div>
		)
	}

	return (
		<div></div>
	)
}

class ToDo extends React.Component {
    constructor() {
        super();
        this.state = {
        	todoText: '',
        	list : [ 'One', 'Two' ],
        }
    }

    setCurrentTodo = (event) => {
    	this.setState( {
    		todoText: event.target.value
    	});
    }

    removeItem = (item) => {
    	console.log( 'ok' );
    	console.log( item );
    }

    addTodo = (event) => {
    	const list = this.state.list || [];
    	list.push( this.state.todoText );
    	this.setState( {
    		list: list
    	});
    }

    deleteItem = (event) => {
    	console.log( 'ok' );
    }

    render() {
        return (
            <div className="container py-5 text-center">
		        <h1 className="mb-4">Todo App</h1>
		        <input type="text" placeholder="Title.." onChange={this.setCurrentTodo} />
		        <input type="submit" onClick={this.addTodo} value="Add" />
		        <ToDoList list={this.state.list} deleteItem={this.deleteItem} />
	        </div>
        );
    }
}

ReactDOM.render(<ToDo />, document.getElementById("root"));