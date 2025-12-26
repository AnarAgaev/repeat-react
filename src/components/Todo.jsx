import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'

const tasks = [
	{id: '1', title: 'Buy Milk', isDone: false},
	{id: '2', title: 'Buy Bread', isDone: true},
]

const Todo = () => {
	return (
		<div className="todo">
			<h1 className="todo__title">To Do List</h1>
			<AddTaskForm />
			<SearchTaskForm />
			<TodoInfo
				total={tasks.length}
				done={tasks.filter(({isDone}) => isDone).length}
			/>
			<TodoList tasks={tasks} />
		</div>
	)
}

export default Todo
