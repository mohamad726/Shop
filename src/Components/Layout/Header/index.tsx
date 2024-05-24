import { Link, NavLink } from "react-router-dom";
import {
  ABOUT_US_PAGE_ROUTE,
  CART_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
} from "../../../Const/routes";

export function Header() {
  return (
    <header className="flex justify-between p-3 items-center">
      <Link to={HOME_PAGE_ROUTE}>
        <img className="w-36" alt="shop" src="/shop.png" />
      </Link>
      <ul className="flex gap-8">
        <li className="cursor-pointer">
          <Link to={LOGIN_PAGE_ROUTE}>Login</Link>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to={ABOUT_US_PAGE_ROUTE}
            className={({ isActive }) =>
              isActive
                ? "bg-blue-400 py-1 px-2 border border-black rounded-md "
                : undefined
            }
          >
            About Us
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to={CART_PAGE_ROUTE}
            className={({ isActive }) =>
              isActive
                ? "bg-blue-400 py-1 px-2 border border-black rounded-md "
                : undefined
            }
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
