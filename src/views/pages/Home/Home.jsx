import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import header_img from "assets/home/header.svg";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVideo,
    faPaperPlane,
    faMarker,
} from "@fortawesome/free-solid-svg-icons";
import Headline from "views/partials/Headline/Headline";
import Input from "views/partials/Input/Input";
import { useSelector } from "react-redux";

const Home = () => {
    const board = useSelector((store) => store.board);
    return (
        <Fragment>
            <section className="home">
                <section className="header">
                    <div className="start">
                        <h2>The ultimate LMS</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Impedit, placeat. Provident rerum architecto
                            omnis vero, exercitationem facilis eius delectus,
                            nobis natus molestias officiis expedita minima
                            nesciunt. Quaerat repudiandae earum repellat?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolore architecto, eaque qui, consequuntur
                            nulla accusantium provident quam quaerat consectetur
                            itaque aliquam iusto iste asperiores atque. Alias
                            vel sunt ea incidunt quod tempora ullam quidem aut
                            asperiores laborum. Laborum pariatur doloribus
                            soluta totam molestiae, similique quaerat voluptate.
                        </p>
                        <div className="links">
                            <Link to="/signup">Join us now</Link>
                        </div>
                    </div>
                    <div className="end">
                        <img src={header_img} alt="header_img" />
                    </div>
                </section>

                <section className="counters">
                    <div className="counter">
                        <div>
                            <span className="icon">
                                <FontAwesomeIcon icon={faVideo} />
                            </span>
                        </div>
                        <div>
                            <p className="num">22</p>
                            <p className="type">Video</p>
                        </div>
                    </div>
                    <div className="counter">
                        <div>
                            <span className="icon">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </span>
                        </div>
                        <div>
                            <p className="num">25</p>
                            <p className="type">paper</p>
                        </div>
                    </div>
                    <div className="counter">
                        <div>
                            <span className="icon">
                                <FontAwesomeIcon icon={faMarker} />
                            </span>
                        </div>
                        <div>
                            <p className="num">10</p>
                            <p className="type">final exam</p>
                        </div>
                    </div>
                </section>

                <section className="board">
                    <Headline
                        headline="Leaderboard"
                        quote="the harder you do, the better you get"
                    />

                    <table border={0}>
                        <tbody>
                            {board.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.name}</td>
                                    <td>{row.points} pt.</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="contact">
                    <Headline
                        headline="Contact us"
                        quote="ask for what ever you need"
                    />
                    <form>
                        <Input
                            label={"name"}
                            name={"name"}
                            type={"text"}
                            idx={1}
                        />
                        <Input
                            label={"email"}
                            name={"email"}
                            type={"email"}
                            idx={2}
                        />
                        <Input
                            label={"phone"}
                            name={"phone"}
                            type={"tel"}
                            idx={3}
                        />
                        <Input
                            label={"message"}
                            name={"message  "}
                            type={"text_area"}
                            idx={4}
                        />

                        <div className="submition">
                            <button className="send" type="submit">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </span>
                                Send message
                            </button>
                        </div>
                    </form>
                </section>
            </section>
        </Fragment>
    );
};

export default Home;
