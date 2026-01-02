import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: string[];
}

interface LanguageSkill {
  name: string;
  level: number; // 1-5
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C/C++", "SQL", "HTML/CSS"],
  },
  {
    title: "Tools & Frameworks",
    skills: ["React", "Node.js", "Tailwind CSS", "Figma", "Tableau", "Microsoft Office", "Git", "Docker", "PyTorch", "TensorFlow"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Responsibility", "Adaptability", "Time Management", "Eager to Learn"], 
  },
];
    
const languages: LanguageSkill[] = [
  { name: "English", level: 4 },
  { name: "Mandarin", level: 5 },
  { name: "Cantonese", level: 5 }
];

function LanguageRating({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`h-3 w-3 rounded-full ${
            dot <= level ? "bg-primary" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      
      <div className="grid gap-8 md:grid-cols-2">
        {/* Technical & Soft Skills */}
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Language Proficiency */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Language Proficiency</h3>
          <div className="bg-card rounded-lg border p-6">
            <div className="grid gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium">{lang.name}</span>
                  <LanguageRating level={lang.level} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
