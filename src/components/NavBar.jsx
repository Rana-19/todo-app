import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { theme } from '../features/todos/todoSlice'

const NavBar = () => {
    const { isDark } = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const changeTheme = () => {
        dispatch(theme())
    }

    return (
        <>
            <nav className={isDark ? "navbar navbar-light bg-light border-light" : "navbar navbar-light bg-dark border-dark"}>
                <div className="container-fluid">
                    <span className={isDark ? "navbar-brand mb-0 h1 text-dark" : "navbar-brand mb-0 h1 text-light"}>Redux-Todo App</span>
                    <button className={isDark ? 'btn btn-outline-dark' : 'btn btn-outline-light'} onClick={changeTheme}>{isDark ? "Light Mode" : "Dark Mode"}</button>
                </div>
            </nav>
        </>
    )
}

export default NavBar