import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./MainLayout.css";
import Header from "views/partials/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "views/partials/Footer/Footer";

const MainLayout = () => {
    let isDark = useSelector((store) => store.theme);
    let lang = useSelector((store) => store.lang);
    return (
        <Fragment>
            <main className={isDark ? "dark" : ""} dir={lang.dir}>
                <Header />
                <section className="content">
                    <div className="inner">
                        <Outlet />
                    </div>
                    <Footer />
                </section>
            </main>
        </Fragment>
    );
};

export default MainLayout;
