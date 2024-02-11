import React, { useState } from "react";
import { Fragment } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Supported_Langs, changeLang } from "store/Reducers/LangReducer";
import { toggleTheme } from "store/Reducers/ThemeReducer";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const lang = useSelector((store) => store.lang);
    const t = useSelector((store) => store.translate);

    const translate = (key) => {
        try {
            return t[key][lang.idx];
        } catch (err) {
            console.log(err);
            return key;
        }
    };

    return (
        <Fragment>
            <header>
                <nav>
                    <div className="logo">
                        <h1>
                            <span>L</span>
                            <span>M</span>
                            <span>S</span>
                        </h1>
                    </div>

                    <div
                        className={`overlay ${showNav ? "show" : " "}`}
                        onClick={() => {
                            setShowNav(false);
                        }}></div>

                    <div className={`links ${showNav ? "show" : ""}`}>
                        <ul>
                            <li>
                                <NavLink to={`/`}>{translate("home")}</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/Courses`}>
                                    {translate("courses")}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={`/about-us`}>
                                    {translate("aboutus")}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={`/faqs`}>
                                    {translate("faqs")}
                                </NavLink>
                            </li>
                        </ul>

                        {User(0)}
                    </div>

                    {User(10)}

                    <div className="navBTN">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowNav(true);
                            }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
                                viewBox="0 0 24 24"
                                fill="none">
                                <path d="M5 12H20" stroke="currentColor" />
                                <path d="M5 17H20" stroke="currentColor" />
                                <path d="M5 7H20" stroke="currentColor" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
        </Fragment>
    );
};

const User = (id) => {
    let isDark = useSelector((store) => store.theme);
    let dispatch = useDispatch();
    let lang = useSelector((store) => store.lang);
    const t = useSelector((store) => store.translate);

    const translate = (key) => {
        try {
            return t[key][lang.idx];
        } catch (err) {
            console.log(err);
            return key;
        }
    };

    return (
        <div className="user">
            <ul>
                <li>
                    <div>
                        <img
                            src="https://cdn-icons-png.flaticon.com/256/149/149071.png"
                            alt="Mohammed Atef"
                        />
                        <p>Mohammed Atef</p>

                        <span>
                            <svg
                                viewBox="-2.4 -2.4 28.80 28.80"
                                width="2em"
                                height="2em"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke="currentColor"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M12 14.5C11.9015 14.5005 11.8038 14.4813 11.7128 14.4435C11.6218 14.4057 11.5392 14.3501 11.47 14.28L8 10.78C7.90861 10.6391 7.86719 10.4715 7.88238 10.3042C7.89756 10.1369 7.96848 9.97954 8.08376 9.85735C8.19904 9.73515 8.352 9.65519 8.51814 9.63029C8.68428 9.6054 8.85396 9.63699 9 9.72003L12 12.72L15 9.72003C15.146 9.63699 15.3157 9.6054 15.4819 9.63029C15.648 9.65519 15.801 9.73515 15.9162 9.85735C16.0315 9.97954 16.1024 10.1369 16.1176 10.3042C16.1328 10.4715 16.0914 10.6391 16 10.78L12.5 14.28C12.3675 14.4144 12.1886 14.4931 12 14.5Z"
                                        fill="currentColor"></path>
                                </g>
                            </svg>
                        </span>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/profile">
                                {translate("profile")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/grades">
                                {translate("grades")}
                            </NavLink>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    dispatch(toggleTheme(!isDark));
                                }}>
                                {isDark
                                    ? translate("lightmode")
                                    : translate("darkmode")}
                            </button>
                        </li>
                        <li>
                            <div>
                                <span>{translate("language")}</span>
                            </div>
                            <ul>
                                {Supported_Langs.map((lg, idx) => (
                                    <li>
                                        <button
                                            key={idx}
                                            className={
                                                lg.code === lang.code
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={() => {
                                                dispatch(changeLang(lg));
                                            }}
                                            type="button">
                                            {lg.code === lang.code ? (
                                                <span
                                                    style={{
                                                        marginBlockEnd: "-5px",
                                                        margin: "5px",
                                                    }}>
                                                    <svg
                                                        viewBox="-2.4 -2.4 28.80 28.80"
                                                        width="1em"
                                                        height="1em"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g id="SVGRepo_bgCarrier"></g>
                                                        <g id="SVGRepo_tracerCarrier"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <path
                                                                d="M4 12.6111L8.92308 17.5L20 6.5"
                                                                stroke="currentColor"></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                            ) : (
                                                ""
                                            )}
                                            {translate(lg.name)}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/logout">
                                {translate("logout")}
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Header;
