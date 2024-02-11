import React from "react";
import { Fragment } from "react";
import "./Courses.css";
import Headline from "views/partials/Headline/Headline";
// import CourseCard from "views/partials/CourseCard/CourseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CourseCard from "views/partials/CourseCard/CourseCard";
import { useSelector } from "react-redux";
import CoursesGrid from "views/partials/CoursesGrid/CoursesGrid";

const Courses = () => {
    const lang = useSelector((store) => store.lang);
    const courses = useSelector((store) => store.courses);

    function SampleArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", color: "red !important" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        nextArrow: <SampleArrow />,
        prevArrow: <SampleArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Fragment>
            <section className="courses">
                <section className="leading">
                    <Headline
                        headline={"Top Courses"}
                        quote={
                            "whatever you are looking for .. it will be found here"
                        }
                    />

                    <div className="courseSlider">
                        <Slider {...settings}>
                            {courses.map((course, idx) => (
                                <div className="slide" key={idx}>
                                    <CourseCard
                                        course={course}
                                        index={idx}
                                        key={idx}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>

                <section className="Foryou">
                    <Headline
                        headline={"For you"}
                        quote={"Courses that you would like"}
                    />

                    <div className="courseSlider">
                        <Slider {...settings} rtl={lang.dir}>
                            {courses.map((course, idx) => (
                                <div className="slide">
                                    <CourseCard course={course} index={idx} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>

                <section className="grid">
                    <Headline
                        headline={"Want more?"}
                        quote={
                            "more? you can search between the whole list of our courses"
                        }
                    />

                    <div className="all Courses">
                        <CoursesGrid courses={courses} />
                    </div>
                </section>
            </section>
        </Fragment>
    );
};

export default Courses;
