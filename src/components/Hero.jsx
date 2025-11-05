import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative w-full" style={{ backgroundColor: '#F4F5F7' }}>
      <div className="relative h-[78vh] md:h-[86vh] overflow-hidden rounded-b-2xl">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className="absolute inset-0 bg-white/60 pointer-events-none" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
              style={{ color: '#1C1C1C' }}
            >
              Find life-saving blood for your pet within minutes.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-base md:text-lg leading-relaxed"
              style={{ color: '#1C1C1C' }}
            >
              Trusted by vets and pet parents. Fast, professional, and built for emergencies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="#find-blood"
                className="inline-flex items-center justify-center h-11 px-6 rounded-md text-white font-medium shadow-sm transition-transform active:scale-[0.98]"
                style={{ backgroundColor: '#FF7A00' }}
              >
                Find Blood Now
              </a>
              <a
                href="#donor"
                className="inline-flex items-center justify-center h-11 px-6 rounded-md font-medium transition-colors"
                style={{ color: '#004D61', border: '1.5px solid #004D61' }}
              >
                Become a Donor
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
