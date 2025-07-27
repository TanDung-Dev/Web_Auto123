import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../views/Home/index";
import Login from "../views/Authorization/login";
import Register from "../views/Authorization/register";
import bgImg from "../assets/images/background.png";


const Layout = () => (
    <>
        <Header />
        <main className="min-h-[70vh] flex flex-col justify-center w-full max-w-full overflow-hidden">
            {/* Ảnh nền phủ kín vùng này */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${bgImg})`, // bgImg là import từ ảnh của bạn
                    filter: "brightness(0.85)",
                }}
            ></div>
            {/* Nội dung nổi lên trên */}
            <div className="relative z-10">
                <Outlet />
            </div>
        </main>
        <Footer />
    </>
);

// Layout không có Header/Footer cho login/register
const AuthLayout = () => (
    <main className="min-h-screen w-full max-w-full">
        <Outlet />
    </main>
);

const RouterUser = () => (
    <Routes>
        {/* Auth routes: không có header/footer */}
        <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>
        {/* Main layout: có header/footer */}
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            {/* Thêm các route khác ở đây */}
            {/* <Route path="/products" element={<ProductListingPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} /> */}

        </Route>
    </Routes>
);

export default RouterUser;