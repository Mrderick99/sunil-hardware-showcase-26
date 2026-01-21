import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Quality Products',
      description: 'We source only the best quality hardware from trusted manufacturers.',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Our experienced team helps you find the right products for your needs.',
    },
    {
      icon: Clock,
      title: 'Quick Service',
      description: 'Fast and reliable service to keep your projects on track.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority, always.',
    },
  ];

  return (
    <section id="about" className="py-16 bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h2 className="section-title mb-6">
              About <span className="text-primary">Sunil Hardware</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Sunil Hardware, we've been serving our community with dedication and excellence. Located in Kanji House, we're your trusted local partner for all hardware needs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our commitment to quality products, fair prices, and exceptional customer service has made us a preferred choice for homeowners, contractors, and businesses alike. We believe in building lasting relationships with our customers through trust and reliability.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
