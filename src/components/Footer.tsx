export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm bg-[#111] text-gray-400">
      <p className="mb-2">&copy; 2025 LUNA INK. All rights reserved.</p>
      <p>
        사업자명: 마케팅파크&엘리콘 | 대표: 박종수, 서종원
      </p>
      <div className="mt-4 flex justify-center gap-6">
        <a href="#" className="hover:text-[#f0a500] transition-colors">
          이용약관
        </a>
        <a href="#" className="hover:text-[#f0a500] transition-colors">
          개인정보처리방침
        </a>
        <a href="mailto:info@luna-ink.com" className="hover:text-[#f0a500] transition-colors">
          문의하기
        </a>
      </div>
    </footer>
  );
}