import React from "react";
import { Fragment } from "react";
import "./CourseCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const CourseCard = ({ course }) => {
    const stars = () => {
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

        for (let i = stars.length + 1; i < 5; i++)
            stars.push(
                <span className="icon">
                    <FontAwesomeIcon icon={faStar} />
                </span>
            );
    };

    return (
        <Fragment>
            <div className="CourseCard">
                <div className="img">
                    <img src={course.img} alt={course.name} srcset="" />
                </div>

                <div className="info">
                    <p className="name">{course.name}</p>

                    <p className="author">{course.author}</p>

                    <div className="footer">
                        <div className="rating">
                            <span>{course.rate}</span>
                            <div className="stars">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faStar} />
                                </span>

                                {stars()}
                            </div>
                        </div>
                        <div className="pricing">
                            <p className="new">
                                {course.price -
                                    (course.price * course.discount) / 100}
                            </p>
                            <p className="old">{course.price}</p>
                            <p className="currency">LE</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CourseCard;
