import Header from "./HeaderSection";
import Footer from "./FooterSection";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="h-screen w-full flex flex-col">
      <Header />
      <div className="flex-1 overflow-x-hidden overflow-y-auto sm:overflow-hidden"><Outlet /></div>
      <Footer />
    </main>
  )
}

export default Layout
