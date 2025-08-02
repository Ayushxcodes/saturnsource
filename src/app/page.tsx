'use client';

import { motion } from 'framer-motion';
import { Sparkles, Hammer, HardDriveDownload } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Page() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="min-h-[90vh] bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Saturn Sourcing Corp.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Your bridge to global sourcing, logistics, and supply chain success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="px-6 py-3 bg-white text-indigo-800 font-semibold rounded-full shadow-md hover:scale-105 transition transform duration-200">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Saturn Sourcing Corp., we act as your extended procurement team — connecting businesses with verified manufacturers and suppliers worldwide. Our focus is on quality, efficiency, and transparency throughout the sourcing lifecycle.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            What We Offer
          </motion.h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Streamlined global sourcing services backed by quality and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Product Sourcing',
              desc: 'We identify, verify, and manage international suppliers tailored to your needs.',
              icon: <Sparkles className="text-indigo-600" size={36} />,
            },
            {
              title: 'Logistics & Delivery',
              desc: 'We handle all shipping, customs, and transportation — so you don’t have to.',
              icon: <HardDriveDownload className="text-indigo-600" size={36} />,
            },
            {
              title: 'Quality Control',
              desc: 'Inspections, audits, and compliance to ensure goods meet your exact standards.',
              icon: <Hammer className="text-indigo-600" size={36} />,
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work In Progress Section */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <motion.div
          className="inline-block p-8 bg-yellow-50 rounded-2xl border-2 border-yellow-400 shadow-md max-w-lg mx-auto"
          animate={{ rotate: [0, 2, -2, 2, -2, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Hammer size={64} className="mx-auto text-yellow-600 mb-4" />
          <h3 className="text-2xl font-bold text-yellow-800">Work In Progress</h3>
          <p className="text-yellow-700 mt-2">
            We’re currently adding new features. Stay tuned for what’s next!
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Saturn Sourcing Corp. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
