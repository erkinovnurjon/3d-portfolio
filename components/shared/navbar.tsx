"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Logo from "./logo";
import { useScrolled } from "@/hooks/use-scrolled";
import { ModeToggle } from "../modals/mode-toggle";

const Navbar = () => {
  const scrolled = useScrolled();
  return (
    <>
      <div
        className={cn(
          "z-50 bg-background  mx-auto fixed top-0 flex items-center w-full py-6 px-8 justify-between",
          scrolled && "border-b bg-gray-500 dark:bg-black   shadow-sm"
        )}
      >
        <div className=" container mx-auto pl-0 md:pl-16">
          <Logo />
        </div>
          <div className="flex items-center gap-x-2">
            <Button variant={"ghost"} size={"sm"}>
              Modeling
            </Button>
            <Button variant={"ghost"} size={"sm"}>
              Design
            </Button>
            <ModeToggle />
          </div>
      </div>
    </>
  );
};

export default Navbar;
