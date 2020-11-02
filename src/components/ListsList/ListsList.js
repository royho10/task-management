import React, {Component} from 'react';
import AddAnotherTask from '../../containers/AddAnotherTask/AddAnotherTask';

class ListsList extends Component {

	// transfer new task to App container
	onSubmitNewTask(newTask,listNumber) {
		this.props.SubmitNewTask(newTask,listNumber);
	}

	// rendering the lists
	render() {
		return (
			<ul>
				{	
					this.props.lists.map((list, i) => {
						return (
							<div key={list.id}>
								<li className="f3">{list.title}<button type="button" onClick={() => this.props.deleteList(list.listCount-1)} className="f6 link dim br2 ph2 pv2 mb2 ml3 dib white bg-red">delete</button></li>
								<ul>
									{ 
										list.tasks.length > 0
										? (list.tasks.map((task) => {
											return (
												<li key={task.id}>{task.title}<button type="button" onClick={() => this.props.deleteTask(list.listCount-1, task.taskCount-1)} className="f6 link dim br2 ph2 pv2 mb2 ml3 dib white bg-red">delete</button></li>
											);
										}))
										: <div></div>
									}
								</ul>
								<div id={i}>
									<AddAnotherTask 
										onSubmitNewTask={this.onSubmitNewTask.bind(this)} 
										listNumber={list.listCount} 
										taskCount={list.tasks.length} 
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