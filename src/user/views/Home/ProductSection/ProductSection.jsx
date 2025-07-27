import React from 'react';
import ProductHeader from './ProductHeader';
import ProductGrid from './ProductGrid';
import { products } from '../data/products';

const ProductSection = () => {
    return (
        <section className="py-16">
            <ProductHeader
                title="Sản phẩm phổ biến nhất"
                subtitle="Chúng tôi cung cấp các sản phẩm chăm sóc xe chất lượng cao"
            />
            <ProductGrid products={products} />
        </section>
    );
};

export default ProductSection;
