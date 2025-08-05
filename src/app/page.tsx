import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowToUseSection from '@/components/HowToUseSection';
import PartnerList from '@/components/PartnerList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-[#1a1a2e] text-[#e0e0e0] min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Our Story Section */}
        <section id="story" className="py-20 text-center lg:py-32 px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed">
              루나 잉크는 단순한 타투가 아닙니다. 피부에 잠시 머무는 예술이며, 
              자신을 표현하는 새로운 방식입니다. 우리는 가장 안전하고 혁신적인 
              기술을 통해 2주 동안 당신의 개성을 가장 신비롭게 드러낼 방법을 
              연구했습니다.
            </p>
          </div>
        </section>

        <HowToUseSection />

        {/* B2B Partnership Section */}
        <section id="b2b" className="py-20 text-center lg:py-32 px-5 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              B2B Partnership
            </h2>
            <p className="max-w-3xl mx-auto mb-12 text-lg">
              전국의 네일샵, 왁싱샵 원장님들을 LUNA INK의 파트너로 초대합니다.
              <br />
              고객에게 새로운 경험을 선사하고, 샵의 부가 수익을 창출할 최고의 기회입니다.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="benefit bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <h4 className="text-2xl font-bold mb-4 text-[#f0a500]">
                  차별화된 고객 경험
                </h4>
                <p>기존 시술과 연계하여 고객 만족도를 높입니다.</p>
              </div>
              <div className="benefit bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <h4 className="text-2xl font-bold mb-4 text-[#f0a500]">
                  높은 추가 수익
                </h4>
                <p>매력적인 공급가로 높은 마진을 보장합니다.</p>
              </div>
              <div className="benefit bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <h4 className="text-2xl font-bold mb-4 text-[#f0a500]">
                  본사 마케팅 지원
                </h4>
                <p>인스타그램, 블로그 등 공동 마케팅을 지원합니다.</p>
              </div>
            </div>
            
            <button className="bg-[#f0a500] text-[#1a1a2e] rounded-lg px-8 py-4 text-lg font-bold cursor-pointer transition-all hover:scale-105 hover:shadow-xl">
              파트너십 문의하기
            </button>
            
            <h3 className="text-3xl font-bold mt-20 mb-8">Our Partners</h3>
            <PartnerList />
          </div>
        </section>

        {/* Online Store Section */}
        <section id="store" className="py-20 text-center lg:py-32 px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Online Store
            </h2>
            <p className="text-xl mb-4">
              개인 고객을 위한 온라인 스토어는 현재 준비 중입니다.
            </p>
            <p className="text-3xl font-bold text-[#f0a500]">Coming Soon</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}