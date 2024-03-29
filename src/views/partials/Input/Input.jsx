import React from "react";
import "./Input.css";

const Input = ({ label, type, idx, name }) => {
    return (
        <div className="input">
            {type == "text_area" ? (
                <textarea
                    name={name}
                    id={`name_ele_${idx}`}
                    tabIndex={idx}
                    placeholder={`name_ele_${idx}`}
                    cols="30"
                    rows="10"></textarea>
            ) : (
                <input
                    type={type}
                    name={name}
                    id={`name_ele_${idx}`}
                    tabIndex={idx}
                    placeholder={`name_ele_${idx}`}
                />
            )}

            <label htmlFor={`name_ele_${idx}`}>{label}</label>
        </div>
    );
};

export default Input;
