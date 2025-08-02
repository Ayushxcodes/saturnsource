'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Hammer,
  HardDriveDownload,
  Mail,
  UserCircle,
  ShieldCheck
} from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white p-12 text-center shadow-lg">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Saturn Sourcing Corp.
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Global sourcing made simple, efficient, and transparent.
        </motion.p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold mb-6 text-orange-500"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Who We Are
          </motion.h2>
          <p className="text-gray-300 text-lg">
            Saturn Sourcing Corp. connects businesses with top-tier global manufacturers and suppliers.
            We specialize in reliable sourcing, logistics, and quality control to bring your products to life.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#111] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <Sparkles className="mx-auto mb-4 text-orange-400" size={40} />,
              title: 'Product Sourcing',
              desc: 'We locate the best global suppliers tailored to your needs.',
            },
            {
              icon: <HardDriveDownload className="mx-auto mb-4 text-orange-400" size={40} />,
              title: 'Logistics Management',
              desc: 'From factory to final destination — we handle everything.',
            },
            {
              icon: <Hammer className="mx-auto mb-4 text-orange-400" size={40} />,
              title: 'Quality Assurance',
              desc: 'Rigorous inspections ensure your products meet expectations.',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-orange-500/20 border border-orange-800"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-400 mt-2">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 bg-[#0d0d0d] text-center">
        <motion.h2
          className="text-3xl font-semibold mb-10 text-orange-500"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: 'Ayush Pandey',
              role: 'Founder & CEO',
              icon: <UserCircle size={50} className="mx-auto text-orange-400" />,
            },
            {
              name: 'Anjali Mehra',
              role: 'Operations Lead',
              icon: <UserCircle size={50} className="mx-auto text-orange-400" />,
            },
            {
              name: 'Ravi Kumar',
              role: 'Logistics Head',
              icon: <UserCircle size={50} className="mx-auto text-orange-400" />,
            },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-orange-700 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              {member.icon}
              <h3 className="text-lg font-bold mt-4 text-white">{member.name}</h3>
              <p className="text-orange-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-20 bg-[#111] text-center">
        <motion.h2
          className="text-3xl font-semibold mb-6 text-orange-500"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        <Mail size={48} className="mx-auto text-orange-400 mb-4" />
        <p className="text-lg text-gray-300">📧 Email: <span className="text-orange-300">info@saturnsourcing.com</span></p>
      </section>

      {/* Work In Progress Section */}
      <section className="p-16 bg-black text-center">
        <motion.div
          className="inline-block p-8 bg-[#1a1a1a] rounded-2xl border-2 border-orange-600 shadow-xl"
          animate={{ rotate: [0, 2, -2, 2, -2, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Hammer size={64} className="mx-auto text-orange-500" />
          <h3 className="text-2xl font-bold mt-4 text-orange-300">Work In Progress</h3>
          <p className="text-orange-400 mt-2">We’re building more amazing features. Stay tuned!</p>
        </motion.div>
      </section>

      {/* Signature Section */}
      <section className="bg-[#0a0a0a] py-6 text-center text-sm text-gray-400 border-t border-gray-800">
        <p>Made by <span className="text-orange-400">Saturn Sourcing Corp.</span></p>
        <ShieldCheck size={20} className="inline ml-2 text-orange-400" />
      </section>

    </main>
  );
}
