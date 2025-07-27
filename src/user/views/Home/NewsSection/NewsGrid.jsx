import React from 'react';
import NewsCard from './NewsCard';

const NewsGrid = ({ news }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item) => (
                <NewsCard key={item.id} news={item} />
            ))}
        </div>
    );
};

export default NewsGrid;
