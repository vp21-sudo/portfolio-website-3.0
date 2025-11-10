import { PrimaryButton } from "@/components/shared/buttons";
import { Separator } from "@/components/ui/separator";

export function TopNav() {
  return (
    <nav className=" bg-[#101922] w-full max-w-6xl mx-auto text-white flex flex-col justify-between items-center py-3 px-4 md:px-0">
      <div className=" w-full flex justify-between items-center">
        <a
          href="#hero"
          className=" font-semibold text-xl flex justify-center items-center gap-2"
        >
          <img
            src="/logo.jpeg"
            alt="Logo"
            className=" w-10 h-10 object-contain rounded-full"
          />
          Vishwa Prasad
        </a>
        <div className=" flex justify-center items-center gap-12 ">
          <a
            href="#about"
            className=" hidden md:block text-white/60 hover:text-white transition-colors ease-in-out duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className=" hidden md:block text-white/60 hover:text-white transition-colors ease-in-out duration-300"
          >
            Skills
          </a>
          <a
            href="#experience"
            className=" hidden md:block text-white/60 hover:text-white transition-colors ease-in-out duration-300"
          >
            Experience
          </a>
          <a
            href="#projects"
            className=" hidden md:block text-white/60 hover:text-white transition-colors ease-in-out duration-300"
          >
            Projects
          </a>
          <a href="#footer">
            <PrimaryButton>Contact</PrimaryButton>
          </a>
        </div>
      </div>
      <Separator className=" absolute top-15 w-full bg-slate-700/60" />
    </nav>
  );
}
