export function AboutMe() {
  return (
    <section
      id="about"
      className="w-full  text-white py-5 md:py-24 flex justify-center"
    >
      <div className="max-w-6xl space-y-6 px-6">
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <p className="text-white/70 leading-relaxed">
          I’m a software engineer with a deep interest in building performant,
          scalable, and maintainable systems. My work focuses on modern web
          architectures from backend APIs and real-time infrastructures to
          intelligent, AI-assisted experiences.
        </p>
        <p className="text-white/70 leading-relaxed">
          I enjoy designing systems that balance{" "}
          <span className="text-white font-medium">
            clean code, performance, and developer experience
          </span>
          . Over the years, I’ve worked across stacks involving{" "}
          <span className="text-white font-medium">
            TypeScript, Node.js, React, and AWS
          </span>
          , integrating best practices around observability, security, and
          scalability.
        </p>
        <p className="text-white/70 leading-relaxed">
          I’m constantly exploring better ways to blend engineering discipline
          with innovation pushing boundaries through automation, data, and
          intelligent interfaces.
        </p>
      </div>
    </section>
  );
}
