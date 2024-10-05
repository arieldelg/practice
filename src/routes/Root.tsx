import { NavLink, NavLinkRenderProps, Outlet } from "react-router-dom";
import huron from "../assets/f6b509853a254673be01d2ee62fb81bf.jpg";

const Root = () => {
  return (
    <header className="grid grid-cols-[250px_auto]">
      <nav className="w-full">
        <div className="w-full h-40">
          <img src={huron} alt="huron" className="w-full h-full object-cover" />
        </div>
        <ul className="py-4 px-2">
          <li className="w-full py-2 hover:bg-slate-500 rounded-xl hover:bg-opacity-50">
            <NavLink
              to={"normal_form"}
              className={({ isActive, isPending }: NavLinkRenderProps) =>
                isActive
                  ? "nav-active"
                  : isPending
                  ? "nav-pending"
                  : "inline-block w-full h-full"
              }
            >
              Form
            </NavLink>
          </li>
          <li className="w-full py-2 hover:bg-slate-500 rounded-xl hover:bg-opacity-50">
            <NavLink
              to={"formik"}
              className={({ isActive, isPending }: NavLinkRenderProps) =>
                isActive
                  ? "nav-active"
                  : isPending
                  ? "nav-pending"
                  : "inline-block w-full h-full"
              }
            >
              Formik
            </NavLink>
          </li>
          <li className="w-full py-2 hover:bg-slate-500 rounded-xl hover:bg-opacity-50">
            <NavLink
              to={"formik-yup"}
              className={({ isActive, isPending }: NavLinkRenderProps) =>
                isActive
                  ? "nav-active"
                  : isPending
                  ? "nav-pending"
                  : "inline-block w-full h-full"
              }
            >
              Formik Yup
            </NavLink>
          </li>
          <li className="w-full py-2 hover:bg-slate-500 rounded-xl hover:bg-opacity-50">
            <NavLink
              to={"formik-components"}
              className={({ isActive, isPending }: NavLinkRenderProps) =>
                isActive
                  ? "nav-active"
                  : isPending
                  ? "nav-pending"
                  : "inline-block w-full h-full"
              }
            >
              Formik Components
            </NavLink>
          </li>
          <li className="w-full py-2 hover:bg-slate-500 rounded-xl hover:bg-opacity-50">
            <NavLink
              to={"formik-abstract"}
              className={({ isActive, isPending }: NavLinkRenderProps) =>
                isActive
                  ? "nav-active"
                  : isPending
                  ? "nav-pending"
                  : "inline-block w-full h-full"
              }
            >
              Formik Abstract
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="p-8 w-full h-100vh">
        <Outlet />
      </div>
    </header>
  );
};

export default Root;
