'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adminCode, setAdminCode] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminCode === 'AGLK2026') {
      setIsAdmin(true);
      localStorage.setItem('aglk_admin', 'true');
    } else {
      alert('Invalid code');
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem('aglk_admin');
    if (stored === 'true') setIsAdmin(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* NAVBAR - increased logo size and font sizes */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/agrolink_logo_v3.svg"
              alt="Agrolink"
              className="object-contain"
              style={{ width: '140px', height: '56px' }}
            />
          </div>
          <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-8">
              <Link href="#hero" className="text-gray-400 hover:text-white transition text-base font-medium">Home</Link>
              <a href="#about" className="text-gray-400 hover:text-white transition text-base font-medium">About</a>
              <a href="#features" className="text-gray-400 hover:text-white transition text-base font-medium">Features</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition text-base font-medium">Contact</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isAdmin ? (
              <Link
                href="/auth"
                className="px-3 sm:px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-medium rounded-lg transition"
              >
                Get Started
              </Link>
            ) : null}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-gray-800 px-4 py-3 space-y-2">
            <Link href="/" className="block text-gray-400 hover:text-white transition text-sm py-2">Home</Link>
            <a href="#about" className="block text-gray-400 hover:text-white transition text-sm py-2">About</a>
            <a href="#features" className="block text-gray-400 hover:text-white transition text-sm py-2">Features</a>
            <a href="#contact" className="block text-gray-400 hover:text-white transition text-sm py-2">Contact</a>
            {isAdmin ? (
              <Link href="/auth" className="block text-emerald-400 hover:text-white transition text-sm py-2">Get Started</Link>
            ) : null}

          </div>
        )}
      </nav>

      <section id="hero" className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6 sm:mb-8">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                Production Ready
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8">
                Agricultural Marketplace for{' '}
                <span className="text-emerald-400">Modern Cameroon</span>
              </h1>
              <p className="text-lg sm:text-2xl text-gray-400 mb-8 sm:mb-10 max-w-2xl">
                Connect farmers and buyers seamlessly. Manage listings, track users,
                and grow your agricultural business with AI-powered insights.
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6">


                <a
                  href="https://docs.google.com/document/d/1KEBYLReFKUvULvB8uEQCu5NyaEgjDMYduOH7zXOJNNw/edit?tab=t.0#heading=h.quv1v01so6ux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-gray-700 hover:border-gray-600 text-gray-300 font-medium rounded-lg transition text-base sm:text-lg"
                >
                  View Documentation
                </a>
              </div>
            </div>
            <div className="relative hidden lg:flex items-center justify-center">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-75"></div>

              {/* Floating badge - top left */}
              <div className="absolute top-6 left-0 z-10 bg-gray-900/90 backdrop-blur border border-gray-700 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-2xl">🌾</span>
                <div>
                  <p className="text-white text-xs font-semibold">Live Listings</p>
                  <p className="text-emerald-400 text-xs">+240 this week</p>
                </div>
              </div>

              {/* Floating badge - bottom right */}
              <div className="absolute bottom-10 right-0 z-10 bg-gray-900/90 backdrop-blur border border-gray-700 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="text-2xl">🤝</span>
                <div>
                  <p className="text-white text-xs font-semibold">Deals Closed</p>
                  <p className="text-emerald-400 text-xs">+89 today</p>
                </div>
              </div>

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-emerald-500/10">
                <img
                  src="/farmer-hero.png"
                  alt="African farmer using Agrolink"
                  className="w-full max-w-md object-cover rounded-3xl"
                />
                {/* Subtle overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950/80 to-transparent rounded-b-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">About <span className="text-emerald-400">Us</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Connecting farmers and buyers across Cameroon through innovative technology
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Empowering Cameroon Agriculture</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-6">
                We are a team of 4 full-stack developers dedicated to revolutionizing agricultural trade in Cameroon.
                Our platform bridges the gap between farmers and buyers by leveraging WhatsApp and SMS -
                technologies that are already widely accessible across the country.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="text-2xl mb-2">🎯</div>
                  <h4 className="font-semibold text-sm mb-1">Our Mission</h4>
                  <p className="text-gray-400 text-xs">Empower farmers and buyers through accessible technology</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="text-2xl mb-2">🚀</div>
                  <h4 className="font-semibold text-sm mb-1">Our Vision</h4>
                  <p className="text-gray-400 text-xs">Leading agricultural trading platform in Cameroon</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-1">WhatsApp</div>
                <div className="text-gray-400 text-xs sm:text-sm">+ SMS Integration</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-1">Smart</div>
                <div className="text-gray-400 text-xs sm:text-sm">AI Matching</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-1">Price</div>
                <div className="text-gray-400 text-xs sm:text-sm">Intelligence</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-1">Real-time</div>
                <div className="text-gray-400 text-xs sm:text-sm">Notifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Platform Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Built with modern technologies to handle the demands of agricultural trading at scale.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: 'User Management',
                description: 'Complete user registration and profile management with role-based access control.',
                icon: '👥',
                color: 'emerald'
              },
              {
                title: 'Listing Management',
                description: 'Create, update, and manage agricultural product listings with real-time status tracking.',
                icon: '📋',
                color: 'blue'
              },
              {
                title: 'Smart Matching',
                description: 'AI-powered matching system that connects buyers with the right sellers automatically.',
                icon: '🔗',
                color: 'purple'
              },
              {
                title: 'Price Intelligence',
                description: 'Market analytics with suggested pricing based on historical data and trends.',
                icon: '💹',
                color: 'yellow'
              },
              {
                title: 'Multi-channel',
                description: 'Support for SMS and WhatsApp integrations for wider reach and accessibility.',
                icon: '📱',
                color: 'pink'
              },
              {
                title: 'Admin Dashboard',
                description: 'Comprehensive dashboard for monitoring, analytics, and platform management.',
                icon: '📊',
                color: 'cyan'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-6 rounded-xl border transition-all duration-300 cursor-pointer ${hoveredFeature === idx
                  ? 'bg-gray-800 border-gray-700 scale-105'
                  : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                  }`}
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Get In <span className="text-emerald-400">Touch</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Have questions about our agricultural marketplace platform? We'd love to hear from you.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-400 text-sm">support@aglk.com</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-gray-400 text-sm">+1 (555) 166-1836</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-gray-400 text-sm">Cameroon</p>
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER - same margins as navbar */}
      <section className="pt-16 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Logo + description row */}
          <div className="mb-10 sm:mb-12">
            <img
              src="/agrolink_logo_v3.svg"
              alt="Agrolink"
              className="object-contain max-w-none mb-4"
              style={{ width: '320px', height: 'auto' }}
            />
            <p className="text-gray-400 max-w-lg text-sm sm:text-base">
              Empowering Cameroon agricultural trade through technology.
              Connecting farmers and buyers for a sustainable future.
            </p>
          </div>

          {/* Links row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Platform</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
                <li><Link href="/dashboard/listings" className="hover:text-white transition">Listings</Link></li>
                <li><Link href="/dashboard/users" className="hover:text-white transition">Users</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@aglk.com
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (555) 166-1836
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                </li>
              </ul>
            </div>
            {!isAdmin ? (
              <div>
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Admin Access</h4>
                <form onSubmit={handleAdminLogin} className="flex gap-2">
                  <input
                    type="password"
                    value={adminCode}
                    onChange={(e) => setAdminCode(e.target.value)}
                    placeholder="Enter code"
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-emerald-500 w-32"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg transition"
                  >
                    Login
                  </button>
                </form>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
            © 2026 AGLK. Built with NestJS & Next.js
          </div>
        </div>
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
          <a
            href="https://wa.me/15551661836"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1ebe5d] shadow-xl rounded-full p-4 animate-shake hover:animate-none hover:scale-110 transition-all duration-300"
            title="Chat on WhatsApp"
          >
            <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-9 h-9" />
          </a>
          <a
            href="https://t.me/Agrolkbot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#29B6F6] hover:bg-[#0288D1] shadow-xl rounded-full p-4 animate-shake hover:animate-none hover:scale-110 transition-all duration-300"
            title="Chat with Agrolkbot on Telegram"
          >
            <img src="/telegram-icon.svg" alt="Telegram" className="w-9 h-9" />
          </a>
        </div>
      </section>
    </div>
  );
}
