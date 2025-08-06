"use client";
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
      `}</style>
      <div className={styles.container} style={{
        fontFamily: '"Gowun Batang", "Cormorant Garamond", serif'
      }}>
        {/* Header */}
        <header style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '1rem 1.25rem',
          backgroundColor: 'rgba(26, 26, 46, 0.9)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1280px',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '400',
              color: 'white',
              letterSpacing: '0.15em',
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic'
            }}>
              LUNA INK
            </div>

            <ul style={{
              display: 'flex',
              gap: '2rem',
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}>
              <li><a href="#story" style={{ color: '#e0e0e0', textDecoration: 'none' }}>Our Story</a></li>
              <li><a href="#how-to" style={{ color: '#e0e0e0', textDecoration: 'none' }}>How to Use</a></li>
              <li><a href="#b2b" style={{ color: '#e0e0e0', textDecoration: 'none' }}>B2B Partnership</a></li>
              <li><a href="#store" style={{ color: '#e0e0e0', textDecoration: 'none' }}>Online Store</a></li>
            </ul>
          </nav>
        </header>

        <main style={{ paddingTop: '80px' }}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                달빛이 스며든 2주, LUNA INK
              </h1>
              <p className={styles.heroSubtitle}>
                당신의 피부 위에서 펼쳐지는 몽환적인 이야기
              </p>
              <button className={styles.ctaButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(240, 165, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                컬렉션 보기
              </button>
            </div>
          </section>

          {/* Our Story Section */}
          <section id="story" className={styles.storySection}>
            <div className={styles.storyContent}>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p className={styles.storyText}>
                루나 잉크는 단순한 타투가 아닙니다. 피부에 잠시 머무는 예술이며,
                자신을 표현하는 새로운 방식입니다. 우리는 가장 안전하고 혁신적인
                기술을 통해 2주 동안 당신의 개성을 가장 신비롭게 드러낼 방법을
                연구했습니다.
              </p>
            </div>
          </section>

          {/* How to Use Section */}
          <section id="how-to" className={styles.howToUseSection}>
            <h2 className={styles.sectionTitle}>How to Use</h2>
            <div className={styles.howToUseGrid}>
              <div className={styles.howToUseCard}>
                <div className={styles.howToUseStepNumber}>1</div>
                <h3 className={styles.howToUseStepTitle}>부착 (1시간)</h3>
                <p className={styles.howToUseStepDescription}>원하는 부위에 타투를 붙이고 1시간 동안 기다립니다.</p>
              </div>
              <div className={styles.howToUseCard}>
                <div className={styles.howToUseStepNumber}>2</div>
                <h3 className={styles.howToUseStepTitle}>발색 (12-24시간)</h3>
                <p className={styles.howToUseStepDescription}>서서히 색이 올라오며 12~24시간 후 가장 선명해집니다.</p>
              </div>
              <div className={styles.howToUseCard}>
                <div className={styles.howToUseStepNumber}>3</div>
                <h3 className={styles.howToUseStepTitle}>지속 (약 2주)</h3>
                <p className={styles.howToUseStepDescription}>물의 접촉 빈도에 따라 약 2주간 지속됩니다.</p>
              </div>
            </div>
          </section>

          {/* B2B Partnership Section */}
          <section id="b2b" className={styles.b2bSection}>
            <div className={styles.b2bContent}>
              <h2 className={styles.sectionTitle}>B2B Partnership</h2>
              <p className={styles.b2bDescription}>
                전국의 네일샵, 왁싱샵 원장님들을 LUNA INK의 파트너로 초대합니다.
                <br />
                고객에게 새로운 경험을 선사하고, 샵의 부가 수익을 창출할 최고의 기회입니다.
              </p>

              <div className={styles.b2bBenefitGrid}>
                <div className={styles.b2bBenefitCard}>
                  <h4 className={styles.b2bBenefitTitle}>
                    차별화된 고객 경험
                  </h4>
                  <p>기존 시술과 연계하여 고객 만족도를 높입니다.</p>
                </div>
                <div className={styles.b2bBenefitCard}>
                  <h4 className={styles.b2bBenefitTitle}>
                    높은 추가 수익
                  </h4>
                  <p>매력적인 공급가로 높은 마진을 보장합니다.</p>
                </div>
                <div className={styles.b2bBenefitCard}>
                  <h4 className={styles.b2bBenefitTitle}>
                    본사 마케팅 지원
                  </h4>
                  <p>인스타그램, 블로그 등 공동 마케팅을 지원합니다.</p>
                </div>
              </div>

              <button className={styles.ctaButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(240, 165, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                파트너십 문의하기
              </button>

              <h3 className={styles.partnersTitle}>
                Our Partners
              </h3>

              <div className={styles.partnersList}>
                {['네일,오늘 (서울 강남구)', '블링네일 (서울 서초구)', '손끝의여왕 (경기 성남시)', '네일하는날 (부산 해운대구)', '핀치네일 (인천 남동구)'].map((partner, index) => (
                  <div key={index} className={styles.partnerItem}>
                    <strong className={styles.partnerName}>{partner.split(' (')[0]}</strong>
                    <span className={styles.partnerLocation}>
                      ({partner.split(' (')[1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Online Store Section */}
          <section id="store" className={styles.onlineStoreSection}>
            <div className={styles.onlineStoreContent}>
              <h2 className={styles.sectionTitle}>Online Store</h2>
              <p className={styles.onlineStoreMessage}>
                개인 고객을 위한 온라인 스토어는 현재 준비 중입니다.
              </p>
              <p className={styles.comingSoonText}>
                Coming Soon
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <p className={styles.footerText}>&copy; 2025 LUNA INK. All rights reserved.</p>
          <p>사업자명: 마케팅파크&엘리콘 | 대표: 박종수, 서종원</p>
        </footer>
      </div>
    </>
  );
}