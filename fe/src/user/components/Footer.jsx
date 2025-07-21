import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// Logo SVG component to match with the header
const Logo = () => (
  <div className="flex items-center">
    <span className="text-2xl sm:text-3xl font-bold text-red-600">AUTO</span>
    <span className="text-2xl sm:text-3xl font-bold text-gray-800">123</span>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-6 w-full">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
      {/* AUTO123 Logo and Info */}
      <div className="flex flex-col">
        <div className="mb-6">
          <Logo />
        </div>
        <p className="text-gray-400 mb-6">
          AUTO123 luôn sẵn sàng cung cấp dịch vụ chăm sóc xe chất lượng cao với đội ngũ nhân viên chuyên nghiệp và trang thiết bị hiện đại.
        </p>
        <div className="flex space-x-3 mt-2">
          <a href="#" className="bg-gray-800 p-2.5 rounded-full hover:bg-red-600 transition-colors">
            <FaFacebookF className="text-white" />
          </a>
          <a href="#" className="bg-gray-800 p-2.5 rounded-full hover:bg-red-600 transition-colors">
            <FaTwitter className="text-white" />
          </a>
          <a href="#" className="bg-gray-800 p-2.5 rounded-full hover:bg-red-600 transition-colors">
            <FaInstagram className="text-white" />
          </a>
          <a href="#" className="bg-gray-800 p-2.5 rounded-full hover:bg-red-600 transition-colors">
            <FaYoutube className="text-white" />
          </a>
        </div>
      </div>

      {/* LIÊN KẾT NHANH */}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold mb-6 relative">
          Liên Kết Nhanh
          <span className="absolute bottom-[-10px] left-0 w-12 h-1 bg-red-600"></span>
        </h3>
        <ul className="space-y-3 text-gray-400">
          <li><a href="/" className="hover:text-red-500 transition-colors">Trang chủ</a></li>
          <li><a href="/services" className="hover:text-red-500 transition-colors">Dịch vụ</a></li>
          <li><a href="/products" className="hover:text-red-500 transition-colors">Cửa hàng</a></li>
          <li><a href="/projects" className="hover:text-red-500 transition-colors">Dự án</a></li>
          <li><a href="/blog" className="hover:text-red-500 transition-colors">Blog</a></li>
          <li><a href="/contact" className="hover:text-red-500 transition-colors">Liên hệ</a></li>
        </ul>
      </div>

      {/* DỊCH VỤ */}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold mb-6 relative">
          Dịch Vụ
          <span className="absolute bottom-[-10px] left-0 w-12 h-1 bg-red-600"></span>
        </h3>
        <ul className="space-y-3 text-gray-400">
          <li><a href="/services/detailing" className="hover:text-red-500 transition-colors">Chăm sóc xe</a></li>
          <li><a href="/services/interior" className="hover:text-red-500 transition-colors">Nội thất xe</a></li>
          <li><a href="/services/ceramic-coating" className="hover:text-red-500 transition-colors">Phủ Ceramic</a></li>
          <li><a href="/services/ppf" className="hover:text-red-500 transition-colors">Dán PPF</a></li>
          <li><a href="/services/window-tinting" className="hover:text-red-500 transition-colors">Dán phim cách nhiệt</a></li>
          <li><a href="/services/maintenance" className="hover:text-red-500 transition-colors">Bảo dưỡng xe</a></li>
        </ul>
      </div>

      {/* LIÊN HỆ */}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold mb-6 relative">
          Liên Hệ
          <span className="absolute bottom-[-10px] left-0 w-12 h-1 bg-red-600"></span>
        </h3>
        <div className="space-y-4 text-gray-400">
          <p className="flex items-start">
            <FaMapMarkerAlt className="mr-3 mt-1 text-red-500" />
            <span>123 Lê Duẩn, thành phố Tuy Hòa, Tỉnh DakLak</span>
          </p>
          <p className="flex items-center">
            <FaPhoneAlt className="mr-3 text-red-500" />
            <span>SĐT: 0918 321 319</span>
          </p>
          <p className="flex items-center">
            <FaEnvelope className="mr-3 text-red-500" />
            <span>Email: auto123@gmail.com</span>
          </p>
        </div>

        {/* Đăng ký nhận tin */}
        <div className="mt-6">
          <h4 className="font-semibold mb-3">Đăng ký nhận tin</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex-1 py-2 px-3 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-red-500"
            />
            <button className="bg-red-600 py-2 px-3 rounded-r-md hover:bg-red-700 transition-colors">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Thanh thông tin */}
    <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-6 border-t border-gray-800 flex-col md:flex-row gap-4">
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <a href="/about-us" className="hover:text-red-500 transition-colors">Về chúng tôi</a>
          <a href="/privacy-policy" className="hover:text-red-500 transition-colors">Chính sách bảo mật</a>
          <a href="/terms-conditions" className="hover:text-red-500 transition-colors">Điều khoản dịch vụ</a>
          <a href="/faq" className="hover:text-red-500 transition-colors">FAQ</a>
        </div>

        <div className="flex gap-4 items-center">
          <span className="text-gray-400 text-sm">Phương thức thanh toán:</span>
          <img src="/images/payment-methods.png" alt="Payment Methods" className="h-6"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/120x24?text=PAYMENT+METHODS";
            }}
          />
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="container mx-auto text-center text-gray-500 text-sm mt-6 px-4 sm:px-6 lg:px-8">
      Copyright © {new Date().getFullYear()} Auto123. All Rights Reserved. Design by TanDungDev
    </div>
  </footer>
);

export default Footer;
