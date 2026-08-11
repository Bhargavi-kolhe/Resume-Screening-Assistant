import { useState } from "react";
import { Link } from "react-router-dom";

const CANDIDATES = [
  {
    rank: "#1",
    initials: "DS",
    initialsBg: "bg-secondary-container",
    initialsText: "text-on-secondary-container",
    name: "Dr. Sarah Jenkins",
    detail: "PhD Computer Science, MIT",
    score: 98,
    experience: "12 Yrs",
    status: "Shortlisted",
    statusIcon: "check_circle",
    statusClasses:
      "bg-secondary-container text-on-secondary-container border-on-secondary-container/20",
    archived: false,
  },
  {
    rank: "#2",
    initials: "AM",
    initialsBg: "bg-primary-container",
    initialsText: "text-on-primary-container",
    name: "Alex Martinez",
    detail: "MSc Robotics, Stanford",
    score: 92,
    experience: "8 Yrs",
    status: "Reviewing",
    statusIcon: "pending",
    statusClasses:
      "bg-surface-container text-on-surface-variant border-outline-variant",
    archived: false,
  },
  {
    rank: "#3",
    initials: "LH",
    initialsBg: "bg-on-tertiary-container",
    initialsText: "text-on-tertiary",
    name: "Linda Huang",
    detail: "BSc Math, Oxford",
    score: 85,
    experience: "5 Yrs",
    status: "Reviewing",
    statusIcon: "pending",
    statusClasses:
      "bg-surface-container text-on-surface-variant border-outline-variant",
    archived: false,
  },
  {
    rank: "#4",
    initials: "RP",
    initialsBg: "bg-error-container",
    initialsText: "text-on-error-container",
    name: "Robert Park",
    detail: "MSc Engineering, UCL",
    score: 42,
    experience: "2 Yrs",
    status: "Archived",
    statusIcon: "archive",
    statusClasses:
      "bg-error-container text-on-error-container border-error-container/20",
    archived: true,
  },
];

const SIDE_NAV = [
  { icon: "home", label: "Home", path: "/" },
  { icon: "upload_file", label: "Upload", path: "/upload" },
  { icon: "dashboard", label: "Dashboard", path: "/results" },
  { icon: "analytics", label: "Analysis", path: "/analysis" },
];

