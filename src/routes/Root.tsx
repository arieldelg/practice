import { NavLink, NavLinkRenderProps, Outlet } from "react-router-dom";
import huron from "../assets/f6b509853a254673be01d2ee62fb81bf.jpg";
import { routes } from "./routeconfig";

const Root = () => {
  return (
    <header className="main-layout">
      <nav>
        <div className="w-full h-40">
          <img src={huron} alt="huron" className="w-full h-full object-cover" />
        </div>
        <ul className="py-4 px-2">
          {routes.map(({ name, path }) => (
            <li
              className="w-full py-2 hover:bg-slate-500 rounded-xl hover:bg-opacity-50"
              key={path}
            >
              <NavLink
                to={path}
                className={({ isActive, isPending }: NavLinkRenderProps) =>
                  isActive
                    ? "nav-active"
                    : isPending
                    ? "nav-pending"
                    : "inline-block w-full h-full"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-8">
        <Outlet />
      </div>
    </header>
  );
};

export default Root;
