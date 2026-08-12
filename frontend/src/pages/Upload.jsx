import React, { useCallback, useRef, useState } from "react";
import {
  FileCheck2,
  FileText,
  Cloud,
  Monitor,
  Info,
  X,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";

/**
 * ResumeScout — Submit Document for Analysis
 * React conversion of the original static HTML mock.
 *
 * Design tokens are lifted 1:1 from the original tailwind.config
 * (custom Material palette) and applied via CSS variables, since
 * this environment only ships Tailwind's core utility classes.
 */

const TOKENS = {
  "--surface": "#f8f9ff",
  "--tertiary": "#353c4c",
  "--surface-container-low": "#eff4ff",
  "--background": "#f8f9ff",
  "--on-error-container": "#93000a",
  "--inverse-surface": "#27313f",
  "--secondary": "#416656",
  "--error": "#ba1a1a",
  "--outline-variant": "#bec9c2",
  "--surface-bright": "#f8f9ff",
  "--on-error": "#ffffff",
  "--on-surface": "#121c2a",
  "--on-primary": "#ffffff",
  "--surface-container": "#e6eeff",
  "--on-primary-container": "#8bd6b7",
  "--surface-container-lowest": "#ffffff",
  "--on-tertiary": "#ffffff",
  "--primary": "#004532",
  "--outline": "#6f7973",
  "--on-background": "#121c2a",
  "--surface-variant": "#d9e3f6",
  "--on-secondary-container": "#476c5b",
  "--on-secondary": "#ffffff",
  "--surface-container-high": "#dee9fc",
  "--surface-container-highest": "#d9e3f6",
  "--primary-container": "#065f46",
  "--on-surface-variant": "#3f4944",
  "--secondary-container": "#c3ecd7",
  "--error-container": "#ffdad6",
};

const NAV_LINKS = ["Home", "Upload", "Dashboard", "Analysis"];

function Toast({ onClose }) {
  return (
    <div
      className="fixed top-6 right-6 z-[100] flex items-center gap-3 p-4 rounded-xl border animate-bounce"
      style={{
        background: "var(--primary)",
        color: "var(--on-primary)",
        borderColor: "var(--primary-container)",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <ShieldCheck size={22} strokeWidth={2} />
      <div className="flex flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-wider">
          Upload Verified
        </span>
        <span className="text-sm opacity-90">
          Document successfully queued for analysis
        </span>
      </div>
      <button
        className="ml-2 hover:opacity-70 transition-opacity"
        onClick={onClose}
        aria-label="Dismiss"
      >
        <X size={18} />
      </button>
    </div>
  );
}

function DropZone({
  kind, // "resume" | "jd"
  file,
  onFile,
  onReset,
}) {
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);

  const isResume = kind === "resume";

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragOver(false);
      const f = e.dataTransfer.files?.[0];
      if (f) onFile(f);
    },
    [onFile]
  );

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  };

  const handleBrowse = () => inputRef.current?.click();
  const handleInputChange = (e) => {
    const f = e.target.files?.[0];
    if (f) onFile(f);
    e.target.value = "";
  };

  const borderColor = file
    ? "var(--primary)"
    : dragOver
    ? "var(--primary)"
    : "var(--outline-variant)";

  return (
    <div
      className="relative h-[420px] rounded-xl flex flex-col items-center justify-center p-10 transition-all duration-300 group cursor-pointer"
      style={{
        background: "#ffffff",
        border: `1px solid ${borderColor}`,
        boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
      }}
      onDragEnter={handleDragOver}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={!file ? handleBrowse : undefined}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleInputChange}
        accept={isResume ? ".pdf,.doc,.docx" : ".pdf,.doc,.docx,.txt"}
      />

      {file ? (
        <div className="z-10 text-center space-y-6 w-full px-8">
          <div
            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
            style={{
              background: "var(--primary)",
              color: "var(--on-primary)",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <FileCheck2 size={36} />
          </div>
          <div>
            <h3
              className="text-2xl font-semibold mb-1 uppercase"
              style={{ color: "var(--primary)" }}
            >
              Upload Complete
            </h3>
            <p className="text-sm" style={{ color: "var(--on-surface-variant)" }}>
              {isResume
                ? "1 file ready for institutional review"
                : "Job description ready to calibrate analysis"}
            </p>
          </div>
          <div
            className="rounded-lg p-4 flex items-center justify-between"
            style={{
              background: "var(--surface-container)",
              border: "1px solid rgba(0,69,50,0.2)",
            }}
          >
            <div className="flex items-center gap-2 min-w-0">
              <FileText size={20} style={{ color: "var(--primary)" }} />
              <span
                className="text-base truncate max-w-[220px]"
                style={{ color: "var(--on-surface)" }}
                title={file.name}
              >
                {file.name}
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <ShieldCheck size={16} style={{ color: "var(--primary)" }} />
              <span
                className="text-[11px] font-semibold uppercase px-2 rounded-full"
                style={{
                  color: "var(--primary)",
                  background: "rgba(0,69,50,0.1)",
                }}
              >
                Verified
              </span>
            </div>
          </div>
          <button
            className="text-sm font-semibold hover:underline underline-offset-4"
            style={{ color: "var(--primary)" }}
            onClick={(e) => {
              e.stopPropagation();
              onReset();
            }}
          >
            Upload another file
          </button>
        </div>
      ) : (
        <div className="z-10 text-center space-y-6 w-full px-8">
          <div
            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
            style={{
              background: "var(--surface-container)",
              color: "var(--primary)",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            {isResume ? <UploadCloud size={36} /> : <FileText size={36} />}
          </div>
          <div>
            <h3
              className="text-2xl font-semibold mb-1 uppercase"
              style={{ color: "var(--primary)" }}
            >
              {isResume ? "Upload Resume" : "Upload Job Description"}
            </h3>
            <p className="text-sm" style={{ color: "var(--on-surface-variant)" }}>
              {isResume
                ? "Drag & drop a resume, or browse to select a file."
                : "Upload the job requirements to calibrate the AI analysis."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <button
              className="w-full py-2 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all"
              style={{ background: "var(--primary)", color: "var(--on-primary)" }}
              onClick={(e) => {
                e.stopPropagation();
                handleBrowse();
              }}
            >
              Browse Files
            </button>
            <button
              className="w-full py-2 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all flex items-center justify-center gap-2"
              style={{
                border: "1px solid var(--outline-variant)",
                color: "var(--on-surface)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Cloud size={16} />
              Connect Drive
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function SecondaryCard({ icon, title, description, buttonLabel }) {
  return (
    <div
      className="rounded-xl p-6 flex flex-col h-full transition-colors cursor-pointer group active:scale-[0.98]"
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <div className="mb-auto">
        <div className="mb-2" style={{ color: "var(--primary)" }}>
          {icon}
        </div>
        <h4 className="text-lg font-semibold mb-1" style={{ color: "var(--on-surface)" }}>
          {title}
        </h4>
        <p className="text-sm" style={{ color: "var(--on-surface-variant)" }}>
          {description}
        </p>
      </div>
      <button
        className="w-full mt-6 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all"
        style={{ background: "var(--secondary-container)", color: "var(--on-secondary-container)" }}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default function ResumeScoutUpload() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jdFile, setJdFile] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [activeNav, setActiveNav] = useState("Upload");
  const toastTimer = useRef(null);

  const showToast = useCallback(() => {
    setToastVisible(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastVisible(false), 4000);
  }, []);

  const handleResumeFile = (f) => {
    setResumeFile(f);
    showToast();
  };
  const handleJdFile = (f) => {
    setJdFile(f);
    showToast();
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        ...TOKENS,
        fontFamily: "Inter, sans-serif",
        background: "var(--background)",
        color: "var(--on-surface)",
      }}
    >
      {toastVisible && <Toast onClose={() => setToastVisible(false)} />}

      {/* Top Nav */}
      <header
        className="w-full top-0 sticky z-50"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--outline-variant)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center h-16">
          <div className="flex items-center gap-12">
            <span className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
              ResumeScout
            </span>
            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveNav(link);
                  }}
                  className="text-base transition-colors duration-200 cursor-pointer active:opacity-80 pb-1"
                  style={
                    activeNav === link
                      ? {
                          color: "var(--primary)",
                          borderBottom: "2px solid var(--primary)",
                          fontWeight: 700,
                        }
                      : { color: "var(--on-surface-variant)" }
                  }
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="px-6 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all active:scale-95"
              style={{ background: "var(--primary)", color: "var(--on-primary)" }}
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-6">
        <div className="max-w-[800px] w-full space-y-6">
          <div className="text-center space-y-2 mb-6">
            <h1 className="text-[32px] leading-[40px] font-semibold" style={{ color: "var(--primary)" }}>
              Submit Document for Analysis
            </h1>
            <p className="text-base" style={{ color: "var(--on-surface-variant)" }}>
              Standardized academic screening for career progression and institutional review.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DropZone
              kind="resume"
              file={resumeFile}
              onFile={handleResumeFile}
              onReset={() => setResumeFile(null)}
            />
            <DropZone
              kind="jd"
              file={jdFile}
              onFile={handleJdFile}
              onReset={() => setJdFile(null)}
            />

            {/* Secondary Upload Paths */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <SecondaryCard
                icon={<Monitor size={24} />}
                title="Local Drive"
                description="Import documents directly from your workstation."
                buttonLabel="Browse Local"
              />
              <SecondaryCard
                icon={<Cloud size={24} />}
                title="Google Drive"
                description="Securely connect to your cloud storage repository."
                buttonLabel="Connect Drive"
              />
            </div>
          </div>

          {/* Guidelines */}
          <div
            className="p-4 rounded-lg flex gap-3 items-start"
            style={{ background: "var(--surface-container-low)", border: "1px solid #e2e8f0" }}
          >
            <Info size={20} className="mt-1 shrink-0" style={{ color: "var(--primary)" }} />
            <div className="space-y-1">
              <p
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--primary)" }}
              >
                Privacy &amp; Processing
              </p>
              <p className="text-sm" style={{ color: "var(--on-surface-variant)" }}>
                By uploading, you agree to the Institutional Data Processing agreement. Files are
                parsed for lexical density and structural integrity. All personal data is handled
                under ISO/IEC 27001 standards.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="w-full mt-auto"
        style={{ background: "var(--surface-container-high)", borderTop: "1px solid var(--outline-variant)" }}
      >
        <div className="max-w-[1280px] mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="space-y-2">
            <span className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>
              ResumeScout
            </span>
            <p className="text-sm" style={{ color: "var(--on-surface-variant)" }}>
              © 2024 ResumeScout. Institutional Precision in Talent Acquisition.
            </p>
          </div>
          <div className="flex md:justify-end gap-6">
            {["Privacy Policy", "Terms of Service", "API Documentation"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-sm hover:underline underline-offset-4 transition-colors"
                style={{ color: "var(--on-surface-variant)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
