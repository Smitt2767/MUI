import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Calender from "./pages/Calender/Calender";

const Home = lazy(() => import("./pages/Home/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Help = lazy(() => import("./pages/Help/Help"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Users = lazy(() => import("./pages/Users/Users"));

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
