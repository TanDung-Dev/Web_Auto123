import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch, FaPhoneAlt, FaSignOutAlt, FaHeart, FaRegClock } from "react-icons/fa";

// Logo SVG
const Logo = () => (
  <div className="flex items-center">
    <span className="text-2xl sm:text-3xl font-bold text-red-600">AUTO</span>
    <span className="text-2xl sm:text-3xl font-bold text-gray-800">123</span>
  </div>
);

const navLinks = [
  { to: "/", label: "Trang chủ" },
  { to: "/services", label: "Dịch vụ" },
  { to: "/products", label: "Cửa hàng" },
  { to: "/projects", label: "Dự án" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Liên hệ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const menuRef = useRef();
  const searchRef = useRef();
  const navigate = useNavigate();

  const fullname = localStorage.getItem("fullname");
  const userInitial = fullname
    ? fullname.trim().split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2)
    : "GK";

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
    };
    if (menuOpen || searchOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen, searchOpen]);

  const handleLogout = () => {
    localStorage.clear();
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <header className="w-full bg-white shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center text-sm">
            <div className="flex items-center mr-6">
              <FaPhoneAlt className="mr-2 text-red-500" />
              <span>Hotline: 0918 321 319</span>
            </div>
            <div className="hidden sm:flex items-center">
              <FaRegClock className="mr-2 text-red-500" />
              <span>Giờ làm việc: 8:00 - 20:00</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/booking" className="text-sm hover:text-red-500 transition">Đặt lịch</Link>
            <Link to="/tracking" className="text-sm hover:text-red-500 transition">Theo dõi đơn hàng</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="lg:hidden ml-auto p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation (desktop) */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-6">
            {navLinks.map((link, idx) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    [
                      "px-1 py-2 font-semibold text-base hover:text-red-600 transition-colors border-b-2",
                      isActive
                        ? "border-red-600 text-red-600"
                        : "border-transparent"
                    ].join(" ")
                  }
                  end={idx === 0}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search */}
          <div className="relative" ref={searchRef}>
            <button
              className="p-2 text-gray-600 hover:text-red-600 transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
              title="Tìm kiếm"
            >
              <FaSearch className="text-xl" />
            </button>
            {searchOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg p-3 z-50">
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="w-full p-2 focus:outline-none"
                  />
                  <button className="bg-red-600 text-white p-2">
                    <FaSearch />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Wishlist */}
          <Link to="/wishlist" className="p-2 text-gray-600 hover:text-red-600 transition-colors" title="Yêu thích">
            <FaHeart className="text-xl" />
          </Link>

          {/* Cart */}
          <Link to="/cart" className="p-2 text-gray-600 hover:text-red-600 transition-colors relative" title="Giỏ hàng">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">2</span>
          </Link>

          {/* User */}
          {fullname ? (
            <div className="relative" ref={menuRef}>
              <button
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:border-red-600 transition-colors"
                onClick={() => setMenuOpen(v => !v)}
              >
                <span className="font-semibold text-gray-800">{fullname.split(" ")[0]}</span>
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                  <Link to="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700">
                    <FaUser className="text-red-600" /> Tài khoản của tôi
                  </Link>
                  <Link to="/orders" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700">
                    <FaShoppingCart className="text-red-600" /> Đơn hàng của tôi
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 text-gray-700"
                  >
                    <FaSignOutAlt className="text-red-600" /> Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
            >
              Đăng nhập
            </Link>
          )}
        </div>
      </div>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg px-4 py-4 absolute w-full z-50">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <button
                  onClick={() => {
                    navigate(link.to);
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:text-red-600 font-semibold border-b border-gray-100"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/booking" className="block px-4 py-2 text-gray-700 hover:text-red-600">Đặt lịch</Link>
            </li>
            <li>
              <Link to="/wishlist" className="block px-4 py-2 text-gray-700 hover:text-red-600">Yêu thích</Link>
            </li>
            <li>
              <Link to="/cart" className="block px-4 py-2 text-gray-700 hover:text-red-600">Giỏ hàng (2)</Link>
            </li>
            {fullname ? (
              <>
                <li>
                  <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:text-red-600">Tài khoản của tôi</Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 font-semibold"
                  >
                    Đăng xuất
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={() => {
                    navigate("/login");
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-red-600 font-semibold"
                >
                  Đăng nhập
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
