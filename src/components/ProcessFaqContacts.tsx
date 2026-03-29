import { useState } from "react";
import Icon from "@/components/ui/icon";

const PROCESS = [
  { num: "01", title: "Бриф", desc: "Разбираем задачу, цели, аудиторию и конкурентов" },
  { num: "02", title: "Концепция", desc: "Создаю 2–3 варианта визуального направления" },
  { num: "03", title: "Дизайн", desc: "Разрабатываю все экраны с анимациями" },
  { num: "04", title: "Правки", desc: "Две итерации правок включены в стоимость" },
  { num: "05", title: "Вёрстка", desc: "Передаю готовый сайт разработчику или верстаю сам" },
  { num: "06", title: "Поддержка", desc: "На связи 30 дней после запуска" },
];

const FAQ = [
  {
    q: "Что входит в стоимость?",
    a: "Анализ ниши и конкурентов, разработка структуры, полный дизайн всех секций, адаптив под мобильные, анимации, 2 раунда правок и готовый Figma-файл со всеми исходниками."
  },
  {
    q: "Как проходит оплата?",
    a: "50% предоплата перед стартом, 50% после сдачи финального макета. Работаю по договору или без — как удобнее."
  },
  {
    q: "Вы делаете вёрстку?",
    a: "Делаю дизайн и передаю макет разработчику. По запросу могу порекомендовать проверенного верстальщика или сверстать сам — обсуждается отдельно."
  },
  {
    q: "Сколько длится работа?",
    a: "Стандартный срок — 5–7 рабочих дней. Зависит от объёма страницы и скорости согласования с вашей стороны."
  },
  {
    q: "Можно ли посмотреть примеры до начала работы?",
    a: "Да, в разделе «Работы» есть реальные проекты. Также могу показать дополнительные кейсы по вашей нише в мессенджере."
  },
  {
    q: "Что нужно предоставить для старта?",
    a: "Бриф (заполним вместе), ваши материалы — тексты, фото, логотип. Если материалов нет — помогу с рекомендациями по контенту."
  },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 cursor-pointer"
      style={{ backgroundColor: open ? "rgba(249,83,198,0.05)" : "rgba(255,255,255,0.02)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-7 py-5 gap-4">
        <span className="font-display font-semibold text-white text-lg">{q}</span>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{ background: "linear-gradient(135deg, #f953c6, #a855f7)", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <Icon name="Plus" size={14} />
        </div>
      </div>
      {open && (
        <div className="px-7 pb-6 text-white/50 leading-relaxed animate-fade-scale">
          {a}
        </div>
      )}
    </div>
  );
};

const ProcessFaqContacts = () => {
  return (
    <>
      {/* PROCESS */}
      <section id="process" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-5" style={{ background: "radial-gradient(circle, #f953c6, transparent 70%)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#f953c6" }}>Процесс</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">Как я <span className="gradient-text">работаю</span></h2>
            <p className="text-white/40 max-w-lg mx-auto">Прозрачный процесс без неожиданностей — знаете, что происходит на каждом этапе</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS.map((step, i) => (
              <div key={step.num} className="reveal group relative glass p-8 rounded-2xl border border-white/5 hover:border-neon-pink/30 transition-all duration-300 hover-lift" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="font-display text-6xl font-bold mb-4 gradient-text" style={{ opacity: 0.25 }}>{step.num}</div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="reveal text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#f953c6" }}>FAQ</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">Частые <span className="gradient-text">вопросы</span></h2>
          </div>
          <div className="reveal flex flex-col gap-3">
            {FAQ.map(({ q, a }, i) => (
              <FaqItem key={i} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="reveal relative rounded-3xl overflow-hidden p-12 md:p-16 text-center" style={{ background: "linear-gradient(135deg, rgba(249,83,198,0.08), rgba(168,85,247,0.08), rgba(255,107,53,0.04))", border: "1px solid rgba(249,83,198,0.2)" }}>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #f953c6, transparent 70%)" }} />
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }} />
            </div>
            <div className="relative z-10">
              <span className="text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#f953c6" }}>Контакты</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
                Готовы к<br /><span className="gradient-text">новому проекту?</span>
              </h2>
              <p className="text-white/50 text-lg mb-12 max-w-lg mx-auto">
                Расскажите о задаче — обсудим детали и составим план. Первая консультация бесплатно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="https://max.ru/u/f9LHodD0cOLZX4VGiQ8pxyjY80LO2WQqtHkg0kHVIMbuSBPjl2GT__eH5l0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #f953c6, #a855f7)" }}
                >
                  <Icon name="MessageCircle" size={18} />
                  Написать в MAX
                </a>
                <a
                  href="https://vk.com/id706493863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold border border-white/20 hover:border-white/40 transition-all hover:scale-105 glass"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  <Icon name="Users" size={18} />
                  ВКонтакте
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/30 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={14} />
                  Отвечаю в течение 2 часов
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Globe" size={14} />
                  Приём заявок через MAX
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8" style={{ borderColor: "#1e1e2e" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-display text-xl font-bold gradient-text">Константин Фомин</div>
          <p className="text-white/30 text-sm">© 2026 · Дизайнер лендингов</p>
          <div className="flex gap-3">
            <a href="https://vk.com/id706493863" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/40 hover:text-white/80 transition-colors">
              <Icon name="Users" size={16} />
            </a>
            <a href="https://max.ru/u/f9LHodD0cOLZX4VGiQ8pxyjY80LO2WQqtHkg0kHVIMbuSBPjl2GT__eH5l0" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/40 hover:text-white/80 transition-colors">
              <Icon name="MessageCircle" size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ProcessFaqContacts;
