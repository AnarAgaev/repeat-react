const name = 'Anar Agaev'

export const App = () => {
	const currentTasks = ['Write a book', 'Drink a coffee', 'Buy a cellphone']

	return (
		<>
			<h1>Hello {name}!</h1>
			<p>You've got tasks for today:</p>
			<ul>
				{currentTasks.map((task) => (
					<li key={task}>{task}</li>
				))}
			</ul>
		</>
	)
}

/**
 * ! JSX rules
 *
 * 1. Comments will not print into the HTML
 * 2. Should print pair symbols as /> at the last of the single tag. Like <input />
 * 3. Html attributes should write as CamelCast syntax, like <input dataCustomValue="" />
 * 4. Round the value of the attribute at the {} or "" if it's string. Like <input required={true}
 * 5. User className for class attribute or htmlFor as for
 * 6. Inline style should view as {{ color: "red", paddingTops: "100px" }} Like object
 * 7. For conditional rendering, use the ternary ?: operator or conditional operators like && or ||
 * 8. Using map method of the Array lets render lists at the JSX code. Don't forget use {}.
 * ! Important - print key attribute for all dynamic building lists. Like key={UNIQ_VALUE}
 *
 */
