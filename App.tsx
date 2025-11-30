
import { useState } from 'react';
import RetroButton from './components/RetroButton';
import Counter from './components/Counter';
import ChatWindow from './components/ChatWindow';
import BBS from './components/BBS';
import Profile from './components/Profile';
import Links from './components/Links';
import Gallery from './components/Gallery';
import Underground from './components/Underground';
import KiribanRequest from './components/KiribanRequest';

type PageType = 'home' | 'bbs' | 'profile' | 'links' | 'gallery' | 'underground' | 'kiriban' | 'request';

const navItems: { id: PageType; label: string }[] = [
  { id: 'home', label: 'トップ' },
  { id: 'bbs', label: '掲示板' },
  { id: 'gallery', label: 'ギャラリー' },
  // { id: 'kiriban', label: 'キリ番報告' }, // Removed as requested in previous turn, but logic remains in type just in case
  { id: 'profile', label: 'プロフィール' },
  { id: 'links', label: 'リンク' },
];

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'bbs':
        return <BBS />;
      case 'profile':
        return <Profile />;
      case 'links':
        return <Links />;
      case 'gallery':
        return <Gallery />;
      case 'underground':
        return <Underground />;
      case 'request':
        return <KiribanRequest />;
      case 'home':
      default:
        return (
          <div className="flex-1 w-full flex flex-col items-center">
            
            {/* Rabbit Image Frame */}
            <div className="relative inline-block p-1 bg-red-600 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="bg-black p-1">
                <img 
                  src="https://i.postimg.cc/rmLHzVnd/top1.png" 
                  alt="Mr. White Rabbit" 
                  className="w-48 h-48 md:w-64 md:h-64 object-cover border-2 border-white"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-0.5 border border-white">
                白うさぎさん
              </div>
            </div>

            <div className="text-pink-600 font-bold mb-4">
               ♥ うさぎを愛するページです ♥
            </div>

            <p className="text-sm md:text-base leading-7 mb-6 text-left w-full md:w-3/4 mx-auto bg-[#ffffee] p-4 border border-dotted border-orange-400">
              こんにちは！管理人の <span className="text-blue-600 font-bold">さつき</span> です。<br/>
              ここは白うさぎが住む平和な王国の公式サイトです。<br/>
              ゆっくりしていってね！<br/>
              <br/>
              <span className="text-xs text-gray-500">
                ※ Internet Explorer 4.0以上推奨<br/>
                ※ 文字サイズは「中」でご覧ください
              </span>
            </p>

            <Counter />

            <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-sm">
              <RetroButton className="w-full text-xs" onClick={() => setCurrentPage('bbs')}>BBSへ書き込む</RetroButton>
              <RetroButton className="w-full text-xs" onClick={() => setIsChatOpen(true)}>王様にメール</RetroButton>
            </div>
          </div>
        );
    }
  };

  // If we are in the underground, render it full screen (or overlay) style
  if (currentPage === 'underground') {
    return <Underground />;
  }

  return (
    <div 
      className="min-h-full w-full font-sans text-[#404040]"
      style={{
        backgroundImage: `url('https://i.postimg.cc/GtNGhQdb/kabe.png')`,
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Main Container */}
      <div className="max-w-4xl mx-auto bg-white/90 border-x-2 border-white min-h-screen shadow-2xl relative flex flex-col">
        
        {/* Header Section */}
        <header className="text-center pt-4 pb-2 bg-[#ffeff6] border-b-4 border-pink-200">
          <div className="inline-block bg-white px-8 py-4 border-4 border-pink-300 rounded-xl shadow-lg transform rotate-[-1deg] mb-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <h1 className="text-3xl md:text-5xl font-bold text-pink-500 font-pixel tracking-wider retro-text-shadow stroke-black" style={{ textShadow: "2px 2px 0px #000" }}>
              白うさ王国公式サイト
            </h1>
          </div>
          <div className="text-sm md:text-lg font-bold text-black font-serif mt-2">
            Welcome to White Rabbit Kingdom☆
          </div>
        </header>

        {/* Marquee */}
        <div className="bg-black text-white py-1 overflow-hidden border-y-2 border-gray-500">
          <div className="animate-marquee font-mono text-yellow-300 font-bold text-sm md:text-base">
            ★☆★ もうすぐキリ番！55555Getで報告してね☆ カウプレあり！？ ★☆★ 今日の運勢はBBSでチェック！ ★☆★
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="flex flex-wrap justify-center gap-2 p-4 bg-[#c0c0c0] border-b-2 border-gray-500">
          {navItems.map((item) => (
            <RetroButton 
              key={item.label} 
              onClick={() => handleNavClick(item.id)}
              isActive={currentPage === item.id}
            >
              {item.label}
            </RetroButton>
          ))}
          <RetroButton onClick={() => setIsChatOpen(true)} className="text-blue-800 font-bold">
            王様と話す
          </RetroButton>
        </nav>

        {/* Main Content Grid */}
        <main className="p-4 md:p-8 text-center flex-1">
          
          <div className="mb-8 animate-blink text-red-600 font-bold text-lg">
            What's New!! 1998/10/25 更新
          </div>

          <div className="flex flex-col md:flex-row items-start justify-center gap-8">
            
            {/* Left Column (Menu) */}
            <div className="hidden md:flex flex-col gap-3 w-48 shrink-0">
              <div className="bg-[#000080] text-white font-bold p-1 text-center text-sm">Menu</div>
              {navItems.map((item) => (
                <button 
                  key={item.label}
                  className={`text-left text-sm hover:text-red-500 hover:no-underline pl-2 before:content-['🐰'] before:mr-1 ${currentPage === item.id ? 'font-bold text-red-500' : 'text-blue-700 underline'}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
              <button 
                className={`text-left text-sm hover:text-red-500 hover:no-underline pl-2 before:content-['🎁'] before:mr-1 ${currentPage === 'request' ? 'font-bold text-red-500' : 'text-blue-700 underline'}`}
                onClick={() => handleNavClick('request')}
              >
                キリ番リクエスト
              </button>
              <div className="mt-8 text-xs text-center border-2 border-gray-400 p-2 bg-gray-100">
                <p>相互リンク募集中！</p>
                <img src="https://i.postimg.cc/MKbdpXsv/1998b2.png" alt="banner" className="mx-auto my-1 border border-gray-500" />
              </div>
            </div>

            {/* Center Content */}
            <div className="flex-1 w-full flex flex-col items-center">
              {renderContent()}
            </div>
          </div>
          
        </main>

        {/* Footer */}
        <footer className="bg-[#c0c0c0] border-t-2 border-gray-500 p-4 text-center text-xs text-gray-700 mt-auto relative">
          <hr className="border-gray-400 border-b-white mb-2" />
          <p>Since 1998.10.10</p>
          <p>Copyright (C) 1998 White Rabbit Kingdom. All Rights Reserved.</p>
          <p className="mt-2 text-[10px]">
            無断転載・複製を禁じます。<br/>
            このページへのリンクはフリーです。バナーはお持ち帰りください。
          </p>
          {/* Hidden Link for Tab Key Access */}
          <button 
            onClick={() => handleNavClick('underground')}
            className="absolute bottom-1 right-1 opacity-0 w-2 h-2 overflow-hidden focus:opacity-100 focus:w-auto focus:h-auto focus:bg-black focus:text-red-600 focus:p-1 focus:border focus:border-red-600 z-50 cursor-pointer"
            title="???"
          >
            ★
          </button>
        </footer>

        {/* Chat Overlay */}
        {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
      </div>
    </div>
  );
}

export default App;