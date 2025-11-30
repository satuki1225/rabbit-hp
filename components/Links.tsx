import React from 'react';
import RetroButton from './RetroButton';

const Links: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-4">
      <h2 className="text-center text-xl text-[#008000] font-bold mb-6 font-pixel retro-text-shadow">
        ★☆★ Links ★☆★
      </h2>

      <div className="bg-[#ffffee] border-2 border-orange-300 p-4 mb-8 text-center text-sm">
        <p className="mb-2 font-bold text-orange-600">当サイトはリンクフリーです！</p>
        <p className="mb-2">バナーはお持ち帰りでお願いします。(直リンク禁止！)</p>
        <div className="flex justify-center gap-4 my-3">
          <img 
            src="https://i.postimg.cc/Qdm40V5J/1998b1.png" 
            alt="White Rabbit Kingdom Banner 1" 
            className="border border-black w-[88px] h-[31px]" 
          />
          <img 
            src="https://i.postimg.cc/MKbdpXsv/1998b2.png" 
            alt="White Rabbit Kingdom Banner 2" 
            className="border border-black w-[88px] h-[31px]" 
          />
        </div>
        <p className="text-xs">
          Site Name: 白うさ王国公式サイト<br/>
          Admin: さつき<br/>
          URL: http://www.whiterabbits.net/ (仮)
        </p>
      </div>

      <div className="space-y-6">
        {/* Category: Search Engines */}
        <div>
          <h3 className="border-l-4 border-blue-600 pl-2 font-bold mb-2 text-blue-800">Search Engines</h3>
          <ul className="list-none space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <div className="w-[88px] h-[31px] bg-gray-300 border border-gray-500 flex items-center justify-center text-[9px] text-gray-600 font-serif">Yahoo! JAPAN</div>
              <a href="#" className="text-blue-600 underline hover:text-red-500">Yahoo! JAPAN</a>
              <span className="text-xs text-gray-500">- 定番ですね。</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-[88px] h-[31px] bg-gray-300 border border-gray-500 flex items-center justify-center text-[9px] text-gray-600 font-serif">Lycos</div>
              <a href="#" className="text-blue-600 underline hover:text-red-500">Lycos Japan</a>
              <span className="text-xs text-gray-500">- 黒い犬が目印。</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-[88px] h-[31px] bg-gray-300 border border-gray-500 flex items-center justify-center text-[9px] text-gray-600 font-serif">goo</div>
              <a href="#" className="text-blue-600 underline hover:text-red-500">goo</a>
              <span className="text-xs text-gray-500">- 日本語検索ならここ！</span>
            </li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        {/* Category: Friends */}
        <div>
          <h3 className="border-l-4 border-pink-600 pl-2 font-bold mb-2 text-pink-800">Special Thanks</h3>
          <ul className="list-none space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <img src="https://i.postimg.cc/hG2c3trD/freepik-1998-bl-50812.png" alt="banner" className="border border-gray-500 w-[88px] h-[31px]" />
              <a href="#" className="text-blue-600 underline hover:text-red-500">暗黒の堕天使の館</a>
              <span className="text-xs text-gray-500">- 相互リンク。かっちゃんHP。</span>
            </li>
            <li className="flex items-center gap-2">
              <img src="https://picsum.photos/88/31?random=101" alt="banner" className="border border-gray-500" />
              <a href="#" className="text-blue-600 underline hover:text-red-500">Milky Way</a>
              <span className="text-xs text-gray-500">- 素材屋さん。壁紙お借りしてます。</span>
            </li>
            <li className="flex items-center gap-2">
              <img src="https://picsum.photos/88/31?random=102" alt="banner" className="border border-gray-500" />
              <a href="#" className="text-blue-600 underline hover:text-red-500">うさぎマニア</a>
              <span className="text-xs text-gray-500">- うさぎのことなら何でもわかる！</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <RetroButton onClick={() => window.scrollTo(0,0)}>Page Top ▲</RetroButton>
      </div>
    </div>
  );
};

export default Links;