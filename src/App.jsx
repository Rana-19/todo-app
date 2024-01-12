import React from 'react'
import NavBar from './components/NavBar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import QuoteComponent from './components/QuoteComponent'
import { useSelector } from 'react-redux'

const App = () => {
  const { isDark } = useSelector(state => state.todos)
  return (
    <>
      <NavBar />
      <div className={isDark ? 'container bg-dark h-100' : 'container bg-light h-100'}>
        <QuoteComponent />
        <Form />
        <ListGroup />
      </div>





    </>
  )
}

export default App