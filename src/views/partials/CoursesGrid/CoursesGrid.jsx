import React, { useState } from "react";
import { Fragment } from "react";
import "./CoursesGrid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faArrowRight,
    faGripLines,
    faSearch,
    faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import Selector from "../Selector/Selector";
import { NavLink } from "react-router-dom";
import CourseCard, { RowCourseCard } from "../CourseCard/CourseCard";

const CoursesGrid = ({ courses }) => {
    const [gType, setGType] = useState(1);
    const [view_courses, setCourses] = useState(courses);

    const searchForCourse = (event) => {
        const key = event.target.value.toLowerCase();

        console.log(courses);
        console.log(key);

        let newCourses = courses.filter(
            (course) =>
                course.name.toLowerCase().includes(key) ||
                course.author.toLowerCase().includes(key)
        );

        setCourses(newCourses);
    };

    const showGrid = () => {
        if (gType == 0)
            return (
                <div className="grid_t_0">
                    {view_courses.map((course, idx) => (
                        <CourseCard course={course} key={idx} />
                    ))}
                </div>
            );
        else
            return (
                <div className="grid_t_1">
                    {view_courses.map((course, idx) => (
                        <div className="rowCard">
                            <RowCourseCard course={course} key={idx} />
                        </div>
                    ))}
                </div>
            );
    };

    return (
        <Fragment>
            <section className="coursesGrid">
                <div className="header">
                    <div className="start">
                        <div className="sort">
                            <Selector
                                values={[
                                    "Most Popular",
                                    "Top Rated",
                                    "The newest",
                                ]}
                                name={"Sort by"}
                                retValue={() => {}}
                            />
                        </div>

                        <div
                            className={`viewToggler ${
                                gType == 0 ? "active" : ""
                            }`}
                            onClick={() => {
                                setGType(0);
                            }}>
                            <FontAwesomeIcon icon={faTableCellsLarge} />
                        </div>

                        <div
                            className={`viewToggler ${
                                gType == 1 ? "active" : ""
                            }`}
                            onClick={() => {
                                setGType(1);
                            }}>
                            <FontAwesomeIcon icon={faGripLines} />
                        </div>
                    </div>
                    <div className="search">
                        <span className="icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <input
                            type="text"
                            name="search"
                            onChange={searchForCourse}
                            placeholder="Search for course..."
                        />
                        <button>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
                <div className="grid">{showGrid()}</div>
                <div className="paging">
                    <button>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    </button>

                    <div>
                        <button className="active">1</button>
                        <button>2</button>
                        <button>3</button>
                        <span>...</span>
                        <button>10</button>
                    </div>

                    <button>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </button>
                </div>
            </section>
        </Fragment>
    );
};

export default CoursesGrid;
