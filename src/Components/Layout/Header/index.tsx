import { Link, NavLink } from "react-router-dom";
import {
  ABOUT_US_PAGE_ROUTE,
  CART_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
} from "../../../Const/routes";

export function Header() {
  return (
    <header className="flex justify-between gap-20 px-10 py-5 items-center">
      <Link to={HOME_PAGE_ROUTE}>
        <img className="w-36" alt="shop" src="/shop.png" />
      </Link>
      <div className="grow relative text-gray-500 text-left px-7 py-2 bg-gray-200 rounded-md">
        <input
          type="text"
          className="w-full px-1 py-0 bg-gray-200 border-none focus:ring-0 focus:outline-none"
        />
        <img
          src="/searchIcon.svg"
          alt=""
          className="absolute top-3 left-3 w-[14px] h-[14px]"
        />
      </div>
      <ul className="flex gap-8">
        <li className="cursor-pointer">
          <Link to={LOGIN_PAGE_ROUTE}>Login</Link>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to={ABOUT_US_PAGE_ROUTE}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-400 pb-1" : undefined
            }
          >
            About Us
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to={CART_PAGE_ROUTE}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-400 pb-1" : undefined
            }
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
