import React, {Component} from 'react';
import AddAnotherTask from '../../containers/AddAnotherTask/AddAnotherTask';
import ChangeListName from '../../containers/ChangeListName/ChangeListName';
import ChangeTaskName from '../../containers/ChangeTaskName/ChangeTaskName';

class ListsList extends Component {

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

	// rendering the lists
	render() {
		return (
			<ul>
				{	
					// rendering lists
					this.props.lists.map((list, i) => {
						return (
							<div key={list.list_id}>
								<li className="f3">
									{list.title}
									<button type="button" onClick={() => this.props.deleteList(list.list_id)} className="f6 link dim br2 ph2 pv2 mb2 ml3 dib white bg-red">delete</button>
									<ChangeListName 
										onSubmitChangeListName={this.onSubmitChangeListName.bind(this)} 
										list_id={list.list_id}
									/>
								</li>
								<ul>
									{ 	
										// rendering tasks
										this.props.tasks.map((task) => {
											return (
												task.list_id === list.list_id
												?	<li key={task.task_id}>
														{task.title}
														<button type="button" onClick={() => this.props.deleteTask(task.task_id)} className="f6 link dim br2 ph2 pv2 mb2 ml3 dib white bg-red">delete</button>
														<ChangeTaskName 
															onSubmitChangeTaskName={this.onSubmitChangeTaskName.bind(this)} 
															list_id={list.list_id}
															task_id={task.task_id}
														/>
													</li>
												:	null
											)	
										})
										
									}
								</ul>
								<div id={i}>
									{/* handlling adding another task button*/}
									<AddAnotherTask 
										onSubmitNewTask={this.onSubmitNewTask.bind(this)} 
										list_id={list.list_id}
									/>
								</div>
							</div>	
						);
					})
				}
			</ul>
		);
	}	
}

export default ListsList;