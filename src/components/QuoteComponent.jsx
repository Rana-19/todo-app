import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote } from '../features/quotes/quoteSlice'

const QuoteComponent = () => {
    const { quoteData, isLoading, isError } = useSelector(state => state.quotes)
    const { isDark } = useSelector(state => state.todos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchQuote())
    }, [])
    if (!quoteData || isLoading) {
        return (
            <marquee>
                <h1 className="diplay-5 text-warning">Loading...</h1>
            </marquee>
        )
    }
    if (isError) {
        return (
            <marquee>
                <h1 className="diplay-5 text-danger">Something went wrong!!!</h1>
            </marquee>
        )
    }
    return (
        <marquee>
            <h1 className={isDark ? "diplay-5 text-light" : "diplay-5 text-dark"}>{quoteData.content}--{quoteData.author}</h1>
        </marquee>
    )
}

export default QuoteComponent