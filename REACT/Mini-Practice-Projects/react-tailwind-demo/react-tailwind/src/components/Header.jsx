import React from "react";

const Header = () => {
  return (
    <header className="h-28 sm:h-16 border-b">
      <div className="flex flex-col sm:flex-row  justify-between items-center py-2 mx-2">
        <div className="flex items-center max-sm:my-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1760441128908-4753770afdec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=800"
            alt="logo"
            className="w-12"
          />
          <span className="ml-2 text-2xl">SoundMate</span>
        </div>
        <nav>
          <span className="p-3 text-lg hover:bg-gray-100 hover:cursor-pointer hover:rounded">
            Home
          </span>
          <span className="p-3 text-lg hover:bg-gray-100 hover:cursor-pointer hover:rounded">
            Products
          </span>
          <span className="p-3 text-lg hover:bg-gray-100 hover:cursor-pointer hover:rounded">
            About us
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
