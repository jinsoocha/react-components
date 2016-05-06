
// // TODO
// var Cucumbers = (props) => (
// 	<div>
// 		<li>{props.cucs[0]}</li>
// 		<li>{props.cucs[1]}</li>
// 	</div>
// 	)

// var GroceryList = () => (
// 	<div>
// 		<h2>Grocery List!!</h2>
// 		<Cucumbers cucs={['asain','canadian']}/>
// 	</div>
// );




class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			done: false,
			hovered: false
		};
	}

	onListItemClick() {
		this.setState({
			done: !this.state.done
		});
	}

	hover() {
		this.setState({
			hovered: !this.state.hovered
		})
	}
	
	render() {
		var style = {
			'font-weight': this.state.hovered ? 'bold' : 'normal',
			textDecoration: this.state.done ? 'line-through' : 'none'
		};

		return(
		<li style={style} onMouseEnter={this.hover.bind(this)} onMouseLeave={this.hover.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.groc}</li>
		);
	}
}

var GroceryList = (props) => (
	<ul>
		{props.grocs.map(groc =>
			<GroceryListItem groc={groc} />
		)}
	</ul>
)

var App = () => (
	<div>
		<h2>Grocery List!!</h2>
		<GroceryList grocs={['bread','milk']}/>
	</div>
)


ReactDOM.render(<App />, document.getElementById("app"))
