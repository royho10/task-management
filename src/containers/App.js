import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Greeting from '../components/Greeting/Greeting';
import ListsList from '../components/ListsList/ListsList';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';

const initialState = {
	route: 'signin',
	isSignedIn: false,
	user: {
		first_name: '',
		last_name: '',
		email: '',
		lists: [],
		tasks: [],
		joined: ''			
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'signin',
			isSignedIn: false,
			user: {
				first_name: '',
				last_name: '',
				email: '',
				lists: [],
				tasks: [],
				joined: ''			
			}
		}
		this.SubmitNewList=this.SubmitNewList.bind(this);
		this.SubmitNewTask=this.SubmitNewTask.bind(this);
		this.deleteTask=this.deleteTask.bind(this);
		this.deleteList=this.deleteList.bind(this);
		this.onRouteChange=this.onRouteChange.bind(this);
	}

	// changing routes function
	onRouteChange = (route) => {
		if (route === 'signin' || route === 'register') {
			this.setState(initialState)
		} else if (route === 'home') {
			this.setState({ isSignedIn: true })
		}
		this.setState({ route: route })
	}

	// everytime something is changing in the user's info - it updates the state
	loadUser = (data) => {
		this.setState({ 
			user: {
				first_name: data.first_name,
				last_name: data.last_name,
				email: data.email,
				lists: data.lists,
				tasks: data.tasks
			},
		});
	}

	// adding new list
	SubmitNewList = (newList) => {		
	// fetching the user's new list
		fetch('https://thawing-woodland-29025.herokuapp.com/lists', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.user.email,
				title: newList
			})
		})
		.then(response => response.json())
		// returning all the user's lists
		.then(lists => {
			this.setState({ 
				user: {
					...this.state.user,
					lists: lists
				}
			});

		})
	}

	// adding new task
	SubmitNewTask = (newTask, list_id) => {
		// fetching the user's new task
		fetch('https://thawing-woodland-29025.herokuapp.com/tasks', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.user.email,
				title: newTask,
				list_id: list_id
			})
		})
		.then(response => response.json())
		// returning all the user's tasks
		.then(tasks => {
			this.setState({
				user: {
					...this.state.user,
					tasks: tasks
				}
			});
		})
	}

	// delete chosen task
	deleteTask = (task_id) => {
		fetch('https://thawing-woodland-29025.herokuapp.com/tasks', {
			method: 'delete',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.user.email,
				task_id: task_id
			})
		})
		.then(response => response.json())
		// returning all the user's tasks without the deleted task
		.then(newTasks => {
			this.setState({
				user: {
					...this.state.user,
					tasks: newTasks
				}
			});
		})
	}

	// delete chosen list
	deleteList = (list_id) => {
		fetch('https://thawing-woodland-29025.herokuapp.com/lists', {
			method: 'delete',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.user.email,
				list_id: list_id
			})
		})
		.then(response => response.json())
		// returning all the user's tasks without the deleted list
		.then(newLists => {
			this.setState({
				user: {
					...this.state.user,
					lists: newLists
				}
			});
		})
	}

	// change list name
	SubmitNewListName = (newListTitle, list_id) => {
		fetch('https://thawing-woodland-29025.herokuapp.com/lists', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.user.email,
				list_id: list_id,
				new_title: newListTitle
			})
		})
		.then(response => response.json())
		// returning all the user's lists
		.then(newLists => {
			this.setState({
				user: {
					...this.state.user,
					lists: newLists
				}
			});
		})
	}	

	// change task name
	SubmitNewTaskName = (newtaskTitle, task_id) => {
		fetch('https://thawing-woodland-29025.herokuapp.com/tasks', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.user.email,
				task_id: task_id,
				new_title: newtaskTitle
			})
		})
		.then(response => response.json())
		// returning all the user's lists
		.then(newTasks => {
			this.setState({
				user: {
					...this.state.user,
					tasks: newTasks
				}
			});
		})
	}

	render() {
		const { isSignedIn, route, user } = this.state 
	  	return (
	    	<div className="App">
	      		<Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
	      		{ route === 'home'
		      		? 	<div className="main-content">
				      		<div className="board-wrapper">
			      				<Greeting name={user.first_name} />
				      			<ListsList
					      			lists={user.lists} 
					      			tasks={user.tasks}
					      			SubmitNewTask={this.SubmitNewTask}
					      			SubmitNewList={this.SubmitNewList}
					      			SubmitNewListName={this.SubmitNewListName}
					      			SubmitNewTaskName={this.SubmitNewTaskName} 
					      			deleteTask={this.deleteTask}
					      			deleteList={this.deleteList}
					      		/>
				      		</div>
				      	</div>
				    :  	(
				    		route === 'signin'
				    		?   <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
				    		:   <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
				    	)
	      		}
	      		<div id="footer"></div>
	    	</div>
	  	);
	}
}

export default App;
