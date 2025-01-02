"use client";
import clsx from "clsx";
import { TbMoon, TbBell, TbLogout } from "react-icons/tb";
import { CgProfile, CgSupport } from "react-icons/cg";
import { RiExchangeDollarLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useMedia } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/button";
import { Menu } from "lucide-react";
import {
  TbLayoutDashboard,
  TbBulb,
  TbVideoPlus,
  TbUpload,
  TbPhoto,
  TbCalendar,
} from "react-icons/tb";
import Logo from "./logo";
import Link from "next/link";

const Header = () => {
  const userOptions = [
    {
      icon: CgProfile,
      title: "Profile",
      link: "/profile",
    },
    {
      icon: RiExchangeDollarLine,
      title: "Subscription",
      link: "/subscription",
    },
    {
      icon: CgSupport,
      title: "Support",
      link: "/support",
    },
    {
      icon: IoSettingsOutline,
      title: "Settings",
      link: "/settings",
    },
  ];
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMedia("(max-width: 1024px)", false);

  useEffect(() => {
    document.documentElement.addEventListener("click", (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    });
  }, [dropdownOpen, dropdownRef]);

  const navlinks = [
    {
      href: "/dashboard",
      name: "Dashboard",
      icon: TbLayoutDashboard,
    },
    {
      href: "ideas",
      name: "Explore Ideas",
      icon: TbBulb,
    },
    {
      href: "editor",
      name: "Video Editor",
      icon: TbVideoPlus,
    },
    {
      href: "/publish",
      name: "Publish",
      icon: TbUpload,
    },
    {
      href: "/myvideos",
      name: "My Videos",
      icon: TbPhoto,
    },
    {
      href: "/calender",
      name: "Calender",
      icon: TbCalendar,
    },
  ];

  if (isMobile) {
    return (
      <header className="flex items-center bg-white shadow py-4 px-8 border">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button className="bg-transparent border">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="overflow-auto">
            <div className="flex flex-col py-6">
              <Logo />
              <nav className="flex flex-col items-start mt-12 w-full">
                {navlinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center px-4 py-2 text-lg w-full hover:bg-blue-100 transition-all group"
                  >
                    <item.icon className="mr-3 size-6 text-black/70 hover:bg-custom-gradient bg-clip-text text-gradient" />
                    <span className="text-black/70 bg-black/70 group-hover:bg-custom-gradient bg-clip-text textfil text-gradient transition-all">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    );
  }

  return (
    <header className="flex items-center justify-end bg-white shadow py-4 px-8 border">
      <div className="hidden md:flex items-center justify-end gap-7">
        <button className="bg-custom-gradient py-1 px-2 text-white rounded-md">
          Create Video | v
        </button>
        <p className="bg-gray-200 rounded-md text-white py-1 px-2">
          💰 <span className="text-gradient bg-custom-gradient">300</span>
        </p>
        <TbMoon className="size-5 cursor-pointer text-black/70" />
        <TbBell className="size-5 cursor-pointer text-black/70" />
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-[#F3E1E1] h-9 w-9 rounded-full flex items-center justify-center cursor-pointer"
          >
            R
          </button>
          <div
            ref={dropdownRef}
            className={clsx(
              "absolute top-12 right-0 w-56 bg-white shadow-lg rounded-md transition-all px-4 py-2",
              dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          >
            {userOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-base cursor-pointer py-2 hover:bg-slate-200/70 transition-all rounded px-2"
              >
                <option.icon className="size-5 text-black/70" />
                <p>{option.title}</p>
              </div>
            ))}
            <hr className="my-2 border-black border" />
            <div className="flex items-center gap-2 text-base cursor-pointer py-2 hover:bg-slate-200/70 transition-all rounded px-2">
              <TbLogout className="size-5 text-black/70" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;