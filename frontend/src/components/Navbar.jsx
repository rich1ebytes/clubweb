import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isClubLoggedIn, setIsClubLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("userToken");
      setIsClubLoggedIn(Boolean(token));
      const adminToken = localStorage.getItem("adminToken");
      const adminRole = localStorage.getItem("adminRole");
      setIsAdminLoggedIn(Boolean(adminToken && adminRole === "admin"));
    };
    checkLogin();
    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsClubLoggedIn(Boolean(token));
    const adminToken = localStorage.getItem("adminToken");
    const adminRole = localStorage.getItem("adminRole");
    setIsAdminLoggedIn(Boolean(adminToken && adminRole === "admin"));
  }, [location]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Clubs", path: "/clubs" },
    { name: "Team", path: "/our-team" },
    { name: "Support", path: "/support" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-brand-nav p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <Link to="/" className="text-2xl font-bold">
          <Logo />
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-brand-accent hover:border-brand-accent"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-lg lg:flex-grow font-medium text-gray-200 lg:flex lg:justify-center text-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block mt-4 lg:inline-block lg:mt-0 lg:mx-4 hover:text-brand-accent transition font-bold text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <button
              type="button"
              className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold transition lg:ml-4 py-2 px-4 rounded-full bg-brand-accent hover:bg-white hover:text-brand-accent"
              onClick={() => {
                setIsOpen(false);
                const adminToken = localStorage.getItem("adminToken");
                const adminRole = localStorage.getItem("adminRole");
                const isAdmin = Boolean(adminToken && adminRole === "admin");
                const userToken = localStorage.getItem("userToken");
                if (isAdmin) {
                  navigate("/admin/dashboard");
                } else if (userToken) {
                  navigate("/dashboard");
                } else {
                  navigate("/for-clubs");
                }
              }}
            >
              {isAdminLoggedIn
                ? "Manage Clubs"
                : isClubLoggedIn
                ? "My Club"
                : "For Clubs"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
