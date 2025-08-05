import Image from 'next/image';

// This component will fetch and display the partner list.
// For now, it uses a static list as we need to place the CSV file in the correct Next.js directory.
async function PartnerList() {
  // In a real Next.js app, you'd fetch this data from an API route or getStaticProps.
  // We will read the CSV file later.
  const partners = [
    { shop_name: '네일,오늘', city: '서울', district: '강남구' },
    { shop_name: '블링네일', city: '서울', district: '서초구' },
    { shop_name: '손끝의여왕', city: '경기', district: '성남시 분당구' },
    { shop_name: '네일하는날', city: '부산', district: '해운대구' },
    { shop_name: '핀치네일', city: '인천', district: '남동구' },
  ];

  return (
    <div id="partner-list" className="mt-8 flex flex-wrap justify-center gap-4">
      {partners.map((partner, index) => (
        <div key={index} className="partner-item rounded-lg px-4 py-2 bg-white/10">
          <strong className="font-bold">{partner.shop_name}</strong> ({partner.city} {partner.district})
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#1a1a2e] text-[#e0e0e0] min-h-screen">
      <header className="fixed top-0 z-50 w-full px-5 py-4 lg:px-20 bg-[rgba(26,26,46,0.8)] backdrop-blur-md">
        <nav className="flex items-center justify-between">
          <div className="font-playfair-display text-2xl font-bold text-white">LUNA INK</div>
          <ul className="flex items-center gap-8">
            <li><a href="#story" className="text-[#e0e0e0] hover:text-[#f0a500] transition-colors duration-300 text-lg">Our Story</a></li>
            <li><a href="#how-to" className="text-[#e0e0e0] hover:text-[#f0a500] transition-colors duration-300 text-lg">How to Use</a></li>
            <li><a href="#b2b" className="text-[#e0e0e0] hover:text-[#f0a500] transition-colors duration-300 text-lg">B2B Partnership</a></li>
            <li><a href="#store" className="text-[#e0e0e0] hover:text-[#f0a500] transition-colors duration-300 text-lg">Online Store</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        <section id="hero" className="flex h-screen min-h-[700px] items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'linear-gradient(rgba(26, 26, 46, 0.7), rgba(26, 26, 46, 0.9)), url("https://images.unsplash.com/photo-1501418611786-e29f9929fe42?q=80&w=2070&auto=format&fit=crop")' }}>
          <div className="hero-text">
            <Image src="https://i.imgur.com/sF5A9dC.png" alt="Dreamy Moon Tattoo" width={200} height={200} className="mx-auto mb-8 block" />
            <h1 className="font-playfair-display text-5xl md:text-7xl font-bold mb-2">달빛이 스며든 2주, LUNA INK</h1>
            <p className="text-xl md:text-2xl italic">당신의 피부 위에서 펼쳐지는 몽환적인 이야기</p>
          </div>
        </section>

        <section id="story" className="py-20 text-center lg:py-32 px-5">
            <h2 className="font-playfair-display text-4xl md:text-5xl font-bold mb-8 text-white">Our Story</h2>
            <p className="max-w-3xl mx-auto text-lg">루나 잉크는 단순한 타투가 아닙니다. 피부에 잠시 머무는 예술이며, 자신을 표현하는 새로운 방식입니다. 우리는 가장 안전하고 혁신적인 기술을 통해 2주 동안 당신의 개성을 가장 신비롭게 드러낼 방법을 연구했습니다.</p>
        </section>

        <section id="how-to" className="py-20 text-center lg:py-32 px-5">
            <h2 className="font-playfair-display text-4xl md:text-5xl font-bold mb-12 text-white">How to Use</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                <div className="step text-center p-8 rounded-lg w-full md:w-auto bg-white/5">
                    <div className="text-4xl font-bold mb-2 text-[#f0a500]">1</div>
                    <h3 className="text-2xl font-bold mb-2">부착 (1시간)</h3>
                    <p>원하는 부위에 타투를 붙이고 1시간 동안 기다립니다.</p>
                </div>
                <div className="text-4xl font-bold hidden md:block text-[#f0a500]">→</div>
                <div className="step text-center p-8 rounded-lg w-full md:w-auto bg-white/5 mt-8 md:mt-0">
                    <div className="text-4xl font-bold mb-2 text-[#f0a500]">2</div>
                    <h3 className="text-2xl font-bold mb-2">발색 (12-24시간)</h3>
                    <p>서서히 색이 올라오며 12~24시간 후 가장 선명해집니다.</p>
                </div>
                <div className="text-4xl font-bold hidden md:block text-[#f0a500]">→</div>
                <div className="step text-center p-8 rounded-lg w-full md:w-auto bg-white/5 mt-8 md:mt-0">
                    <div className="text-4xl font-bold mb-2 text-[#f0a500]">3</div>
                    <h3 className="text-2xl font-bold mb-2">지속 (약 2주)</h3>
                    <p>물의 접촉 빈도에 따라 약 2주간 지속됩니다.</p>
                </div>
            </div>
             <div className="extra-info mt-8 text-sm text-gray-400">
                <p><strong className="font-bold">발색 원리:</strong> (서대표님의 조사가 필요한 부분입니다. 예: 천연 과일 추출물이 피부의 단백질과 반응하여...)</p>
                <p><strong className="font-bold">빠르게 지우는 법:</strong> 클렌징 오일이나 리무버로 부드럽게 문질러 지울 수 있습니다.</p>
            </div>
        </section>

        <section id="b2b" className="py-20 text-center lg:py-32 px-5">
            <h2 className="font-playfair-display text-4xl md:text-5xl font-bold mb-8 text-white">B2B Partnership</h2>
            <p className="max-w-3xl mx-auto mb-12">전국의 네일샵, 왁싱샵 원장님들을 LUNA INK의 파트너로 초대합니다.<br/>고객에게 새로운 경험을 선사하고, 샵의 부가 수익을 창출할 최고의 기회입니다.</p>
            <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
                <div className="benefit flex-1">
                    <h4 className="text-2xl font-bold mb-2">차별화된 고객 경험</h4>
                    <p>기존 시술과 연계하여 고객 만족도를 높입니다.</p>
                </div>
                <div className="benefit flex-1">
                    <h4 className="text-2xl font-bold mb-2">높은 추가 수익</h4>
                    <p>매력적인 공급가로 높은 마진을 보장합니다.</p>
                </div>
                <div className="benefit flex-1">
                    <h4 className="text-2xl font-bold mb-2">본사 마케팅 지원</h4>
                    <p>인스타그램, 블로그 등 공동 마케팅을 지원합니다.</p>
                </div>
            </div>
            <button className="bg-[#f0a500] text-[#1a1a2e] rounded-lg px-8 py-4 text-lg font-bold cursor-pointer transition-transform hover:scale-105">파트너십 문의하기</button>
            <h3 className="text-3xl font-bold mt-20 mb-8">Our Partners</h3>
            <PartnerList />
        </section>

        <section id="store" className="py-20 text-center lg:py-32 px-5">
            <h2 className="font-playfair-display text-4xl md:text-5xl font-bold mb-8 text-white">Online Store</h2>
            <p className="text-xl">개인 고객을 위한 온라인 스토어는 현재 준비 중입니다.</p>
            <p className="coming-soon text-3xl font-bold font-bold mt-4 text-[#f0a500]">Coming Soon</p>
        </section>
      </main>

      <footer className="py-8 text-center text-sm bg-[#111]">
        <p>&copy; 2025 LUNA INK. All rights reserved.</p>
        <p>사업자명: 마케팅파크&엘리콘 | 대표: 박종수, 서종원</p>
      </footer>
    </div>
  );
}