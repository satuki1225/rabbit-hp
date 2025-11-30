
import React, { useState } from 'react';

type SubPage = 'menu' | 'novel' | 'art' | 'alliance' | 'bbs' | 'fallenAngel';

const Underground: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [subPage, setSubPage] = useState<SubPage>('menu');
  const [selectedArtId, setSelectedArtId] = useState<number | null>(null);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = answer.trim().replace(/[！!]/g, '');
    if (['にんじん', 'ニンジン', '人参', 'carrot'].includes(normalized)) {
      setUnlocked(true);
    } else {
      alert('アクセス拒否... 貴様は招かれざる客だ...');
      setAnswer('');
    }
  };

  const artPieces = [
    { 
      id: 1, 
      date: '98.09.20', 
      title: 'クロ×うさ王様', 
      tag: '(甘々)', 
      fullTitle: 'クロ×うさ王様(甘々)',
      description: '王様がデレデレです。クロさん困ってます(笑) \n王冠描くの忘れた…（死）',
      placeholderText: 'Image: Kuro x King',
      imageUrl: 'https://i.postimg.cc/5NBHKxdT/freepik-1998-bl-50827.png'
    },
    { 
      id: 2, 
      date: '98.08.15', 
      title: '夜明けの2人', 
      tag: '(甘々)', 
      fullTitle: '夜明けの2人(甘々)',
      description: '事後…？なんてね/// \n朝焼けのグラデーションが難しかった！\nPhotoshop練習中。',
      placeholderText: 'Image: Morning Glow',
      imageUrl: 'https://i.postimg.cc/W3xBZL5k/1998-3.png'
    },
    { 
      id: 3, 
      date: '98.07.07', 
      title: 'ファーストキス', 
      tag: '(甘々)', 
      fullTitle: 'ファーストキス(甘々)',
      description: 'キリ番リクで「雨の中のキス」でした！\n傘描くの面倒で投げ出した←おい\n末永く爆発しろ～！！',
      placeholderText: 'Image: First Kiss',
      imageUrl: 'https://i.postimg.cc/BnsXFRyD/1998-4.png'
    },
    { 
      id: 4, 
      date: '98.06.01', 
      title: 'Log 01', 
      tag: '(落書き詰め合わせ)', 
      fullTitle: 'Log 01(落書き詰め合わせ)',
      description: '授業中に描いたやつとか。汚いです。\nルーズリーフの線は気にしないでｗ',
      placeholderText: 'Image: Log 01',
      imageUrl: 'https://i.postimg.cc/mDqPFkxj/freepik-1998-89672.png'
    },
  ];

  const renderContent = () => {
    switch (subPage) {
      case 'novel':
        return (
          <div className="text-center animate-pulse">
            <h2 className="text-3xl text-red-500 font-bold mb-8 border-b-2 border-red-500 inline-block">
              Novels
            </h2>
            <div className="text-white text-lg mb-4">
              <span className="text-yellow-400">Construction...</span>
            </div>
            <p className="text-gray-400 mb-8">
              ただいま改装中です。<br/>
              キリ番リクエスト「王様の憂鬱」執筆中...<br/>
              もうしばらくお待ちください。
            </p>
            <div className="border border-gray-600 p-4 w-3/4 mx-auto bg-black/50 text-left text-xs text-gray-500 font-mono">
              Last Update: 1998.10.01<br/>
              Next Update: 未定
            </div>
            <button 
              onClick={() => setSubPage('menu')} 
              className="mt-12 text-cyan-300 hover:text-white underline"
            >
              [ Back ]
            </button>
          </div>
        );

      case 'art':
        if (selectedArtId !== null) {
          const art = artPieces.find(a => a.id === selectedArtId);
          if (!art) return null;
          return (
            <div className="text-center w-full max-w-lg">
              <h3 className="text-2xl text-pink-400 font-bold mb-4">{art.fullTitle}</h3>
              <div className="border-4 border-double border-gray-600 p-1 bg-black inline-block mb-4">
                 {art.imageUrl ? (
                   <img 
                     src={art.imageUrl} 
                     alt={art.fullTitle} 
                     className="w-auto max-w-full max-h-[400px] border border-gray-500"
                   />
                 ) : (
                   <div className="w-[300px] h-[300px] bg-gray-800 flex items-center justify-center text-gray-500 flex-col gap-2">
                     <div className="text-4xl">Waiting...</div>
                     <div className="text-xs">{art.placeholderText}</div>
                     <div className="text-[10px] text-gray-600">(あとから画像追加します)</div>
                   </div>
                 )}
              </div>
              <div className="text-cyan-200 text-sm whitespace-pre-wrap leading-relaxed border-t border-b border-gray-700 py-4 mx-8 mb-8 font-mono">
                {art.description}
              </div>
              <button 
                onClick={() => setSelectedArtId(null)} 
                className="text-cyan-300 hover:text-white underline"
              >
                [ Galleryに戻る ]
              </button>
            </div>
          );
        }

        return (
          <div className="text-center w-full max-w-md">
            <h2 className="text-3xl text-pink-500 font-bold mb-6" style={{ textShadow: '2px 2px #fff' }}>
              Secret Gallery
            </h2>
            <p className="text-xs text-red-400 mb-6 font-bold">
              ※ここから先は同人的要素（やおい）を含みます。<br/>
              苦手な方はブラウザバックしてください。<br/>
              無断転載禁止 / No Reproduction
            </p>
            <ul className="space-y-4 text-left pl-8 list-disc text-cyan-200 font-mono">
              {artPieces.map((art) => (
                <li key={art.id}>
                  <span className="text-gray-500 text-xs mr-2">{art.date}</span>
                  <button 
                    onClick={() => setSelectedArtId(art.id)}
                    className="hover:text-pink-400 cursor-pointer decoration-dotted underline text-left"
                  >
                    {art.title} <span className="text-xs text-gray-400 ml-1">{art.tag}</span>
                  </button>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setSubPage('menu')} 
              className="mt-12 text-cyan-300 hover:text-white underline"
            >
              [ Back ]
            </button>
          </div>
        );

      case 'alliance':
        return (
          <div className="text-center w-full max-w-md">
             <h2 className="text-3xl text-green-400 font-bold mb-8 font-mono">
              UNION
            </h2>
            <div className="grid grid-cols-1 gap-6 text-left">
              <div className="border border-gray-600 p-2 flex items-center gap-4 bg-gray-900">
                <div className="w-[88px] h-[31px] bg-black border border-white flex items-center justify-center text-[8px] text-white text-center leading-none">
                  BLACK<br/>RABBIT<br/>UNION
                </div>
                <div>
                  <div className="text-green-300 font-bold text-sm">黒うさぎ同盟</div>
                  <div className="text-xs text-gray-500">黒うさぎを愛する人のための同盟。No.049</div>
                </div>
              </div>
              <div className="border border-gray-600 p-2 flex items-center gap-4 bg-gray-900">
                <div className="w-[88px] h-[31px] bg-white border border-black flex items-center justify-center text-[8px] text-black font-serif">
                  Glasses<br/>Love
                </div>
                <div>
                  <div className="text-green-300 font-bold text-sm">眼鏡同盟</div>
                  <div className="text-xs text-gray-500">眼鏡キャラは正義。</div>
                </div>
              </div>
              <div className="border border-gray-600 p-2 flex items-center gap-4 bg-gray-900">
                <div className="w-[88px] h-[31px] bg-purple-900 border border-white flex items-center justify-center text-[8px] text-white">
                  MIDNIGHT
                </div>
                <div>
                  <div className="text-green-300 font-bold text-sm">真夜中の住人</div>
                  <div className="text-xs text-gray-500">テレホタイムにしか現れない人へ。</div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-600 pt-4">
               <h3 className="text-lg text-purple-400 font-bold mb-4 font-serif">Special Thanks (Friends)</h3>
               <div className="border border-gray-600 p-2 flex items-center gap-4 bg-gray-900 cursor-pointer hover:bg-gray-800" onClick={() => setSubPage('fallenAngel')}>
                <img src="https://i.postimg.cc/hG2c3trD/freepik-1998-bl-50812.png" alt="banner" className="w-[88px] h-[31px] border border-gray-500" />
                <div>
                  <div className="text-red-500 font-bold text-sm font-serif">暗黒の堕天使の館</div>
                  <div className="text-xs text-gray-500">かっちゃんのHP。相互。</div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setSubPage('menu')} 
              className="mt-12 text-cyan-300 hover:text-white underline"
            >
              [ Back ]
            </button>
          </div>
        );

      case 'fallenAngel':
        return (
          <div className="w-full h-full bg-black text-[#800000] font-serif flex flex-col items-center justify-start pt-8 overflow-y-auto">
             <div className="mb-4">
               <img src="https://i.postimg.cc/90d9vkQ9/freepik-1998-bl-89673.png" alt="Fallen Angel" className="border-4 border-[#300000] shadow-[0_0_20px_#800000] max-w-[300px]" />
             </div>
             
             <h2 className="text-3xl font-bold mb-2 tracking-widest text-[#ff0000]" style={{ textShadow: '2px 2px 5px #000' }}>
               † 堕天使の館 †
             </h2>
             <div className="text-xs text-[#500000] mb-8">
               ～ Fallen Angel's Mansion ～
             </div>

             <div className="text-center text-[#a00000] text-sm leading-loose mb-8">
               <p>ようこそ、迷い子よ…。</p>
               <p>ここは闇に堕ちた天使が羽を休める<br/>かりそめの聖域（サンクチュアリ）…。</p>
               <p>光ある者は去るがよい。</p>
             </div>

             <div className="border-t border-b border-[#500000] py-2 w-1/2 text-center mb-8">
               <span className="animate-pulse text-red-500 font-bold text-xl">UNDER CONSTRUCTION</span>
             </div>

             <div className="text-[#600000] text-xs mb-12">
               Since 1999.06.06 (予定)<br/>
               Master: LUCIFER (Kacchan)
             </div>

             <div className="text-center">
               <div className="text-[#ff0000] font-bold text-2xl mb-2">666</div>
               <div className="text-[10px] text-[#500000]">あなたは 666 人目の生贄です</div>
             </div>

             <button 
               onClick={() => setSubPage('alliance')} 
               className="mt-12 border border-[#500000] px-4 py-1 text-[#800000] hover:bg-[#300000] hover:text-red-500 transition-colors"
             >
               ENTER (Back)
             </button>
          </div>
        );

      case 'bbs':
        return (
          <div className="w-full max-w-lg h-full flex flex-col">
            <h2 className="text-2xl text-red-600 font-bold mb-4 text-center font-mono tracking-widest border-b border-red-900 pb-2">
              † 裏 掲 示 板 †
            </h2>
            <div className="flex-1 overflow-y-auto pr-2 space-y-6 font-mono text-sm">
              <div className="text-gray-300">
                <div className="text-red-400 text-xs mb-1">
                  [13] <span className="font-bold">名無しさん</span> : 98/10/24 23:59
                </div>
                <div className="pl-2 border-l-2 border-gray-700">
                   最近王様の様子がおかしい気がする。<br/>
                   表では明るく振る舞ってるけど、裏では…<br/>
                   誰か知ってる人いない？
                </div>
              </div>

              <div className="text-gray-300">
                <div className="text-red-400 text-xs mb-1">
                  [12] <span className="font-bold">管理人</span> : 98/10/24 02:15
                </div>
                <div className="pl-2 border-l-2 border-gray-700">
                   &gt;11<br/>
                   その件についてはメールでお願いします。<br/>
                   ここは誰が見てるかわからないので…(汗)
                </div>
              </div>

              <div className="text-gray-300">
                <div className="text-red-400 text-xs mb-1">
                  [11] <span className="font-bold">通りすがり</span> : 98/10/23 04:44
                </div>
                <div className="pl-2 border-l-2 border-gray-700">
                   眠れない。<br/>
                   誰かチャットしよ。<br/>
                   ICQ: 12345678
                </div>
              </div>

              <div className="text-gray-300">
                <div className="text-red-400 text-xs mb-1">
                  [10] <span className="font-bold">黒うさ</span> : 98/10/20 19:00
                </div>
                <div className="pl-2 border-l-2 border-gray-700">
                   。。。
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700 text-center">
               <input type="text" placeholder="書き込み不可" disabled className="bg-gray-900 border border-gray-600 text-gray-500 text-xs p-1 w-full text-center" />
               <button 
                onClick={() => setSubPage('menu')} 
                className="mt-4 text-cyan-300 hover:text-white underline text-sm"
              >
                [ 戻る ]
              </button>
            </div>
          </div>
        );

      case 'menu':
      default:
        return (
          <div className="flex flex-col gap-6 text-xl animate-bounce mt-4">
            <a href="#" onClick={(e) => { e.preventDefault(); setSubPage('novel'); }} className="text-cyan-300 hover:text-red-500 hover:underline decoration-2 underline-offset-4 tracking-widest">
              BL小説(工事中)
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setSubPage('art'); }} className="text-cyan-300 hover:text-red-500 hover:underline decoration-2 underline-offset-4 tracking-widest">
              BL絵
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setSubPage('alliance'); }} className="text-cyan-300 hover:text-red-500 hover:underline decoration-2 underline-offset-4 tracking-widest">
              同盟LINK
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setSubPage('bbs'); }} className="text-cyan-300 hover:text-red-500 hover:underline decoration-2 underline-offset-4 tracking-widest">
              秘密の掲示板
            </a>
            <div className="text-xs text-gray-500 mt-8 font-mono">
              Welcome to the dark side...<br/>
              Don't tell anyone.
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-4 bg-gray-800">
      {/* Netscape 4.x Window Frame */}
      <div className="w-full max-w-4xl h-[600px] bg-[#c0c0c0] flex flex-col border-2 border-white shadow-2xl font-sans text-sm">
        
        {/* Title Bar */}
        <div className="bg-[#000080] text-white px-2 py-1 font-bold flex justify-between items-center select-none">
          <span>Netscape Navigator - [裏 白うさ王王国]</span>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-black flex items-center justify-center text-black text-[10px]">_</div>
            <div className="w-4 h-4 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-black flex items-center justify-center text-black text-[10px]">□</div>
            <div className="w-4 h-4 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-black flex items-center justify-center text-black text-[10px]">×</div>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="bg-[#c0c0c0] border-b border-gray-600 px-1 flex gap-3 py-1 text-black select-none">
          <span className="underline cursor-default">F</span>ile
          <span className="underline cursor-default">E</span>dit
          <span className="underline cursor-default">V</span>iew
          <span className="underline cursor-default">G</span>o
          <span className="underline cursor-default">B</span>ookmarks
          <span className="underline cursor-default">O</span>ptions
          <span className="underline cursor-default">D</span>irectory
          <span className="underline cursor-default">W</span>indow
          <span className="underline cursor-default">H</span>elp
        </div>

        {/* Address Bar Mock */}
        <div className="bg-[#c0c0c0] border-b border-gray-600 p-1 flex gap-2 items-center select-none">
          <span className="text-gray-600">Location:</span>
          <div className="bg-white border-2 border-gray-500 border-inset px-2 py-0.5 w-full text-black font-mono text-xs">
            {`http://www.whiterabbits.net/underground/${subPage === 'menu' ? 'index.html' : subPage + '.html'}`}
          </div>
        </div>

        {/* Viewport (Content) */}
        <div className="flex-1 bg-black relative overflow-auto font-pixel flex flex-col items-center justify-center text-center p-8"
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23111111' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
             }}>
          
          {/* Content Render */}
          {!unlocked ? (
            <>
              {/* Netscape Badge */}
              <div className="mb-12 bg-teal-900 border-2 border-teal-500 text-white px-4 py-1 flex items-center gap-2 select-none shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                <span className="font-serif text-sm">Best viewed with</span>
                <span className="font-bold text-xl italic font-serif text-white drop-shadow-[2px_2px_0_#000]">N</span>
                <span className="font-bold text-sm">Netscape Navigator</span>
              </div>

              {/* Glitch Title */}
              <div className="relative mb-12 select-none">
                <h1 className="text-5xl md:text-6xl font-bold text-yellow-300 relative z-10" style={{ textShadow: '4px 4px 0px #ff00ff' }}>
                  裏 白うさ王王国
                </h1>
                <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 absolute top-0 left-0 animate-pulse opacity-50 ml-1 mt-1">
                  裏 白うさ王王国
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-green-400 mt-2" style={{ textShadow: '2px 2px 0px #0000ff' }}>
                  公式サイト
                </h2>
              </div>

              {/* Rabbit Image */}
              <div className="mb-8 relative">
                 <img 
                   src="https://i.postimg.cc/rmLHzVnd/top1.png" 
                   alt="Dark King" 
                   className="w-32 h-32 object-contain"
                   style={{ filter: 'invert(1) contrast(1.5)' }} 
                 />
                 <div className="absolute inset-0 bg-red-500 mix-blend-overlay opacity-50 animate-pulse"></div>
              </div>

              <form onSubmit={handleUnlock} className="bg-black/80 border-2 border-gray-500 p-6 shadow-[0_0_20px_rgba(255,0,0,0.4)]">
                <label className="block text-white mb-3 text-lg tracking-widest">うさぎの好きな食べ物は？</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="bg-white text-black border-2 border-gray-400 px-2 py-1 w-48 font-mono focus:outline-none focus:border-red-500"
                    autoFocus
                    placeholder=""
                  />
                  <button type="submit" className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black px-4 py-1 text-black active:border-inset active:bg-gray-400">
                    答え
                  </button>
                </div>
              </form>
            </>
          ) : (
             renderContent()
          )}

        </div>
      </div>
    </div>
  );
};

export default Underground;
