import PropTypes from 'prop-types'

export default function ContrivedTotal(props) {
    return <h1 className="counter_total">{props.total}</h1>
}

ContrivedTotal.propTypes = {
    total: PropTypes.number
}
