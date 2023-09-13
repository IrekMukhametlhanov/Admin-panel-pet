import React, { Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "pages/AboutPage";
import { MainPageAsync } from "pages/MainPage";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames";


export const App = () => {
  
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>theme</button>
      <Link to={"/main"}>Главная</Link>
      <Link to={"/about"}>about</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/main"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
