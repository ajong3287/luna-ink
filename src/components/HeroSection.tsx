import Image from 'next/image';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative flex h-screen min-h-[700px] items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: `linear-gradient(rgba(26, 26, 46, 0.7), rgba(26, 26, 46, 0.9)), url("https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2940")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Animated Particles (CSS only) */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4">
        <Image 
          src="https://i.imgur.com/sF5A9dC.png" 
          alt="Dreamy Moon Tattoo" 
          width={200} 
          height={200} 
          className="mx-auto mb-8 block opacity-80"
          priority
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeInUp">
          달빛이 스며든 2주, LUNA INK
        </h1>
        <p className="text-xl md:text-2xl italic opacity-90 animate-fadeInUp animation-delay-200">
          당신의 피부 위에서 펼쳐지는 몽환적인 이야기
        </p>
        <button className="mt-8 bg-[#f0a500] text-[#1a1a2e] rounded-lg px-8 py-4 text-lg font-bold cursor-pointer transition-all hover:scale-105 hover:shadow-xl animate-fadeInUp animation-delay-400">
          컬렉션 보기
        </button>
      </div>
    </section>
  );
}