import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-[1000] transition-all">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center font-bold text-white text-base md:w-10 md:h-10 md:text-sm">
              A123
            </div>
            <span className="text-2xl font-bold text-white md:text-xl">AUTO123</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white no-underline text-base font-medium transition-colors relative hover:text-red-600 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all">
              Trang chủ
            </a>
            <a href="#services" className="text-white no-underline text-base font-medium transition-colors relative hover:text-red-600 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all">
              Dịch vụ
            </a>
            <a href="#about" className="text-white no-underline text-base font-medium transition-colors relative hover:text-red-600 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all">
              Giới thiệu
            </a>
            <a href="#contact" className="text-white no-underline text-base font-medium transition-colors relative hover:text-red-600 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all">
              Liên hệ
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 md:gap-3">
            <button className="bg-transparent border-none text-white text-lg cursor-pointer p-2 rounded transition-colors hover:text-red-600">
              <i className="fas fa-search"></i>
            </button>
            <button className="bg-transparent border-none text-white text-lg cursor-pointer p-2 rounded transition-colors hover:text-red-600">
              <i className="fas fa-shopping-cart"></i>
            </button>
            <button className="hidden md:block bg-red-600 text-white border-none py-3 px-6 rounded-lg font-semibold cursor-pointer transition-colors hover:bg-red-700">
              Đăng ký nhận báo giá
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="block md:hidden bg-transparent border-none text-white text-xl cursor-pointer p-2"
            >
              {isMenuOpen ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-5">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-white no-underline text-base font-medium py-2 transition-colors hover:text-red-600">
                Trang chủ
              </a>
              <a href="#services" className="text-white no-underline text-base font-medium py-2 transition-colors hover:text-red-600">
                Dịch vụ
              </a>
              <a href="#about" className="text-white no-underline text-base font-medium py-2 transition-colors hover:text-red-600">
                Giới thiệu
              </a>
              <a href="#contact" className="text-white no-underline text-base font-medium py-2 transition-colors hover:text-red-600">
                Liên hệ
              </a>
              <button className="bg-red-600 text-white border-none py-3 px-6 rounded-lg font-semibold cursor-pointer mt-2 transition-colors hover:bg-red-700">
                Đăng ký nhận báo giá
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;