import React from 'react';
import TeamImage from './TeamImage';
import TeamInfo from './TeamInfo';

const TeamSection = () => {
    return (
        <section className="py-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <TeamImage imageSrc="/images/team/technicians.jpg" />
                <TeamInfo
                    title="Tiếp nhận xe và kiểm tra sẵn sàng"
                    subtitle="Đội ngũ kỹ thuật viên chuyên nghiệp"
                    description="Đội ngũ kỹ thuật viên của Auto123 được đào tạo chuyên sâu và có nhiều năm kinh nghiệm trong ngành chăm sóc xe. Chúng tôi sử dụng quy trình tiếp nhận và kiểm tra xe chuyên nghiệp để đảm bảo mọi chi tiết đều được chú ý và xử lý đúng cách."
                    features={[
                        "Kiểm tra toàn diện tình trạng xe",
                        "Tư vấn dịch vụ phù hợp với nhu cầu",
                        "Báo giá minh bạch trước khi thực hiện",
                        "Cam kết thời gian hoàn thành đúng hẹn"
                    ]}
                    ctaText="Đặt lịch hẹn"
                    ctaLink="/booking"
                />
            </div>
        </section>
    );
};

export default TeamSection;
