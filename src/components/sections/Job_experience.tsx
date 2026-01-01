import { ExperienceCard, type ExperienceItem } from "./ExperienceCard";

const jobData: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    organization: "Example Tech Corp",
    time: "Summer 2024",
    description: "Developed and maintained web applications using React and TypeScript. Collaborated with the backend team to integrate RESTful APIs.",
    emblem: "/company-placeholder.png"
  }
];

export function Job_experience() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Job Experience</h2>
      <div className="space-y-6">
        {jobData.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}