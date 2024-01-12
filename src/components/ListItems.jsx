import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { edit, remove } from '../features/todos/todoSlice'

const ListItems = ({ todo }) => {
    const { isDark } = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const removeTodo = (id) => {
        dispatch(remove(id))

    }
    const editTodo = () => {
        dispatch(edit(todo))

    }
    return (
        <>
            <li className={isDark ? 'list-group-item my-2 bg-dark border-light' : 'list-group-item my-2 bg-light border-dark'}>
                <h1 className={isDark ? 'display-5 text-light' : 'display-5 text-dark'}>{todo.text}</h1>
                <span className='float-end'>
                    <button className='btn btn-outline-warning mx-2' onClick={() => editTodo(todo)}>Edit</button>
                    <button className='btn btn-outline-danger' onClick={() => removeTodo(todo.id)}>Delete</button>
                </span>
            </li>
        </>
    )
}

export default ListItems