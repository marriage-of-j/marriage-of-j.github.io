import { memo } from 'react';

const Petals = memo(() => {
  const petals = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 4}s`,
    // delay: `-${Math.random() * 4}s`,
    duration: `${3 + Math.random() * 4}s`,
    size: `${1 + Math.random() * 1.5}rem`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map(p => (
        <div
          key={p.id}
          className="absolute animate-fall"
          style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration, fontSize: p.size }}
        >
          🌹
        </div>
      ))}
    </div>
  );
});


export default Petals;