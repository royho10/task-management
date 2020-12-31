import React, {Component} from 'react';
import AddAnotherTask from '../../containers/AddAnotherTask/AddAnotherTask';
import AddAnotherList from '../../containers/AddAnotherList/AddAnotherList';
import ChangeListName from '../../containers/ChangeListName/ChangeListName';
import ChangeTaskName from '../../containers/ChangeTaskName/ChangeTaskName';
import './ListsList.css';

class ListsList extends Component {

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

	// rendering the lists
	render() {
		return (
			<div className="flex">
				<ul className="flex">
					{	
						// rendering lists
						this.props.lists.map((list, i) => {
							return (
								<div key={list.list_id} className="mh2 br2">
									<li className="flex-column list br2">
										<div className="mb1">
											{list.title}
											<button type="button" onClick={() => this.props.deleteList(list.list_id)} className="f7 link dim br2 pa1 ml3 dib white bg-red">delete</button>
											<ChangeListName
												onSubmitChangeListName={this.onSubmitChangeListName.bind(this)} 
												list_id={list.list_id}
											/>
										</div>
										<ul className="flex flex-column">
											{ 	
												// rendering tasks
												this.props.tasks.map((task) => {
													return (
														task.list_id === list.list_id
														?	<li key={task.task_id} className="task br2 mh2 mb1">
																{task.title}
																<button type="button" onClick={() => this.props.deleteTask(task.task_id)} className="f7 link dim br2 pa1 ml3 dib white bg-red">delete</button>
																<ChangeTaskName 
																	className="mh2 pa0"
																	onSubmitChangeTaskName={this.onSubmitChangeTaskName.bind(this)} 
																	list_id={list.list_id}
																	task_id={task.task_id}
																/>
															</li>
														:	null
													)	
												})
												
											}
											<div id={i} className="task br2 mh2 mb2 pt1">
												{/* handlling adding another task button*/}
												<AddAnotherTask 
													onSubmitNewTask={this.onSubmitNewTask.bind(this)} 
													list_id={list.list_id}
												/>
											</div>
										</ul>
									</li>
								</div>	
							);
						})
					}
				</ul>
				<AddAnotherList
					onSubmitNewList={this.onSubmitNewList.bind(this)}
				/>
			</div>	
		);
	}	
}

export default ListsList;