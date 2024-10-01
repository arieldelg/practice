import { NavLink, NavLinkRenderProps, Outlet } from "react-router-dom";
import huron from "../assets/f6b509853a254673be01d2ee62fb81bf.jpg";

const Root = () => {
  return (
    <header className="main-layout">
      <nav>
        <div className="w-full h-40">
          <img src={huron} alt="huron" className="w-full h-full object-cover" />
        </div>
        <ul className="py-4 px-2">
          <li className="w-full py-2 hover:bg-slate-500 rounded-xl hover:bg-opacity-50">
            <NavLink
              to={"shopping"}
              className={({ isActive, isPending }: NavLinkRenderProps) =>
                isActive
                  ? "nav-active"
                  : isPending
                  ? "nav-pending"
                  : "inline-block w-full h-full"
              }
            >
              Lazy 1
            </NavLink>
          </li>
          <li className="w-full py-2 hover:bg-slate-500 rounded-xl hover:bg-opacity-50">
            <NavLink
              to={"lazy2"}
              className={({ isActive, isPending }: NavLinkRenderProps) =>
                isActive
                  ? "nav-active "
                  : isPending
                  ? "nav-pending"
                  : "inline-block w-full h-full"
              }
            >
              Lazy 2
            </NavLink>
          </li>
          <li className="w-full py-2 hover:bg-slate-500 rounded-xl hover:bg-opacity-50">
            <NavLink
              to={"lazy3"}
              className={({ isActive, isPending }: NavLinkRenderProps) =>
                isActive
                  ? "nav-active "
                  : isPending
                  ? "nav-pending "
                  : "inline-block w-full h-full"
              }
            >
              Lazy 3
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="p-8">
        <Outlet />
      </div>
    </header>
  );
};

export default Root;
