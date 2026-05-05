export type ProjectStatus = "Completed" | "In Progress" | "Maintainance";

/** Gallery item for screenshots or diagrams on the detail page */
export interface ProjectEvidence {
  src: string;
  alt: string;
  caption?: string;
}

/** Optional CSR / benchmark block for project detail (e.g. album-wise metrics). */
export interface BenchmarkSeries {
  name: string;
  values: number[];
}

export interface ProjectBenchmark {
  metricLabel: string;
  categories: string[];
  series: BenchmarkSeries[];
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
  benchmark?: ProjectBenchmark;
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
    title: "Audio Chord Estimation",
    status: "Completed",
    image: "/images/chord_recognition-1.png",
    summary:
      "MIREX 2024–style audio chord estimation simplified to chord roots: chromagram features from Beatles, Queen, and Carole King material with Isophonics annotations, comparing Random Forest to a BiLSTM.",
    overview:
      "Audio chord estimation segments a recording and assigns a chord label to each interval—a core Music Information Retrieval (MIR) task with applications in analysis, recommendation, and transcription. This project follows the MIREX 2024 Audio Chord Estimation problem statement but limits recognition to chord roots only (no official MIREX packaging). Tracks are drawn from commercial albums; chord intervals reference Isophonics-style ground truth, projected to roots for training and evaluation. A detector-style workflow loads audio, extracts features, trains or applies either a Random Forest or a BiLSTM, and scores predictions with Chord Symbol Recall (CSR) alongside accuracy.",
    problem:
      "Estimation must stay robust to instrumentation, mix, and residual vocals after separation. Chromagram frames exhibit repetitive temporal structure that frame-wise classifiers can misread. Labels must be aligned in time with dense features, then simplified from full chord symbols to roots. The chosen corpus is weighted toward The Beatles, which biases cross-album generalization; expanding diverse, legally sourced audio remains a practical constraint.",
    approach:
      "End-to-end pipeline: load MP3 with librosa, apply vocal reduction, compute CQT-based chromagrams (including librosa.features.chroma_cqt), align each frame with Isophonics interval annotations, collapse labels to chord roots, and save preprocessed training packs as CSV. Two supervised models are compared: a scikit-learn Random Forest (n_estimators=10, max_depth=10, max_features=\"log2\", random_state=42) and a PyTorch BiLSTM that performed best in tuning with learning rate 0.1, hidden dimension 128, three layers, batch size 8, and bidirectional recurrence. Models are evaluated with accuracy and CSR, including per-album CSR for the Beatles, Queen, and Carole King splits referenced in the coursework report.",
    features: [
      "Root-only labels derived from full chord strings in timed annotation files",
      "Vocal attenuation plus chromagram / CQT feature extraction for frame-level inputs",
      "Random Forest baseline with fixed hyperparameters for reproducible comparison",
      "BiLSTM sequence model with tuned PyTorch settings (lr 0.1, hidden 128, 3 layers, batch 8, bidirectional)",
      "CSV export of processed features and labels for repeatable training",
      "CSR and accuracy reporting with album-wise breakdowns",
    ],
    results:
      "Album-wise numbers are in the CSR chart and table in the section titled “Chord Symbol Recall (CSR) by album”—what follows is reflection, not repeated scores. This was my first deep learning project and the first time I owned an end-to-end pipeline—from audio ingestion and labeling through training to CSR evaluation—which gave me a repeatable workflow I can build on; I consider that hands-on arc a strong foundation for continuing toward an AI-focused career. Technically, I learned that chord estimation is as much a temporal problem as a spectral one: a Random Forest is a useful baseline on isolated frames, but harmony unfolds over time, and a BiLSTM’s memory across chromagram frames better matches that structure. Implementing the BiLSTM introduced PyTorch datasets, dataloaders, and tuning in practice, which made the gap between frame-wise and sequence models tangible. Preprocessing sets much of the ceiling—residual vocals and noise limit CSR even when the architecture is reasonable—which pushed iterative vocal/noise handling after an earlier demo. On data, a Beatles-heavy corpus skews generalization; widening coverage mostly hits licensing and sourcing constraints, not just code. Richer chord representations (e.g. Harte-style ideas) were out of scope so the pipeline stayed understandable and shippable within the course timeline.",
    evidence: [
      {
        src: "/images/chord_recognition-1.png",
        alt: "Chord estimation project visualization",
        caption:
          "A chromagram from a section of the dataset audio.",
      },
      {
        src: "/images/chord_recognition-2.png",
        alt: "Chord Estimation Procedure",
        caption:
          "Chord Estimation Procedure.",
      },
      {
        src: "/images/chord_recognition-3.png",
        alt: "Sample Chord Estimation Results",
        caption:
          "Sample Chord Estimation Results.",
      },
    ],
    repoUrl: "https://github.com/xiashuidaolaoshuren/AIST3110_Proj",
    techStack: [
      "Python",
      "NumPy",
      "Pandas",
      "Librosa",
      "scikit-learn",
      "PyTorch",
      "BiLSTM",
    ],
    benchmark: {
      metricLabel: "Chord Symbol Recall (CSR) by album",
      categories: [
        "Please Please Me",
        "With the Beatles",
        "Queen Hits I",
        "Tapestry",
      ],
      series: [
        {
          name: "Random Forest",
          values: [0.44, 0.49, 0.4, 0.4],
        },
        {
          name: "BiLSTM",
          values: [0.8, 0.8, 0.72, 0.69],
        },
      ],
    },
  },
  {
    id: "hand-gesture-music-controller",
    title: "Sound Synthesis Using Computer Vision",
    status: "Completed",
    image: "/images/hand_gesture-1.jpg",
    summary:
      "Group project: we train a hand-gesture recognizer in Python (MediaPipe landmarks, scikit-learn, Joblib), stream parameters over OSC, and drive real-time synthesis in SuperCollider—including continuous pitch, discrete MIDI-style notes, and a layered composing mode.",
    overview:
      "As a group project for AIST2010: Introduction to Computer Music, we built a program that couples computer vision with SuperCollider so performers can shape sound without a conventional controller. Python handles capture, landmark extraction, gesture classification, and OSC messaging; SuperCollider handles real-time instruments and buffers. The system offers three modes: continuous frequency control, discrete MIDI-note mapping (pitch classes tied to the same hand pose), and a composing mode where short recordings are stacked and looped. We were motivated by expressive hardware-software hybrids such as ROLI Airwave and browser-scale instruments like Google’s Instrument Playground—our aim was to explore the same “gesture as instrument” idea with a stack we could fully program ourselves.",
    problem:
      "Gesture-driven music needs stable perception in live video, a clear mapping from body state to musical parameters, and a low-latency path into an audio engine. We had to choose landmark features that survive jitter, turn them into reliable gesture labels, and translate continuous hand motion—especially vertical position—into pitch while still supporting discrete note choices and a separate performance mode for layering ideas. Bridging two runtimes (Python and SuperCollider) adds integration risk: OSC must stay predictable so synthesis never falls out of sync with vision.",
    approach:
      "We capture frames with OpenCV, detect hands with MediaPipe’s 21-point model, record landmark coordinates for each gesture class, and train a supervised scikit-learn classifier; the serialized model is loaded at runtime with Joblib (the coursework submission emphasized the deployed pipeline rather than shipping training scripts). Recognized gestures and geometry feed a Python OSC client to localhost SuperCollider servers that implement our synths and buffers. For pitch, we track the metacarpophalangeal (MCP) joint of the middle finger so vertical motion maps cleanly while an open palm plays and a closed palm effectively mutes by sending near-zero frequency. Continuous mode drives oscillators directly; sampled material such as our hand-flute-style instrument shifts perceived pitch by adjusting playback rate after we measured source pitch with Sonic Visualiser. Discrete mode maps height to MIDI-style note indices using the usual twelve-tone frequency relationship. Composing mode layers recordings on a stack-inspired structure in SuperCollider until a fist gesture triggers the stop logic described in our report.",
    features: [
      "Three modes: continuous frequency, discrete MIDI-note pitch selection, and composing with stacked / looped recordings",
      "Gesture pipeline: MediaPipe landmarks → labeled dataset → scikit-learn classifier → Joblib-loaded model at inference time",
      "Pitch and mute mapping using the middle-finger MCP joint’s vertical position; closed palm silences output",
      "OSC over localhost between Python and SuperCollider for parameter updates",
      "SuperCollider synthesis paths including sine-based generators and sampled instruments controlled via playback rate",
      "Composing mode with buffer stacking and a fist gesture to stop playback per our SuperCollider design",
      "GUI for choosing modes and instruments during performance (shared implementation across the group)",
    ],
    results:
      "This was my first project involving machine learning and computer vision. My group shipped an end-to-end demo loop that proved gesture recognition can steer serious sound design. Along the way we deepened our applied computer vision practice—landmarks, labeling discipline, and deploying a sklearn model—and contrasted that with building expressive SuperCollider instruments rather than only editing audio offline. Wiring OSC forced us to think in contracts: which parameters cross the language boundary, and how often. Collaborating across CV, synthesis, and interface layers mirrored how interactive music projects tend to split expertise. More broadly, the project reinforced our belief that tightly integrating engineering and musicianship will keep shaping how people perform and prototype sound.",
    evidence: [
      {
        src: "/images/hand_gesture-1.jpg",
        alt: "Camera-driven hand gesture interaction with the music controller",
        caption:
          "Live capture path: hand pose from the camera feeds gesture logic before parameters reach SuperCollider.",
      },
      {
        src: "/images/hand_gesture-2.png",
        alt: "Mediapipe hand landmarks",
        caption:
          "Mediapipe hand landmarks.",
      },
    ],
    repoUrl: "https://github.com/xiashuidaolaoshuren/AIST_2010_Proj",
    techStack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "NumPy",
      "scikit-learn",
      "Joblib",
      "Python OSC",
      "SuperCollider",
    ],
  },
];

export function getProjectById(id: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.id === id);
}
