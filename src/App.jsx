import React, { useState } from 'react';

const Icon = ({ name, className = "" }) => {
  const icons = {
    dashboard: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    transactions: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
    contacts: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    features: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
    library: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    box: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
    users: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    file: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    calendar: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    chevronRight: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>,
    chevronDown: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>,
    mail: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    dots: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>,
    search: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    arrowUpRight: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 19L20 5m0 0H9m11 0v11" /></svg>,
    arrowRight: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>,
    arrowLeft: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>,
    droplet: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    zap: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    list: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>,
    help: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    filter: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>,
  };
  return icons[name] || <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /></svg>;
};

const ConcentricCircles = ({ className, opacity = "0.05" }) => (
  <svg className={`absolute pointer-events-none ${className}`} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeOpacity={opacity} />
    <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="8" strokeOpacity={opacity} />
    <circle cx="50" cy="50" r="19" fill="none" stroke="currentColor" strokeWidth="8" strokeOpacity={opacity} />
  </svg>
);

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const tiltEffect = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -15;
    const rotateY = ((x / rect.width) - 0.5) * 15;
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    e.currentTarget.style.transition = 'none';
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    e.currentTarget.style.transition = 'transform 0.4s ease-out';
  };

  const mainNav = [
    { name: 'Dashboard', icon: 'dashboard', active: true },
    { name: 'Transactions', icon: 'transactions' },
    { name: 'Contacts', icon: 'contacts' },
    { name: 'Features', icon: 'features' },
    { name: 'Library', icon: 'library' },
  ];

  const settingsNav = [
    { name: 'Base Wallet', icon: 'box' },
    { name: 'My Contacts', icon: 'users' },
    { name: 'Invoices', icon: 'file' },
    { name: 'Schedules', icon: 'calendar' },
  ];

  const chartsData = [
    {
      title: 'Spending By Week', value: '210k', valueColor: 'text-[#ff6b55]', badge: '23k', badgeType: 'green', desc: 'Current Month',
      bars: [
        { h: 'h-4', color: 'bg-[#eef0f8]' }, { h: 'h-6', color: 'bg-[#eef0f8]' },
        { h: 'h-10', color: 'bg-[#ff6b55]', shadow: 'shadow-[0_8px_15px_rgba(255,107,85,0.4)]' },
        { h: 'h-5', color: 'bg-[#eef0f8]' }, { h: 'h-3', color: 'bg-[#eef0f8]' },
      ]
    },
    {
      title: 'Savings', value: '185k', valueColor: 'text-[#4c4082]', badge: '45k', badgeType: 'purple', desc: 'Current Month',
      bars: [
        { h: 'h-3', color: 'bg-[#eef0f8]' }, { h: 'h-5', color: 'bg-[#eef0f8]' },
        { h: 'h-11', color: 'bg-[#4c4082]', shadow: 'shadow-[0_8px_15px_rgba(76,64,130,0.4)]' },
        { h: 'h-6', color: 'bg-[#eef0f8]' }, { h: 'h-4', color: 'bg-[#eef0f8]' },
      ]
    },
    {
      title: 'Credit Card Spendings', value: '124k', valueColor: 'text-[#0acf97]', badge: '29k', badgeType: 'cyan', desc: 'Current Month',
      bars: [
        { h: 'h-5', color: 'bg-[#eef0f8]' }, { h: 'h-7', color: 'bg-[#eef0f8]' },
        { h: 'h-12', color: 'bg-[#0acf97]', shadow: 'shadow-[0_8px_15px_rgba(10,207,151,0.4)]' },
        { h: 'h-8', color: 'bg-[#eef0f8]' }, { h: 'h-4', color: 'bg-[#eef0f8]' },
      ]
    }
  ];

  const latestTransactions = [
    { id: 1, type: 'out', title: 'Payment Sent to Akaash', amount: '5600 Rs.' },
    { id: 2, type: 'in', title: 'Salary from Google', amount: '12,00,000 Rs.' },
    { id: 3, type: 'out', title: 'Money Sent to Wise.com', amount: '3,000.00 Rs.' },
    { id: 4, type: 'out', title: 'Purchased Macbook Pro', amount: '55,560.00 Rs.', showDate: true }
  ];

  const upcomingTransactions = [
    { id: 1, icon: 'droplet', bg: 'bg-indigo-700', title: 'Water Bill', desc: 'Unsuccessfully', amount: '500 Rs.', dateGroup: 'Today' },
    { id: 2, icon: 'list', bg: 'bg-rose-400', title: 'Income: Salary Oct', desc: 'Successfully', amount: '120000 Rs.', dateGroup: 'Tomorrow', positive: true },
    { id: 3, icon: 'zap', bg: 'bg-blue-400', title: 'Electric Bill', desc: 'Successfully', amount: '- 480 Rs.' },
    { id: 4, icon: 'list', bg: 'bg-amber-400', title: 'Income :  transfers', desc: 'Successfully', amount: '+ 500 Rs.', positive: true },
    { id: 5, icon: 'list', bg: 'bg-amber-400', title: 'Income : Jane transfers', desc: 'Successfully', amount: '+ 500 Rs.', positive: true }
  ];

  return (
    <div className="min-h-screen bg-[#eaedf6] flex items-center justify-center lg:p-8 p-0 font-sans">
      {/* Outer wrapper to simulate floating dashboard */}
      <div className="w-full max-w-[1400px] h-screen lg:h-[90vh] lg:min-h-[850px] lg:rounded-[2.5rem] bg-white lg:shadow-2xl flex overflow-hidden lg:ring-1 ring-black/5 relative">

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Left Sidebar */}
        <div className={`w-[260px] bg-white flex-shrink-0 flex flex-col pt-8 pb-6 px-6 border-r border-gray-100 z-50 absolute lg:relative h-full transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-fuchsia-500 shadow-md shadow-indigo-200/50 flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-white rounded-sm rotate-45 transform"></div>
            </div>
            <span className="font-extrabold text-xl text-gray-800 tracking-tight">Monefy</span>
          </div>

          <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* Main Navigation */}
            <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-3 px-2">Main Navigation</div>
            <ul className="space-y-1 mb-8">
              {mainNav.map(item => (
                <li key={item.name} className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all ${item.active ? 'text-indigo-600 bg-indigo-50/60' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'}`}>
                  <div className="flex items-center gap-3">
                    {item.active && <div className="absolute left-6 w-1 h-5 bg-indigo-600 rounded-full" />}
                    <Icon name={item.icon} className={`w-5 h-5 ml-1 ${item.active ? 'text-indigo-600' : 'text-gray-400'}`} />
                    <span className={`text-sm ${item.active ? 'font-bold' : 'font-semibold'}`}>{item.name}</span>
                  </div>
                  {!item.active && <Icon name="chevronRight" className="w-4 h-4 text-gray-300" />}
                </li>
              ))}
            </ul>

            {/* Settings & Schedules */}
            <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-3 px-2">Settings & Schedules</div>
            <ul className="space-y-1">
              {settingsNav.map(item => (
                <li key={item.name} className="flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all text-gray-500 hover:bg-gray-50 hover:text-gray-800">
                  <div className="flex items-center gap-3">
                    <Icon name={item.icon} className="w-5 h-5 ml-1 text-gray-400" />
                    <span className="text-sm font-semibold">{item.name}</span>
                  </div>
                  <Icon name="chevronRight" className="w-4 h-4 text-gray-300" />
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Help Center Card */}
          <div className="mt-8 p-6 bg-gradient-to-br from-[#ffb443] to-[#ff8c16] rounded-[2rem] text-center relative overflow-hidden shadow-xl shadow-orange-300/40">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/4"></div>

            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 text-orange-500 shadow-sm">
              <Icon name="help" className="w-6 h-6" />
            </div>
            <h4 className="text-white font-bold mb-2 relative z-10 tracking-wide text-sm">Help Center</h4>
            <p className="text-white/80 text-[10px] mb-5 leading-relaxed relative z-10 font-medium">Having trouble in Monefy. Please contact us for more questions.</p>
            <button className="bg-white text-gray-800 text-[11px] font-extrabold py-3 px-4 rounded-xl w-full relative z-10 hover:shadow-md transition-all">Go To Help Center</button>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="flex-1 flex flex-col bg-[#fdfdfd] overflow-y-auto relative z-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

          {/* Sweeping Purple Header Background Filter */}
          <div className="absolute top-0 left-0 w-full md:h-[320px] h-[280px] bg-gradient-to-r from-[#5f2be0] via-[#8541eb] to-[#a45cf4] lg:rounded-bl-[4rem] rounded-b-[2rem] z-0 overflow-hidden shadow-sm">
            <ConcentricCircles className="text-white w-[600px] h-[600px] right-[-100px] top-[-100px]" opacity="0.06" />
            <div className="absolute top-[-100px] left-[10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl"></div>
            <div className="absolute bottom-0 right-[15%] w-[400px] h-[400px] rounded-full bg-white/5 blur-2xl"></div>
          </div>

          <div className="relative z-10 flex flex-col pt-8 pb-10">

            {/* Top Navigation Bar */}
<div className="px-6 lg:px-10 flex items-center justify-between mb-8 lg:mb-16 gap-4">
  {/* Left: Menu button on mobile/tablet */}
  <button
    className="lg:hidden p-2 -ml-2 text-white/90 hover:text-white flex-shrink-0"
    onClick={() => setIsSidebarOpen(true)}
  >
    <Icon name="list" className="w-6 h-6" />
  </button>

  {/* Search Bar */}
  <div className="relative flex-1 max-w-[320px] group">
    <Icon
      name="search"
      className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70 group-focus-within:text-white transition-colors"
    />
    <input
      type="text"
      placeholder="Search.."
      className="w-full bg-white/20 text-white placeholder-white/70 rounded-2xl py-3.5 pl-14 pr-5 outline-none focus:bg-white/30 focus:shadow-inner transition-all backdrop-blur-md border border-white/5 text-sm font-medium"
    />
  </div>

  {/* Right Profile & Controls */}
  <div className="flex items-center gap-4 lg:gap-10 text-white flex-shrink-0">
    <div className="hidden md:flex items-center gap-4 lg:gap-6">
      <Icon name="file" className="w-5 h-5 cursor-pointer hover:text-white/80 transition-colors" />
      <Icon name="mail" className="w-5 h-5 cursor-pointer hover:text-white/80 transition-colors" />
      <Icon name="dots" className="w-5 h-5 cursor-pointer hover:text-white/80 transition-colors" />
    </div>

    <div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
      <span className="cursor-pointer hover:text-white/80 transition-colors">Wallet</span>
      <span className="cursor-pointer hover:text-white/80 transition-colors">Invoices</span>
    </div>

    <div className="flex items-center gap-3">
      <span className="hidden sm:inline text-sm font-bold tracking-wide">Hi, Akaash</span>
      <div className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden shadow-lg p-0.5 bg-white/10 backdrop-blur-md">
        <img
          src="/image.jpg"
          alt="Akaash profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
  </div>
</div>


            {/* Premium 3D Interactive Cards */}
            <div className="px-6 lg:px-10 flex flex-col md:flex-row gap-6 z-20">

              {/* Card 1: Credit Card */}
              <div
                className="flex-1 bg-gradient-to-br from-[#cff4d2] to-[#e4fbe7] rounded-[2rem] p-7 shadow-2xl shadow-green-200/40 relative overflow-hidden flex flex-col justify-between"
                onMouseMove={tiltEffect}
                onMouseLeave={resetTilt}
                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.4s ease-out' }}
              >
                <ConcentricCircles className="text-green-900 w-[300px] h-[300px] right-[-50px] top-[0px]" opacity="0.04" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="flex justify-between items-start mb-10 relative z-10 w-full">
                  <div className="flex -space-x-3 items-center">
                    <div className="w-9 h-9 rounded-full bg-black/80 z-10"></div>
                    <div className="w-9 h-9 rounded-full bg-black/20 backdrop-blur-md z-20"></div>
                  </div>
                </div>
                <div className="mb-8 relative z-10 w-full text-left">
                  <div className="text-[9px] text-gray-500 font-bold tracking-widest mb-1.5 opacity-80">CARD NUMBER</div>
                  <div className="text-xl font-bold tracking-[0.15em] text-gray-800 tabular-nums">676767676767</div>
                </div>
                <div className="flex justify-between items-end relative z-10 w-full">
                  <div>
                    <div className="text-[9px] text-gray-500 font-bold tracking-widest mb-1.5 opacity-80">CARD HOLDER NAME</div>
                    <div className="text-sm font-bold text-gray-800 tracking-wide">Baburao</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] text-gray-500 font-bold tracking-widest mb-1.5 opacity-80">VALID THRU</div>
                    <div className="text-sm font-bold text-gray-800 tracking-wide">09/26</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Savings Status */}
              <div
                className="flex-1 bg-gradient-to-br from-[#ff8255] to-[#ff5844] rounded-[2rem] p-7 shadow-2xl shadow-orange-300/40 relative overflow-hidden flex flex-col"
                onMouseMove={tiltEffect}
                onMouseLeave={resetTilt}
                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.4s ease-out' }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
                <div className="absolute top-5 right-5 text-white bg-white/20 hover:bg-white/30 transition-colors rounded-full w-6 h-6 flex items-center justify-center cursor-pointer text-xs font-bold backdrop-blur-sm z-30">?</div>
                <div className="text-white font-bold mb-auto relative z-10 tracking-wide text-sm">Your Saving Status(Gareeb)</div>
                <div className="flex items-center gap-5 relative z-10 mt-12">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner ring-1 ring-white/30">
                    <Icon name="box" className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1 tracking-tight">4.28%</div>
                    <div className="text-white/80 text-xs font-medium">Your spending increased</div>
                  </div>
                </div>
              </div>

              {/* Card 3: Working Balance */}
              <div
                className="flex-1 bg-gradient-to-br from-[#00f2fe] to-[#1cb8f5] rounded-[2rem] p-7 shadow-2xl shadow-cyan-300/40 relative overflow-hidden flex flex-col justify-between"
                onMouseMove={tiltEffect}
                onMouseLeave={resetTilt}
                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.4s ease-out' }}
              >
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none"></div>
                <div className="flex justify-between items-start mb-auto relative z-10">
                  <div className="font-bold text-gray-900 text-sm tracking-wide">Your Working Balance</div>
                  <div className="text-xs font-bold text-gray-700 underline decoration-gray-500/50 underline-offset-4 cursor-pointer hover:text-black transition-colors">Saving Account</div>
                </div>
                <div className="flex items-end gap-3 mt-12 relative z-10">
                  <div className="text-3xl font-extrabold text-gray-900 tracking-tight">Rs.9,250,000</div>
                  <div className="text-xs font-extrabold text-gray-800 pb-1.5 flex items-center gap-0.5 cursor-pointer hover:text-black transition-colors">
                    more <Icon name="chevronDown" className="w-4 h-4 text-gray-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="px-6 lg:px-10 mt-8 mb-6">
              <div className="h-px w-full bg-gray-200/80"></div>
            </div>

            {/* Small Analytics Charts */}
            <div className="px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4">
              {chartsData.map((chart, i) => (
                <div key={i} className="flex justify-between items-center bg-transparent">
                  <div>
                    <div className="text-xs font-bold text-gray-500 mb-1.5 tracking-wide">{chart.title}</div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-3xl font-extrabold tracking-tight ${chart.valueColor}`}>{chart.value}</span>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-0.5 ${
                        chart.badgeType === 'green' ? 'bg-green-50 text-green-500' :
                        chart.badgeType === 'purple' ? 'bg-indigo-50 text-indigo-500' :
                        'bg-cyan-50 text-cyan-500'
                      }`}>
                        {chart.badge} <Icon name="arrowUpRight" className="w-3 h-3" />
                      </span>
                    </div>
                    <div className="text-[10px] font-semibold text-gray-400 mt-1.5">{chart.desc}</div>
                  </div>
                  <div className="flex items-end gap-1.5 h-12">
                    {chart.bars.map((bar, j) => (
                      <div key={j} className={`w-3.5 rounded-md ${bar.h} ${bar.color} ${bar.shadow || 'transition-all duration-300 hover:h-10'}`}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Lists Section */}
            <div className="px-6 lg:px-10 mt-10 mb-8 flex flex-col lg:flex-row gap-8">

              {/* Latest Transactions */}
              <div className="flex-[5.5] bg-white rounded-[2rem] p-5 md:p-7 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-extrabold text-gray-800 text-lg">Latest Transactions</h3>
                  <div className="flex gap-4">
                    <Icon name="search" className="w-5 h-5 text-gray-300 cursor-pointer hover:text-gray-600 transition-colors" />
                    <Icon name="filter" className="w-5 h-5 text-gray-300 cursor-pointer hover:text-gray-600 transition-colors" />
                  </div>
                </div>

                <div className="text-[11px] font-bold text-gray-400 mb-4 opacity-70">Mon, Mar 1</div>
                <div className="space-y-1">
                  {latestTransactions.slice(0, 3).map((tx) => (
                    <div key={tx.id} className="flex justify-between items-center py-3.5 hover:bg-gray-50 px-2 -mx-2 rounded-xl transition-colors cursor-pointer">
                      <div className="flex items-center gap-5">
                        <div className="w-11 h-11 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100 shadow-sm">
                          <Icon name={tx.type === 'out' ? 'arrowRight' : 'arrowLeft'} className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-gray-700">{tx.title}</span>
                      </div>
                      <span className={`text-sm font-extrabold ${tx.type === 'out' ? 'text-red-500' : 'text-gray-800'}`}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}

                  <div className="text-[11px] font-bold text-gray-400 mb-4 mt-4 opacity-70">Mon, Mar 1</div>
                  {latestTransactions.slice(3).map((tx) => (
                    <div key={tx.id} className="flex justify-between items-center py-3.5 hover:bg-gray-50 px-2 -mx-2 rounded-xl transition-colors cursor-pointer">
                      <div className="flex items-center gap-5">
                        <div className="w-11 h-11 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100 shadow-sm">
                          <Icon name={tx.type === 'out' ? 'arrowRight' : 'arrowLeft'} className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-gray-700">{tx.title}</span>
                      </div>
                      <span className={`text-sm font-extrabold ${tx.type === 'out' ? 'text-red-500' : 'text-gray-800'}`}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Transactions */}
              <div className="flex-[4.5] bg-white rounded-[2rem] p-5 md:p-7 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-extrabold text-gray-800 text-lg">Upcoming Transactions</h3>
                  <span className="text-xs font-bold text-gray-400 cursor-pointer hover:text-gray-800 transition-colors">View All</span>
                </div>

                <div className="space-y-2">
                  {upcomingTransactions.map((tx, idx) => (
                    <React.Fragment key={idx}>
                      {tx.dateGroup && <div className={`text-[11px] font-bold text-gray-400 mb-3 opacity-70 ${idx > 0 ? 'mt-7' : ''}`}>{tx.dateGroup}</div>}
                      <div className="flex justify-between items-center py-3 hover:bg-gray-50 px-2 -mx-2 rounded-xl transition-colors cursor-pointer">
                        <div className="flex items-center gap-5">
                          <div className={`w-11 h-11 rounded-2xl ${tx.bg} flex items-center justify-center text-white shadow-lg`}>
                            <Icon name={tx.icon} className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-700 mb-0.5">{tx.title}</div>
                            <div className="text-[11px] font-semibold text-gray-400">{tx.desc}</div>
                          </div>
                        </div>
                        <span className={`text-sm font-extrabold ${tx.positive ? 'text-gray-800' : 'text-red-500'}`}>
                          {tx.positive ? <span className="font-black text-[13px] mr-1 text-gray-500">+</span> : null}{tx.amount.replace('+ ', '')}
                        </span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
