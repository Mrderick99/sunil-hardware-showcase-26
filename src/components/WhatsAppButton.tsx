import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919822222679?text=Hello%20Sunil%20Hardware!%20I%20would%20like%20to%20inquire%20about%20your%20products.',
      '_blank'
    );
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;
