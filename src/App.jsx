import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, PawPrint, HeartPulse, Upload, Hospital, Award } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueCards from './components/ValueCards';
import EmergencyButton from './components/EmergencyButton';

export default function App() {
  // Simple local state to demo loading animation for search
  const [searching, setSearching] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ValueCards />

        {/* Find Blood */}
        <section id="find-blood" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: '#1C1C1C' }}>Find Blood</h2>
              <span className="text-sm" style={{ color: '#1C1C1C' }}>Map + Results</span>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              {/* Search Bar */}
              <div className="grid sm:grid-cols-4 gap-3">
                <div className="col-span-2 flex items-center gap-2 border border-gray-200 rounded-lg px-3 h-11">
                  <MapPin size={18} className="text-[#004D61]" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full outline-none placeholder:text-gray-400 text-sm"
                  />
                </div>
                <select className="border border-gray-200 rounded-lg px-3 h-11 text-sm text-[#1C1C1C]">
                  <option>Species</option>
                  <option>Dog</option>
                  <option>Cat</option>
                </select>
                <select className="border border-gray-200 rounded-lg px-3 h-11 text-sm text-[#1C1C1C]">
                  <option>Blood Type</option>
                  <option>A</option>
                  <option>B</option>
                  <option>AB</option>
                  <option>O</option>
                </select>
              </div>

              <div className="flex justify-end mt-3">
                <button
                  onClick={() => {
                    setSearching(true);
                    setTimeout(() => setSearching(false), 1300);
                  }}
                  className="inline-flex items-center justify-center h-10 px-4 rounded-md text-white font-medium shadow-sm disabled:opacity-60"
                  style={{ backgroundColor: '#FF7A00' }}
                >
                  Search
                </button>
              </div>

              {/* Two-column layout: map + results */}
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-200 h-72 md:h-96 flex items-center justify-center bg-[#F4F5F7]">
                  <div className="text-center px-6">
                    <MapPin className="mx-auto mb-2 text-[#004D61]" />
                    <p className="text-sm text-[#1C1C1C]/80">Map placeholder (Google Maps / OpenStreetMap)</p>
                  </div>
                </div>
                <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                  {searching ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="h-10 w-10 rounded-full border-2 border-[#004D61] border-t-transparent animate-spin" />
                      <p className="text-sm text-[#1C1C1C]/80">Searching nearby donors…</p>
                    </motion.div>
                  ) : (
                    [
                      { name: 'Buddy', species: 'Dog', group: 'A', distance: '2.1 km' },
                      { name: 'Milo', species: 'Cat', group: 'B', distance: '3.7 km' },
                      { name: 'Luna', species: 'Dog', group: 'O', distance: '5.0 km' },
                    ].map((d) => (
                      <div key={d.name} className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
                        <div>
                          <p className="font-medium" style={{ color: '#1C1C1C' }}>{d.name} • {d.species}</p>
                          <p className="text-sm text-[#1C1C1C]/70">Blood Group: {d.group} • {d.distance} away</p>
                        </div>
                        <button className="h-9 px-3 rounded-md text-white text-sm font-medium" style={{ backgroundColor: '#004D61' }}>
                          Request Blood
                        </button>
                      </div>
                    ))
                  )}

                  {/* Current Database Panel */}
                  <div className="mt-4 p-4 rounded-lg border border-gray-200">
                    <p className="font-medium mb-2" style={{ color: '#1C1C1C' }}>Available Donors</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {['A', 'B', 'AB', 'O'].map((g) => (
                        <div key={g} className="flex items-center justify-between bg-[#F4F5F7] rounded-md px-3 py-2">
                          <span className="font-medium" style={{ color: '#1C1C1C' }}>Group {g}</span>
                          <span className="text-[#1C1C1C]/70">{Math.floor(Math.random()*5)+3} donors</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Donor */}
        <section id="donor" className="py-16" style={{ backgroundColor: '#F4F5F7' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#1C1C1C' }}>Become a Donor</h2>
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <form className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1C1C1C' }}>Pet Picture</label>
                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center gap-2 h-11 px-4 rounded-md cursor-pointer border border-gray-200 text-sm" style={{ color: '#004D61' }}>
                      <Upload size={16} /> Upload image
                      <input type="file" accept="image/*" className="hidden" />
                    </label>
                    <span className="text-xs text-[#1C1C1C]/60">JPG or PNG up to 2MB</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1C1C1C' }}>Species</label>
                  <select className="w-full h-11 border border-gray-200 rounded-md px-3 text-sm">
                    <option>Dog</option>
                    <option>Cat</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1C1C1C' }}>Breed</label>
                  <input className="w-full h-11 border border-gray-200 rounded-md px-3 text-sm" placeholder="e.g., Labrador" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1C1C1C' }}>Age</label>
                  <input type="number" className="w-full h-11 border border-gray-200 rounded-md px-3 text-sm" placeholder="in years" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1C1C1C' }}>Weight</label>
                  <input type="number" className="w-full h-11 border border-gray-200 rounded-md px-3 text-sm" placeholder="in kg" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1C1C1C' }}>Health Notes</label>
                  <textarea className="w-full min-h-[88px] border border-gray-200 rounded-md px-3 py-2 text-sm" placeholder="Relevant medical info" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1C1C1C' }}>Blood Group</label>
                  <select className="w-full h-11 border border-gray-200 rounded-md px-3 text-sm">
                    <option>A</option>
                    <option>B</option>
                    <option>AB</option>
                    <option>O</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <input id="verified" type="checkbox" className="h-4 w-4" />
                  <label htmlFor="verified" className="text-sm" style={{ color: '#1C1C1C' }}>Verified by a vet</label>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button type="button" className="inline-flex items-center gap-2 h-11 px-6 rounded-md text-white font-medium shadow-sm" style={{ backgroundColor: '#004D61' }}>
                    <PawPrint size={16} /> Submit Donor
                  </button>
                </div>
              </form>

              {/* Success micro-animation placeholder */}
              <div className="mt-4 flex items-center gap-3 text-sm" style={{ color: '#1C1C1C' }}>
                <span className="inline-flex h-5 w-5 bg-[#004D61] rounded-full animate-ping" />
                <span>Submitting triggers a subtle paw pop animation.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Vet Clinics Nearby */}
        <section id="clinics" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#1C1C1C' }}>Vet Clinics Nearby</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-200 h-72 bg-[#F4F5F7] flex items-center justify-center">
                <div className="text-center px-6">
                  <Hospital className="mx-auto mb-2 text-[#004D61]" />
                  <p className="text-sm text-[#1C1C1C]/80">Map placeholder for clinics</p>
                </div>
              </div>
              <div className="space-y-3">
                {[1,2,3].map((i) => (
                  <div key={i} className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
                    <div>
                      <p className="font-medium" style={{ color: '#1C1C1C' }}>Healthy Paws Clinic #{i}</p>
                      <p className="text-sm text-[#1C1C1C]/70">Vaccinations • Surgery • Emergency</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="h-9 px-3 rounded-md text-white text-sm font-medium" style={{ backgroundColor: '#004D61' }}>Call</button>
                      <button className="h-9 px-3 rounded-md text-sm font-medium border" style={{ color: '#004D61', borderColor: '#004D61' }}>Book</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="py-16" style={{ backgroundColor: '#F4F5F7' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#1C1C1C' }}>Resources</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Emergency Tips', desc: 'Quick steps when minutes matter.' },
                { title: 'Blood Types 101', desc: 'Know compatibility for dogs & cats.' },
                { title: 'Vaccination Guide', desc: 'Stay on schedule with your vet.' },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-md mb-3" style={{ backgroundColor: '#004D61' }}>
                    <HeartPulse className="text-white" size={20} />
                  </div>
                  <p className="font-medium" style={{ color: '#1C1C1C' }}>{card.title}</p>
                  <p className="text-sm text-[#1C1C1C]/80 mt-1">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rewards & Benefits */}
        <section id="rewards" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#1C1C1C' }}>Rewards & Benefits</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Lifesaver', pts: 200 },
                { title: 'Super Donor', pts: 500 },
                { title: 'Community Hero', pts: 1000 },
              ].map((b) => (
                <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-md mb-3" style={{ backgroundColor: '#004D61' }}>
                    <Award className="text-white" size={20} />
                  </div>
                  <p className="font-medium" style={{ color: '#1C1C1C' }}>{b.title}</p>
                  <p className="text-sm text-[#1C1C1C]/80 mt-1">Redeem points at partner clinics • {b.pts} pts</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16" style={{ backgroundColor: '#F4F5F7' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: '#1C1C1C' }}>About Us</h2>
            <p className="max-w-3xl text-[#1C1C1C]/80">Our mission is to make pet blood donation fast, safe, and accessible. We partner with certified veterinarians and clinics to keep pets healthy and communities empowered.</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1,2,3].map((i) => (
                <div key={i} className="p-4 bg-white border border-gray-100 rounded-xl">
                  <p className="font-medium" style={{ color: '#1C1C1C' }}>Team Member #{i}</p>
                  <p className="text-sm text-[#1C1C1C]/70">Operations • Partnerships</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#1C1C1C' }}>Contact</h2>
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm max-w-3xl">
              <form className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1C1C1C' }}>Name</label>
                  <input className="w-full h-11 border border-gray-200 rounded-md px-3 text-sm" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1C1C1C' }}>Email</label>
                  <input type="email" className="w-full h-11 border border-gray-200 rounded-md px-3 text-sm" placeholder="you@example.com" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1C1C1C' }}>Message</label>
                  <textarea className="w-full min-h-[100px] border border-gray-200 rounded-md px-3 py-2 text-sm" placeholder="How can we help?" />
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button type="button" className="inline-flex items-center gap-2 h-11 px-6 rounded-md text-white font-medium shadow-sm" style={{ backgroundColor: '#004D61' }}>
                    <HeartPulse size={16} /> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md" style={{ backgroundColor: '#004D61' }}>
              <PawPrint className="text-white" size={18} />
            </span>
            <span className="text-sm text-[#1C1C1C]/70">© {new Date().getFullYear()} PawPlasma. All rights reserved.</span>
          </div>
          <a href="#home" className="text-sm font-medium" style={{ color: '#004D61' }}>Back to top</a>
        </div>
      </footer>

      <EmergencyButton />
    </div>
  );
}
