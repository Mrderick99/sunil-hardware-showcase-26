import React from 'react';
import { Zap, Droplets, Hammer, Paintbrush, Wrench, ShieldCheck } from 'lucide-react';
import { categories } from '@/data/products';

interface CategoriesSectionProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

const iconMap: { [key: string]: React.ElementType } = {
  Zap,
  Droplets,
  Hammer,
  Paintbrush,
  Wrench,
  ShieldCheck,
};

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onCategorySelect, selectedCategory }) => {
  return (
    <section id="categories" className="py-16 bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Browse our wide range of hardware products organized by category
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon];
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(isSelected ? '' : category.id)}
                className={`category-card group ${isSelected ? 'border-primary bg-primary/5' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 mx-auto rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-foreground text-sm md:text-base">
                  {category.name}
                </h3>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
