import React, { lazy } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Routes,
} from "react-router-dom";
import Loadable from "../components/Loader/Loadable";

const Main = Loadable(lazy(() => import("../pages/Main")));
const CreateNotes = Loadable(lazy(() => import("../layouts/CreateNotes")));

const RenderRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create-notes" element={<CreateNotes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RenderRoutes;
