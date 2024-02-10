import React from "react";
import { Fragment } from "react";
import "./Courses.css";
import Headline from "views/partials/Headline/Headline";
// import CourseCard from "views/partials/CourseCard/CourseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CourseCard from "views/partials/CourseCard/CourseCard";

const Courses = () => {
    var settings = {
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        dir: "ltr",
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
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const courses = [
        {
            id: 1,
            name: `The Complete JavaScript Course 2024: From Zero to
            Expert!The modern JavaScript course for everyone! Master
            JavaScript with projects, challenges and theory. Many
            courses in one!`,
            img: "https://img-c.udemycdn.com/course/240x135/3726582_f4a7.jpg",
            price: 50,
            discount: 0,
            author: "Khaled Kashmery",
            rate: 4.5,
        },
        {
            id: 2,
            name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptatibus.!`,
            img: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
            price: 50,
            discount: 10,
            author: "Khaled Kashmery",
            rate: 3,
        },
        {
            id: 3,
            name: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsa tenetur corrupti placeat mollitia atque? Ea incidunt nihil aspernatur! Voluptas?`,
            img: "https://img-c.udemycdn.com/course/240x135/2337802_1793_3.jpg",
            price: 50,
            discount: 10,
            author: "Khaled Kashmery",
            rate: 4.8,
        },
        {
            id: 4,
            name: `The Complete JavaScript Course 2024: From Zero to
            Expert!`,
            img: "https://img-c.udemycdn.com/course/240x135/2410958_2ad5_3.jpg",
            price: 50,
            discount: 10,
            author: "Khaled Kashmery",
            rate: 2,
        },
        {
            id: 5,
            name: `The Complete JavaScript Course 2024: From Zero to
            Expert!`,
            img: "https://img-c.udemycdn.com/course/240x135/3033186_ea5d_3.jpg",
            price: 50,
            discount: 10,
            author: "Khaled Kashmery",
            rate: 4.6,
        },
        {
            id: 6,
            name: `The Complete JavaScript Course 2024: From Zero to
            Expert!`,
            img: "https://img-c.udemycdn.com/course/240x135/3033186_ea5d_3.jpg",
            price: 50,
            discount: 10,
            author: "Khaled Kashmery",
            rate: 4.5,
        },
        {
            id: 7,
            name: `The Complete JavaScript Course 2024: From Zero to
            Expert!`,
            img: "https://img-c.udemycdn.com/course/240x135/3033186_ea5d_3.jpg",
            price: 50,
            discount: 10,
            author: "Khaled Kashmery",
            rate: 4.5,
        },
    ];

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
                                <div className="slide">
                                    <CourseCard course={course} index={idx} />
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
                        <Slider {...settings}>
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

                    <div className="courseSlider"></div>
                </section>
            </section>
        </Fragment>
    );
};

export default Courses;
