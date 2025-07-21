import React from 'react';
import HeroSlider from './HeroSlider';

const HeroSection = () => {
    const slides = [
        {
            id: 1,
            image: "/images/hero/porsche-911.jpg",
            title: "Auto123",
            subtitle: "Dịch vụ chăm sóc xe hàng đầu",
            description: "Chúng tôi cung cấp dịch vụ chăm sóc xe chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh nghiệm",
            cta: "Đặt lịch ngay",
            ctaLink: "/booking"
        },
        {
            id: 2,
            image: "/images/hero/mercedes-amg.jpg",
            title: "Chăm sóc xe toàn diện",
            subtitle: "Với công nghệ hiện đại nhất",
            description: "Sử dụng sản phẩm và thiết bị chăm sóc xe hàng đầu từ các thương hiệu uy tín",
            cta: "Tìm hiểu thêm",
            ctaLink: "/services"
        },
        {
            id: 3,
            image: "/images/hero/bmw-m4.jpg",
            title: "Phục vụ từ năm 2015",
            subtitle: "Với hơn 10,000 khách hàng hài lòng",
            description: "Chúng tôi tự hào là đơn vị được tin cậy bởi các chủ xe trên toàn quốc",
            cta: "Xem đánh giá",
            ctaLink: "/testimonials"
        }
    ];

    return (
        <div className="w-full">
            <HeroSlider slides={slides} />
        </div>
    );
};

export default HeroSection;
