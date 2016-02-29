// Code goes here

var ToDoItem = React.createClass({
  render: function(){
    return(
        <div>
          <p>{this.props.title}</p>
          <hr/>
        </div>
      );
  }
});


var ToDoForm = React.createClass({
  
  submit: function(e) {
    //prevent default behavior of element
    e.preventDefault();
    
    //create todo item
    var todo = {
      title : this.refs.title.value
    };
    
    //pass todo to prop function
    this.props.handleCreate(todo);
    this.refs.title.value = "";
    
  },
  
  render: function() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Enter a ToDo description" ref="title"/>
          <button onClick={this.submit}>Create ToDo</button>
          <br/>
          <br/>
          <hr/>
        </form>
      </div>  
    );
  }
});


var ToDoContainer = React.createClass({
  
  
  getInitialState: function() {
    return {
      toDoList : [
        {title:"Add Backend"},
        {title:"Add Styling"},
        {title:"Add Delete"}
      ]
    }; 
  },
  
  createTodo: function(todo){
    this.setState({
      toDoList : this.state.toDoList.concat(todo)
    });
  },
 
  
  render: function() {
    var todos = this.state.toDoList.map(function(todo){
      return (
        <ToDoItem title={todo.title}/>  
      );
    });
    
    return(
        <div>
          <ToDoForm handleCreate={this.createTodo}/>
          {todos}
        </div>
      );
  }
});

React.render(<ToDoContainer/>,document.getElementById("root"));