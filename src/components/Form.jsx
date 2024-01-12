import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, update } from '../features/todos/todoSlice'

const Form = () => {
    const { Edit } = useSelector((state) => state.todos)

    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Edit.isEdit) {
            dispatch(update({
                id: Edit.todo.id,
                text
            }))
        } else {
            dispatch(add({
                id: crypto.randomUUID(),
                text
            }))

        }
        setText("")



    }
    useEffect(() => {
        setText(Edit.todo.text)

    }, [Edit])

    return (
        <>
            <form className="my-2" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" className='form-control my-2' placeholder='Enter Todo' onChange={(e) => setText(e.target.value)} value={text} required />
                <button className='btn btn-outline-primary w-100'>Submit</button>
            </form>
        </>
    )
}

export default Form