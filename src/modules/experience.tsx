const experienceList = [
  {
    role: "Full-Stack Developer",
    company: "Ariveguru Technology Solution Private Limited",
    period: "June 2025 – Present",
    description: [
      "Developing EdgeworthBox, an AI-powered enterprise RFP builder platform using Mastra.ai for LLM orchestration.",
      "Built AWS EKS-based microservices architecture with Terraform automation and secure VPC configurations.",
      "Implemented CI/CD pipelines with GitHub Actions for automated testing and deployments.",
    ],
  },
  {
    role: "Founder & Software Engineer (Independent Project)",
    company: "Ankvidhi – AI-powered WhatsApp Marketing SaaS",
    period: "March 2025 – June 2025",
    description: [
      "Designed and developed a full-stack SaaS platform for WhatsApp marketing automation using the Meta WhatsApp Cloud API.",
      "Built a Bun + Hono backend with dynamic Zod schema handling, and a Next.js dashboard with real-time analytics and campaign scheduling.",
      "Implemented a multilingual AI chatbot with structured flows, conversation flagging, and escalation workflows.",
    ],
  },
  {
    role: "Software Engineer",
    company: "TicketsQue Solutions Pvt Ltd",
    period: "October 2023 – March 2025",
    description: [
      "Developed and maintained scalable backend services using Express.js and Node.js, improving system reliability and performance.",
      "Designed data export automation features, significantly reducing manual effort for clients.",
      "Optimized MongoDB queries and collaborated in an agile team to enhance UI/UX for better user engagement.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full text-white py-5 md:py-24 flex justify-center"
    >
      <div className="max-w-6xl w-full space-y-10 px-6">
        <h2 className=" text-2xl md:text-4xl font-bold">Experience</h2>
        <div className="space-y-8">
          {experienceList.map((exp, i) => (
            <div
              key={i}
              className="bg-[#121C26] border-2 border-white/10 rounded-xl p-6 space-y-2"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <h3 className=" text-xl md:text-2xl font-semibold">
                  {exp.role}
                </h3>
                <p className="text-sm text-white/60">{exp.period}</p>
              </div>
              <p className="text-blue-400 font-medium">{exp.company}</p>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
