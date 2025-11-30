
import React from 'react';
import RetroButton from './RetroButton';

const Gallery: React.FC = () => {
  return (
    <div className="w-full max-w-3xl p-4 text-[#404040]">
      <h2 className="text-center text-xl text-purple-600 font-bold mb-6 font-pixel retro-text-shadow tracking-widest">
        ★☆★ Gallery ★☆★
      </h2>

      <div className="text-center text-sm mb-8 bg-[#f0f0ff] p-2 border border-blue-300 mx-auto w-3/4">
        <p>
          デジカメで撮った写真や、お友達から頂いたCG（コンピュータグラフィックス）を展示しています。<br/>
          <span className="text-xs text-red-500 font-bold animate-pulse">※画像の無断転載・直リンクは厳禁です！発見次第、通報します。</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center bg-white p-3 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-500 shadow-xl">
          <div className="border border-black p-1 mb-2 w-full">
            <img 
              src="https://i.postimg.cc/qM1c81mC/freepik-35-40927.png" 
              alt="My Rabbit" 
              className="w-full h-auto grayscale-[20%]"
            />
          </div>
          <div className="text-xs text-left w-full font-serif">
            <p className="font-bold text-[#000080] border-b border-gray-300 mb-1">No.01 愛兎モコちゃん</p>
            <p className="leading-relaxed">
              うちのアイドル、モコちゃんです！(&gt;_&lt;)<br/>
              新しいデジカメ（35万画素！）で撮りました。<br/>
              にんじんを食べてるところを激写☆<br/>
              親バカですみません（笑）<br/>
              <span className="text-[10px] text-gray-500">1998.09.15 update</span>
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center bg-white p-3 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-500 shadow-xl">
          <div className="border border-black p-1 mb-2 w-full">
            <img 
              src="https://i.postimg.cc/kXHc0jxd/freepik-no02-19980920-update-40928.png" 
              alt="Rabbit Cloud" 
              className="w-full h-auto sepia-[30%]"
            />
          </div>
          <div className="text-xs text-left w-full font-serif">
            <p className="font-bold text-[#000080] border-b border-gray-300 mb-1">No.02 奇跡！？うさぎ雲</p>
            <p className="leading-relaxed">
              ベランダで黄昏てたら、うさぎの形の雲を発見！！<br/>
              慌ててシャッター切りました（＾＾；）<br/>
              耳のあたりとか、超うさぎっぽくないですか！？<br/>
              これを見た人にもＨａｐｐｙが訪れますように…☆彡<br/>
              <span className="text-[10px] text-gray-500">1998.09.20 update</span>
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center bg-white p-3 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-500 shadow-xl">
          <div className="border border-black p-1 mb-2 w-full">
            <img 
              src="https://i.postimg.cc/sDGHKBLL/ming-cheng-wei-she-ding-2025-11-27T223842-413.png" 
              alt="Gift CG" 
              className="w-full h-auto"
            />
          </div>
          <div className="text-xs text-left w-full font-serif">
            <p className="font-bold text-[#000080] border-b border-gray-300 mb-1">No.03 頂き物イラりく</p>
            <p className="leading-relaxed">
              キリ番3333Hit記念に、お友達の<br/>
              みかちゃんから頂きました♪<br/>
              マウスで描いたんだって！すごくない！？<br/>
              ありがとう～！家宝にします！！<br/>
              <span className="text-[10px] text-gray-500">1998.10.05 update</span>
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center bg-white p-3 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-500 shadow-xl">
          <div className="border border-black p-1 mb-2 w-full">
            <img 
              src="https://i.postimg.cc/g2pgHG6C/1998-2.png" 
              alt="Favorite Two" 
              className="w-full h-auto contrast-125"
            />
          </div>
          <div className="text-xs text-left w-full font-serif">
            <p className="font-bold text-[#000080] border-b border-gray-300 mb-1">No.04 だいすきな2人</p>
            <p className="leading-relaxed">
              この二人、<br/>
              ほんとにお気に入りです(^^)<br/>
              <br/>
              いい感じに描けたので<br/>
              のせてみました☆<br/>
              <span className="text-[10px] text-gray-500">1998.10 update</span>
            </p>
          </div>
        </div>

        {/* Item 5 */}
        <div className="flex flex-col items-center bg-white p-3 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-500 shadow-xl">
          <div className="border border-black p-1 mb-2 w-full">
            <img 
              src="https://i.postimg.cc/rpm9xfZv/imoutyoam.png" 
              alt="Sister" 
              className="w-full h-auto"
            />
          </div>
          <div className="text-xs text-left w-full font-serif">
            <p className="font-bold text-[#000080] border-b border-gray-300 mb-1">No.05 妹ちゃん</p>
            <p className="leading-relaxed">
              クロさんの妹ちゃんを描いてみました！<br/>
              お兄ちゃんに似てしっかり者。<br/>
              リボンがポイントです♪<br/>
              かわいく描けたかな？？<br/>
              <span className="text-[10px] text-gray-500">1998.10.25 update</span>
            </p>
          </div>
        </div>

        {/* Item 6 */}
        <div className="flex flex-col items-center bg-white p-3 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-500 shadow-xl">
          <div className="border border-black p-1 mb-2 w-full">
            <img 
              src="https://i.postimg.cc/HkP6ZGMm/uasyu.png" 
              alt="First time drawing" 
              className="w-full h-auto"
            />
          </div>
          <div className="text-xs text-left w-full font-serif">
            <p className="font-bold text-[#000080] border-b border-gray-300 mb-1">No.06 初めて描いた二人</p>
            <p className="leading-relaxed">
              押入れから古いスケッチブックが…！<br/>
              初めてこの二人を描いた時のヤツです（汗）<br/>
              バランスおかしいし、下手っぴだけど…<br/>
              記念ってことで載せちゃいます（笑）<br/>
              <span className="text-[10px] text-gray-500">1998.10.26 update</span>
            </p>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center bg-[#eeeeee] p-2 border border-dotted border-gray-500">
        <p className="text-xs">
          感想は <span className="text-blue-600 underline cursor-pointer">BBS</span> または <span className="text-blue-600 underline cursor-pointer">メール</span> で送ってね☆<br/>
          （※重くなるので添付ファイルは送らないでください！）
        </p>
      </div>

      <div className="mt-8 text-center">
        <RetroButton onClick={() => window.scrollTo(0,0)}>Page Top ▲</RetroButton>
      </div>
    </div>
  );
};

export default Gallery;
