'use client';

import Link from 'next/link';

export default function AboutPage() {
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
          <div className="flex items-center gap-4 sm:gap-8">
            <Link href="/" className="text-gray-400 hover:text-white transition text-sm">Home</Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition text-sm">About</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition text-sm">Contact Us</Link>
            <Link 
              href="/auth" 
              className="px-3 sm:px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-medium rounded-lg transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              About <span className="text-emerald-400">Us</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Connecting farmers and buyers across Africa through innovative technology
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We are a team of 4 full-stack developers dedicated to revolutionizing agricultural trade in Africa. 
              Our platform bridges the gap between farmers and buyers by leveraging the power of WhatsApp and SMS 
              - technologies that are already widely accessible across the continent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                To empower farmers and buyers by providing a seamless, accessible marketplace that works 
                through channels they already use - WhatsApp and SMS.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Become the leading agricultural trading platform in Africa, making farm produce accessible 
                to every buyer and every farmer's produce visible to every buyer.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">What We Do</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Multi-Channel Integration</h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Connect with farmers and buyers via WhatsApp or SMS - same system, unified experience.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Smart Matching</h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    AI-powered system that automatically connects buyers with the right sellers based on location and produce type.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Price Intelligence</h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Market analytics with suggested pricing based on historical data and trends to help farmers get fair deals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-Time Notifications</h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Stay updated with instant notifications on your preferred channel - WhatsApp or SMS.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "WhatsApp + SMS Integration",
                "User Registration",
                "Farmer Listing Produce",
                "Buyer Requesting Produce",
                "Automated Matching System",
                "Price Suggestions",
                "Multi-Channel Notifications",
                "Channel-Based Responses"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}