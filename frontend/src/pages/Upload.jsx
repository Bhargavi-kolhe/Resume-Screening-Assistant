import { useRef, useState } from "react";
import NavBar from "../components/NavBar.jsx";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const fileInputRef = useRef(null);

  const acceptFile = (f) => {
    if (!f) return;
    setFile(f);
    setShowToast(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) acceptFile(dropped);
  };

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

  const handleBrowseClick = () => fileInputRef.current?.click();

  const handleFileInputChange = (e) => {
    const chosen = e.target.files?.[0];
    if (chosen) acceptFile(chosen);
  };

  const reset = () => {
    setFile(null);
    setShowToast(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="min-h-screen flex flex-col text-on-surface bg-surface">
      {showToast && (
        <div className="fixed top-lg right-lg z-[100] flex items-center gap-md bg-primary text-on-primary p-md rounded-xl shadow-academic border border-primary-container transition-all duration-300">
          <span className="material-symbols-outlined">verified</span>
          <div className="flex flex-col">
            <span className="font-label-md text-label-md uppercase tracking-wider">
              Upload Verified
            </span>
            <span className="font-body-sm text-body-sm opacity-90">
              Document successfully queued for analysis
            </span>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="ml-md hover:opacity-70 transition-opacity"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
      )}

      <NavBar />

      <main className="flex-grow flex flex-col items-center justify-center py-xl px-lg">
        <div className="max-w-[800px] w-full space-y-lg">
          {/* Header Section */}
          <div className="text-center space-y-sm mb-lg">
            <h1 className="font-headline-lg text-headline-lg text-primary">
              Submit Document for Analysis
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Standardized academic screening for career progression and
              institutional review.
            </p>
          </div>

          {/* Main Upload Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
            {/* Central Drag & Drop Area */}
            <div className="lg:col-span-8">
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={!file ? handleBrowseClick : undefined}
                className={`relative h-[420px] bg-white academic-border rounded-xl flex flex-col items-center justify-center p-xl transition-all duration-300 shadow-academic group ${
                  !file ? "cursor-pointer hover:border-primary-fixed-variant" : ""
                } border-primary ${dragOver ? "drag-over" : ""}`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={handleFileInputChange}
                />
                <div className="absolute inset-0 border-2 border-primary rounded-xl m-sm pointer-events-none bg-secondary-container/10"></div>

                {file ? (
                  <div className="z-10 text-center space-y-lg w-full px-xl">
                    <div className="w-20 h-20 mx-auto bg-primary text-on-primary rounded-full flex items-center justify-center shadow-academic">
                      <span className="material-symbols-outlined text-[40px]">
                        check
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-primary mb-xs uppercase">
                        Upload Complete
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        1 file ready for institutional review
                      </p>
                    </div>
                    <div className="bg-surface-container rounded-lg p-md border border-primary/20 flex items-center justify-between">
                      <div className="flex items-center gap-sm">
                        <span className="material-symbols-outlined text-primary">
                          description
                        </span>
                        <span className="font-body-md text-body-md text-on-surface">
                          {file.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-xs">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          verified
                        </span>
                        <span className="text-primary font-label-sm text-label-sm uppercase bg-primary/10 px-sm rounded-full">
                          Verified
                        </span>
                      </div>
                    </div>
                    <button
                      className="text-primary font-label-md text-label-md hover:underline underline-offset-4"
                      onClick={reset}
                    >
                      Upload another file
                    </button>
                  </div>
                ) : (
                  <div className="z-10 text-center space-y-lg w-full px-xl">
                    <div className="w-20 h-20 mx-auto bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-[40px]">
                        cloud_upload
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-primary mb-xs uppercase">
                        Drag &amp; Drop Resume
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        or click to browse from your device (PDF, DOCX)
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBrowseClick();
                      }}
                      className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all active:scale-95"
                    >
                      Browse Files
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Secondary Upload Paths */}
            <div className="lg:col-span-4 flex flex-col gap-lg">
              {/* Local Card */}
              <div
                onClick={handleBrowseClick}
                className="bg-white academic-border rounded-xl p-lg shadow-academic flex flex-col h-1/2 hover:border-primary transition-colors cursor-pointer group active:scale-[0.98]"
              >
                <div className="mb-auto">
                  <span className="material-symbols-outlined text-primary mb-sm">
                    computer
                  </span>
                  <h4 className="font-headline-md text-[18px] text-on-surface mb-xs">
                    Local Drive
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Import documents directly from your workstation.
                  </p>
                </div>
                <button className="w-full mt-lg py-sm bg-secondary-container text-on-secondary-container rounded-lg font-label-md text-label-md group-hover:bg-primary group-hover:text-white transition-all">
                  Browse Local
                </button>
              </div>

              {/* Cloud Card */}
              <div className="bg-white academic-border rounded-xl p-lg shadow-academic flex flex-col h-1/2 hover:border-primary transition-colors cursor-pointer group active:scale-[0.98]">
                <div className="mb-auto">
                  <div className="flex items-center gap-sm mb-sm">
                    <span className="material-symbols-outlined text-primary">
                      cloud_upload
                    </span>
                  </div>
                  <h4 className="font-headline-md text-[18px] text-on-surface mb-xs">
                    Google Drive
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Securely connect to your cloud storage repository.
                  </p>
                </div>
                <button className="w-full mt-lg py-sm border border-outline-variant text-on-surface rounded-lg font-label-md text-label-md group-hover:border-primary transition-all flex items-center justify-center gap-sm">
                  Connect Drive
                </button>
              </div>
            </div>
          </div>

          {/* Guidelines / Disclaimer */}
          <div className="bg-surface-container-low academic-border p-md rounded-lg flex gap-md items-start">
            <span className="material-symbols-outlined text-primary text-[20px] mt-xs">
              info
            </span>
            <div className="space-y-xs">
              <p className="font-label-md text-label-md text-primary uppercase tracking-wider">
                Privacy &amp; Processing
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                By uploading, you agree to the Institutional Data Processing
                agreement. Files are parsed for lexical density and
                structural integrity. All personal data is handled under
                ISO/IEC 27001 standards.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto bg-surface-container-high border-t border-outline-variant">
        <div className="max-w-container-max mx-auto py-xl px-lg grid grid-cols-1 md:grid-cols-2 gap-md items-center">
          <div className="space-y-sm">
            <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
              ResumeScout
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              © 2024 ResumeScout. Institutional Precision in Talent Acquisition.
            </p>
          </div>
          <div className="flex md:justify-end gap-lg">
            <a
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4"
              href="#"
            >
              API Documentation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
