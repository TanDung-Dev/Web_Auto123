import React from 'react';

const NewsCard = ({ news }) => {
    // Format date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('vi-VN', options);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
                <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
            </div>
            <div className="p-5">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <span>{formatDate(news.date)}</span>
                    <span>By {news.author}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{news.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{news.excerpt}</p>
                <a
                    href={`/news/${news.id}`}
                    className="inline-block text-red-600 font-semibold hover:text-red-700"
                >
                    Đọc tiếp &rarr;
                </a>
            </div>
        </div>
    );
};

export default NewsCard;
