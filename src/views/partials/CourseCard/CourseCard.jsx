import React from "react";
import { Fragment } from "react";
import "./CourseCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const stars = (course) => {
    const rate = Math.trunc(course.rate);
    const fraction = course.rate - rate;
    let stars = [];

    for (let i = 0; i < rate; i++)
        stars.push(
            <span>
                <FontAwesomeIcon icon={faStar} />
            </span>
        );

    if (fraction >= 0.5)
        stars.push(
            <span>
                <FontAwesomeIcon icon={faStarHalfStroke} />
            </span>
        );

    for (let i = stars.length; i < 5; i++)
        stars.push(
            <span className="icon">
                <FontAwesomeIcon icon={faStar} />
            </span>
        );

    return stars;
};

const beauty_Users = (users) => {
    if (users < 1000) return users;
    else if (Math.trunc(users / 10 ** 6) != 0)
        return (users / 10 ** 6).toFixed(1) + "M";
    else if (Math.trunc(users / 10 ** 3) != 0)
        return Math.trunc(users / 1000) + "K";
};

const CourseCard = ({ course }) => {
    const discount = course.price - (course.price * course.discount) / 100;
    return (
        <Fragment>
            <Link to={`/courses/${course.id}`} className="CourseCard">
                <div className="img">
                    <img
                        src={course.img}
                        alt={course.name}
                        srcSet={course.img}
                    />
                </div>

                <div className="info">
                    <p className="name">{course.name}</p>

                    <p className="author">{course.author}</p>

                    <div className="footer">
                        <div className="rating">
                            <span>
                                {course.rate} ({beauty_Users(course.users)})
                            </span>
                            <div className="stars">{stars(course)}</div>
                        </div>
                        <div className="pricing">
                            <p className="new">{discount}</p>
                            <p className="old">
                                {course.discount !== 0 ? course.price : ""}
                            </p>
                            <p className="currency">LE</p>
                        </div>
                    </div>
                </div>
            </Link>
        </Fragment>
    );
};

export const RowCourseCard = ({ course }) => {
    return (
        <Fragment>
            <Link to={`/courses/${course.id}`} className="HzCourseCard">
                <div className="img">
                    <img
                        src={course.img}
                        alt={course.name}
                        srcSet={course.img}
                    />
                </div>

                <div className="info">
                    <p className="name">{course.name}</p>

                    <div>
                        <div className="start">
                            <p className="author">{course.author}</p>

                            <div className="rating">
                                <span>
                                    {course.rate} ({beauty_Users(course.users)})
                                </span>
                                <div className="stars">{stars(course)}</div>
                            </div>
                        </div>

                        <div className="end">
                            <div className="pricing">
                                <p className="new">
                                    {course.price -
                                        (course.price * course.discount) / 100}
                                </p>
                                <p className="old">
                                    {course.discount !== 0 ? course.price : ""}
                                </p>
                                <p className="currency">LE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </Fragment>
    );
};

export default CourseCard;
