

import React, { useContext, useEffect } from 'react';
import { ArrowRight, CheckCircle, MapPin, MessageSquare, Smartphone, Star, Heart, Calendar, QrCode, Users, Store, Music, ChefHat, ShoppingBasket, Network, Zap, TrendingUp, Globe, Building2, Coffee, Camera, Palette } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import NetworkVisualization from './Node';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    navigate('/onboarding');
  };

  const handleTakeTour = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const { loggedUser, setLoggedUser } = React.useContext(AppContext);

  interface UserType {
    username: string;
    email: string;
  }

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem("token")
    setIsLoggedIn(false);
    setLoggedUser(null);
    navigate('/onboarding/login');
  }

  useEffect(() => {
    if (loggedUser) {
      setIsLoggedIn(true);
    }
  }, [loggedUser]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-2 rounded-xl shadow-lg">
                <Network className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  One4All
                </h1>
                <p className="text-xs text-gray-500 hidden md:flex">Business Growth Platform</p>
              </div>
            </Link>

            <div className={`flex items-center space-x-4 mx-2 ${isLoggedIn ? '' : 'hidden'}`}>
              <Link to="/dashboard" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg text-sm font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-md">
                Dashboard
              </Link>
              <button onClick={logout} className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-md">
                Logout
              </button>
            </div>

            <div className={`flex items-center space-x-4 ${isLoggedIn ? 'hidden' : ''}`}>
              <Link to="/onboarding" className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Sign Up
              </Link>
              <Link to="/onboarding/login" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md">
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-indigo-600/10 to-pink-600/10"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a855f7' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  <span>All-in-One Growth Platform</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Connect.
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                    Grow.
                  </span>
                  <br />
                  <span className="text-gray-900">
                    Succeed.
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  One platform that connects your business to social media management, customer targeting,
                  experience packages, and automated messaging. Everything you need to grow, delivered to your doorstep.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleGetStarted}
                  className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Growing Today
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleTakeTour}
                  className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
                >
                  Take the Tour
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            <NetworkVisualization />
          </div>

        </div>
      </div>


      {/* Business Types Section */}
      <div className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From restaurants to retail, services to experiences - One4All adapts to your industry and scales with your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Food & Dining */}
            <div className="group p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Food & Dining</h3>
              <p className="text-gray-600 mb-4">Restaurants, cafes, food trucks, catering, and culinary experiences.</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Menu promotions</li>
                <li>• Event hosting</li>
                <li>• Customer loyalty</li>
                <li>• Delivery integration</li>
              </ul>
            </div>

            {/* Retail & Shopping */}
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Store className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retail & Shopping</h3>
              <p className="text-gray-600 mb-4">Boutiques, galleries, bookstores, and specialty retailers.</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Product showcases</li>
                <li>• Sale campaigns</li>
                <li>• Customer discovery</li>
                <li>• Inventory alerts</li>
              </ul>
            </div>

            {/* Services & Professional */}
            <div className="group p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Services & Professional</h3>
              <p className="text-gray-600 mb-4">Salons, fitness, consulting, and professional services.</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Appointment booking</li>
                <li>• Service packages</li>
                <li>• Client testimonials</li>
                <li>• Follow-up campaigns</li>
              </ul>
            </div>

            {/* Entertainment & Experiences */}
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entertainment & Experiences</h3>
              <p className="text-gray-600 mb-4">Tours, events, studios, and unique experiences.</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Event promotion</li>
                <li>• Booking management</li>
                <li>• Guest experiences</li>
                <li>• Package deals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Four Powerful Services, One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect to the growth services your business needs. Each service works independently
              or together for maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Social Media Management */}
            <div className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media Hub</h3>
              <p className="text-gray-600 mb-4">Automated posting, content calendar, and multi-platform management.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Scheduled content</li>
                <li>• Visual branding</li>
                <li>• Platform optimization</li>
                <li>• Performance insights</li>
              </ul>
            </div>

            {/* Customer Targeting */}
            <div className="group bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Targeting</h3>
              <p className="text-gray-600 mb-4">Reach your ideal customers with precision targeting and QR campaigns.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Audience segmentation</li>
                <li>• Location targeting</li>
                <li>• QR code campaigns</li>
                <li>• Conversion tracking</li>
              </ul>
            </div>

            {/* Experience Packages */}
            <div className="group bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 border border-amber-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Experience Marketplace</h3>
              <p className="text-gray-600 mb-4">Connect with customers through curated experiences and partnerships.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Package creation</li>
                <li>• Partner networks</li>
                <li>• Booking integration</li>
                <li>• Revenue optimization</li>
              </ul>
            </div>

            {/* Messaging Platform */}
            <div className="group bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 border border-pink-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Messaging Platform</h3>
              <p className="text-gray-600 mb-4">SMS, email campaigns, and automated customer communications.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Multi-channel messaging</li>
                <li>• Automation workflows</li>
                <li>• Contact management</li>
                <li>• Campaign analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What One4All Does Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Features */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                One Platform, Endless Possibilities
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Unified Growth Dashboard</h3>
                    <p className="text-gray-600">Manage all your marketing channels, campaigns, and customer interactions from one beautiful interface.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Growth Insights</h3>
                    <p className="text-gray-600">Get actionable recommendations and insights that help you make smarter business decisions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Connected Ecosystem</h3>
                    <p className="text-gray-600">All services work together seamlessly - your social media connects to messaging, targeting amplifies experiences.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile-First Experience</h3>
                    <p className="text-gray-600">Run your entire marketing operation from your phone - update content, send campaigns, track performance anywhere.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced phone mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-slate-900 rounded-3xl p-4 shadow-2xl max-w-sm mx-auto">
                <div className="bg-white rounded-2xl p-6 space-y-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Network className="w-5 h-5 text-purple-600" />
                      <h4 className="font-bold text-gray-900">One4All Dashboard</h4>
                    </div>
                    <p className="text-xs text-gray-500">Real-time business insights</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="text-lg font-bold text-blue-700">24</span>
                      </div>
                      <p className="text-xs text-blue-700">Posts Scheduled</p>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <Users className="w-4 h-4 text-emerald-600" />
                        <span className="text-lg font-bold text-emerald-700">152</span>
                      </div>
                      <p className="text-xs text-emerald-700">New Customers</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Growth Score</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">87%</span>
                    </div>
                    <div className="w-full bg-gradient-to-r from-purple-200 to-pink-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold text-sm shadow-lg">
                    Launch Campaign
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why One4All Needs This Section */}
      <div className="py-20 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <blockquote className="text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8 italic">
              "We built this because One4All deserves tools made for us, not imported from somewhere else.
              We keep it simple, we keep it local, and we keep your business in your own hands."
            </blockquote>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center space-x-1 mb-3 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-3">"I signed up in 10 minutes and got my first campaign out that same day."</p>
                <p className="text-blue-200 text-sm">- Sarah, Midtown Boutique</p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center space-x-1 mb-3 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-3">"Finally, marketing tools that actually work for local businesses like mine."</p>
                <p className="text-blue-200 text-sm">- Marcus, Soul Food Kitchen</p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center space-x-1 mb-3 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-3">"Our ghost tours are booked solid thanks to the tourist targeting feature."</p>
                <p className="text-blue-200 text-sm">- Jennifer, One4All Ghost Tours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to get your One4All business connected with your community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose your services</h3>
              <p className="text-gray-600 leading-relaxed">
                Pick from social media management, guest targeting, experience packages, and customer messaging.
                Start with one or combine them all.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Set up your profile</h3>
              <p className="text-gray-600 leading-relaxed">
                Tell us about your business, upload photos, set your preferences.
                Our setup wizard makes it quick and easy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Start growing your business</h3>
              <p className="text-gray-600 leading-relaxed">
                Watch as new customers discover you, your social media grows, and your community engagement increases.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleGetStarted}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Now
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple, Fair Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the services that fit your needs. Start free, add services as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Social Media Management */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Social Media</h3>
              <p className="text-3xl font-bold text-gray-900 mb-1">$199<span className="text-lg font-normal text-gray-600">/mo</span></p>
              <p className="text-gray-600 text-sm mb-4">Complete social media management</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Automated posting</li>
                <li>• Content calendar</li>
                <li>• Multi-platform</li>
                <li>• Analytics</li>
              </ul>
              <button
                onClick={handleGetStarted}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Guest Targeting */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Guest Targeting</h3>
              <p className="text-3xl font-bold text-gray-900 mb-1">Pay<span className="text-lg font-normal text-gray-600"> per bid</span></p>
              <p className="text-gray-600 text-sm mb-4">QR placements in rentals</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Strategic placements</li>
                <li>• Tourist targeting</li>
                <li>• Bid management</li>
                <li>• Performance tracking</li>
              </ul>
              <button
                onClick={handleGetStarted}
                className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Experience Packages */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Experience Packages</h3>
              <p className="text-3xl font-bold text-gray-900 mb-1">Free<span className="text-lg font-normal text-gray-600"> to join</span></p>
              <p className="text-gray-600 text-sm mb-4">Commission on bookings only</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Curated experiences</li>
                <li>• Guest itineraries</li>
                <li>• Flexible discounts</li>
                <li>• No monthly fees</li>
              </ul>
              <button
                onClick={handleGetStarted}
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Customer Messaging */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Messaging</h3>
              <p className="text-3xl font-bold text-gray-900 mb-1">$99<span className="text-lg font-normal text-gray-600">/mo</span></p>
              <p className="text-gray-600 text-sm mb-4">Plus usage fees</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• SMS & email campaigns</li>
                <li>• Contact management</li>
                <li>• Automated workflows</li>
                <li>• Analytics</li>
              </ul>
              <button
                onClick={handleGetStarted}
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Complete Marketing Package</h3>
              <p className="text-blue-100 text-lg mb-6">
                Get all four services together and save. Perfect for businesses ready to grow fast.
              </p>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="text-3xl font-bold">$399/month</span>
                <span className="text-blue-200 line-through">$497/month</span>
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">Save $98</span>
              </div>
              <button
                onClick={handleGetStarted}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Complete Package
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span className="font-serif text-yellow-400">Market</span>{' '}
                <span className="text-blue-400">One4All</span>
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Complete marketing platform for One4All restaurants, retail shops, and tour companies.
                Built with love in the Bluff City.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Made for One4All by RehubDevelopers. © 2025 One4All.</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Social Media Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guest Targeting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Experience Packages</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customer Messaging</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
};

export default LandingPage;