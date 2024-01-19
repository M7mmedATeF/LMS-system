import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./MainLayout.css";
import Header from "views/partials/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  let dark_theme = useSelector((store) => store.theme);
  let lang = useSelector((store) => store.lang);
  return (
    <Fragment>
      <main className={dark_theme ? "dark" : ""} dir={lang.dir}>
        <Header />
        <section className="content">
          <div className="inner">
            <Outlet />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default MainLayout;
