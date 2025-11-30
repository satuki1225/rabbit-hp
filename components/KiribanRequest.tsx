
import React from 'react';
import RetroButton from './RetroButton';

const KiribanRequest: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-4 text-[#404040]">
      <h2 className="text-center text-xl text-pink-600 font-bold mb-6 font-pixel retro-text-shadow">
        ★☆★ キリ番リクエスト ★☆★
      </h2>

      <div className="bg-[#fff0f5] border-2 border-pink-400 p-4 mb-8 shadow-md">
        <h3 className="text-center font-bold text-red-600 border-b border-pink-300 pb-2 mb-4">
          ～ カウプレについて ～
        </h3>
        <p className="text-sm leading-relaxed mb-4">
          当サイトでは、アクセスカウンターのキリの良い数字（キリ番）を踏まれた方に、
          記念としてイラストや小説をプレゼントしています♪<br/>
          <br/>
          見事キリ番をゲットされた方は、
          <span className="font-bold text-blue-600">BBS（掲示板）</span>
          にてご報告ください！<br/>
          <span className="text-xs text-gray-500">（※証拠として画面を保存した画像を送ってくれると嬉しいです！）</span>
        </p>
        <div className="text-center animate-pulse font-bold text-red-500 text-lg border-2 border-red-500 p-1 bg-yellow-100 rotate-[-1deg]">
          踏み逃げ厳禁！！(T_T)
        </div>
      </div>

      {/* Latest Gift Section */}
      <div className="mb-8 border-4 border-double border-gray-400 p-4 bg-white text-center relative">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-2 text-xs font-bold border border-white">
          New!!
        </div>
        <div className="text-red-500 font-bold mb-2 text-lg">★ Latest Gift ★</div>
        <div className="mb-2 text-sm text-blue-800 font-bold border-b border-dashed border-gray-300 pb-2 inline-block">
           5555Hit Thanks: かいりんさんへ
        </div>
        <div className="my-4 flex justify-center">
          {/* Placeholder for Ninja Hamster - User to replace src later */}
          <div className="border-2 border-black p-1 bg-gray-100 inline-block">
             <img 
               src="https://i.postimg.cc/wvjVzgmz/kairi.png" 
               alt="Ninja Hamster Illustration" 
               className="max-w-full h-auto"
             />
          </div>
        </div>
        <div className="text-xs text-gray-500 bg-[#f0f8ff] p-2 border border-blue-200 text-left mx-auto w-3/4">
          リクエストの「忍者ハムスター」です！<br/>
          手裏剣を構えてるところを描いてみました☆<br/>
          かいりんさん、キリ番ゲットおめでとうございます～♪<br/>
          よかったらお持ち帰りしてね！
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-blue-800 border-l-4 border-blue-500 pl-2 mb-3">
          現在狙い目のキリ番
        </h3>
        <table className="w-full border-collapse border border-gray-400 text-sm bg-white">
          <thead>
            <tr className="bg-[#e0e0ff]">
              <th className="border border-gray-400 p-2">Number</th>
              <th className="border border-gray-400 p-2">Name</th>
              <th className="border border-gray-400 p-2">Prize</th>
              <th className="border border-gray-400 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
             <tr>
              <td className="border border-gray-400 p-2 text-center font-bold text-gray-400 line-through">5000</td>
              <td className="border border-gray-400 p-2 text-center text-gray-500">みうさん</td>
              <td className="border border-gray-400 p-2 text-center text-gray-500">CGイラスト</td>
              <td className="border border-gray-400 p-2 text-center text-gray-500">終了</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 text-center font-bold text-red-500">5555</td>
              <td className="border border-gray-400 p-2 text-center font-bold text-blue-600">かいりんさん</td>
              <td className="border border-gray-400 p-2 text-center">忍者ハムスター</td>
              <td className="border border-gray-400 p-2 text-center text-red-500 font-bold animate-pulse">UP!!</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 text-center font-bold text-red-500">6000</td>
              <td className="border border-gray-400 p-2 text-center text-gray-400">????</td>
              <td className="border border-gray-400 p-2 text-center">SS（ショートストーリー）</td>
              <td className="border border-gray-400 p-2 text-center">空き</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 text-center font-bold">その他</td>
              <td className="border border-gray-400 p-2 text-center">-</td>
              <td className="border border-gray-400 p-2 text-center">要相談</td>
              <td className="border border-gray-400 p-2 text-center">-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-green-800 border-l-4 border-green-500 pl-2 mb-3">
          リクエスト可能ジャンル
        </h3>
        <ul className="list-disc pl-6 text-sm space-y-2 bg-[#f0fff0] p-4 border border-green-300">
          <li>
            <span className="font-bold text-green-700">白うさ王国キャラ</span>
            <br/><span className="text-xs">（王様、クロ、妹ちゃん etc...）</span>
          </li>
          <li>
            <span className="font-bold text-green-700">オリジナル</span>
            <br/><span className="text-xs">（うさぎ耳の女の子とか得意です☆）</span>
          </li>
          <li>
            <span className="font-bold text-green-700">BL（ボーイズラブ）</span>
            <br/><span className="text-xs">（※裏ページに行ける方のみ。甘々～シリアスまでOK！）</span>
          </li>
          <li>
            <span className="font-bold text-gray-500">× 描けないもの</span>
            <br/><span className="text-xs">（メカ、リアルな似顔絵、R-18な過激すぎるもの）</span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-purple-800 border-l-4 border-purple-500 pl-2 mb-3">
          過去のリクエスト消化状況
        </h3>
        <div className="text-xs text-right mb-1">遅くなってごめんなさい(汗)</div>
        <table className="w-full border-collapse border border-gray-400 text-sm bg-white">
          <thead>
            <tr className="bg-[#ffe0f0]">
              <th className="border border-gray-400 p-2 w-16">Hit</th>
              <th className="border border-gray-400 p-2">Name</th>
              <th className="border border-gray-400 p-2">Request</th>
              <th className="border border-gray-400 p-2 w-16">State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2 text-center">4500</td>
              <td className="border border-gray-400 p-2 text-center">みかちゃん</td>
              <td className="border border-gray-400 p-2">王様とクロの2ショット</td>
              <td className="border border-gray-400 p-2 text-center text-blue-600 font-bold">展示中</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 text-center">4444</td>
              <td className="border border-gray-400 p-2 text-center">名無しさん</td>
              <td className="border border-gray-400 p-2">（報告なし）</td>
              <td className="border border-gray-400 p-2 text-center text-gray-400">-</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 text-center">4000</td>
              <td className="border border-gray-400 p-2 text-center">ゆうさん</td>
              <td className="border border-gray-400 p-2">雨の日の二人（SS）</td>
              <td className="border border-gray-400 p-2 text-center text-blue-600 font-bold">展示中</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 text-center">3333</td>
              <td className="border border-gray-400 p-2 text-center">Ｋさん</td>
              <td className="border border-gray-400 p-2">かっこいいクロさん</td>
              <td className="border border-gray-400 p-2 text-center text-red-500">作成中</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center mt-8">
        <RetroButton onClick={() => window.history.back()}>戻る</RetroButton>
      </div>
    </div>
  );
};

export default KiribanRequest;
