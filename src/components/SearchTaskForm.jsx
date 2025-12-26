import Field from './Field'

const SearchTaskForm = () => {
	return (
		<form className="todo__form">
			<Field
				className="todo__field"
				label="Search task"
				type="search"
				id="search-task"
			/>
		</form>
	)
}

export default SearchTaskForm
