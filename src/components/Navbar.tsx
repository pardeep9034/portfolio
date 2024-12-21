'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";


type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-3 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center  gap-10">
        <Link href="/">
        <MenuItem setActive={setActive} active={active} item="Home" >
          
        </MenuItem>
        </Link>
        <Link href="/projects">
        <MenuItem setActive={setActive} active={active} item="Projects">
          
        </MenuItem>
        </Link>
        <Link href="/about">
        <MenuItem setActive={setActive} active={active} item="About">
          
         
        </MenuItem>
        </Link>
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
