import { createSlice } from "@reduxjs/toolkit";

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
        author: "Mohammed Atef Ewais ahmed",
        rate: 4.5,
        users: 1456132,
    },
    {
        id: 2,
        name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptatibus.!`,
        img: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
        price: 50,
        discount: 10,
        author: "Khaled Kashmery",
        rate: 3,
        users: 999,
    },
    {
        id: 3,
        name: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsa tenetur corrupti placeat mollitia atque? Ea incidunt nihil aspernatur! Voluptas?`,
        img: "https://img-c.udemycdn.com/course/240x135/2337802_1793_3.jpg",
        price: 50,
        discount: 10,
        author: "Khaled Kashmery",
        rate: 4.8,
        users: 4562,
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
        users: 42,
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
        users: 613,
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
        users: 648612,
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
        users: 7623,
    },
];

export const Courses = createSlice({
    name: "courses",
    initialState: courses,
    reducers: {
        setCourse: (courses, actions) => {
            courses.push(actions.payload);
            return courses;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setCourse } = Courses.actions;

export default Courses.reducer;
