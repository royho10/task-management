import React, {Component} from 'react';
import AddAnotherTask from '../../containers/AddAnotherTask/AddAnotherTask';
import AddAnotherList from '../../containers/AddAnotherList/AddAnotherList';
import TaskCard from '../../containers/TaskCard/TaskCard';
import ListCard from '../../containers/ListCard/ListCard';
import './ListsList.css';

class ListsList extends Component { 
	constructor(props){
		super();
		this.state = {
			isListBarExpanded: true,
			isChangeListNameOn: false,
			isAddAnotherListOn: false 
		}
		//this.onClickToggleButton = this.onClickToggleButton.bind(this);
		//this.isChangeListNameOn = this.isChangeListNameOn.bind(this);
		this.onSubmitChangeListName = this.onSubmitChangeListName.bind(this);
		this.onSubmitChangeTaskName = this.onSubmitChangeTaskName.bind(this);
		this.isAddAnotherListOn = this.isAddAnotherListOn.bind(this);
		this.onClickDeleteList = this.onClickDeleteList.bind(this);
		this.onClickDeleteTask = this.onClickDeleteTask.bind(this);
	}
	// transfer new list to App container
	onSubmitNewList(newList) {
		this.props.SubmitNewList(newList);
	}

	// transfer new task to App container
	onSubmitNewTask(newTask, list_id) {
		this.props.SubmitNewTask(newTask, list_id);
	}

	// transfer new list name to App container
	onSubmitChangeListName(newListTitle, list_id) {
		this.props.SubmitNewListName(newListTitle, list_id);
	}

	// transfer new task name to App container
	onSubmitChangeTaskName(newTaskTitle, task_id) {
		this.props.SubmitNewTaskName(newTaskTitle, task_id);
	}

	/*
	onClickToggleButton() {
		this.setState({ isListBarExpanded: !this.state.isListBarExpanded }) 
	} */

	// transfer which list_id to delete to App container
	onClickDeleteList(list_id) {
		this.props.deleteList(list_id);
	}

	// transfer which task_id to delete to App container
	onClickDeleteTask(task_id) {
		this.props.deleteTask(task_id);
	}

	// changing display when clicking on "Add another list" button
	isAddAnotherListOn = (boolean) => {
		this.setState({ isAddAnotherListOn: boolean })
	}

	// rendering the lists
	render() {
		/*const { isListBarExpanded } = this.state;*/
		return (
			<div className="main-container">
				<ul className="lists-container">
					{	
						// rendering lists
						this.props.lists.map((list, i) => {
							return (
								<li key={list.list_id} className="list-wrap">
										{/*<div className="btn-toggle" onClick= {this.onClickToggleButton}></div>*/}
										{/*<div className={`toggled-list-menu ${isListBarExpanded ? 'is-expanded' : ''}`}>*/}
											<ListCard
												onSubmitChangeListName={this.onSubmitChangeListName}
												isChangeListNameOn={this.isChangeListNameOn} 
												list_id={list.list_id}
												list_title={list.title}
												onClickDeleteList={this.onClickDeleteList}
											/>
										{/*<</div>*/}
									
									<ul className="tasks-wrap">
										{ 	
											// rendering tasks
											this.props.tasks.map((task) => {
												return (
													task.list_id === list.list_id
													?									
														<TaskCard 
															onSubmitChangeTaskName={this.onSubmitChangeTaskName} 
															list_id={list.list_id}
															task_id={task.task_id}
															task_title={task.title}
															onClickDeleteTask={this.onClickDeleteTask}
														/>
													:	null
												)	
											})										
										}
										<div id={i} className="br2">
											{/* handlling adding another task button*/}
											<AddAnotherTask 
												onSubmitNewTask={this.onSubmitNewTask.bind(this)} 
												list_id={list.list_id}
											/>
										</div>
									</ul>
								</li>
							);
						})
					}
				</ul>
				{this.state.isAddAnotherListOn === false
				?	<button 
						onClick={() => this.isAddAnotherListOn(true)} 
						type="button"
						className="f7 link dim dib br2 add-list-btn">+ Add another list
					</button>
				:	<AddAnotherList
						onSubmitNewList={this.onSubmitNewList.bind(this)}
						isAddAnotherListOn={this.isAddAnotherListOn}
					/>
				}
			</div>	
		);
	}	
}

export default ListsList;