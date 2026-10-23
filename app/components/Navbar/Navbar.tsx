import { ChevronDown, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="grid grid-cols-12 items-center justify-between p-4 bg-gray-800 text-white"
    >
      <img
        id="navbar-logo"
        src="/images/logo.png"
        alt="Logo"
        className="h-15 col-span-2"
      ></img>
      <div className="relative col-span-8">
        <Search className="absolute left-3 top-2.5 text-gray-400" />
        <input
          id="nav-search-input"
          type="search"
          placeholder="Search ticket..."
          className="w-full rounded-full p-2 pl-10 border-2 border-gray-400"
        />
      </div>
      <div
        id="user-area"
        className="flex items-center space-x-2 cursor-pointer col-span-2 justify-end"
      >
        <img
          id="user-avatar"
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="rounded-full"
        />
        <p id="user-name">John Doe</p>
        <ChevronDown />
      </div>
    </nav>
  );
};

export default Navbar;
