import { Outlet } from "react-router-dom";
import { Footer, Header } from "../Components/Layout";
import { useEffect } from "react";
import { useUserContext } from "../context/authContext";

function Layout() {
  const { state } = useUserContext();
  useEffect(() => {
    console.log(state);
  }, [state.isLogin]);
  return (
    <div className="relative min-h-screen">
      <Header isLogin={state.isLogin} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
