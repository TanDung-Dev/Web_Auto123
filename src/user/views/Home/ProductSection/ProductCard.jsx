import React from 'react';
import ProductRating from './ProductRating';

const ProductCard = ({ product }) => {
    // Format price with Vietnamese currency
    const formattedPrice = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(product.price);

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
            <div className="relative h-56 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.category}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>

                <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-red-600">{formattedPrice}</span>
                    <ProductRating rating={product.rating} reviews={product.reviews} />
                </div>

                <div className="flex space-x-2">
                    <button className="flex-1 bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 transition-colors">
                        Mua ngay
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
