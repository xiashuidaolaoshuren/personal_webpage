export type ProjectStatus = "Completed" | "In Progress" | "Maintainance";

/** Gallery item for screenshots or diagrams on the detail page */
export interface ProjectEvidence {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  status: ProjectStatus;
  image?: string;
  /** Short text used on listing cards */
  summary: string;
  /** Intro paragraph on the detail page */
  overview: string;
  problem: string;
  approach: string;
  features: string[];
  results: string;
  evidence?: ProjectEvidence[];
  repoUrl: string;
  techStack?: string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "llm-hallucination-fyp",
    title: "LLM Hallucination Mitigation (Final Year Project)",
    status: "Completed",
    image: "/images/fyp.jpg",
    summary:
      "Final Year Project researching trainless verifier methods to detect and mitigate hallucinations in LLMs within RAG systems.",
    overview:
      "This project investigates how retrieval-augmented generation can still produce confident but incorrect answers, and explores verifier-based mitigation without relying on additional model training.",
    problem:
      "LLMs in RAG pipelines can blend retrieved facts with plausible fabrication. Traditional fixes often assume labeled data or costly fine-tuning; the goal here was to explore verification signals that work in a more train-light setting.",
    approach:
      "Implemented and evaluated trainless verifier approaches using natural language inference and consistency checks over generated answers against retrieved context, integrated with a Transformers-based experimentation stack.",
    features: [
      "RAG-focused experimental setup for answer generation and grounding",
      "Verifier-style checks using NLI and related signals",
      "PyTorch / Transformers tooling for reproducible runs",
      "Documentation suitable for academic hand-in and replication",
    ],
    results:
      "Concrete comparisons of mitigation strategies under controlled settings, with discussion of trade-offs between strict grounding and answer usefulness.",
    evidence: [{ src: "/images/fyp.jpg", alt: "FYP project visual", caption: "Project showcase" }],
    repoUrl: "https://github.com/xiashuidaolaoshuren/AIST-FYP",
    techStack: ["Python", "PyTorch", "Transformers", "RAG", "NLI"],
  },
  {
    id: "allergy-guard",
    title: "AllergyGuard",
    status: "Completed",
    image: "/images/allergy_guard.png",
    summary:
      "Android app for travelers: scan food labels and menus with on-device OCR and fuzzy matching to surface allergens in real time.",
    overview:
      "AllergyGuard targets a practical UX problem—reading unfamiliar packaging and menus abroad—and keeps sensitive processing on-device where possible.",
    problem:
      "Allergen information is often buried in small print, multiple languages, or inconsistent wording. Travelers need fast, reliable hints without sending every photo to a server.",
    approach:
      "Built a Kotlin Android app using ML Kit OCR, fuzzy string matching against allergen dictionaries, and Room for structured local data and offline-friendly behavior.",
    features: [
      "Camera-driven capture for labels and menus",
      "On-device OCR pipeline",
      "Fuzzy matching tuned for noisy extracted text",
      "Local persistence with Room",
    ],
    results:
      "A deployable mobile prototype that demonstrates end-to-end capture-to-alert flow and a maintainable architecture for evolving allergen datasets.",
    evidence: [
      {
        src: "/images/allergy_guard.png",
        alt: "AllergyGuard app screenshot",
        caption: "UI and capture flow",
      },
    ],
    repoUrl: "https://github.com/xiashuidaolaoshuren/allergy_guard",
    techStack: ["Kotlin", "Android", "ML Kit", "OCR", "Room"],
  },
  {
    id: "gta-v-alpr",
    title: "GTA V ALPR",
    status: "Completed",
    image: "/images/gta_v_alpr.jpg",
    summary:
      "Two-stage ALPR pipeline for GTA V gameplay: detection with YOLOv8, recognition with PaddleOCR, ByteTrack tracking, and a Streamlit GUI.",
    overview:
      "An applied computer-vision pipeline that treats gameplay footage like a constrained surveillance domain—good for experimenting with detection, tracking, and OCR under motion and compression artifacts.",
    problem:
      "License plates in game footage appear at varying scales, motion blur, and lighting. A practical system needs reliable detection-to-text association across frames.",
    approach:
      "Combined YOLOv8 plate localization, PaddleOCR for text reading, ByteTrack for temporal consistency, and Streamlit for interactive exploration and demoing.",
    features: [
      "End-to-end detection → recognition → tracking",
      "Streamlit GUI for inspection and parameter tuning",
      "Modular Python components for swapping models",
    ],
    results:
      "A working prototype pipeline suitable for showcasing classical ALPR architecture on non-standard video sources, with clear separation between perception stages.",
    evidence: [
      {
        src: "/images/gta_v_alpr.jpg",
        alt: "GTA V ALPR pipeline output",
        caption: "Detection and recognition preview",
      },
    ],
    repoUrl: "https://github.com/xiashuidaolaoshuren/ALPR_GTAV",
    techStack: ["Python", "YOLOv8", "PaddleOCR", "Streamlit", "PyTorch"],
  },
  {
    id: "automatic-chord-recognition",
    title: "Automatic Chord Recognition",
    status: "Completed",
    image: "/images/chord_recognition.png",
    summary:
      "ML system for chord identification from audio using Random Forest and LSTM models with Librosa-based preprocessing.",
    overview:
      "Explores classical vs sequence models on a music understanding task, emphasizing feature design and evaluation rather than a single black-box classifier.",
    problem:
      "Chord recognition requires representations that capture harmonic content while remaining robust to timbre and recording noise.",
    approach:
      "Engineered audio features with Librosa, trained and compared Random Forest baselines against LSTM sequence models in PyTorch, with careful train/validation splits.",
    features: [
      "Custom preprocessing and feature pipelines",
      "Parallel RF and RNN experimental tracks",
      "Reproducible training scripts and metrics",
    ],
    results:
      "Insight into where temporal modeling helps versus strong shallow learners, grounded in comparable preprocessing.",
    evidence: [
      {
        src: "/images/chord_recognition.png",
        alt: "Chord recognition project visual",
        caption: "Model comparison overview",
      },
    ],
    repoUrl: "https://github.com/xiashuidaolaoshuren/AIST3110_Proj",
    techStack: ["Python", "PyTorch", "Scikit-learn", "Librosa", "RNN"],
  },
  {
    id: "hand-gesture-music-controller",
    title: "Hand Gesture Music Controller",
    status: "Completed",
    image: "/images/hand_gesture.jpg",
    summary:
      "Real-time gesture recognition controlling music synthesis via MediaPipe tracking and OSC messages to SuperCollider.",
    overview:
      "Bridges pose estimation with creative coding: gestures become performance controls rather than discrete UI commands.",
    problem:
      "Musicians benefit from expressive, low-latency control paths. The challenge is stable tracking, meaningful gesture-to-parameter mapping, and reliable messaging to the audio engine.",
    approach:
      "Used MediaPipe for hand landmarks, OpenCV for capture hygiene, and OSC as a lightweight bridge into SuperCollider for sound synthesis experiments.",
    features: [
      "Real-time hand landmark streaming",
      "OSC control mapping into SuperCollider",
      "Modular pipeline for trying new gestures",
    ],
    results:
      "A playable interaction loop demonstrating CV-to-audio integration suitable for demos and iterative performance tweaks.",
    evidence: [
      {
        src: "/images/hand_gesture.jpg",
        alt: "Hand gesture music controller",
        caption: "Gesture-driven control",
      },
    ],
    repoUrl: "https://github.com/xiashuidaolaoshuren/AIST_2010_Proj",
    techStack: ["Python", "MediaPipe", "SuperCollider", "OpenCV", "OSC"],
  },
];

export function getProjectById(id: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.id === id);
}
