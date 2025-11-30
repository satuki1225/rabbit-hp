import React, { useState, useRef, useEffect } from 'react';
import RetroButton from './RetroButton';
import { ChatMessage } from '../types';

interface ChatWindowProps {
  onClose: () => void;
}

const BOT_RESPONSES = [
  "うさぎの王様だよ～ 今日は何しに来たの？",
  "キリ番まだかな？55555狙ってね♪",
  "BBSに書き込んでくれると嬉しいな♡",
  "地下室の入り口は……秘密だよ？",
  "ゆっくりしていってね！",
  "カウプレ欲しい人～？報告してね～",
  "今日はいい天気だぴょん",
  "にんじん食べたい…誰か持ってない？",
  "アクセスありがとう！キリ番報告はBBSへ！",
  "( ˘ω˘)ｽﾔｧ",
  "・・・",
  "荒らしは帰ってくだサイ！(怒)",
  "メル友募集中だぴょん☆",
  "その話、詳しく聞かせてほしいな～",
  "最近、肩が凝るんだよね…王冠が重くて…",
  "クロはどこ行ったんだろ？",
  "相互リンク大歓迎だよ！バナー持ってってね♪",
  "えっ、マジで！？(ﾟДﾟ)",
  "（ポリポリ…にんじん美味しい…）",
  "チャット重くない？テレホタイムだからかな？",
  "ようこそ白うさ王国へ！",
  "管理人のさつきは今、お絵かき中みたいだよ。",
  "裏ページ見た？見てないよね？ね？",
  "わーい！(∩´∀｀)∩",
  "・・・Zzz・・・はっ！寝てないよ！",
  "カキコよろしくね～☆",
  "PostPetのメールチェックしなきゃ…",
  "ネスケ派？IE派？僕はネスケ派！",
  "工事中のページが多くてごめんね(汗)",
  "（王様は忙しいのです。たぶん。）"
];

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'ようこそ白うさ王国へ！私が王様だぴょん。何か用かな？ (｀・ω・´)' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setIsLoading(true);
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);

    // Simulate 1998 network speed/processing time
    setTimeout(() => {
      const randomResponse = BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)];
      setMessages(prev => [...prev, { role: 'model', text: randomResponse }]);
      setIsLoading(false);
    }, 800 + Math.random() * 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 md:w-96 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black shadow-xl z-50 flex flex-col font-sans">
      {/* Title Bar */}
      <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] p-1 flex justify-between items-center cursor-move">
        <span className="text-white font-bold text-sm px-1">King's Messenger Ver 1.0</span>
        <button 
          onClick={onClose}
          className="bg-[#c0c0c0] w-5 h-5 flex items-center justify-center border-t border-l border-white border-b border-r border-black text-xs font-bold leading-none active:border-inset"
        >
          ×
        </button>
      </div>

      {/* Menu Bar */}
      <div className="px-1 py-0.5 text-xs flex gap-3 border-b border-gray-400 mb-1">
        <span className="underline cursor-pointer">F</span>ile
        <span className="underline cursor-pointer">E</span>dit
        <span className="underline cursor-pointer">H</span>elp
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-2 bg-white border-2 border-inset border-gray-400 m-1 h-64 overflow-y-auto font-sans text-sm">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.role === 'user' ? 'text-blue-800' : 'text-black'}`}>
            <span className="font-bold">{msg.role === 'user' ? '> Guest:' : '> King:'}</span>
            <div className="pl-2 whitespace-pre-wrap">{msg.text}</div>
          </div>
        ))}
        {isLoading && <div className="text-gray-500 italic pl-2">Thinking...</div>}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-2 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border-2 border-inset border-gray-400 px-1 text-sm focus:outline-none"
          placeholder="Message..."
          autoFocus
        />
        <RetroButton type="submit" disabled={isLoading}>
          Send
        </RetroButton>
      </form>
    </div>
  );
};

export default ChatWindow;