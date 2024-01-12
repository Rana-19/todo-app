import React from 'react'
import ListItems from './ListItems'
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux'

const ListGroup = () => {
    // const { allTodos } = useSelector(state => state.todos)
    const { allTodos } = useSelector(state => state.todos)

    return (
        <ul className='list-group my-2'>
            {
                allTodos.map(todo => <ListItems key={todo.id} todo={todo} />)
            }
        </ul>




    )
}

export default ListGroup