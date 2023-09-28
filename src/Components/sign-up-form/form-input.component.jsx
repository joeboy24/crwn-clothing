// import './form-input.styles.scss';

const FormInput = ({ label, ...otherprops}) => {
    return (
        <div className="group">
            {label && (
                <label className={`${otherprops.value.lenth ? 'shrink' : ''} form-input`}>{label}</label>
            )}
            <input className="form-input" {...otherprops} />
        </div>
    );
}

export default FormInput;