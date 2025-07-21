import React from 'react';
import BenefitItem from './BenefitItem';

const BenefitsStrip = () => {
    const benefits = [
        {
            id: 1,
            icon: "truck",
            title: "Giao hàng nhanh",
            description: "Miễn phí với đơn hàng trên 500K"
        },
        {
            id: 2,
            icon: "shield-check",
            title: "Chất lượng cao",
            description: "Sản phẩm chính hãng 100%"
        },
        {
            id: 3,
            icon: "currency-dollar",
            title: "Giá cả hợp lý",
            description: "Cam kết giá tốt nhất thị trường"
        },
        {
            id: 4,
            icon: "phone",
            title: "Hỗ trợ 24/7",
            description: "Luôn sẵn sàng hỗ trợ khách hàng"
        }
    ];

    return (
        <section className="py-8 my-8 bg-gray-100 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit) => (
                    <BenefitItem key={benefit.id} benefit={benefit} />
                ))}
            </div>
        </section>
    );
};

export default BenefitsStrip;
