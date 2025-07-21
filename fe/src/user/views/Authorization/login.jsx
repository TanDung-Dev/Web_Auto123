import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser, googleLogin } from "../../../api/User.api.js";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { FaUserAlt, FaLock, FaGoogle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import banner from "../../assets/banner.jpg"; // Import banner image

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID; // Client ID for Google OAuth

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        setError("");
        try {
            const result = await loginUser(form);
            // Lưu token và thông tin user vào localStorage
            localStorage.setItem("token", result.data[0].token);
            localStorage.setItem("role", result.data[0].role);
            localStorage.setItem("user_id", result.data[0]._id);
            localStorage.setItem("fullname", result.data[0].name);
            localStorage.setItem("phone", result.data[0].phone || ""); // thêm dòng này
            localStorage.setItem("verified", result.data[0].verified); // <-- thêm dòng này
            localStorage.setItem("token", result.data[0].token);
            if (result.data[0].role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/");
            }
        } catch {
            setError("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
        }
    };

    // Xử lý đăng nhập Google thành công
    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            const result = await googleLogin(credentialResponse.credential); // Gửi id_token lên backend
            localStorage.setItem("token", result.data[0].token);
            localStorage.setItem("fullname", result.data[0].name || "");
            localStorage.setItem("phone", result.data[0].phone || ""); // thêm dòng này
            localStorage.setItem("role", "user");

            navigate("/");
        } catch (err) {
            setError("Đăng nhập Google thất bại.");
        }
    };

    const handleGoogleError = () => {
        setError("Đăng nhập Google thất bại.");
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
            {/* Right: Login Form */}
            <div className="flex flex-1 items-center justify-center px-4 py-12">
                <div className="w-full max-w-[420px] bg-white rounded-xl shadow-lg p-8">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-blue-800">AUTO123</h1>
                        <p className="text-gray-600 mt-2">Đăng nhập để tiếp tục</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaUserAlt className="text-gray-400" />
                            </div>
                            <input
                                name="email"
                                type="text"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                placeholder="Email hoặc tên đăng nhập"
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

                        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{error}</div>}

                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg font-medium text-white transition-all bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Đăng Nhập
                        </button>
                    </form>

                    <div className="relative flex items-center justify-center my-6">
                        <div className="border-t border-gray-300 absolute w-full"></div>
                        <div className="bg-white px-4 relative text-sm text-gray-500">hoặc</div>
                    </div>

                    <div className="mb-6">
                        <GoogleLogin
                            clientId={CLIENT_ID}
                            onSuccess={handleGoogleSuccess}
                            onError={handleGoogleError}
                            width="100%"
                            locale="vi"
                        />
                    </div>

                    <div className="text-center text-gray-600">
                        <p className="mb-2">Chưa có tài khoản? <Link to="/register" className="font-medium text-blue-600 hover:text-blue-800">Đăng ký ngay</Link></p>
                        <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm">Trở về trang chủ</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;