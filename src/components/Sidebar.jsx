import React from "react";
import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: "dashboard" },
    { title: "Add Student", src: "add-student", gap: true },
    { title: "Edit Student ", src: "edit-student" },
    { title: "Scan QR", src: "scan-qr"},
    { title: "Manage Account", src: "manage-account", gap: true },
    { title: "Logs ", src: "logs"},
    { title: "Data Analysis", src: "data-analysis" },
  ];
  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src="./src/assets/img/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="./src/assets/img/logo.svg"
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          SeQR
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <img src={`./src/assets/img/${Menu.src}.svg`} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
