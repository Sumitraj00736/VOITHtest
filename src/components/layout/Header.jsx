import React from "react";
import { X, Menu, Facebook, Instagram, MessageCircle } from "lucide-react";
import profile from "../../assets/profile.png";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        console.log("Clicked outside");
        setOpen(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white p-4  shadow-xl ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/home">
            {" "}
            <h1 className="text-2xl md:text-3xl font-bold ml-10 text-[#1A202C]">
              LOGO
            </h1>
          </a>
        </div>

        <nav className="hidden  md:flex flex-1 justify-center">
          <ul className="flex font-medium space-x-18">
            <a
              href="/home"
              className="text-[#1A202C] hover:text-[#737373] cursor-pointer"
            >
              Home
            </a>
            <a
              href="/renting"
              className="text-[#1A202C] hover:text-[#737373] cursor-pointer"
            >
              Renting
            </a>
            <a
              href="/how-it-works"
              className="text-[#1A202C] hover:text-[#737373] cursor-pointer"
            >
              How It Works
            </a>
            <a
              href="/contact"
              className="text-[#1A202C] hover:text-[#737373] cursor-pointer"
            >
              Contact
            </a>
          </ul>
        </nav>

        {/* hamburger menu and user dropdown */}
        <div className="flex items-center space-x-4">
          {!mobileOpen && (
            <div
              className="hidden md:flex items-center space-x-4 md:mr-10"
              ref={dropdownRef}
            >
              <button
                onClick={() => setOpen((v) => !v)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={profile}
                  alt="User avatar"
                />
                <span className="text-[#1A202C]  hidden sm:inline">
                  Rahul Awasti
                </span>
                <svg
                  className={`w-4 h-4 text-[#1A202C] transition-transform ${
                    open ? "transform rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {open && (
                <div className="absolute right-10 top-16 mt-2 w-44 bg-white border rounded shadow-lg py-1 z-20">
                  <button className="w-full text-left px-4 py-2 text-sm text-[#1A202C] hover:bg-[#737373]">
                    Profile
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-[#1A202C] hover:bg-[#737373]">
                    Settings
                  </button>
                  <div className="border-t my-1" />
                  <button className="w-full text-left px-4 py-2 text-sm text-[#1A202C] hover:bg-[#737373]">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          <button
            onClick={() => {
              setMobileOpen(true);
              setOpen(false);
            }}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-[#737373] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col justify-between p-8">
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6"
          >
            <X className="w-7 h-7 text-red-500" />
          </button>

          <div className="flex flex-col space-y-8 mt-10 text-lg font-semibold text-gray-900">
            <a href="/Home" className="hover:text-red-500">
              Home
            </a>
            <a href="/renting" className="hover:text-red-500">
              Renting
            </a>
            <a href="/how-it-works" className="hover:text-red-500">
              How it works
            </a>
            <a href="/contact" className="hover:text-red-500">
              Contact
            </a>
            <a href="/profile" className="hover:text-red-500">
              Profile
            </a>
          </div>

          <div className="mb-10">
            <div className="flex justify-center space-x-14 mb-6 text-#737373">
              <Facebook className="w-5 h-5 hover:text-red-500 cursor-pointer" />
              <MessageCircle className="w-5 h-5 hover:text-red-500 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-red-500 cursor-pointer" />
            </div>

            <div className="border-t border-gray-300 pt-4 flex justify-center space-x-22 text-sm text-gray-700">
              <a href="#" className="hover:text-red-500">
                FAQs
              </a>
              <a href="#" className="hover:text-red-500">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-500">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
