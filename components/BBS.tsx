import React, { useState } from 'react';
import RetroButton from './RetroButton';

interface Post {
  id: number;
  name: string;
  date: string;
  title: string;
  content: string;
}

const BBS: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 2,
      name: 'さつき',
      date: '1998/10/25(Sun) 14:30',
      title: 'Re: はじめまして！',
      content: '＞うさぎ好きさん\nカキコありがとー！\nこれからも更新がんばるんで、また遊びに来てね☆\nキリ番ゲットしたら報告よろしくぅ～(^_^)/'
    },
    {
      id: 1,
      name: 'うさぎ好き',
      date: '1998/10/24(Sat) 21:15',
      title: 'はじめまして！',
      content: 'ネットサーフィンしてたらたどり着きました。\n白うさぎさんちょーかわいいですね！！\n私もウサギ飼いたいです。\nまた来ます♪'
    }
  ]);

  const [form, setForm] = useState({ name: '', email: '', title: '', content: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.content) {
      alert('名前とメッセージは必須だぴょん！');
      return;
    }
    const newPost: Post = {
      id: Date.now(),
      name: form.name,
      date: new Date().toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(',', ''),
      title: form.title || '無題',
      content: form.content
    };
    setPosts([newPost, ...posts]);
    setForm({ name: '', email: '', title: '', content: '' });
  };

  return (
    <div className="w-full max-w-2xl bg-[#fffff0] p-4 border-2 border-[#808080] shadow-inner text-sm">
      <h2 className="text-center text-xl text-red-600 font-bold mb-4">★☆★ 白うさ掲示板 ★☆★</h2>
      
      <div className="text-center text-xs mb-4">
        <p>楽しくお話ししましょう。荒らしは禁止です。</p>
        <p>タグは使えません。</p>
      </div>

      <div className="bg-[#e0e0e0] p-2 border border-gray-500 mb-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2 items-center">
            <label className="w-16">おなまえ</label>
            <input 
              type="text" 
              className="border border-gray-600 px-1" 
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <label className="w-16">E-mail</label>
            <input 
              type="text" 
              className="border border-gray-600 px-1" 
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <label className="w-16">題名</label>
            <input 
              type="text" 
              className="border border-gray-600 px-1 w-64" 
              value={form.title}
              onChange={e => setForm({...form, title: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>コメント</label>
            <textarea 
              rows={4} 
              className="border border-gray-600 w-full p-1"
              value={form.content}
              onChange={e => setForm({...form, content: e.target.value})}
            />
          </div>
          <div className="text-center mt-2">
            <RetroButton type="submit">送信する</RetroButton>
            <RetroButton type="button" onClick={() => setForm({ name: '', email: '', title: '', content: '' })} className="ml-2">リセット</RetroButton>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-dashed border-gray-400 pb-4">
            <div className="bg-[#ccddff] text-[#000080] font-bold px-2 py-1 mb-2">
              [{post.id}] <span className="text-red-600">{post.title}</span> 投稿者：<b>{post.name}</b> 投稿日：{post.date}
            </div>
            <div className="px-4 whitespace-pre-wrap leading-relaxed text-[#404040]">
              {post.content}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8 text-xs">
        [<span className="text-blue-600 cursor-pointer underline">1</span>] 
        [<span className="text-blue-600 cursor-pointer underline">2</span>] 
        [<span className="text-blue-600 cursor-pointer underline">3</span>] 
      </div>
    </div>
  );
};

export default BBS;