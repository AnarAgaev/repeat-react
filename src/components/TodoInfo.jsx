const TodoInfo = (props) => {
	const {total, done} = props

	const hasTasks = total > 0

	if (!hasTasks) {
		return null
	}

	return (
		<div className="todo__info">
			<div className="todo__total-tasks">
				Done {done} from {total}
			</div>
			<button className="todo__delete-all-button" type="button">
				Delete all
			</button>
		</div>
	)
}

export default TodoInfo
