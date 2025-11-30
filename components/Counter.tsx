import React, { useEffect, useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(4573);

  useEffect(() => {
    // Simulate hits periodically
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setCount(c => c + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const countStr = count.toString().padStart(6, '0');

  return (
    <div className="flex flex-col items-center my-4">
      <div className="text-red-600 font-bold text-lg md:text-xl mb-1 retro-text-shadow">
        あなたは
      </div>
      <div className="retro-border-inset bg-black p-1 border-4 border-gray-400">
        <div className="flex gap-[2px]">
          {countStr.split('').map((digit, i) => (
            <div 
              key={i} 
              className="w-6 h-9 bg-black text-yellow-400 font-mono text-3xl flex items-center justify-center leading-none"
              style={{ 
                fontFamily: "'Courier New', monospace",
                textShadow: "0 0 5px yellow"
              }}
            >
              {digit}
            </div>
          ))}
        </div>
      </div>
      <div className="text-red-600 font-bold text-lg md:text-xl mt-1 retro-text-shadow">
        人目のうさぎさんです！
      </div>
    </div>
  );
};

export default Counter;