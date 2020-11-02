import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Greeting from '../components/Greeting/Greeting';
import ListsList from '../components/ListsList/ListsList';
import AddAnotherList from './AddAnotherList/AddAnotherList';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import { lists, listCount } from '../lists'

const initialState = {
	lists: lists,
	listCount: listCount,
	route: 'signin',
	isSignedIn: false,
	user: {
		id: '',
		name: '',
		email: '',
		lists: [],
		joined: ''			
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			lists: lists,
			listCount: listCount,
			route: 'signin',
			isSignedIn: false,
			user: {
				id: '',
				name: '',
				email: '',
				lists: [],
				joined: ''			
			}
		}
		this.onSubmitNewList=this.onSubmitNewList.bind(this);
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

	loadUser = (data) => {
		this.setState({ user: {
			id: data.id,
			name: data.name,
			email: data.email,
			lists: data.lists,
			joined: data.joined
		}
		})
	}
	// adding new list
	onSubmitNewList = (newList) => {		
		this.setState({
			lists: this.state.lists.concat(newList),
			listCount: this.state.lists.length + 1
		});
	}

	// adding new task
	SubmitNewTask = (newTask,listNumber) => {
		let newTasks = this.state.lists[listNumber].tasks.concat(newTask);
		let newLists = this.state.lists;
		newLists[listNumber].tasks = newTasks;
		this.setState({
			lists: newLists
		});
	}

	// delete chosen task
	deleteTask = (listNumber, taskNumber) => {
		let newLists = this.state.lists;
		newLists[listNumber].tasks.splice(taskNumber, 1);
		// reordering taskCount
		newLists.forEach((list, i) => {
			list.tasks.forEach((task, j) => {
				newLists[i].tasks[j].taskCount = j + 1;
			});
		});
		this.setState({
			lists: newLists
		});
	}

	// delete chosen list
	deleteList = (listNumber) => {
		let newLists = this.state.lists;
		newLists.splice(listNumber, 1);
		// reordering listCount
		newLists.forEach((list, i) => {
			newLists[i].listCount = i + 1;
		});
		this.setState({
			lists: newLists,
			listCount: this.state.listCount - 1
		});
	}	

	render() {
		const { isSignedIn, route, lists, listCount } = this.state
	  	return (
	    	<div className="App">
	      		<Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
	      		{ route === 'home'
		      		? 	<div>
		      				<Greeting name={this.state.user.name} />
			      			<ListsList 
				      			lists={lists} 
				      			SubmitNewTask={this.SubmitNewTask} 
				      			deleteTask={this.deleteTask}
				      			deleteList={this.deleteList}
				      		/>
				      		<AddAnotherList 
				      			listCount={listCount} 
				      			onSubmitNewList={this.onSubmitNewList}
				      		/>
				      	</div>
				    :  	(
				    		route === 'signin'
				    		?   <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
				    		:   <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
				    	)
	      		}
	    	</div>
	  	);
	}
}

export default App;
