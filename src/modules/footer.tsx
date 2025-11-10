import { Github, Linkedin, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className=" w-full flex flex-col justify-center items-center gap-2 text-white py-4"
    >
      <div className=" flex justify-center items-center gap-4">
        <a href="https://github.com/vp21-sudo" target="_blank">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/vishwaprasad21" target="_blank">
          <Linkedin />
        </a>
        <a href="https://x.com/VishwaPrasadL3" target="_blank">
          <TwitterIcon />
        </a>
      </div>
      <p className=" text-white/60">Designed & Built by Vishwa Prasad.</p>
    </footer>
  );
}
