import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Upload", path: "/upload" },
  { label: "Dashboard", path: "/results" },
  { label: "Analysis", path: "/analysis" },
];

export default function NavBar({ rightSlot }) {
  const location = useLocation();

  return (
    <header className="w-full top-0 sticky z-50 bg-surface border-b border-outline-variant">
      <nav className="max-w-container-max mx-auto px-lg flex justify-between items-center h-16">
        <div className="flex items-center gap-xl">
          <Link
            to="/"
            className="text-headline-md font-headline-md font-bold text-primary"
          >
            ResumeScout
          </Link>
          <div className="hidden md:flex items-center gap-lg font-body-md text-body-md">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1 font-bold transition-colors duration-200 cursor-pointer active:opacity-80"
                      : "text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-md">
          {rightSlot}
          <button className="px-md py-sm rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors duration-200">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}
