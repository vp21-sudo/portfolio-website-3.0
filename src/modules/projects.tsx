import { ArrowRight } from "lucide-react";
import dashboardImg from "@/assets/images/dashboard.png";
import closetMate from "@/assets/images/closet-mate.png";
import canvas from "@/assets/images/canvas.png";
import furnitureWebsite from "@/assets/images/furniture-website.png";

const projectsList = [
  {
    title: "Ankvidhi",
    description:
      "AI-powered WhatsApp marketing SaaS platform built with Bun + Hono backend and Next.js dashboard. Includes real-time analytics, multilingual chatbot, and campaign automation using Meta WhatsApp Cloud API.",
    tech: ["Bun", "Hono", "Next.js", "Zod", "AWS"],
    link: "https://ankvidhi.com", // optional
    image: dashboardImg,
  },
  {
    title: "ClosetMate",
    description:
      "A modern closet and laundry management app designed to organize outfits, track laundry cycles, and manage wardrobe usage seamlessly. Focused on usability, clean UI, and real-world utility.",
    tech: ["React", "TypeScript", "Vite", "TailwindCSS", "PWA", "Shadcn UI"],
    link: "https://closetmate-seven.vercel.app/",
    image: closetMate,
  },
  {
    title: "DrawJS",
    description:
      "An interactive tool that uses an HTML canvas editor to visually generate node-canvas code for creating dynamic images programmatically. Simplifies design-to-code workflows for developers.",
    tech: ["React", "TypeScript", "Canvas API", "Zustand"],
    link: "https://canvas-gold.vercel.app/",
    image: canvas,
  },
  {
    title: "Landing Page",
    description:
      "A sleek, responsive furniture e-commerce interface built with modern web design principles, smooth animations, and an elegant layout — focused on visual storytelling and interaction quality.",
    tech: ["React", "Vite", "TailwindCSS"],
    link: "https://furniture-website-livid-eight.vercel.app/",
    image: furnitureWebsite,
  },
];

export function ProjectSection() {
  return (
    <section
      id="projects"
      className="w-full text-white py-5 md:py-24 flex justify-center"
    >
      <div className="max-w-6xl w-full space-y-10 px-6">
        <h2 className="text-2xl md:text-4xl font-bold">Projects</h2>

        {/* grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projectsList.map((project, i) => (
            <div
              key={i}
              className="bg-[#121C26] border-2 border-white/10 rounded-xl flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 group overflow-clip"
            >
              {project.image && (
                <div className=" z-0 ">
                  <img
                    src={project.image}
                    alt="Image"
                    className=" w-full h-full object-contain rounded-t-lg origin-bottom group-hover:scale-110 transition-all ease-in-out duration-500 z-0 group-hover:z-0:"
                  />
                </div>
              )}
              <div className=" p-6">
                <div className="space-y-3 ">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="text-xs bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Optional link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex justify-start items-center gap-2 mt-6 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors group/link"
                  >
                    View Project
                    <ArrowRight
                      size={14}
                      className=" group-hover/link:-rotate-45 transition-all ease-in-out duration-200"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
