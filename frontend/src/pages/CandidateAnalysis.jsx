import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MATCH_PERCENT = 92;
const CIRCLE_CIRCUMFERENCE = 440; // 2 * PI * r(70), rounded as in the original design

export default function CandidateAnalysis() {
  // Animate the radial gauge in on mount, same as the original DOMContentLoaded script
  const [dashOffset, setDashOffset] = useState(CIRCLE_CIRCUMFERENCE);

  useEffect(() => {
    const target =
      CIRCLE_CIRCUMFERENCE - (MATCH_PERCENT / 100) * CIRCLE_CIRCUMFERENCE;
    const id = requestAnimationFrame(() => setDashOffset(target));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-hidden h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="w-full top-0 sticky bg-surface border-b border-outline-variant z-50">
        <div className="max-w-container-max mx-auto px-lg flex justify-between items-center h-16">
          <div className="flex items-center gap-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              analytics
            </span>
            <h1 className="text-headline-md font-headline-md font-bold text-primary">
              ResumeScout
            </h1>
          </div>
          <nav className="hidden md:flex gap-lg items-center h-full">
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 h-full flex items-center"
              to="/"
            >
              Home
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 h-full flex items-center"
              to="/upload"
            >
              Upload
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 h-full flex items-center"
              to="/results"
            >
              Dashboard
            </Link>
            <Link
              className="font-body-md text-body-md text-primary border-b-2 border-primary pb-1 font-bold h-full flex items-center"
              to="/analysis"
            >
              Analysis
            </Link>
          </nav>
          <div className="flex items-center gap-sm">
            <div className="hidden md:flex items-center gap-xs text-primary bg-secondary-container/30 px-sm py-1 rounded-full border border-primary/20 animate-pulse">
              <span className="material-symbols-outlined text-[18px]">sync</span>
              <span className="text-label-sm">Analysis synced</span>
            </div>
            <button className="px-md py-sm bg-secondary-container text-on-secondary-container font-label-md rounded-lg hover:bg-surface-variant transition-all">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Left: PDF Viewer (Resume Content) */}
        <section className="w-1/2 border-r border-outline-variant bg-surface-container-lowest flex flex-col">
          <div className="p-md bg-surface-container-low border-b border-outline-variant flex justify-between items-center">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-outline">
                description
              </span>
              <span className="font-label-md text-on-surface-variant">
                J_Doe_Resume_2024.pdf
              </span>
            </div>
            <div className="flex gap-xs">
              <button className="p-1 hover:bg-surface-variant rounded">
                <span className="material-symbols-outlined">zoom_in</span>
              </button>
              <button className="p-1 hover:bg-surface-variant rounded">
                <span className="material-symbols-outlined">zoom_out</span>
              </button>
              <button
                className="p-1 hover:bg-surface-variant rounded"
                onClick={() => alert("Report Exported Successfully!")}
              >
                <span className="material-symbols-outlined">file_download</span>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-xl custom-scrollbar">
            <div className="max-w-2xl mx-auto glass-panel p-xl shadow-sm min-h-[1000px]">
              <div className="mb-lg border-b border-outline-variant pb-md">
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Jonathan Doe
                </h2>
                <p className="text-on-surface-variant font-body-sm">
                  Senior Data Scientist | Quantitative Researcher
                </p>
              </div>
              <div className="space-y-lg">
                <section>
                  <h3 className="font-label-md text-primary uppercase tracking-widest mb-sm">
                    Professional Summary
                  </h3>
                  <p className="text-body-md leading-relaxed">
                    Dedicated researcher with 8+ years of experience in{" "}
                    <span className="resume-highlight-match">
                      machine learning architectures
                    </span>{" "}
                    and{" "}
                    <span className="resume-highlight-match">
                      statistical modeling
                    </span>
                    . Proven track record of deploying robust AI solutions in{" "}
                    <span className="resume-highlight-gap">
                      high-frequency trading
                    </span>{" "}
                    environments. Seeking to leverage academic rigor in a
                    senior leadership role.
                  </p>
                </section>
                <section>
                  <h3 className="font-label-md text-primary uppercase tracking-widest mb-sm">
                    Experience
                  </h3>
                  <div className="space-y-md">
                    <div>
                      <div className="flex justify-between font-bold text-on-surface">
                        <span>Lead AI Architect @ TechNova Systems</span>
                        <span className="font-normal text-on-surface-variant">
                          2019 - Present
                        </span>
                      </div>
                      <p className="mt-xs text-body-sm text-on-surface-variant">
                        Developed{" "}
                        <span className="resume-highlight-match">
                          NLP pipelines
                        </span>{" "}
                        using Transformer architectures that improved
                        processing speed by 40%. Managed a team of 12{" "}
                        <span className="resume-highlight-match">
                          doctoral researchers
                        </span>{" "}
                        in the field of{" "}
                        <span className="resume-highlight-match">
                          computer vision
                        </span>
                        .
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-on-surface">
                        <span>Data Scientist @ Global Finance Labs</span>
                        <span className="font-normal text-on-surface-variant">
                          2016 - 2019
                        </span>
                      </div>
                      <p className="mt-xs text-body-sm text-on-surface-variant">
                        Optimized risk assessment models through{" "}
                        <span className="resume-highlight-match">
                          Bayesian inference
                        </span>
                        . Collaborated with{" "}
                        <span className="resume-highlight-gap">
                          stakeholder management
                        </span>{" "}
                        to define KPI structures.
                      </p>
                    </div>
                  </div>
                </section>
                <section>
                  <h3 className="font-label-md text-primary uppercase tracking-widest mb-sm">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-sm">
                    <span className="px-sm py-1 bg-secondary-container text-on-secondary-container rounded font-label-md border border-outline-variant">
                      Python (PyTorch/TF)
                    </span>
                    <span className="px-sm py-1 bg-secondary-container text-on-secondary-container rounded font-label-md border border-outline-variant">
                      Cloud Infrastructure
                    </span>
                    <span className="px-sm py-1 bg-surface-container-high text-on-surface-variant rounded font-label-md border border-outline-variant">
                      Project Management
                    </span>
                    <span className="px-sm py-1 bg-secondary-container text-on-secondary-container rounded font-label-md border border-outline-variant">
                      Advanced Calculus
                    </span>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* Right: AI Rationalizer Dashboard */}
        <section className="w-1/2 bg-surface-container flex flex-col">
          <div className="p-lg overflow-y-auto flex-1 space-y-lg custom-scrollbar">
            {/* Match Score Gauge */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
              <div className="glass-panel p-lg rounded-xl flex flex-col items-center justify-center text-center">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      className="text-outline-variant/30"
                      cx="80"
                      cy="80"
                      fill="transparent"
                      r="70"
                      stroke="currentColor"
                      strokeWidth="12"
                    />
                    <circle
                      className="text-primary transition-all duration-1000 ease-out"
                      cx="80"
                      cy="80"
                      fill="transparent"
                      r="70"
                      stroke="currentColor"
                      strokeDasharray={CIRCLE_CIRCUMFERENCE}
                      strokeDashoffset={dashOffset}
                      strokeLinecap="round"
                      strokeWidth="12"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-display font-bold text-primary">
                      {MATCH_PERCENT}%
                    </span>
                    <span className="text-label-sm text-outline uppercase">
                      Match
                    </span>
                  </div>
                </div>
                <h4 className="mt-md font-headline-md text-primary">
                  Exceptional Match
                </h4>
                <p className="text-body-sm text-on-surface-variant">
                  Aligned with 14/15 core requirements
                </p>
              </div>
              <div className="glass-panel p-lg rounded-xl space-y-md">
                <h4 className="font-label-md text-primary border-b border-outline-variant pb-2">
                  AI RATIONALIZER
                </h4>
                <p className="text-body-sm italic text-on-surface-variant">
                  "Jonathan demonstrates a high degree of technical mastery in
                  ML architectures. His publication history aligns perfectly
                  with our R&amp;D roadmap, though a slight gap in
                  Fintech-specific regulatory compliance was identified."
                </p>
                <div className="flex items-center gap-sm text-primary">
                  <span
                    className="material-symbols-outlined filled"
                  >
                    verified
                  </span>
                  <span className="text-label-md">
                    Verified Academic Credentials
                  </span>
                  <span className="ml-2 px-2 py-0.5 bg-primary text-on-primary text-[10px] font-bold rounded-full uppercase tracking-tighter">
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* Detailed Analysis Sections */}
            <div className="grid grid-cols-1 gap-md">
              {/* Skills Alignment */}
              <div className="glass-panel p-md rounded-xl">
                <div className="flex justify-between items-center mb-md">
                  <h5 className="font-headline-md text-body-lg font-bold text-primary">
                    Skills Alignment
                  </h5>
                  <span className="text-primary font-bold text-label-md">
                    Strong
                  </span>
                </div>
                <div className="space-y-sm">
                  {[
                    { label: "Technical Skill", value: 95 },
                    { label: "Research Rigor", value: 88 },
                    { label: "Soft Skills", value: 72 },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-md">
                      <span className="w-32 text-label-md text-on-surface-variant">
                        {row.label}
                      </span>
                      <div className="flex-1 h-2 bg-outline-variant/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${row.value}%` }}
                        ></div>
                      </div>
                      <span className="text-label-sm w-8">{row.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Depth */}
              <div className="glass-panel p-md rounded-xl">
                <h5 className="font-headline-md text-body-lg font-bold text-primary mb-md">
                  Experience Depth
                </h5>
                <div className="border-l-2 border-primary ml-2 pl-4 space-y-md">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-primary"></div>
                    <p className="font-label-md text-primary">
                      Tenure Index: 4.2 Years
                    </p>
                    <p className="text-body-sm text-on-surface-variant">
                      Above average stability in previous roles.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-primary"></div>
                    <p className="font-label-md text-primary">
                      Promotion Velocity
                    </p>
                    <p className="text-body-sm text-on-surface-variant">
                      Advanced from Senior to Lead in 2.5 years.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="glass-panel p-md rounded-xl">
                <h5 className="font-headline-md text-body-lg font-bold text-primary mb-md">
                  Academic Credentials
                </h5>
                <div className="flex items-center gap-lg">
                  <div className="w-16 h-16 bg-surface-container-high rounded flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      school
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">
                      Ph.D. in Computational Science
                    </p>
                    <p className="text-label-md text-outline">
                      Stanford University, 2016
                    </p>
                    <div className="mt-1 inline-flex items-center gap-1 text-[10px] bg-secondary-container px-2 py-0.5 rounded text-on-secondary-container font-bold">
                      TOP 1% INSTITUTION
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <footer className="bg-surface border-t border-outline-variant p-md flex items-center justify-between gap-md">
            <div className="flex gap-sm">
              <button className="px-lg py-sm bg-primary text-on-primary rounded font-label-md flex items-center gap-sm hover:opacity-90 active:scale-95 transition-all">
                <span className="material-symbols-outlined filled">
                  bookmark
                </span>
                Shortlist Candidate
              </button>
              <button className="px-lg py-sm bg-secondary-container text-on-secondary-container rounded font-label-md flex items-center gap-sm hover:bg-outline-variant/30 active:scale-95 transition-all">
                <span className="material-symbols-outlined">
                  question_answer
                </span>
                Generate Interview Qs
              </button>
            </div>
            <button className="px-md py-sm border border-outline text-on-surface-variant rounded font-label-md flex items-center gap-sm hover:bg-error-container hover:text-on-error-container transition-colors">
              <span className="material-symbols-outlined">archive</span>
              Archive Record
            </button>
          </footer>
        </section>
      </main>
    </div>
  );
}
