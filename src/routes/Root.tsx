import { NavLink, NavLinkRenderProps, Outlet } from "react-router-dom";
import huron from "../assets/f6b509853a254673be01d2ee62fb81bf.jpg";

const Root = () => {
  return (
    <header className="main-layout">
      <nav>
        <div className="w-full h-40">
          <img src={huron} alt="huron" className="w-full h-full object-cover" />
        </div>
        <ul className="py-4">
          <li className="w-full bg-slate-700 py-2 ">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }: NavLinkRenderProps) =>
                isActive ? "nav-active" : isPending ? "nav-pending" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"about"}
              className={({ isActive, isPending }: NavLinkRenderProps) =>
                isActive ? "nav-active" : isPending ? "nav-pending" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"users"}
              className={({ isActive, isPending }: NavLinkRenderProps) =>
                isActive ? "nav-active" : isPending ? "nav-pending" : ""
              }
            >
              users
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Root;
