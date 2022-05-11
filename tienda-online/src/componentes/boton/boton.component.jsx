import './boton.scss';
/*
    default

    invert

    google sin in
*/
const BUTTON_TYPE_CLASSES = {
    google : 'google-sign-in',
    inverted : 'inverted',
}

const Boton = ({ children, buttonType, ...otherProps }) => {
    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]} `} {...otherProps}>
            {children}
        </button>
    )
}
export default Boton;