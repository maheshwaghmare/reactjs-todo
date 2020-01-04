import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoItem = ( props ) => {
	console.log( props );
	return (
		<div className="todo-item">
			<div className="todo-title">{props.item} <small>{Date(props.itemKey.toString())}</small></div>
			<div className="todo-close" onClick={ () => props.deleteItem(props.itemKey) }>X</div>
		</div>
	)
}

const ToDoList = ( props ) => {
	if( Object.keys( props.list ).length ) {
		return (
			<div className="todo-list-wrap mt-5">
				<h3>Todo List</h3>
				<div className="todo-list mt-2">
					{ Object.keys( props.list ).map( ( key ) => <ToDoItem key={key} itemKey={key} item={props.list[key]} deleteItem={props.deleteItem} /> ) }
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
        	list : [],
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
    	list[Date.now()] = this.state.todoText;
    	this.setState( {
    		list: list,
    	});
    }

    deleteItem = (itemKey) => {
    	const list = this.state.list || [];
    	console.log( 'Before', list );
    	delete list[itemKey];
    	console.log( 'After', list );

    	this.setState( {
    		list: list
    	});
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