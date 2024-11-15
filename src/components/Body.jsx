import Counter from './Counter.jsx'
import ReportForm from './ReportForm.jsx'
import React from 'react'

export default function Body() {
    const [total, setTotal] = React.useState(0)

    const totalAddHandlerFunction = (count) => {
        setTotal((oldValue) => oldValue + count)
    }

    const resetTotalHandlerFunction = () => {
        setTotal(0)
    }

    return (
        <div className="body_container">
            <Counter total={total} addToTotal={totalAddHandlerFunction} />
            <ReportForm total={total} submitTotal={resetTotalHandlerFunction} />
        </div>
    )
}
