import { useRef } from "react";
import NavBar from "../components/NavBar.jsx";

export default function Home() {
  const imgWrapRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    if (!img) return;
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    img.style.transition = "none";
    img.style.transform = `scale(1.05) translate(${x * 10}px, ${y * 10}px)`;
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transition = "transform 0.5s ease-out";
    img.style.transform = "scale(1) translate(0, 0)";
  };

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex flex-col">
      <NavBar />

      <main className="relative flex-1">
        {/* Background Decoration */}
        <div className="absolute inset-0 academic-grid pointer-events-none"></div>

        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-lg pt-xl pb-32 grid grid-cols-1 lg:grid-cols-2 gap-xl items-center relative overflow-hidden">
          <div className="z-10">
            <div className="inline-flex items-center gap-xs px-sm py-1 bg-secondary-container text-on-secondary-container rounded-lg mb-md border border-outline-variant">
              <span className="material-symbols-outlined text-[16px]">school</span>
              <span className="font-label-md text-label-md">ACADEMIC RESEARCH ENGINE</span>
            </div>
            <h1 className="font-display text-display text-primary leading-tight mb-md">
              Intelligent Resume Screening for the{" "}
              <span className="text-on-secondary-container italic">Modern Academic.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-lg">
              A student-led engine for high-precision candidate ranking. Built on
              the principles of scholarly rigor and algorithmic transparency.
            </p>
            <div className="flex flex-wrap gap-md">
              <button className="bg-primary-container text-on-primary px-lg py-md rounded font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center gap-sm">
                Start Free Scan{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="border border-outline bg-surface text-on-surface px-lg py-md rounded font-label-md text-label-md hover:bg-surface-container transition-colors">
                View Methodology
              </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-md mt-xl border-t border-outline-variant pt-lg">
              <div>
                <p className="font-display text-headline-md text-primary">98%</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Accuracy
                </p>
              </div>
              <div>
                <p className="font-display text-headline-md text-primary">0.4s</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Latency
                </p>
              </div>
              <div>
                <p className="font-display text-headline-md text-primary">10k+</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Tokens/Doc
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative group"
            ref={imgWrapRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute -inset-4 bg-primary-container/10 rounded-xl blur-2xl group-hover:bg-primary-container/20 transition-all duration-500"></div>
            <div className="relative bg-white border border-outline-variant rounded-xl p-md shadow-sm overflow-hidden aspect-[4/3] flex items-center justify-center">
              <img
                ref={imgRef}
                alt="A high-fidelity, professional photograph of a modern, bright academic research library or university study hall."
                className="w-full h-full object-cover rounded-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkytvq-sJSTnBB-5GGANJ0-AlRwYyUUsyNHzNnbgw72mkjbATSJMqUj2yUHBEgvVkbgXdvWE1XTqndPmcoiFOS_cwgCIHyCN0tPvgjRBFSpcgMYO0aEEymMmIyd49lY-AzK7pyQQmiIR28RLrom0xu3w-3Hdg7793LsnZywgLMmwLzEmU6ftyyDnS-nPRGLc5xH20e4sDhBcts6MdR9IzvEK7mZdMm-QdBVIuFp0s3lYKMqzqul5PF8Q"
              />
              {/* Overlay Micro-Interactions */}
              <div className="absolute bottom-md right-md bg-surface border border-outline-variant p-sm rounded-lg shadow-lg flex items-center gap-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="font-label-md text-label-md">
                  System Online: Analyzing documents...
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Bento Grid */}
        <section className="bg-surface-container-low py-xl">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="mb-lg">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-xs">
                Engineered for Scholarly Precision
              </h2>
              <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl">
                Our platform bypasses generic screening tropes in favor of deep
                structural analysis, ensuring no academic nuance is lost.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              {/* Automated Parsing */}
              <div className="col-span-1 md:col-span-2 bg-white border border-outline-variant p-lg rounded-xl hover-lift flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary text-[32px] mb-md">
                    account_tree
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">
                    Automated Semantic Parsing
                  </h3>
                  <p className="text-on-surface-variant font-body-md text-body-md max-w-md">
                    Extract complex research hierarchies, publication
                    histories, and cross-disciplinary skill sets with zero
                    manual intervention.
                  </p>
                </div>
                <div className="mt-xl flex items-end justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">
                        description
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">
                        verified
                      </span>
                    </div>
                  </div>
                  <span className="text-primary font-label-md text-label-md flex items-center gap-xs">
                    Deep Analysis{" "}
                    <span className="material-symbols-outlined">trending_flat</span>
                  </span>
                </div>
              </div>

              {/* Smart Ranking */}
              <div className="bg-primary-container text-on-primary p-lg rounded-xl hover-lift">
                <span className="material-symbols-outlined text-on-primary-container text-[32px] mb-md">
                  leaderboard
                </span>
                <h3 className="font-headline-md text-headline-md mb-sm">Smart Ranking</h3>
                <p className="opacity-90 font-body-md text-body-md mb-lg">
                  Context-aware ranking algorithms that understand the
                  difference between industry experience and academic
                  contribution.
                </p>
                <div className="bg-white/10 rounded-lg p-sm border border-white/20">
                  <div className="flex justify-between items-center mb-xs">
                    <span className="text-label-sm font-label-sm opacity-80 uppercase">
                      Candidate A
                    </span>
                    <span className="text-label-sm font-label-sm bg-on-primary-container text-primary px-1 rounded">
                      Rank 1
                    </span>
                  </div>
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-4/5"></div>
                  </div>
                </div>
              </div>

              {/* Instant Feedback */}
              <div className="bg-white border border-outline-variant p-lg rounded-xl hover-lift">
                <span className="material-symbols-outlined text-primary text-[32px] mb-md">
                  bolt
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">
                  Instant Feedback
                </h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-lg">
                  Receive detailed reports on candidate suitability within
                  milliseconds of document upload.
                </p>
                <div className="space-y-sm">
                  <div className="flex items-center gap-sm text-label-sm font-label-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px] text-primary">
                      check_circle
                    </span>
                    Relevance Score: 94%
                  </div>
                  <div className="flex items-center gap-sm text-label-sm font-label-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px] text-primary">
                      check_circle
                    </span>
                    Publication Match: High
                  </div>
                </div>
              </div>

              {/* Additional Grid Content */}
              <div className="bg-secondary-container/30 border border-outline-variant p-lg rounded-xl hover-lift flex items-center justify-center">
                <div className="text-center">
                  <p className="font-headline-md text-headline-md text-primary mb-xs">
                    24/7
                  </p>
                  <p className="text-on-surface-variant font-label-sm text-label-sm uppercase">
                    Global Uptime
                  </p>
                </div>
              </div>
              <div className="bg-white border border-outline-variant p-lg rounded-xl hover-lift flex items-center justify-center">
                <div className="text-center">
                  <p className="font-headline-md text-headline-md text-primary mb-xs">
                    AES-256
                  </p>
                  <p className="text-on-surface-variant font-label-sm text-label-sm uppercase">
                    Encrypted Privacy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-container-max mx-auto px-lg py-xl">
          <div className="bg-primary-container rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
            <div className="relative z-10 px-lg py-xl text-center">
              <h2 className="font-display text-headline-lg text-on-primary mb-md">
                Ready to optimize your screening process?
              </h2>
              <p className="text-on-primary-container font-body-lg text-body-lg max-w-xl mx-auto mb-lg">
                Join over 50 leading institutions using ResumeScout to find
                the next generation of academic talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-md justify-center">
                <button className="bg-white text-primary px-lg py-md rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">
                  Get Institutional Access
                </button>
                <button className="border border-white/30 text-on-primary px-lg py-md rounded-lg font-label-md text-label-md hover:bg-white/10 transition-colors">
                  Speak with Research Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto bg-surface-container-high border-t border-outline-variant">
        <div className="max-w-container-max mx-auto py-xl px-lg grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="space-y-md">
            <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
              ResumeScout
            </span>
            <p className="text-on-surface-variant font-body-sm text-body-sm max-w-sm">
              © 2024 ResumeScout. Institutional Precision in Talent
              Acquisition. A student-led initiative focused on algorithmic
              fairness and academic excellence.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-md">
            <div className="flex flex-wrap gap-lg">
              <a
                className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary underline underline-offset-4 transition-opacity"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary underline underline-offset-4 transition-opacity"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary underline underline-offset-4 transition-opacity"
                href="#"
              >
                API Documentation
              </a>
            </div>
            <div className="flex gap-md">
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">
                terminal
              </span>
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">
                database
              </span>
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">
                security
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
