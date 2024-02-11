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
    const lang = useSelector((store) => store.lang);
    const t = useSelector((store) => store.translate);

    const translate = (key) => {
        try {
            return t[key][lang.idx];
        } catch (err) {
            return key;
        }
    };

    return (
        <Fragment>
            <section className="home">
                <section className="header">
                    <div className="start">
                        <h2>{translate("home")}</h2>
                        <p>{translate("lorem")}</p>
                        <p>{translate("lorem")}</p>
                        <div className="links">
                            <Link to="/signup">{translate("joinus")}</Link>
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
                            <p className="type">{translate("video")}</p>
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
                            <p className="type">{translate("paper")}</p>
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
                            <p className="type">{translate("exam")}</p>
                        </div>
                    </div>
                </section>

                <section className="board">
                    <Headline
                        headline={translate("leaderboard")}
                        quote={translate("boardQoute")}
                    />

                    <table border={0}>
                        <tbody>
                            {board.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.name}</td>
                                    <td>
                                        {row.points} {translate("pt")}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="contact">
                    <Headline
                        headline={translate("contactus")}
                        quote={translate("contactQaute")}
                    />
                    <form>
                        <Input
                            label={translate("name")}
                            name={"name"}
                            type={"text"}
                            idx={1}
                        />
                        <Input
                            label={translate("email")}
                            name={"email"}
                            type={"email"}
                            idx={2}
                        />
                        <Input
                            label={translate("phone")}
                            name={"phone"}
                            type={"tel"}
                            idx={3}
                        />
                        <Input
                            label={translate("message")}
                            name={"message  "}
                            type={"text_area"}
                            idx={4}
                        />

                        <div className="submition">
                            <button className="send" type="submit">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </span>
                                {translate("send")}
                            </button>
                        </div>
                    </form>
                </section>
            </section>
        </Fragment>
    );
};

export default Home;
