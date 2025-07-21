'use client';

import { motion } from 'framer-motion';
import Header from './components/Header'
import Sparkle from './components/mvpblocks/sparkles-logo'
import Footer from './components/Footer'
import Blogs from './components/Blogs'
import Faq from './components/mvpblocks/faq-3';
// import AboutUs1 from './components/mvpblocks/about-us-1'
// import FeatureSteps from './components/mvpblocks/feature-2'
import Contact from './components/mvpblocks/contact-us-1'
export default function Globe3D() {
  return (
 <div  style={{
  background: 'linear-gradient(135deg, #000000 0%, #0f0511 40%, #0f0511 50%)',
}}>
 <Header/>
    <section
      className="relative w-full overflow-hidden bg-[#0a0508] pt-32 pb-10 font-light text-white antialiased md:pt-20 md:pb-16"



    >
      {/* Background gradients */}
      <div
        className="absolute top-0 right-0 h-3/4 w-3/4"
        style={{
          background:
            'radial-gradient(ellipse at 70% 20%, rgba(155, 135, 245, 0.08) 0%, rgba(75, 0, 130, 0.04) 40%, rgba(0, 0, 0, 0) 70%)',
        }}
      />
      <div
        className="absolute top-0 left-0 h-3/4 w-3/4 -scale-x-100"
        style={{
          background:
            'radial-gradient(ellipse at 70% 20%, rgba(138, 43, 226, 0.06) 0%, rgba(75, 0, 130, 0.03) 40%, rgba(0, 0, 0, 0) 70%)',
        }}
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute h-1 w-1 bg-purple-400/30 rounded-full"
          style={{ top: '20%', left: '10%' }}
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute h-1 w-1 bg-indigo-400/20 rounded-full"
          style={{ top: '60%', left: '80%' }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute h-1 w-1 bg-purple-300/25 rounded-full"
          style={{ top: '80%', left: '30%' }}
          animate={{ opacity: [0.25, 0.7, 0.25], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 pt-12 container mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge with fade-in animation */}
          <motion.span 
            className="mb-6 inline-block rounded-full border border-purple-500/20 bg-black/40 backdrop-blur-sm px-4 py-2 text-xs text-purple-300 shadow-lg shadow-purple-500/10"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            SOFTWARE SOLUTIONS & TRAINING
          </motion.span>

          {/* Main heading with staggered fade-in */}
          <motion.h1 
            className="mx-auto mb-6 max-w-4xl text-4xl font-medium md:text-5xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Empowering Innovation with{' '}
            </motion.span>
            <span className="relative inline-block">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(155, 135, 245, 0.3))'
                }}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              >
                Haxword
              </motion.span>
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 rounded-full"
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
              />
              {/* Glowing effect for underline */}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 rounded-full blur-sm"
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "100%", opacity: 0.8 }}
                transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
              />
            </span>
          </motion.h1>

          {/* Paragraph with fade-in */}
          <motion.p 
            className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
          >
            Haxword is a full-fledged software development agency and training institute,
            delivering high-quality digital solutions while preparing the next generation
            of developers with live projects, mentorship, and placement support.
          </motion.p>

          {/* Buttons with staggered fade-in */}
          <motion.div 
            className="mb-10 flex flex-col items-center justify-center gap-4 sm:mb-0 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
          >
            <motion.button
              className="relative w-full overflow-hidden rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 backdrop-blur-sm px-8 py-4 text-white shadow-2xl shadow-purple-500/20 transition-all duration-300 hover:border-purple-400/50 hover:shadow-purple-400/30 sm:w-auto"
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(155, 135, 245, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Explore Our Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </motion.button>
            <motion.a
              href="#institute"
              className="flex w-full items-center justify-center gap-2 text-gray-400 transition-colors hover:text-gray-200 sm:w-auto group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileHover={{ x: 5 }}
            >
              <span className="relative">
                Learn about our institute
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-purple-400 to-indigo-400"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="m6 9 6 6 6-6"></path>
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Earth Animation and Image Section with fade-in */}
        <motion.div
          className="relative"
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 2.0 }}
        >
          <div className="relative flex h-40 w-full overflow-hidden md:h-64">
            <motion.img
              src="https://blocks.mvp-subha.me/assets/earth.png"
              alt="Earth"
              className="absolute top-0 left-1/2 -z-10 mx-auto -translate-x-1/2 px-4 opacity-40"
              animate={{
                rotate: [-5, 5, -5],
                filter: ['hue-rotate(0deg)', 'hue-rotate(20deg)', 'hue-rotate(0deg)'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                filter: 'brightness(0.6) contrast(1.2) saturate(0.8)',
              }}
            />
          </div>

          <motion.div 
            className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-xl border border-purple-900/30 bg-black/20 p-2 shadow-2xl shadow-purple-900/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.2, ease: 'easeOut' }}
            whileHover={{ 
              scale: 1.02,
              borderColor: "rgba(147, 51, 234, 0.5)",
              boxShadow: "0 0 40px rgba(147, 51, 234, 0.3)"
            }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://blocks.mvp-subha.me/assets/lunexa-db.png"
                alt="Haxword Dashboard"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg opacity-90"
                style={{
                  filter: 'brightness(0.7) contrast(1.1) saturate(0.9)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 rounded-lg" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </div>
          </motion.div>

          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/5 via-violet-600/5 to-indigo-600/5 blur-2xl rounded-full opacity-60" />
        </motion.div>
      </div>
    </section>
    <Sparkle/>
    <Faq/>
    <Blogs/>
    <Contact/>
    <Footer/>
  
 </div>
  );
}