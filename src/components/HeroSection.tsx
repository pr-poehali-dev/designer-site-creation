import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  scrollTo: (id: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const HeroSection = ({ scrollTo, menuOpen, setMenuOpen }: HeroSectionProps) => {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-display text-xl font-bold gradient-text">
            КФ
          </button>
          <div className="hidden md:flex items-center gap-8">
            {[["works", "Работы"], ["about", "Обо мне"], ["services", "Услуги"], ["process", "Процесс"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-white/60 hover:text-white transition-colors text-sm font-medium tracking-wide">
                {label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo("contacts")}
            className="hidden md:block px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #f953c6, #a855f7)" }}
          >
            Обсудить проект
          </button>
          <button className="md:hidden text-white/60" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4 animate-fade-scale">
            {[["works", "Работы"], ["about", "Обо мне"], ["services", "Услуги"], ["process", "Процесс"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-white/70 text-left text-base">
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-orb absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #f953c6, transparent 70%)" }} />
          <div className="animate-orb delay-400 absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }} />
          <div className="animate-orb delay-200 absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #ff6b35, transparent 70%)" }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/60 text-sm">Доступен для новых проектов</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] mb-6 animate-slide-up delay-100">
              <span className="block text-white">Лендинг,</span>
              <span className="block gradient-text">который</span>
              <span className="block text-white">работает</span>
              <span className="block gradient-text-2">на тебя</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md animate-slide-up delay-200">
              Проектирую и рисую продающие страницы — с чёткой структурой, сильным визуалом и понятным призывом к действию. Без воды, только результат.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
              <button
                onClick={() => scrollTo("works")}
                className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #f953c6, #a855f7, #ff6b35)", backgroundSize: "200%", animation: "gradient-shift 3s ease infinite" }}
              >
                Смотреть работы
              </button>
              <button
                onClick={() => scrollTo("contacts")}
                className="px-8 py-4 rounded-full font-semibold text-white/80 border border-white/20 hover:border-white/40 hover:text-white transition-all"
              >
                Связаться
              </button>
            </div>
            <div className="flex gap-8 mt-12 animate-slide-up delay-400">
              {[["60+", "проектов"], ["6", "лет опыта"], ["98%", "довольных"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl font-bold gradient-text">{num}</div>
                  <div className="text-white/40 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block animate-slide-up delay-300">
            <div className="relative w-full max-w-sm ml-auto" style={{ aspectRatio: "3/4" }}>
              <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #f953c6, #a855f7, #ff6b35)", padding: "2px" }}>
                <div className="w-full h-full rounded-3xl overflow-hidden" style={{ backgroundColor: "#12121a" }}>
                  <img
                    src="https://cdn.poehali.dev/projects/7d0697cd-da43-4ea3-abb9-b57b8449bfc1/bucket/e158bdeb-6c79-45e6-b2b7-dcd7eec335cb.png"
                    alt="Константин Фомин — дизайнер"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 glass px-5 py-3 rounded-2xl animate-float">
                <div className="text-xs text-white/50 mb-1">Последний проект</div>
                <div className="text-sm font-semibold text-white">Bloom Shop</div>
                <div className="text-xs mt-0.5" style={{ color: "#f953c6" }}>+340% конверсия</div>
              </div>
              <div className="absolute -top-4 -right-4 glass w-16 h-16 rounded-2xl flex items-center justify-center animate-float delay-200">
                <span className="text-2xl">✦</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
