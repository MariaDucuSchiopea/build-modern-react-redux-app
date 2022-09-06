import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, completeTodo } from './actions';
import './TodoList.css';

const TodoList = ({
  todos = [{}],
  onRemovePressed,
  onCompletedPressed,
}) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        key={todo.text}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispachToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(completeTodo(text)),
});

export default connect(mapStateToProps, mapDispachToProps)(TodoList);
