import { Phone } from 'lucide-react';

export default function EmergencyButton() {
  return (
    <a
      href="#contact"
      className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full px-5 h-12 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{ backgroundColor: '#FF7A00', color: '#FFFFFF' }}
      aria-label="Emergency Hotline"
    >
      <span className="inline-flex items-center justify-center bg-white/20 rounded-full h-8 w-8">
        <Phone size={18} />
      </span>
      <span className="font-medium">Emergency</span>
    </a>
  );
}
