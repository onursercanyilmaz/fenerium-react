import React from "react";

const ImageInput = ({ name,label,alt,src,width, error,onChange }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}></label>
      <div className="field">
        <input
          type="image"
          name={name}
          className="form-control"
          alt={alt}
          width="300px"
          src={src}
         
        />{error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default ImageInput;
