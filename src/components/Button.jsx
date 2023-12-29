import PropTypes from 'prop-types'

const Button = ({ color, text, onClickAs }) => {

    return (
        <button
            onClick={onClickAs}
            style={{ backgroundColor: color }}
            className='btn'>{text}
        </button>
    )
}

Button.defaultProps = {
    color: 'green',
    text: 'Add'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClickAs: PropTypes.func
}

export default Button