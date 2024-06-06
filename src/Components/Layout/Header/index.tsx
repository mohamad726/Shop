import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ABOUT_US_PAGE_ROUTE,
  CART_PAGE_ROUTE,
  DASHBOARD_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
} from "../../../constant/routes";
import { useUserContext } from "../../../context/authContext";
import { Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { removeFromLocalStorage } from "../../../lib/helper";
import { AuthReducerAction } from "../../../types/enums";

type HeaderProps = {
  isLogin: boolean;
};

export function Header({ isLogin }: HeaderProps) {
  const { state, dispatch } = useUserContext();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDashboard = () => {
    navigate(DASHBOARD_PAGE_ROUTE, { replace: true });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    removeFromLocalStorage("role");
    removeFromLocalStorage("userName");
    removeFromLocalStorage("token");

    dispatch({
      type: AuthReducerAction.LOGOUT,
      payload: {
        isLogin: false,
        userName: "",
        role: "",
      },
    });

    handleClose();
  };

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
          {isLogin ? (
            <Typography id="user-text" onClick={handleClick}>
              Hi, {state.userName}
            </Typography>
          ) : (
            <Link to={LOGIN_PAGE_ROUTE}>Login</Link>
          )}
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
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "user-text",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        {state.role === "admin" ? (
          <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
        ) : null}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </header>
  );
}
