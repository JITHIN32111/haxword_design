import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import img from '../assets/Haxord-V7-png-black-v1.png'
// const navItems = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' }, // Software development services
//   { name: 'Faq', href: '/faq' }, // Software development services
//   { name: 'Blog', href: '/blogs' }, // Software development services
//   { name: 'Contact Us', href: '/contact' }, // Software development services


//   // {
//   //   name: 'Solutions',
//   //   href: '/solutions',
//   //   hasDropdown: false,
//   //   dropdownItems: [
//   //     {
//   //       name: 'Web Development',
//   //       href: '/solutions/web-development',
//   //       description: 'Custom web applications tailored to your business',
//   //     },
//   //     {
//   //       name: 'Mobile Apps',
//   //       href: '/solutions/mobile-apps',
//   //       description: 'iOS and Android solutions',
//   //     },
//   //     {
//   //       name: 'UI/UX Design',
//   //       href: '/solutions/ui-ux',
//   //       description: 'Modern interfaces with a user-first approach',
//   //     },
//   //   ],
//   // },
//   // {
//   //   name: 'Institute',
//   //   href: '/institute',
//   //   hasDropdown: false,
//   //   dropdownItems: [
//   //     {
//   //       name: 'Courses',
//   //       href: '/institute/courses',
//   //       description: 'Frontend, Backend, Full-stack, DevOps & more',
//   //     },
//   //     {
//   //       name: 'Mentorship',
//   //       href: '/institute/mentorship',
//   //       description: 'One-on-one guidance from industry experts',
//   //     },
//   //     {
//   //       name: 'Live Projects',
//   //       href: '/institute/live-projects',
//   //       description: 'Real-world experience with company projects',
//   //     },
//   //   ],
//   // },
//   // { name: 'Careers', href: '/careers' },
//   // { name: 'About Us', href: '/about' },
// ];

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Faq', href: '#faq' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact Us', href: '#contact' },
];
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');
    const handleThemeChange = (e) => setTheme(e.matches ? 'dark' : 'light');

    mediaQuery.addEventListener('change', handleThemeChange);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  const getHeaderStyle = () => ({
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 50,
    transition: 'all 0.3s ease-in-out',
    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
    backgroundColor: isScrolled
      ? theme === 'dark'
        ? 'rgba(0, 0, 0, 0.8)'
        : 'rgba(255, 255, 255, 0.8)'
      : 'transparent',
    boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none',
  });

const handleLinkClick = (href) => {
  setIsMobileMenuOpen(false);

  if (href.startsWith('#')) {
    const sectionId = href.replace('#', '');
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } else {
    // For full-page navigation (if needed)
    window.location.href = href;
  }
};


  return (
    <header
      className={`transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
      style={getHeaderStyle()}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="flex h-14 items-center justify-between lg:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer">
            <div
              onClick={() => handleLinkClick('/')}
              className="flex items-center space-x-2"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-rose-700">
               <img src={img} alt="" className='h-8 w-12' />
              </div>
              <span className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-lg font-bold text-transparent">
                HAXORD
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleLinkClick(item.href)}
                  className="flex items-center space-x-1 text-sm font-medium transition-colors duration-200 hover:text-rose-500 cursor-pointer"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  )}
                </button>

                {item.hasDropdown && activeDropdown === item.name && (
               <div
  className={`absolute top-full left-0 mt-2 w-64 overflow-hidden rounded-xl border shadow-xl transition-all duration-200 ${
    theme === 'dark'
      ? 'bg-black border-gray-700'
      : 'bg-white border-gray-200'
  }`}
  style={{ transform: 'translateY(0) scale(1)' }}
>

                    {item.dropdownItems?.map((dropdownItem) => (
                      <button
                        key={dropdownItem.name}
                        onClick={() => handleLinkClick(dropdownItem.href)}
                        className={`block w-full text-left px-4 py-3 text-sm transition-colors duration-200 hover:bg-opacity-50 ${
                          theme === 'dark'
                            ? 'hover:bg-gray-700'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="font-medium">{dropdownItem.name}</div>
                        {dropdownItem.description && (
                          <div
                            className={`text-xs ${
                              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}
                          >
                            {dropdownItem.description}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center space-x-3 lg:flex">
            {/* <button
              onClick={() => handleLinkClick('/login')}
              className="text-sm font-medium transition-colors duration-200 hover:text-rose-500 cursor-pointer"
            >
              Sign In
            </button> */}
            {/* <button
              onClick={() => handleLinkClick('/signup')}
              className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-700 px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`rounded-lg p-2 transition-colors duration-200 lg:hidden active:scale-95 ${
              theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="overflow-hidden lg:hidden transition-all duration-300 ease-in-out"
            style={{ opacity: 1, height: 'auto' }}
          >
            <div
              className={`mt-4 space-y-2 rounded-xl border py-3 shadow-xl backdrop-blur-lg ${
                theme === 'dark'
                  ? 'bg-gray-900/95 border-gray-700'
                  : 'bg-white/95 border-gray-200'
              }`}
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleLinkClick(item.href)}
                  className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="space-y-2 px-4 pt-2">
                <button
                  onClick={() => handleLinkClick('/login')}
                  className={`block w-full rounded-lg py-2 text-sm text-center font-medium transition-colors duration-200 ${
                    theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleLinkClick('/signup')}
                  className="block w-full rounded-lg bg-gradient-to-r from-rose-500 to-rose-700 py-2 text-sm text-center font-medium text-white transition-all duration-200 hover:shadow-lg"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
