/**
 * Experience entries for Job Experience and Education sections.
 * Cards link to /experience/:id; detail pages use institutionOverview, contributionsContent, location, and url.
 */

import type { ContentBlock } from "@/types/content-blocks";

export type ExperienceKind = "job" | "education";

export interface ExperienceLocation {
  /** Full address shown under “Location” on the detail page. */
  address: string;
  /**
   * Optional Google Maps Embed `q` when text search works better than coordinates
   * (e.g. institution name with correct casing).
   */
  mapQuery?: string;
  /** Optional precise pin; used only when `mapQuery` is not set. */
  lat?: number;
  lng?: number;
  /** Map zoom level for Google Embed API (default 15 on the detail page). */
  zoom?: number;
}

/** Resolves the `q` parameter for Google Maps Embed API. */
export function resolveMapEmbedQuery(location: ExperienceLocation): string {
  if (location.mapQuery) return location.mapQuery;
  if (location.lat != null && location.lng != null) {
    return `${location.lat},${location.lng}`;
  }
  return location.address;
}

export interface ExperienceGalleryItem {
  /** Path under `public/` (e.g. `/images/tmms-1.jpg`). */
  src: string;
  alt: string;
  caption?: string;
}

export interface ExperienceItem {
  id: string;
  kind: ExperienceKind;
  title: string;
  organization: string;
  time: string;
  /**
   * Neutral, third-person context about the organization (sector, reputation, programmes).
   * Shown under “About …” on the detail page and on listing cards unless `cardSummary` is set.
   * Use a blank line between paragraphs; each block is rendered as its own `<p>`.
   */
  institutionOverview: string;
  /**
   * Optional short teaser on listing cards (role- or outcome-focused).
   * Falls back to `institutionOverview` with line clamp when omitted.
   */
  cardSummary?: string;
  /** Composable paragraphs and bullet lists for “What I did” on the detail page. */
  contributionsContent?: ContentBlock[];
  emblem?: string;
  /** Institute or organization website (used on detail page). */
  url?: string;
  location?: ExperienceLocation;
  /** Optional institute photos on the detail page gallery. */
  gallery?: ExperienceGalleryItem[];
}

export const JOB_EXPERIENCES: ExperienceItem[] = [
  {
    id: "iaspec-2025",
    kind: "job",
    title: "Software Engineer Intern (Summer 2025)",
    organization: "iASPEC Service Limited",
    time: "June 2025 - August 2025",
    institutionOverview:
      "The iASPEC Group traces its roots to Hong Kong in 1988 and positions itself as a software and technology house serving enterprises across several domains.\n\nPublic-facing materials highlight four pillars: financial technology (including secure interbank and cross-border payment channels aligned with clearing, RTGS, and SWIFT-class infrastructure), health technology (teleconsultation and remote monitoring oriented offerings), education technology (interactive e-learning, virtual classrooms, and adaptive-style curricula messaging), and identity-oriented cybersecurity (digital signatures, strong authentication, and compliance-aware enterprise protections). Consulting, cloud delivery, and R&D outsourcing appear alongside product-style offerings.\n\niASPEC Service Limited operates as part of this broader footprint in Hong Kong, contributing enterprise-grade engineering where automation, reliability, and intelligent tooling intersect.",
    cardSummary:
      "Summer internship building an AI-assisted software testing platform with the engineering team—frontend and backend work across ~300 commits.",
    contributionsContent: [
      {
        type: "paragraph",
        text: "Over three months I worked alongside senior engineers on an AI-powered software testing platform, shipping features across the stack and contributing steadily to the shared codebase.",
      },
      {
        type: "bullets",
        items: [
          "Collaborated with senior engineers on frontend and backend components for the platform.",
          "Contributed roughly 300 commits while iterating on reliability and product-facing workflows.",
          "Supported research and implementation tied to automated testing and intelligent tooling.",
        ],
      },
    ],
    emblem: "/images/Emblem_of_iASPEC.png",
    url: "https://www.iaspec.com/",
    location: {
      address:
        "Room 511, 5/F, Lakeside I, Phase II, Hong Kong Science Park, Shatin, Hong Kong",
      mapQuery:
        "iASPEC Service Limited, Lakeside 1, Hong Kong Science Park, Shatin, Hong Kong",
      zoom: 18,
    },
  },
];

