'use client';

import { motion } from 'framer-motion';
import Header from './components/Header'
import Sparkle from './components/mvpblocks/sparkles-logo'
import Footer from './components/Footer'
import Blogs from './components/Blogs'
import Faq from './components/mvpblocks/faq-3';
import Feature1 from './components/Services'
import BentoGrid1 from './components/Features'
import About from './components/mvpblocks/about-us-1'
import Hero from './components/Hero';
import Highlight from './components/mvpblocks/testimonials-marquee'
// import AboutUs1 from './components/mvpblocks/about-us-1'
// import FeatureSteps from './components/mvpblocks/feature-2'
import Contact from './components/mvpblocks/contact-us-1'
export default function Globe3D() {
  return (
    <div className='bg-black'>
      <Header />
      <Hero />

      <div id="about">
        <About />
        <Sparkle />
      </div>

      <div id="services">
        <Feature1 />
      </div>

      <div id="faq">
        <Faq />
      </div>

      <div id="blog">
        <Blogs />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
