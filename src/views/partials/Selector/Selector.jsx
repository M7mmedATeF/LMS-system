import React, { useState } from "react";
import { Fragment } from "react";
import "./Selector.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Selector = ({ values, name, retValue }) => {
    const [view, setView] = useState(values[0]);
    const changeVal = (e) => {
        const value = values[e.target.value];
        setView(value);
        retValue(value);
    };

    return (
        <Fragment>
            <div className="Selector">
                <div className="view">
                    <p className="name">{name}</p>
                    <p className="viewVal">{view}</p>
                    <span className="icon">
                        <FontAwesomeIcon icon={faAngleDown} />
                    </span>
                </div>
                <select onChange={changeVal}>
                    {values.map((value, idx) => (
                        <option key={idx} value={idx}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
        </Fragment>
    );
};

export default Selector;
