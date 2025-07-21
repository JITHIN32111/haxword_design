'use client';

import {
  Code,
  Terminal,
  Paintbrush,
  Rocket,
  Book,
  PlusCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'End-to-End Development',
    desc: 'We offer full-cycle software development: planning, design, development, and support for startups and enterprises.',
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    title: 'Custom ERP Solutions',
    desc: 'Build scalable ERP systems tailored to your business processes, helping you streamline operations and boost productivity.',
  },
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: 'UI/UX Design',
    desc: 'Our design team creates clean, user-centric interfaces that deliver a seamless experience across all devices.',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'eCommerce Platforms',
    desc: 'From marketplaces to custom stores, we develop robust, scalable eCommerce solutions integrated with modern tech stacks.',
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: 'Maintenance & Support',
    desc: 'Post-launch, we ensure your platform is secure, up-to-date, and scalable with ongoing support and improvements.',
  },
  {
    icon: <PlusCircle className="h-6 w-6" />,
    title: 'Consulting & Strategy',
    desc: 'Not sure where to begin? We help you align business goals with the right tech roadmap for your digital product.',
  },
];

export default function Feature1() {
  return (
    <section className="relative py-14">
      
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-geist text-gray-300 mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
                Build with <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-100 via-red-200 to-red-300 font-medium'>Hoxword</span> 
            </h3>
            <p className="font-geist text-gray-300 mt-3">
              We’re a software development company helping businesses innovate
              with scalable, secure, and beautifully built digital solutions.
            </p>    
          </motion.div>
          
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)',
            }}
          ></div>
        </div>


        <motion.div
          className="relative mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <motion.li
                key={idx}
                className="transform-gpu space-y-3 rounded-xl border  border-gray-700 bg-transparent p-4 [box-shadow:0_-20px_80px_-20px_#ff7aa42f_inset]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-red-500 w-fit transform-gpu rounded-full border p-4 [box-shadow:0_-20px_80px_-20px_#ff7aa43f_inset] dark:[box-shadow:0_-20px_80px_-20px_#ff7aa40f_inset]">
                  {item.icon}
                </div>
                <h4 className="font-geist text-lg font-bold text-gray-300 tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-gray-500">{item.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
