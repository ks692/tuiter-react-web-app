import {useSelector,useDispatch} from "react-redux";
import React, {useState} from "react";
import {addTodo,deleteTodo,toggleTodoDone}
    from "./reducers/todos-reducer";


const Todos = () => {
    const todos
        = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: ''});
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }
    const dispatch = useDispatch();
    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    }
    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }
    const toggleDone = (todo) => {
        dispatch(toggleTodoDone(todo))
    }



    return(
        <div>
            <h3>Todos</h3>
            <ul className="list-group">
                {
                    todos.map((todo,index) =>
                        <li key={todo._id}
                            className="list-group-item">
                            <button onClick={() =>
                                deleteTodoClickHandler(index)}
                                    className="btn btn-danger
                        float-end ms-2">
                                Delete
                            </button>
                            <input type="checkbox"
                                   checked={todo.done}
                                   onChange={() =>
                                       toggleDone(todo)}
                                   className="me-2"/>
                            {todo.do}
                        </li>
                    )
                }
            </ul>
            <ul className="list-group">
                <button onClick={createTodoClickHandler}
                        className="btn btn-primary w-25
                          float-end">
                    Create</button>
                <input onChange={todoChangeHandler}
                       value={todo.do}
                       className="form-control w-75"/>
            </ul>
        </div>
    );
};
export default Todos;