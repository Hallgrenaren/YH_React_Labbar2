import React from 'react'
import ContrivedTotal from './ContrivedTotal.jsx'

export default function Counter() {
    const [count, setCount] = React.useState(0)
    const [total, setTotal] = React.useState(0)

    function add() {
        setCount(count + 1)
    }

    function subtract() {
        setCount(count - 1)
    }

    function totalAdd() {
        setTotal((preValue) => preValue + count)
        setCount(0)
    }

    return (
        <div className="counter">
            <div className="counter_count">
                <h1>{count}</h1>
            </div>
            <button className="counter_op" onClick={subtract}>
                –
            </button>
            <button className="counter_op" onClick={add}>
                +
            </button>
            <button className="total_add" onClick={totalAdd}>
                Add to total
            </button>
            <ContrivedTotal total={total} />
        </div>
    )
}
