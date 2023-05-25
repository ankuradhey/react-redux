import { ChangeEvent, useState } from 'react'
import { connect } from 'react-redux'
import './App.css';
import {addTodoAction, deleteTodoAction} from './redux/actions'


const App = ({todos, addTodoAction, deleteTodoAction}: any) => {

  const [todoText, setTodoText] = useState('');

  const submitHandler = (event: SubmitEvent) => {
    event.preventDefault();
    addTodoAction({title: todoText, status: 'not-completed'});
    setTodoText('');
  }

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if(event?.target.value){
      setTodoText(event.target.value);
    }
  }

  const renderTodos = () => {
    if(todos.length === 0) return (<p className="read-the-docs">You do not have any todo items!!</p>);

    return todos.map((todo: TodoType) => {
      return (<li key={todo.id}>
          <span>{todo.title}</span> 
          <button onClick={() => deleteTodoAction(todo.id as string)}>Remove</button>
        </li>)
    });
  }

  return (
    <>
      <div className="card">
        <form onSubmit={submitHandler}>
          <input type="text" maxLength={100} value={todoText} onChange={inputChangeHandler} />
          <button type="button" onClick={() => addTodoAction({title: todoText, status: 'not-completed'})}>
            Add Todo
          </button>
        </form>
      </div>
      <div>
        <p>List of todos</p>
        <ul className="read-the-docs">
          {renderTodos()}
        </ul>
      </div>
    </>
  )
}

const mapStateToProps = (state: Record<'todos', object[]>) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodoAction, deleteTodoAction})(App);
