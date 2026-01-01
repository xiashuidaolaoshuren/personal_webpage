import { ExperienceCard, type ExperienceItem } from "./ExperienceCard";

const educationData: ExperienceItem[] = [
  {
    title: "B.Eng. in Artificial Intelligence",
    organization: "The Chinese University of Hong Kong",
    time: "2022 - Present",
    description: "One of the top universities in Hong Kong, and highly ranked in the field of Computer Science. My study focusing on Computer Vision and Large Language Models (LLMs) and exploring the technological frontier and applying AI to solve real-world problems. (Note: Although the university are named with 'Chinese', all major courses are taught in English.)",
    emblem: "images/Emblem_of_CU.png" 
  }
];

export function Education() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {educationData.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
