import { Outlet } from "react-router-dom";
import { Footer, Header } from "../Components/Layout";

function Layout() {
  return (
    <div className="relative h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
