'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="/agrolink_logo_compressed.png" 
              alt="Agrolink" 
              className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
            />
          </div>
          <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-6">
              <Link href="#hero" className="text-gray-400 hover:text-white transition text-sm">Home</Link>
              <a href="#about" className="text-gray-400 hover:text-white transition text-sm">About</a>
              <a href="#features" className="text-gray-400 hover:text-white transition text-sm">Features</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition text-sm">Contact</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link 
              href="/auth" 
              className="px-3 sm:px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-medium rounded-lg transition"
            >
              Get Started
            </Link>
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
                <span className="text-emerald-400">Modern Africa</span>
              </h1>
              <p className="text-lg sm:text-2xl text-gray-400 mb-8 sm:mb-10 max-w-2xl">
                Connect farmers and buyers seamlessly. Manage listings, track users, 
                and grow your agricultural business with AI-powered insights.
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <a 
                  href="https://wa.me/15551661836" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition text-base sm:text-lg"
                >
                  Launch App
                </a>
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
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-500 text-base ml-2">terminal</span>
                </div>
                <pre className="text-sm sm:text-base font-mono text-gray-300">
                  <span className="text-emerald-400">$</span> curl https://aglk.onrender.com/api/health<br/>
                  <span className="text-gray-500">{"{"}</span><br/>
                  &nbsp;&nbsp;"status": <span className="text-emerald-400">"healthy"</span>,<br/>
                  &nbsp;&nbsp;"uptime": <span className="text-yellow-400">99.9%</span>,<br/>
                  &nbsp;&nbsp;"version": <span className="text-blue-400">"2.0.0"</span><br/>
                  <span className="text-gray-500">{"}"}</span>
                </pre>
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
              Connecting farmers and buyers across Africa through innovative technology
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Empowering African Agriculture</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-6">
                We are a team of 4 full-stack developers dedicated to revolutionizing agricultural trade in Africa. 
                Our platform bridges the gap between farmers and buyers by leveraging WhatsApp and SMS - 
                technologies that are already widely accessible across the continent.
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
                  <p className="text-gray-400 text-xs">Leading agricultural trading platform in Africa</p>
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
                className={`p-4 sm:p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                  hoveredFeature === idx 
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
              <p className="text-gray-400 text-sm">Africa</p>
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

      <section className="pt-24 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">           
                 <img 
                  src="/agrolink_logo_compressed.png" 
                  alt="Agrolink" 
                  className="w-24 sm:w-32 h-24 sm:h-32 object-contain" 
                />
              </div>
              <p className="text-gray-400 max-w-lg text-sm sm:text-base">
                Empowering African agricultural trade through technology. 
                Connecting farmers and buyers for a sustainable future.
              </p>
            </div>
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
          </div>
          <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
            © 2026 AGLK. Built with NestJS & Next.js
          </div>
        </div>
      </section>
    </div>
  );
}