import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
export const SharedLayout = () => {
  return (
    <div>
      <header>
        <h1>DSVSV</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tweets">Tweets</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Зачекайте поки завантажаться дані...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
