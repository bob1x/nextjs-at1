import React from "react";
import { Navbar, NavbarBrand,NavbarLink } from "flowbite-react";

function Menu() {
  return (
    <Navbar  className="bg-blue-800 text-white h-20 px-4 justify-center">
      <NavbarBrand href="/">
        <span className="self-center text-xl font-bold whitespace-nowrap">Ecom</span>
      </NavbarBrand>
      <div className="hidden md:flex items-center space-x-4">
        <NavbarLink href="/" className="text-xl font-medium hover:text-gray-400">
          Home
        </NavbarLink>
        <NavbarLink href="/admin/dashboard" className="text-xl font-medium hover:text-gray-400">
          Admin
        </NavbarLink>
        <NavbarLink href="/client/pageAide" className="text-xl font-medium hover:text-gray-400">
          Help
        </NavbarLink>
      </div>
    </Navbar>
  );
}

export default Menu;