"use client";





export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-5xl font-bold flex items-center gap-3">
        Hi <span className="wave text-5xl">👋</span>
      </h1>
      <style jsx>{`
        .wave {
          display: inline-block;
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          40% { transform: rotate(14deg); }
          50% { transform: rotate(-4deg); }
          60% { transform: rotate(10deg); }
          70% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </main>
  );
}
