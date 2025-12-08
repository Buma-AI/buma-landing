'use client';

import { motion } from 'framer-motion';
import { SUBJECTS } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';
import { ContinuousScroll } from '@/components/ui/ContinuousScroll';

function Subjects() {
  return (
    <section className="section-transition white-section-bg py-16 bg-white relative">
      {/* Moderate orange shadow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-primary-500/6 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="grid-pattern" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <div className="inline-block mb-4">
            <span className="bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              Matières
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4 leading-tight">
            6 matières du collège,{' '}
            <span className="text-primary-600">programme officiel</span>
          </h2>
        </motion.div>

        <ContinuousScroll speed={45} className="mb-8 pb-4">
          {SUBJECTS.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="min-w-[200px] sm:min-w-[220px] flex-shrink-0 relative overflow-hidden rounded-2xl cursor-pointer shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 border-4 border-transparent hover:border-white/60"
            >
              <div
                className="h-20 lg:h-24 flex items-center justify-center text-white font-bold text-base lg:text-lg relative group"
                style={{
                  background: `linear-gradient(135deg, ${subject.gradient[0]}, ${subject.gradient[1]})`,
                }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <span className="relative z-10">{subject.name}</span>
              </div>
            </motion.div>
          ))}
        </ContinuousScroll>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full border-2 border-success/20 shadow-md w-full">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span className="font-semibold text-sm text-center">Conforme Programme Éducation Nationale</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full border-2 border-primary-200 shadow-md w-full">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span className="font-semibold text-sm text-center">Préparation Brevet pour les 3ème</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-info/10 text-info px-4 py-2 rounded-full border-2 border-info/20 shadow-md w-full">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span className="font-semibold text-sm text-center">Cycle 3 et 4 (6ème à 3ème)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Subjects;
