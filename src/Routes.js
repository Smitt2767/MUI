import React from "react";
import { Routes, Route } from "react-router-dom";
import Calender from "./pages/Calender/Calender";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Help from "./pages/Help/Help";
import Profile from "./pages/Profile/Profile";
import Projects from "./pages/Projects/Projects";
import Users from "./pages/Users/Users";

const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      Component: <Home />,
      isPrivate: true,
    },
    {
      path: "/dashboard",
      Component: <Dashboard />,
      isPrivate: true,
    },
    {
      path: "/users",
      Component: <Users />,
      isPrivate: true,
    },
    {
      path: "/calendar",
      Component: <Calender />,
      isPrivate: true,
    },
    {
      path: "/projects",
      Component: <Projects />,
      isPrivate: true,
    },
    {
      path: "/help",
      Component: <Help />,
      isPrivate: true,
    },
    {
      path: "/profile",
      Component: <Profile />,
      isPrivate: true,
    },
  ];

  return (
    <Routes>
      {routes.map((route, key) => {
        return <Route key={key} path={route.path} element={route.Component} />;
      })}
    </Routes>
  );
};

export default AppRoutes;
