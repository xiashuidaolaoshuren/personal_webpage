import { SkillBadge } from "@/components/skill-badge"
import { sectionEnterClass } from "@/lib/section-motion"
import { cn } from "@/lib/utils"

interface TechnicalSkillRow {
  title: string
  skills: string[]
}

interface LanguageSkill {
  name: string
  code: string // ISO 3166-1 alpha-2 country code
  level: number // 1-5
}

const technicalSkillRows: TechnicalSkillRow[] = [
  {
    title: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Java",
      "Spring Boot",
      "TypeScript",
      "Node.js",
      "C",
      "C++",
    ],
  },
  {
    title: "Web Frontend",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Shadcn/ui",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Database",
    skills: ["PostgreSQL"],
  },
  {
    title: "ML & Data",
    skills: [
      "Python",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    title: "Mobile",
    skills: ["Android", "Kotlin"],
  },
  {
    title: "Tools",
    skills: ["Git", "Figma", "Tableau", "Microsoft Office", "Cursor"],
  },
  {
    title: "DevOps",
    skills: ["Docker"],
  },
]

const softSkills: string[] = [
  "Problem Solving",
  "Team Collaboration",
  "Responsibility",
  "Adaptability",
  "Time Management",
  "Eager to Learn",
  "Fast Learner",
  "Critical Thinking",
]

const languages: LanguageSkill[] = [
  { name: "English", code: "gb", level: 4 },
  { name: "Mandarin", code: "cn", level: 5 },
  { name: "Cantonese", code: "hk", level: 5 },
]

const InterestedFields: string[] = [
  "Computer Vision",
  "Large Language Models",
  "Generative AI",
  "Deep Learning",
  "Natural Language Processing",
  "Machine Learning",
  "AI Full Stack Development",
  "Agentic AI",
]

function LanguageRating({ level }: { readonly level: number }) {
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
  )
}

function TechnicalSkillRow({ title, skills }: TechnicalSkillRow) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
      <h3 className="w-32 shrink-0 text-sm font-semibold sm:w-36">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={`${title}-${skill}`} name={skill} />
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section className={cn("py-12", sectionEnterClass("delay-300"))}>
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="space-y-3">
        {technicalSkillRows.map((row) => (
          <TechnicalSkillRow key={row.title} {...row} />
        ))}
      </div>

      <div className="mt-10 space-y-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Interested Fields</h3>
            <div className="flex flex-wrap gap-2">
              {InterestedFields.map((field) => (
                <SkillBadge key={field} name={field} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Language Proficiency</h3>
          <div className="bg-card rounded-lg border p-6">
            <div className="grid gap-6 sm:grid-cols-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://flagcdn.com/${lang.code}.svg`}
                      alt={`${lang.name} flag`}
                      className="w-6 h-4 object-cover rounded-sm shadow-sm"
                    />
                    <span className="font-medium">{lang.name}</span>
                  </div>
                  <LanguageRating level={lang.level} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
