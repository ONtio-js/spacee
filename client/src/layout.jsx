import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./pages/Footer";

export default function Layout() {
  const url = useLocation().pathname;
  return (
    <div className="overflow-x-auto py-4 flex flex-col min-h-screen">
      < Header />
      < Outlet />
      {url === '/'  && (
        < Footer />
      )}
  
    </div>
  )
}