//rfc tab
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroups = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        label={label}
        type={type}
        name={name} //className="is-invalid form-control form-control-lg" //Here we are using class modules --> npm i classnames
        //here we are using classnameser
        //{classnames("its takes default classes no matter what"),{"new class":'object'}}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroups.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

TextInputGroups.defaultProps = {
  type: "text"
};
export default TextInputGroups;
