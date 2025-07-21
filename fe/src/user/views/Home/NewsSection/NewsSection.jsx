import React from 'react';
import NewsHeader from './NewsHeader';
import NewsGrid from './NewsGrid';
import { news } from '../data/news';

const NewsSection = () => {
    return (
        <section className="py-16">
            <NewsHeader
                title="Tin tức mới nhất"
                subtitle="Cập nhật thông tin mới nhất về Auto123 và ngành công nghiệp ô tô"
            />
            <NewsGrid news={news} />
        </section>
    );
};

export default NewsSection;
