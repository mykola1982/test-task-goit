import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
export const SharedLayout = () => {
  return (
    <div>
      <header>
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
