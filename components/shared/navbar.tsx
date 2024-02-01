"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Logo from "./logo";
import { useScrolled } from "@/hooks/use-scrolled";

const Navbar = () => {
  const scrolled = useScrolled();
  return (
    <>
      <div
        className={cn(
          "z-50 bg-background container mx-auto fixed top-0 flex items-center w-full py-6 px-8 justify-between",
          scrolled && "border-b shadow-sm"
        )}
      >
        <div className="flex justify-center items-center">
          <Logo />
        </div>
          <div className="flex items-center gap-x-2">
            <Button variant={"ghost"} size={"sm"}>
              Modeling
            </Button>
            <Button variant={"ghost"} size={"sm"}>
              Design
            </Button>
          </div>
      </div>
    </>
  );
};

export default Navbar;
