const skillsList = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "WebSockets",
  "CI/CD",
];

export function SkillSection() {
  return (
    <section
      id="skills"
      className="w-full text-white py-5 md:py-24 flex justify-center"
    >
      <div className="max-w-6xl w-full space-y-6 px-6">
        <h2 className=" text-2xl md:text-4xl font-bold">Skills</h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-2 ">
          {skillsList.map((s, i) => (
            <div
              key={i}
              className="rounded-lg bg-[#121C26] py-3 font-semibold border-2 border-white/10 flex justify-center items-center"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
