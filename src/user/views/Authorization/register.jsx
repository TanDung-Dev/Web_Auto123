import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUserAlt, FaEnvelope, FaPhone, FaLock, FaCheckCircle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { registerUser } from "../../../api/User.api.js";
import banner from "../../assets/banner.jpg"; // Import banner image

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError("");
        setSuccess("");
        if (form.password !== form.confirmPassword) {
            setError("Mật khẩu xác nhận không khớp.");
            return;
        }
        try {
            const userData = {
                name: form.name,
                email: form.email,
                password: form.password,
                phone: form.phone
            };
            await registerUser(userData);
            setSuccess("Đăng ký thành công! Vui lòng đăng nhập.");
            setTimeout(() => navigate("/login"), 1500);
        } catch (err) {
            setError("Đăng ký thất bại. Vui lòng thử lại.");
        }
    };

    return (
        <div className="min-h-screen flex" style={{ background: "#f7f9fc" }}>
            {/* Left: Car Image/Banner */}
            <div
                className="hidden lg:flex flex-1 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/40"></div>
                <div className="absolute bottom-20 left-10 text-white max-w-md">
                    <h2 className="text-3xl font-bold mb-4">AUTO123</h2>
                    <p className="text-lg font-medium">Dịch vụ ô tô chuyên nghiệp, uy tín hàng đầu Việt Nam</p>
                </div>
            </div>
            {/* Right: Register Form */}
            <div className="flex flex-1 items-center justify-center px-4 py-12">
                <div className="w-full max-w-[450px] bg-white rounded-xl shadow-lg p-8">
                    <div className="mb-6 text-center">
                        <h1 className="text-3xl font-bold text-blue-800">AUTO123</h1>
                        <p className="text-gray-600 mt-2">Tạo tài khoản mới</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaUserAlt className="text-gray-400" />
                            </div>
                            <input
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                placeholder="Họ và tên"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaEnvelope className="text-gray-400" />
                            </div>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                placeholder="Email"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaPhone className="text-gray-400" />
                            </div>
                            <input
                                name="phone"
                                type="text"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                placeholder="Số điện thoại"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaLock className="text-gray-400" />
                            </div>
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={form.password}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                placeholder="Mật khẩu"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ?
                                    <FiEyeOff className="text-gray-400 hover:text-gray-600" /> :
                                    <FiEye className="text-gray-400 hover:text-gray-600" />
                                }
                            </button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaCheckCircle className="text-gray-400" />
                            </div>
                            <input
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                value={form.confirmPassword}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                placeholder="Xác nhận mật khẩu"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ?
                                    <FiEyeOff className="text-gray-400 hover:text-gray-600" /> :
                                    <FiEye className="text-gray-400 hover:text-gray-600" />
                                }
                            </button>
                        </div>

                        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{error}</div>}
                        {success && <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm">{success}</div>}

                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg font-medium text-white transition-all bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Đăng Ký
                        </button>
                    </form>

                    <div className="text-center mt-6 text-gray-600">
                        <p className="mb-2">Đã có tài khoản? <Link to="/login" className="font-medium text-blue-600 hover:text-blue-800">Đăng nhập</Link></p>
                        <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm">Trở về trang chủ</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
