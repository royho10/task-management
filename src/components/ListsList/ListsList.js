import React, {Component} from 'react';
import AddAnotherTask from '../../containers/AddAnotherTask/AddAnotherTask';
import AddAnotherList from '../../containers/AddAnotherList/AddAnotherList';
import ChangeListName from '../../containers/ChangeListName/ChangeListName';
import ChangeTaskName from '../../containers/ChangeTaskName/ChangeTaskName';
import './ListsList.css';

class ListsList extends Component {
	constructor(props){
		super();
		this.state = {
			isListBarExpanded: true
		}
		this.onClickToggleButton = this.onClickToggleButton.bind(this);
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

	onClickToggleButton() {
		this.setState({ isListBarExpanded: !this.state.isListBarExpanded }) 
	}

	// rendering the lists
	render() {
		const { isListBarExpanded } = this.state;
		return (
			<div className="drag-container">
				<ul className="drag-list">
					{	
						// rendering lists
						this.props.lists.map((list, i) => {
							return (
								<li key={list.list_id} className="drag-column br3">
									<div className="list-bar br2 mb1">
										<div className="list-title">
											{list.title}
										</div>
										<div>
											<div className="btn-toggle" /*onClick= {this.onClickToggleButton}*/></div>
											<div className={`toggled-list-menu ${isListBarExpanded ? 'is-expanded' : ''}`}>
												<button type="button" onClick={() => this.props.deleteList(list.list_id)} className="btn-trash f7 link dim br2 dib white bg-red"></button>
												<ChangeListName
													onSubmitChangeListName={this.onSubmitChangeListName.bind(this)} 
													list_id={list.list_id}
												/>
											</div>
										</div>
									</div>
									<ul className="drag-item-list">
										{ 	
											// rendering tasks
											this.props.tasks.map((task) => {
												return (
													task.list_id === list.list_id
													?	<li key={task.task_id} className="task drag-item br2 mb1">
															<div className="f6">
																{task.title}
															</div>
															<div className="flex">
																<button type="button" onClick={() => this.props.deleteTask(task.task_id)} className="btn-trash f7 link dim br2 pa1 ml3 dib white bg-red"></button>
																<ChangeTaskName 
																	onSubmitChangeTaskName={this.onSubmitChangeTaskName.bind(this)} 
																	list_id={list.list_id}
																	task_id={task.task_id}
																/>
															</div>
														</li>
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
				<AddAnotherList
					onSubmitNewList={this.onSubmitNewList.bind(this)}
				/>
			</div>	
		);
	}	
}

export default ListsList;