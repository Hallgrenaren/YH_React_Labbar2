import React from 'react'
import PropTypes from 'prop-types'

Counter.propTypes = {
    total: PropTypes.number,
    addToTotal: PropTypes.func
}

export default function Counter(props) {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(count + 1)
    }

    function subtract() {
        setCount(count - 1)
    }

    //Raise total-value to App to use in formsubmit.
    function totalAdd() {
        props.addToTotal(count)
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
            <h1 className="counter_total">{props.total}</h1>
            <p>total count</p>
        </div>
    )
}
