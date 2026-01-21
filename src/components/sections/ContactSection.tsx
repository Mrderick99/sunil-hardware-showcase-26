import React from 'react';
import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '9822222679',
      link: 'tel:9822222679',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kanji House',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Sat: 9AM - 8PM',
      link: '#',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@sunilhardware.com',
      link: 'mailto:info@sunilhardware.com',
    },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/919822222679?text=Hello%20Sunil%20Hardware!%20I%20would%20like%20to%20inquire%20about%20your%20products.', '_blank');
  };

  return (
    <section id="contact" className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="bg-card p-5 rounded-xl border border-border hover:border-primary transition-all duration-300 flex items-start gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-[#25D366]/10 p-6 rounded-xl border border-[#25D366]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Chat on WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">Quick responses guaranteed!</p>
                </div>
              </div>
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white h-12"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start WhatsApp Chat
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-card rounded-xl overflow-hidden border border-border animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-[4/3] bg-secondary/50 flex items-center justify-center relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.8!3d19.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sunil Hardware Location"
                className="grayscale opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Kanji House</p>
                  <p className="text-sm text-muted-foreground">Visit us for the best deals!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
