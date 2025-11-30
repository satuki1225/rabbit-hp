
import React, { useState } from 'react';
import RetroButton from './RetroButton';

const Profile: React.FC = () => {
  const [showQuestions, setShowQuestions] = useState(false);

  if (showQuestions) {
    return (
      <div className="w-full max-w-2xl p-4 text-[#404040]">
        <h2 className="text-center text-xl font-bold text-pink-500 mb-6 font-pixel retro-text-shadow">
          ★ 管理人さつきに50の質問 ★
        </h2>
        
        <div className="bg-white border-2 border-gray-400 p-6 text-sm leading-relaxed font-mono shadow-lg">
          <div className="text-center text-xs text-gray-500 mb-4 border-b border-dashed border-gray-400 pb-2">
            (Last Update: 1998/10/12)
          </div>

          <div className="space-y-6">
            <div>
              <div className="font-bold text-blue-800">01.HN（ハンドルネーム）は？</div>
              <div className="pl-4">さつきです☆</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">02.由来は？</div>
              <div className="pl-4">なんとなく語感がすきだったから♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">03.誕生日は？</div>
              <div className="pl-4">夏生まれだよ～！</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">04.血液型は？</div>
              <div className="pl-4">O型です☆</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">05.性格を一言で！</div>
              <div className="pl-4">のんびり屋さんです。</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">06.自分ってどんなタイプ？</div>
              <div className="pl-4">おっちょこちょい系だと思う(汗)</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">07.好きな食べ物は？</div>
              <div className="pl-4">イクラ丼♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">08.苦手な食べ物は？</div>
              <div className="pl-4">たまねぎ！長ねぎはもっと苦手(泣)</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">09.好きな飲み物は？</div>
              <div className="pl-4">コーヒー！ブラックってかっこいいよネ！</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">10.好きな色は？</div>
              <div className="pl-4">断然、青☆</div>
            </div>

            <div>
              <div className="font-bold text-blue-800">11.尊敬する人は？</div>
              <div className="pl-4">中大兄皇子かな…なんか偉そうで(笑)</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">12.好きな季節は？</div>
              <div className="pl-4">夏でしょ♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">13.休日は何してる？</div>
              <div className="pl-4">映画館行く！あとお買い物♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">14.インドア？アウトドア？</div>
              <div className="pl-4">半々かなあ。</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">15.趣味は？</div>
              <div className="pl-4">お絵かきとネットサーフィン♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">16.最近ハマってることは？</div>
              <div className="pl-4">うさぎの絵を描くこと☆</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">17.好きなテレビ番組は？</div>
              <div className="pl-4">相棒！右京さんかっこいい！！</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">18.好きな音楽は？</div>
              <div className="pl-4">浜崎あゆみとかJ-POP全般♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">19.よく読む雑誌は？</div>
              <div className="pl-4">ファミ通☆</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">20.好きなゲーム機は？</div>
              <div className="pl-4">プレステ欲しい…！</div>
            </div>

            <div>
              <div className="font-bold text-blue-800">21.好きなジャンル（映画）は？</div>
              <div className="pl-4">アクション映画！燃える！！</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">22.お気に入りの場所は？</div>
              <div className="pl-4">古本屋さんめぐり♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">23.HPを作ったきっかけは？</div>
              <div className="pl-4">みんな作ってて楽しそうだったから☆</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">24.ネット歴は？</div>
              <div className="pl-4">半年くらい！親がなかなか許してくれなかったの(汗)</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">25.よく見るサイトは？</div>
              <div className="pl-4">ゲーム攻略系と公式サイト♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">26.ネットでの失敗談は？</div>
              <div className="pl-4">テレホ前につないで怒られたこと(^^;</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">27.一番ネットしたい時間は？</div>
              <div className="pl-4">期末テスト中！(笑)</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">28.このHPに来た人へ一言！</div>
              <div className="pl-4">リクエスト受付中！踏み逃げ禁止だよ～☆</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">29.カウンター回るとどう思う？</div>
              <div className="pl-4">ちょっとそわそわする…！</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">30.このHPで一番最初に描いた絵は？</div>
              <div className="pl-4">はじめてマウスで描いたうさぎの絵☆</div>
            </div>

            <div>
              <div className="font-bold text-blue-800">31.このHPのキャラは誰？</div>
              <div className="pl-4">うさ王様とクロです♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">32.CGI設置した感想は？</div>
              <div className="pl-4">感想とかもらえたらいいな～ってがんばった！</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">33.掲示板に書き込みあると？</div>
              <div className="pl-4">うれしい！たくさんほしいな☆</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">34.相互リンクは好き？</div>
              <div className="pl-4">うん♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">35.よくネットする時間は？</div>
              <div className="pl-4">夜11時過ぎ(笑) 夜更かし仲間いるかな？</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">36.ネットで一番あせった事は？</div>
              <div className="pl-4">BL絵をお母さんに見られたこと…(汗)</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">37.困る瞬間は？</div>
              <div className="pl-4">画像表示がめちゃ遅いとき！</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">38.使ってるブラウザは？</div>
              <div className="pl-4">IEだよ☆</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">39.ネットの楽しさって？</div>
              <div className="pl-4">趣味を共有できるとこ！仲良くなれるのがうれしい♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">40.お気に入り巡回サイト数は？</div>
              <div className="pl-4">相互さんのページは毎日チェック☆</div>
            </div>

            <div>
              <div className="font-bold text-blue-800">41.HPはいつまで続けたい？</div>
              <div className="pl-4">ずーっと続けたいな♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">42.テレホタイムの過ごし方は？</div>
              <div className="pl-4">11時につないで2時ごろ寝る！それまでに絵かいてる♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">43.寝る前にすることは？</div>
              <div className="pl-4">好きなカップリング探し(笑)</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">44.朝起きて最初にすることは？</div>
              <div className="pl-4">うさぎなでる☆</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">45.癒しって何？</div>
              <div className="pl-4">うさぎをもふもふすること！</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">46.うれしかった出来事は？</div>
              <div className="pl-4">キリ番報告もらったこと♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">47.かなしかった出来事は？</div>
              <div className="pl-4">テレホ前に寝落ちした日…(涙)</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">48.大切な人は？</div>
              <div className="pl-4">おばあちゃん☆</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">49.将来の夢は？</div>
              <div className="pl-4">ずっと楽しくネットしてたいな♪</div>
            </div>
            <div>
              <div className="font-bold text-blue-800">50.最後にひとこと！</div>
              <div className="pl-4">HP見てくれてありがとう☆ これからもよろしくね！！</div>
            </div>
          </div>
          
          <div className="text-center mt-8 text-gray-500">-- END --</div>
        </div>

        <div className="mt-8 text-center">
          <RetroButton onClick={() => setShowQuestions(false)}>プロフィールに戻る</RetroButton>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl p-4 text-[#404040]">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-pink-500 font-pixel retro-text-shadow inline-block border-b-4 border-dotted border-blue-400 pb-1">
          Profile
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="md:w-1/3 flex flex-col items-center bg-white p-2 border-2 border-pink-200 rotate-[-2deg]">
          <img 
            src="https://i.postimg.cc/L8CxCJ7J/purohu.png" 
            alt="Satsuki" 
            className="w-full h-auto border border-gray-400 mb-2"
          />
          <span className="text-xs text-gray-500">Self portrait...??</span>
        </div>

        <div className="md:w-2/3 w-full">
          <table className="w-full border-collapse border-2 border-gray-400 bg-white text-sm">
            <tbody>
              <tr>
                <td className="bg-[#ffccdd] p-2 border border-gray-400 font-bold text-center w-32">HN (Handle Name)</td>
                <td className="p-2 border border-gray-400">さつき (Satsuki)</td>
              </tr>
              <tr>
                <td className="bg-[#ccddff] p-2 border border-gray-400 font-bold text-center">Birthday</td>
                <td className="p-2 border border-gray-400">夏生まれ (詳しい日付は秘密☆)</td>
              </tr>
              <tr>
                <td className="bg-[#ffccdd] p-2 border border-gray-400 font-bold text-center">Blood Type</td>
                <td className="p-2 border border-gray-400">O型（大雑把って言わないで！ｗ）</td>
              </tr>
              <tr>
                <td className="bg-[#ccddff] p-2 border border-gray-400 font-bold text-center">Address</td>
                <td className="p-2 border border-gray-400">日本のどこか。白うさ王国の隣。</td>
              </tr>
              <tr>
                <td className="bg-[#ffccdd] p-2 border border-gray-400 font-bold text-center">Hobbies</td>
                <td className="p-2 border border-gray-400">
                  <ul className="list-disc pl-4">
                    <li>ネットサーフィン</li>
                    <li>ポストペット</li>
                    <li>お絵かき掲示板巡り</li>
                    <li>うさぎグッズ集め</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="bg-[#ccddff] p-2 border border-gray-400 font-bold text-center">Love</td>
                <td className="p-2 border border-gray-400">甘いもの、Cocco、椎名林檎、ICQでのチャット</td>
              </tr>
              <tr>
                <td className="bg-[#ffccdd] p-2 border border-gray-400 font-bold text-center">Hate</td>
                <td className="p-2 border border-gray-400">納豆、ゴキブリ、フリーズ</td>
              </tr>
              <tr>
                <td className="bg-[#ccddff] p-2 border border-gray-400 font-bold text-center">Comment</td>
                <td className="p-2 border border-gray-400">
                  管理人のさつきです。まだHTML勉強中ですが、頑張って更新します！<br/>
                  メル友募集中～☆ キリ番踏んだらBBSで教えてね！
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-8 text-center bg-gray-100 p-4 border border-dotted border-gray-400">
        <button 
          onClick={() => setShowQuestions(true)}
          className="font-bold mb-2 text-blue-600 hover:text-red-500 hover:underline cursor-pointer"
        >
          ★ 管理人さつきに50の質問 ★
        </button>
        <p className="text-xs">
          答えちゃいました！(笑)<br/>
          (Last Update: 1998/10/12)
        </p>
      </div>
    </div>
  );
};

export default Profile;
