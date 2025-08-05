interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '1',
    title: '부착 (1시간)',
    description: '원하는 부위에 타투를 붙이고 1시간 동안 기다립니다.',
  },
  {
    number: '2',
    title: '발색 (12-24시간)',
    description: '서서히 색이 올라오며 12~24시간 후 가장 선명해집니다.',
  },
  {
    number: '3',
    title: '지속 (약 2주)',
    description: '물의 접촉 빈도에 따라 약 2주간 지속됩니다.',
  },
];

export default function HowToUseSection() {
  return (
    <section id="how-to" className="py-20 text-center lg:py-32 px-5">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
        How to Use
      </h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col md:flex-row items-center gap-8">
            <div className="step text-center p-8 rounded-lg w-full md:w-auto bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="text-4xl font-bold mb-4 text-[#f0a500]">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="text-4xl font-bold text-[#f0a500] hidden md:block">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="extra-info mt-8 text-sm text-gray-400 max-w-3xl mx-auto">
        <p className="mb-2">
          <strong className="font-bold text-gray-300">발색 원리:</strong>{' '}
          특수 잉크가 피부의 각질층에 일시적으로 침투하여 자연스러운 색상을 만들어냅니다.
        </p>
        <p>
          <strong className="font-bold text-gray-300">빠르게 지우는 법:</strong>{' '}
          클렌징 오일이나 전용 리무버로 부드럽게 문질러 지울 수 있습니다.
        </p>
      </div>
    </section>
  );
}