import type { ProjectItem } from "./ProjectCard";
import { ProjectCard } from "./ProjectCard";

const projects: ProjectItem[] = [
  {
    title: "GTA V ALPR",
    status: "Completed",
    description: "A complete two-stage Automatic License Plate Recognition pipeline for GTA V gameplay. Features YOLOv8 detection, PaddleOCR recognition, ByteTrack tracking, and a Streamlit GUI.",
    repoUrl: "https://github.com/xiashuidaolaoshuren/ALPR_GTAV",
    techStack: ["Python", "YOLOv8", "PaddleOCR", "Streamlit", "PyTorch"],
    image: "https://placehold.co/600x400/png?text=GTA+V+ALPR",
  },
  {
    title: "Automatic Chord Recognition",
    status: "Completed",
    description: "Machine learning system for identifying musical chords from audio. Implements Random Forest and LSTM (RNN) models with custom preprocessing features using Librosa.",
    repoUrl: "https://github.com/xiashuidaolaoshuren/AIST3110_Proj",
    techStack: ["Python", "PyTorch", "Scikit-learn", "Librosa", "RNN"],
    image: "https://placehold.co/600x400/png?text=Chord+Recognition",
  },
  {
    title: "Hand Gesture Music Controller",
    status: "Completed",
    description: "Real-time hand gesture recognition system for music synthesis control. Uses MediaPipe for tracking and sends OSC signals to SuperCollider for audio generation.",
    repoUrl: "https://github.com/xiashuidaolaoshuren/AIST_2010_Proj",
    techStack: ["Python", "MediaPipe", "SuperCollider", "OpenCV", "OSC"],
    image: "https://placehold.co/600x400/png?text=Gesture+Music+Controller",
  },
];

export function Projects() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