export const EDUCATION_ITEMS: ExperienceItem[] = [
  {
    id: "cuhk",
    kind: "education",
    title: "B.Eng. in Artificial Intelligence: Systems and Technologies",
    organization: "The Chinese University of Hong Kong",
    time: "2022 - Present",
    institutionOverview:
      "The Chinese University of Hong Kong (CUHK) is a comprehensive, research-intensive university in Hong Kong’s New Territories (Sha Tin). It is organised around academic faculties and the collegiate system—undergraduate students typically affiliate with a constituent college while pursuing disciplinary majors.\n\nAcross engineering and broader STEM fields, CUHK maintains substantial teaching and research capacity and participates actively in Hong Kong’s innovation ecosystem (including partnerships and mainland-facing centres referenced on the university website).\n\nThe undergraduate Artificial Intelligence programme fits within this engineering-facing environment: students receive rigorous technical training alongside electives and projects aimed at connecting theory to applications. Despite “Chinese” in the institution name, major undergraduate engineering and science courses are commonly delivered in English.",
    cardSummary:
      "United College, B.Eng. AI (Systems and Technologies)—CV and LLM coursework with a Year 2 focus on becoming an AI full-stack engineer.",
    contributionsContent: [
      {
        type: "paragraph",
        text: "I am pursuing a B.Eng. in Artificial Intelligence: Systems and Technologies at CUHK (2022–present) and am affiliated with United College under the university’s collegiate system.",
      },
      {
        type: "paragraph",
        text: "Compared with pure theoretical research, I am stronger and more interested in practical problem-solving with AI. From Year 2 onward, I shaped a clear career direction: becoming an AI full-stack engineer.",
      },
      {
        type: "paragraph",
        text: "My academic focus has been on Computer Vision and Large Language Models (LLMs), with course projects concentrated in these areas and an emphasis on building applied solutions rather than theory-only work.",
      },
      {
        type: "paragraph",
        text: "Meaningful courses:",
      },
      {
        type: "bullets",
        items: [
          "AIST 1000 — Introduction to AI & ML",
          "CSCI 2100 — Data Structures",
          "AIST 3020 — Intro to Computer Systems",
          "CSCI 3230 — Fundamentals of AI",
          "CSCI 3160 — Design & Analysis of Algo",
          "AIST 3030 — Numerical Optimization",
          "AIST 2010 — Intro to Computer Music",
          "SEEM 2460 — Introduction to Data Science",
          "CSCI 3320 — Fund. of Machine Learning",
          "CSCI 3170 — Intro to Database Systems",
          "AIST 3110 — Music Information Retrieval",
          "CSCI 3150 — Intro to Operating Systems",
          "AIST 4010 — Foundation of Applied DL",
          "IERG 3310 — Computer Networks",
          "CSCI 4130 — Intro to Cyber Security",
          "CSCI 3310 — Mobile Computing & Apps Dev",
          "AIST 4998 & AIST 4999 — Final Year Project",
        ],
      },
      {
        type: "paragraph",
        text: "University core (U-core):",
      },
      {
        type: "bullets",
        items: [
          "General Education (GE), Physical Education (PE), and College General Education alongside major courses.",
        ],
      },
    ],
    emblem: "/images/Emblem_of_CU.png",
    url: "https://www.cuhk.edu.hk/english/index.html",
    location: {
      address: "The Chinese University of Hong Kong, Shatin, NT, Hong Kong SAR",
      zoom: 15,
    },
    gallery: [
      {
        src: "/images/cuhk-1.png",
        alt: "University Mall building with the CUHK crest",
        caption:
          "University Mall—the landmark building with the university crest above the central steps.",
      },
      {
        src: "/images/cuhk-2.jpg",
        alt: "Aerial view of the CUHK campus among green hills",
        caption:
          "CUHK from above—buildings, sports facilities, and forested slopes across the New Territories campus.",
      },
      {
        src: "/images/cuhk-3.jpg",
        alt: "S.H. Ho Engineering Building",
        caption:
          "S.H. Ho Engineering Building, where much of my engineering and AI coursework takes place.",
      },
      {
        src: "/images/cuhk-4.jpg",
        alt: "United College water tower and CUHK campus on the hills",
        caption:
          "United College and the campus on the Shatin hills—my collegiate home at CUHK.",
      },
    ],
  },
  {
    id: "skhcyss",
    kind: "education",
    title: "Secondary Education",
    organization: "S.K.H. Chan Young Secondary School",
    time: "2016 - 2022",
    institutionOverview:
      "S.K.H. Chan Young Secondary School is a secondary school under the Anglican (Sheng Kung Hui) family of schools in Hong Kong. Its campus address on record is 6 Chi Cheong Road, Sheung Shui, New Territories.\n\nThe school presents itself as English-medium oriented and participates in broader EMI-school activities—for example student showcases tied to the Association of English Medium Secondary Schools appear among recent news items on the official website.\n\nBeyond languages, public communications emphasize STEM-linked engagement (including ICT-oriented experiences and STEAM-team competitions), careers and life-planning structures, student organisations, and overseas-style learning journeys alongside core HKDSE-facing curriculum.",
    cardSummary:
      "Six years with Physics, Chemistry, and ICT electives; two quadcopter championships (2017–2018); DSE Best Five score of 26, ranked 4th in the graduating cohort.",
    contributionsContent: [
      {
        type: "paragraph",
        text: "I spent six years at S.K.H. Chan Young Secondary School from 2016 to 2022, studying in an English-medium environment in North District, Hong Kong. For the HKDSE, I took Chemistry, Physics, and ICT as my electives to build a stronger STEM foundation ahead of university engineering study.",
      },
      {
        type: "paragraph",
        text: "In Form 6, I served as treasurer of my class committee, helping manage class funds and supporting day-to-day coordination for my cohort.",
      },
      {
        type: "paragraph",
        text: "Outside the classroom, I joined the school remote-control model team. In 2017 and 2018, I won the quadcopter time-trial category at the Guangzhou–Hong Kong–Macau Youth Technology & Sports Model Summer Camp and Triathlon Invitational (穗港澳青少年科技体育模型夏令营暨海陆空模型铁人三项邀请赛), taking the championship in both years.",
      },
      {
        type: "paragraph",
        text: "Academic results:",
      },
      {
        type: "bullets",
        items: [
          "Achieved a HKDSE Best Five score of 26 and ranked 4th in my secondary school cohort in the graduating year.",
          "Received several academic awards, including first place in subjects such as Physics and ICT.",
        ],
      },
      {
        type: "paragraph",
        text: "Beyond formal grades, I built transferable habits for analytical problem-solving and began exploring AI-related technology during secondary school.",
      },
      {
        type: "paragraph",
        text: "From Form 4 through Form 6, I was part of a close-knit class with strong cohesion. Many of my closest friends today are classmates from those years—we studied together, supported one another through senior secondary, and still keep in touch.",
      },
      {
        type: "paragraph",
        text: "Preparing for the HKDSE was demanding, but looking back, those years—including the late-night revision, the model-team practices, and the shared milestones with my class—are among the most memorable of my school life.",
      },
    ],
    emblem: "/images/Emblem_of_SKHCYSS.png",
    url: "https://www.skhcyss.edu.hk/",
    location: {
      address: "6 Chi Cheong Road, Sheung Shui, North District, Hong Kong",
      mapQuery:
        "S.K.H. Chan Young Secondary School, 6 Chi Cheong Road, Sheung Shui, North District, Hong Kong",
      zoom: 16,
    },
    gallery: [
      {
        src: "/images/skhcyss-1.jpg",
        alt: "Aerial view of S.K.H. Chan Young Secondary School campus",
        caption:
          "School campus from above—the track, sports court, and main building where I spent six years.",
      },
      {
        src: "/images/skhcyss-2.jpg",
        alt: "Inter-house quiz competition in the school hall",
        caption:
          "The school hall during the 2021–22 inter-house quiz competition.",
      },
      {
        src: "/images/skhcyss-3.jpg",
        alt: "Computer laboratory with students using laptops",
        caption:
          "The ICT computer room—where much of my elective coursework and early programming practice took place.",
      },
      {
        src: "/images/skhcyss-4.jpg",
        alt: "Students and staff on stage at Speech Day 2021",
        caption:
          "32nd Speech Day (2022)—a formal milestone near the end of my secondary years, together with my class 6C.",
      },
    ],
  },
  {
    id: "tmms",
    kind: "education",
    title: "Primary Education",
    organization: "Tsang Mui Millennium School",
    time: "2010 - 2016",
    institutionOverview:
      "Tsang Mui Millennium School is an aided, whole-day, co-educational primary school in North District (Primary One Admission School Net 80). It opened in 2003, is sponsored by the Lee Chi Tat Memorial Fund Ltd., and sits at 1 Tsing Shing Road, Sheung Shui, New Territories. The medium of instruction reported in the official school profile is Chinese.\n\nThe campus occupies on the order of 6,500 m² with a full six-year class structure (30 classes across P1–P6 in recent years). Facilities named in the school’s public profile include multimedia language provision, arts and music spaces, libraries, and rooms that support diversified learning beyond standard classrooms.\n\nThe school’s stated mission centres on holistic “Sun education,” balancing academic learning with language development, values formation, liberal-arts breadth, creativity, pastoral care, and appreciative classroom culture.\n\nPublic communications also highlight multiple-intelligence style programmes, experiential outdoor learning across primary levels, and overseas learning opportunities for senior pupils. The school motto recorded in its official profile is “Constantly strive for self-perfection.” (Figures above follow the Primary School Profile as published via the Hong Kong Committee for Home-School Cooperation.)",
    cardSummary:
      "Primary years in North District with strong science and technology results, robot team, and annual study tours from Hong Kong to Singapore and Beijing.",
    contributionsContent: [
      {
        type: "paragraph",
        text: "I completed my primary education at Tsang Mui Millennium School from 2010 to 2016. I performed well academically, especially in science- and technology-related subjects.",
      },
      {
        type: "paragraph",
        text: "Outside class, I joined the school robot team. Around 2014–2015, we took part in a robotics-related competition at Hong Kong Science Park and achieved a good result for the school. The details have faded over the years, but it was an early experience of working together on a practical, hands-on project.",
      },
      {
        type: "paragraph",
        text: "Beyond the regular curriculum, the school organized an annual study tour for each primary level:",
      },
      {
        type: "bullets",
        items: [
          "P.1 — Hong Kong Zoological and Botanical Gardens and Lake Egret Nature Park.",
          "P.2 & P.3 — Tso Kung Tam Outdoor Recreation Centre.",
          "P.4 — Cheung Chau, including a military drill programme.",
          "P.5 — Singapore.",
          "P.6 — Beijing.",
        ],
      },
      {
        type: "paragraph",
        text: "Thanks to the study tours, the robot team, and the school's emphasis on science, I explored Hong Kong and places overseas early on and developed a lasting interest in technology.",
      },
    ],
    emblem: "/images/Emblem_of_TMMS.png",
    url: "https://www.tmms.edu.hk/",
    location: {
      address: "1 Ching Shing Road, Sheung Shui, North District, Hong Kong",
      mapQuery:
        "Tsang Mui Millennium School, 1 Ching Shing Road, Sheung Shui, North District, Hong Kong",
      zoom: 17,
    },
    gallery: [
      {
        src: "/images/tmms-1.jpg",
        alt: "Tsang Mui Millennium School campus",
        caption: "School campus, the campus is very neat and clean.",
      },
      {
        src: "/images/tmms-2.jpg",
        alt: "Tsang Mui Millennium School building exterior",
        caption: "Main hall, responsible for hosting the school's events.",
      },
      {
        src: "/images/tmms-3.jpg",
        alt: "Tsang Mui Millennium School grounds",
        caption: "School grounds, I spend most of my time here during recess.",
      },
      {
        src: "/images/tmms-4.jpg",
        alt: "Tsang Mui Millennium School facilities",
        caption: "The 'Stone of Tsang Mui', with teacher and students. The teacher in the gallery is my class teacher in P.1..",
      },
    ],
  },
];

const ALL_EXPERIENCE: ExperienceItem[] = [
  ...JOB_EXPERIENCES,
  ...EDUCATION_ITEMS,
];

export function getExperienceById(id: string): ExperienceItem | undefined {
  return ALL_EXPERIENCE.find((item) => item.id === id);
}
