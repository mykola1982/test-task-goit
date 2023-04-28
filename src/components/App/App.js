// import logo from './logo.svg';
import "./App.css";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "../SharedLayout";

const Home = lazy(() => import("../../pages/Home"));
const Tweets = lazy(() => import("../../pages/Tweets"));
const NotFound = lazy(() => import("../../pages/NotFound"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
