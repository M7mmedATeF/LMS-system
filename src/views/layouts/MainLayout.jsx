import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "store/Reducers/ThemeReducer";
import "./MainLayout.css";

const MainLayout = () => {
  let dark_theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <main className={dark_theme ? "dark" : ""}>
        <div className="main_container">
          <p>Hello world</p>
          {dark_theme}
          <button
            onClick={() => {
              dispatch(toggleTheme());
              console.log(dark_theme);
            }}>
            change theme
          </button>
        </div>
      </main>
    </Fragment>
  );
};

export default MainLayout;
