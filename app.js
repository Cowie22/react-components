
// var Cucumbers = () => (
//   <li> cucumber </li>
// );

// var Kale = () => (
//   <li> kale </li>
// );  

// var GroceryList = (props) => (
//   <ul>
//     <li> {props.grocery[0]} </li>
//     <li> {props.grocery[1]} </li>
//   </ul>
// );
 

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: false
        };
    }
    onListMouseOver() {
        this.setState({
            done: !this.state.done
        });
    }
    render() {
        var style = {
            fontWeight: this.state.done ? 'bold' : 'normal'
        };
        return (
            <li style ={style} onMouseOver={this.onListMouseOver.bind(this)}>{this.props.grocery}</li>
        );
    }
}

var GroceryList = (props) => (
    <ul> 
      {props.groceries.map(grocery =>
        <GroceryListItem grocery={grocery}/>
        )}
    </ul>
  );

ReactDOM.render(<GroceryList groceries={['cumcumber', 'kale']}/>, document.getElementById('app'));


