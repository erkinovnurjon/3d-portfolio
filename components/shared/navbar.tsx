import { Button } from "../ui/button";
import Logo from "./logo";

const Navbar = () => {
  return (
    <>
      <div className="container h-[10vh] py-3 w-full mx-auto">
        <div className="flex justify-between items-center">
           <Logo />
           <div className="flex items-center gap-x-2">
            <Button variant={"ghost"} size={"sm"}>Modeling</Button>
            <Button variant={"ghost"} size={"sm"}>Design</Button>
           </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
