import React from 'react';
import ProcessTitle from './ProcessTitle';
import ProcessDescription from './ProcessDescription';
import ProcessSteps from './ProcessSteps';

const ProcessSection = () => {
    const steps = [
        {
            id: 1,
            title: "Đặt lịch",
            description: "Khách hàng đặt lịch trực tuyến hoặc qua điện thoại"
        },
        {
            id: 2,
            title: "Tiếp nhận",
            description: "Xe được tiếp nhận và kiểm tra tình trạng ban đầu"
        },
        {
            id: 3,
            title: "Thực hiện",
            description: "Kỹ thuật viên thực hiện dịch vụ theo yêu cầu"
        },
        {
            id: 4,
            title: "Kiểm tra",
            description: "Kiểm tra chất lượng công việc đã hoàn thành"
        },
        {
            id: 5,
            title: "Bàn giao",
            description: "Bàn giao xe và hướng dẫn bảo quản cho khách hàng"
        }
    ];

    return (
        <section className="py-16 bg-gray-50 rounded-lg">
            <ProcessTitle title="Quy trình thực hiện" />
            <ProcessDescription
                text="Chúng tôi tuân thủ quy trình chuyên nghiệp để đảm bảo chất lượng dịch vụ tốt nhất cho khách hàng"
            />
            <ProcessSteps steps={steps} />
        </section>
    );
};

export default ProcessSection;
