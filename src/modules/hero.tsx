import { PrimaryButton } from "@/components/shared/buttons";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full  text-white py-10 md:py-24 flex justify-center"
    >
      <div className="max-w-6xl space-y-2 md:space-y-6 px-6">
        <p className=" text-blue-500">Hi, my name is</p>
        <p className=" text-2xl md:text-6xl font-bold">Vishwa Prasad.</p>
        <p className=" text-lg md:text-4xl text-white/60 font-semibold md:w-2/3">
          I build intelligent, scalable software.
        </p>
        <p className=" text-sm md:text-base text-white/60 md:w-2/3">
          I’m a software engineer focused on crafting scalable, high-performance
          applications that blend clean architecture with modern frameworks. My
          work spans backend systems, real-time dashboards, and AI-powered
          assistants. Built with precision, performance, and user-centric design
          in mind.
        </p>
        <a href="#projects">
          <PrimaryButton className=" mt-3 md:mt-0">View My Work</PrimaryButton>
        </a>
      </div>
    </section>
  );
}
