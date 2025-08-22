import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../views/Home/index";
import Login from "../views/Authorization/login";
import Register from "../views/Authorization/register";
import Contact from "../views/Contact/contact";


const Layout = () => (
    <>
        <Header />
        <main className="min-h-[70vh] flex flex-col justify-center w-full max-w-full px-2 sm:px-4">
            <Outlet />
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

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('Routing error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

const RouterUser = () => {
    return (
        <ErrorBoundary>
            <Routes>
                {/* Auth routes: không có header/footer */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                {/* Main layout: có header/footer */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </ErrorBoundary>
    );
};

export default RouterUser;