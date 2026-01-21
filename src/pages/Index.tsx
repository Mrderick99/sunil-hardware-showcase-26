import React, { useState, useMemo } from 'react';
import { products, categories } from '@/data/products';
import { Product } from '@/types/product';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import ProductGrid from '@/components/products/ProductGrid';
import QuickViewModal from '@/components/products/QuickViewModal';
import CartSidebar from '@/components/cart/CartSidebar';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
  };

  const activeFiltersCount = (searchQuery ? 1 : 0) + (selectedCategory ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />

      <main>
        <HeroSection />
        
        <CategoriesSection
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        {/* Products Section */}
        <section id="products" className="py-16">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="section-title">Our Products</h2>
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>

              {/* Active Filters */}
              {activeFiltersCount > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  {searchQuery && (
                    <span className="badge-category flex items-center gap-1">
                      <Search className="w-3 h-3" />
                      "{searchQuery}"
                      <button onClick={() => setSearchQuery('')}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedCategory && (
                    <span className="badge-category flex items-center gap-1">
                      <Filter className="w-3 h-3" />
                      {categories.find(c => c.id === selectedCategory)?.name}
                      <button onClick={() => setSelectedCategory('')}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  <Button variant="ghost" size="sm" onClick={handleClearFilters}>
                    Clear all
                  </Button>
                </div>
              )}
            </div>

            <ProductGrid
              products={filteredProducts}
              onQuickView={setQuickViewProduct}
            />
          </div>
        </section>

        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Modals & Overlays */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
