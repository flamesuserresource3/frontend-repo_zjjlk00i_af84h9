import { useState } from 'react';
import { PawPrint, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Find Blood', href: '#find-blood' },
  { label: 'Become a Donor', href: '#donor' },
  { label: 'Vet Clinics Nearby', href: '#clinics' },
  { label: 'Resources', href: '#resources' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md" style={{ backgroundColor: '#004D61' }}>
            <PawPrint className="text-white" size={20} />
          </span>
          <span className="font-semibold tracking-tight text-[18px]" style={{ color: '#1C1C1C' }}>PawPlasma</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#1C1C1C]/80 hover:text-[#004D61] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#find-blood"
            className="inline-flex items-center justify-center h-10 px-4 rounded-md text-white font-medium shadow-sm transition-transform active:scale-[0.98]"
            style={{ backgroundColor: '#FF7A00' }}
          >
            Find Blood
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-[#1C1C1C]/80 hover:text-[#004D61]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#find-blood"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center h-10 px-4 rounded-md text-white font-medium w-full"
              style={{ backgroundColor: '#FF7A00' }}
            >
              Find Blood
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
