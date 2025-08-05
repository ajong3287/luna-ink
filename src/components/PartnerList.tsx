import { Partner } from '@/types';

// 실제 데이터는 나중에 API나 CSV에서 가져올 수 있습니다
const partners: Partner[] = [
  { shop_name: '네일,오늘', city: '서울', district: '강남구' },
  { shop_name: '블링네일', city: '서울', district: '서초구' },
  { shop_name: '손끝의여왕', city: '경기', district: '성남시 분당구' },
  { shop_name: '네일하는날', city: '부산', district: '해운대구' },
  { shop_name: '핀치네일', city: '인천', district: '남동구' },
];

export default function PartnerList() {
  return (
    <div id="partner-list" className="mt-8 flex flex-wrap justify-center gap-4">
      {partners.map((partner, index) => (
        <div 
          key={index} 
          className="partner-item rounded-lg px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
        >
          <strong className="font-bold text-[#f0a500]">{partner.shop_name}</strong>
          <span className="ml-2 text-sm opacity-80">
            ({partner.city} {partner.district})
          </span>
        </div>
      ))}
    </div>
  );
}