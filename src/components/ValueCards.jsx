import { motion } from 'framer-motion';
import { Search, ShieldCheck, Users } from 'lucide-react';

const items = [
  {
    icon: Search,
    title: 'Quick, precise search',
    desc: 'Filter by location, species, and blood type to find the closest match.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified vets & donors',
    desc: 'Profiles reviewed and vetted for safety and reliability.',
  },
  {
    icon: Users,
    title: 'A real pet community',
    desc: 'Donors and clinics helping each other—because every second matters.',
  },
];

export default function ValueCards() {
  return (
    <section className="py-14" style={{ backgroundColor: '#F4F5F7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md mb-3" style={{ backgroundColor: '#004D61' }}>
                <item.icon className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#1C1C1C' }}>{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#1C1C1C]/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
