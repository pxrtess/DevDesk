import Navbar from "./components/Navbar/Navbar";
import SideMenu from "./components/SideMenu/SideMenu";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <SideMenu />
      </div>
    </div>
  );
}
