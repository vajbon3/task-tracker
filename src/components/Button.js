import PropTypes from "prop-types";

const Button = ({ color, text, onClick}) => {

    return (
            <button onClick={onClick} style={{ backgroundColor: color}}
            className="btn">{text}</button>
    )
}

Button.defaultProps = {
    color: "steelBlue",
}

Button.propType = {
    onClick: PropTypes.func,
}
export default Button