export default function ScreeningResults() {
  const [showToast, setShowToast] = useState(true);

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary-container min-h-screen">
      {showToast && (
        <div className="fixed top-20 right-lg z-[60]">
          <div className="bg-primary-container text-on-primary-container px-lg py-md rounded-xl shadow-md border border-primary/20 flex items-center gap-md">
            <span className="material-symbols-outlined text-on-primary-container">
              check_circle
            </span>
            <div className="flex flex-col">
              <p className="font-label-md text-label-md font-bold">
                Batch analysis complete
              </p>
              <p className="text-[11px] opacity-90">
                127 candidates processed successfully.
              </p>
            </div>
            <button
              className="ml-md hover:opacity-70"
              onClick={() => setShowToast(false)}
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>
      )}

      {/* TopNavBar */}
      <header className="w-full top-0 sticky z-50 bg-surface border-b border-outline-variant shadow-sm">
        <div className="max-w-container-max mx-auto px-lg flex justify-between items-center h-16">
          <div className="flex items-center gap-md">
            <span className="text-headline-md font-headline-md font-bold text-primary">
              ResumeScout
            </span>
            <nav className="hidden md:flex gap-lg ml-xl">
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80"
                to="/"
              >
                Home
              </Link>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80"
                to="/upload"
              >
                Upload
              </Link>
              <Link
                className="font-body-md text-body-md text-primary border-b-2 border-primary pb-1 font-bold cursor-pointer active:opacity-80"
                to="/results"
              >
                Dashboard
              </Link>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80"
                to="/analysis"
              >
                Analysis
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-md">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
              <input
                className="pl-10 pr-4 py-2 bg-surface-container border border-outline-variant rounded-lg text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64"
                placeholder="Search batches..."
                type="text"
              />
            </div>
            <button className="px-md py-2 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-64px-140px)]">
        {/* SideNavBar */}
        <aside className="hidden lg:flex flex-col py-lg px-md h-[calc(100vh-64px)] w-64 fixed left-0 top-16 bg-surface-container border-r border-outline-variant">
          <div className="flex items-center gap-md mb-xl px-sm">
            <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined">school</span>
            </div>
            <div>
              <h2 className="font-label-md text-label-md text-on-surface uppercase tracking-widest">
                Academic Screening
              </h2>
              <p className="text-[10px] text-outline">Institutional Grade v4.2</p>
            </div>
          </div>
          <nav className="flex-1 space-y-base">
            {SIDE_NAV.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={
                  item.path === "/results"
                    ? "flex items-center gap-md p-md bg-secondary-container text-on-secondary-container font-bold rounded-lg transition-all active:scale-95 duration-150"
                    : "flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all active:scale-95 duration-150"
                }
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="font-label-md text-label-md">{item.label}</span>
              </Link>
            ))}
            <div className="pt-lg pb-sm px-md">
              <button className="w-full py-md bg-primary-container text-on-primary-container rounded-lg font-bold flex items-center justify-center gap-sm hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined">add</span>
                New Scan
              </button>
            </div>
          </nav>
          <footer className="mt-auto space-y-base">
            <a
              className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant/50 rounded-lg"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="font-label-md text-label-md">Settings</span>
            </a>
            <a
              className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant/50 rounded-lg"
              href="#"
            >
              <span className="material-symbols-outlined">help</span>
              <span className="font-label-md text-label-md">Support</span>
            </a>
          </footer>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-lg lg:p-xl bg-background overflow-x-hidden">
          {/* Job Selection Sticky Header */}
          <div className="sticky top-[64px] z-40 bg-background pb-md">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col md:flex-row md:items-center justify-between gap-md shadow-sm">
              <div className="flex items-center gap-md">
                <div className="p-sm bg-secondary-container rounded-lg">
                  <span className="material-symbols-outlined text-on-secondary-container">
                    work
                  </span>
                </div>
                <div>
                  <p className="text-label-sm text-outline uppercase tracking-wider">
                    Active Analysis
                  </p>
                  <h1 className="font-headline-md text-headline-md text-primary flex items-center">
                    Senior Research Scientist - AI Lab
                    <span className="inline-flex items-center gap-xs ml-sm px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded-full align-middle">
                      <span className="material-symbols-outlined text-[12px]">
                        verified
                      </span>
                      Verified
                    </span>
                  </h1>
                </div>
              </div>
              <div className="flex gap-sm">
                <select className="bg-surface border border-outline-variant text-body-sm rounded-lg px-md py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none cursor-pointer">
                  <option>Job Description: JD-2024-081</option>
                  <option>Job Description: JD-2024-094</option>
                  <option>Job Description: JD-2023-112</option>
                </select>
                <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    filter_list
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 gap-lg">
            {/* Batch Processing Table */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
              <div className="px-lg py-md border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
                <h3 className="font-headline-md text-body-lg font-bold text-tertiary">
                  Candidate Batch Processing
                </h3>
                <div className="flex gap-sm">
                  <span className="flex items-center gap-xs px-md py-1 bg-secondary-container text-on-secondary-container text-label-sm rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    Live Screening
                  </span>
                </div>
              </div>
              <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low/50">
                      <th className="px-lg py-md text-left font-label-md text-label-md text-outline uppercase tracking-wider border-b border-outline-variant">
                        Rank
                      </th>
                      <th className="px-lg py-md text-left font-label-md text-label-md text-outline uppercase tracking-wider border-b border-outline-variant">
                        Candidate Name
                      </th>
                      <th className="px-lg py-md text-left font-label-md text-label-md text-outline uppercase tracking-wider border-b border-outline-variant">
                        Match Score (%)
                      </th>
                      <th className="px-lg py-md text-left font-label-md text-label-md text-outline uppercase tracking-wider border-b border-outline-variant">
                        Experience
                      </th>
                      <th className="px-lg py-md text-left font-label-md text-label-md text-outline uppercase tracking-wider border-b border-outline-variant">
                        Status
                      </th>
                      <th className="px-lg py-md text-right font-label-md text-label-md text-outline uppercase tracking-wider border-b border-outline-variant">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    {CANDIDATES.map((c) => (
                      <tr
                        key={c.rank}
                        className={`hover:bg-surface-container transition-colors ${
                          c.archived ? "opacity-60 grayscale" : ""
                        }`}
                      >
                        <td
                          className={`px-lg py-md font-body-md ${
                            c.rank === "#1"
                              ? "text-primary font-bold"
                              : "text-on-surface-variant"
                          }`}
                        >
                          {c.rank}
                        </td>
                        <td className="px-lg py-md">
                          <div className="flex items-center gap-sm">
                            <div
                              className={`w-8 h-8 rounded-full ${c.initialsBg} flex items-center justify-center ${c.initialsText} font-bold text-[10px]`}
                            >
                              {c.initials}
                            </div>
                            <div>
                              <p className="font-body-md text-on-surface">{c.name}</p>
                              <p className="text-[11px] text-outline">{c.detail}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-lg py-md">
                          <div className="flex items-center gap-md">
                            <span
                              className={`font-body-md font-bold w-12 ${
                                c.archived ? "text-outline" : "text-primary"
                              }`}
                            >
                              {c.score}%
                            </span>
                            <div className="flex-1 min-w-[120px] h-2 bg-surface-container rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  c.archived ? "bg-outline" : "bg-primary"
                                }`}
                                style={{ width: `${c.score}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-lg py-md font-body-md text-on-surface-variant">
                          {c.experience}
                        </td>
                        <td className="px-lg py-md">
                          <span
                            className={`px-sm py-1 text-label-sm rounded border ${c.statusClasses}`}
                          >
                            <span className="flex items-center gap-xs">
                              <span className="material-symbols-outlined text-[14px]">
                                {c.statusIcon}
                              </span>
                              {c.status}
                            </span>
                          </span>
                        </td>
                        <td className="px-lg py-md text-right">
                          {c.archived ? (
                            <button className="text-outline hover:bg-surface-variant p-2 rounded-lg transition-colors">
                              <span className="material-symbols-outlined">
                                restore_from_trash
                              </span>
                            </button>
                          ) : (
                            <Link
                              to="/analysis"
                              className="inline-flex text-primary hover:bg-primary-container/10 p-2 rounded-lg transition-colors"
                            >
                              <span className="material-symbols-outlined">
                                visibility
                              </span>
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-md bg-surface-container-low/30 flex justify-center">
                <button className="text-label-md font-label-md text-primary flex items-center gap-xs hover:underline transition-all">
                  View Full Batch (127 Candidates)
                  <span className="material-symbols-outlined text-[18px]">
                    expand_more
                  </span>
                </button>
              </div>
            </div>

            {/* Bento Analytics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-sm flex items-center gap-lg">
                <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary flex items-center justify-center">
                  <span className="font-headline-md text-primary">82.4</span>
                </div>
                <div>
                  <p className="text-label-sm text-outline uppercase font-bold tracking-widest">
                    Average Score
                  </p>
                  <p className="text-[10px] text-primary-container font-bold">
                    +2.1% from prev. batch
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-label-sm text-outline uppercase font-bold tracking-widest">
                    Total in Queue
                  </p>
                  <h4 className="text-display font-display text-primary leading-tight">
                    127
                  </h4>
                </div>
                <span className="material-symbols-outlined text-outline text-[48px] opacity-20">
                  group
                </span>
              </div>
              <div className="bg-primary-container border border-primary p-lg rounded-xl shadow-md flex items-center justify-between overflow-hidden relative">
                <div className="relative z-10">
                  <p className="text-label-sm text-on-primary-container/80 uppercase font-bold tracking-widest">
                    Processed Today
                  </p>
                  <h4 className="text-display font-display text-on-primary-fixed leading-tight">
                    14
                  </h4>
                  <div className="flex items-center gap-xs mt-1">
                    <span className="material-symbols-outlined text-[14px] text-on-primary-container">
                      timer
                    </span>
                    <span className="text-[10px] text-on-primary-container font-medium">
                      Last active: 4m ago
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-primary text-[64px] opacity-10 absolute -right-2 -bottom-2">
                  history_edu
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Sticky Bottom Analytics Bar */}
      <footer className="w-full fixed bottom-0 z-50 bg-surface-container-high border-t border-outline-variant">
        <div className="max-w-container-max mx-auto px-lg py-md grid grid-cols-3 md:grid-cols-4 items-center">
          <div className="hidden md:block">
            <span className="text-headline-lg-mobile font-headline-lg-mobile text-primary">
              ResumeScout
            </span>
            <p className="text-label-sm text-outline">Institutional Precision</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-label-sm text-outline uppercase font-bold">
              Avg Match
            </span>
            <span className="font-headline-md text-primary">82.4%</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-label-sm text-outline uppercase font-bold">
              Queue
            </span>
            <span className="font-headline-md text-primary">127</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-label-sm text-outline uppercase font-bold">
              Today
            </span>
            <span className="font-headline-md text-primary">14</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
