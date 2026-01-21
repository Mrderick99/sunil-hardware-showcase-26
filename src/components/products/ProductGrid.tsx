import React from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import { PackageSearch } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onQuickView: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onQuickView }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
          <PackageSearch className="w-10 h-10 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
        <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="animate-fade-up"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <ProductCard product={product} onQuickView={onQuickView} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
