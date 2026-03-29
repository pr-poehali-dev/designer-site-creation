import { useState } from "react";
import Icon from "@/components/ui/icon";

const WORKS = [
  {
    id: 1,
    title: "Лендинг для фитнес-клуба",
    category: "Лендинг",
    tags: ["UX/UI", "Анимации"],
    image: "https://cdn.poehali.dev/projects/7d0697cd-da43-4ea3-abb9-b57b8449bfc1/files/dfcbe7c6-49e6-4ebd-803b-6732fcaceca6.jpg",
    color: "from-pink-500 to-purple-600",
  },
  {
    id: 2,
    title: "Лендинг дизайн-студии",
    category: "Лендинг",
    tags: ["UX/UI", "Брендинг"],
    image: "https://cdn.poehali.dev/projects/7d0697cd-da43-4ea3-abb9-b57b8449bfc1/files/25caa313-fe7d-4521-912e-99b1073bbeec.jpg",
    color: "from-orange-500 to-pink-500",
  },
  {
    id: 3,
    title: "Лендинг онлайн-курсов",
    category: "Лендинг",
    tags: ["UX/UI", "Конверсия"],
    image: "https://cdn.poehali.dev/projects/7d0697cd-da43-4ea3-abb9-b57b8449bfc1/files/dfcbe7c6-49e6-4ebd-803b-6732fcaceca6.jpg",
    color: "from-teal-500 to-purple-600",
  },
  {
    id: 4,
    title: "Лендинг IT-продукта",
    category: "Лендинг",
    tags: ["UX/UI", "SaaS"],
    image: "https://cdn.poehali.dev/projects/7d0697cd-da43-4ea3-abb9-b57b8449bfc1/files/25caa313-fe7d-4521-912e-99b1073bbeec.jpg",
    color: "from-purple-600 to-pink-500",
  },
  {
    id: 5,
    title: "Лендинг для застройщика",
    category: "Лендинг",
    tags: ["UX/UI", "Недвижимость"],
    image: "https://cdn.poehali.dev/projects/7d0697cd-da43-4ea3-abb9-b57b8449bfc1/files/dfcbe7c6-49e6-4ebd-803b-6732fcaceca6.jpg",
    color: "from-pink-400 to-orange-500",
  },
  {
    id: 6,
    title: "Лендинг юридических услуг",
    category: "Лендинг",
    tags: ["UX/UI", "B2B"],
    image: "https://cdn.poehali.dev/projects/7d0697cd-da43-4ea3-abb9-b57b8449bfc1/files/25caa313-fe7d-4521-912e-99b1073bbeec.jpg",
    color: "from-purple-500 to-blue-600",
  },
];

const FILTERS = ["Все", "Лендинг"];

const WorksAboutServices = () => {
  const [activeFilter, setActiveFilter] = useState("Все");
  const filtered = activeFilter === "Все" ? WORKS : WORKS.filter(w => w.category === activeFilter);

  return (
    <>
      {/* WORKS */}
      <section id="works" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#f953c6" }}>Портфолио</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-white">Избранные<br /><span className="gradient-text">работы</span></h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === f ? "text-white" : "text-white/50 glass hover:text-white/80"}`}
                  style={activeFilter === f ? { background: "linear-gradient(135deg, #f953c6, #a855f7)" } : {}}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((work, i) => (
              <div
                key={work.id}
                className="reveal group relative rounded-2xl overflow-hidden cursor-pointer hover-lift border border-white/5"
                style={{ backgroundColor: "#12121a", animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon name="ArrowUpRight" size={20} />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-3">
                    {work.tags.map(t => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{work.title}</h3>
                  <p className="text-white/40 text-sm mt-1">{work.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5" style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10">
                <img src="https://cdn.poehali.dev/projects/7d0697cd-da43-4ea3-abb9-b57b8449bfc1/bucket/e158bdeb-6c79-45e6-b2b7-dcd7eec335cb.png" alt="Константин" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0a0a0f 0%, transparent 50%)" }} />
              </div>
              <div className="absolute bottom-8 left-8 right-8 glass p-5 rounded-2xl">
                <div className="flex gap-2 flex-wrap">
                  {["Figma", "Adobe XD", "Principle", "Webflow", "After Effects"].map(tool => (
                    <span key={tool} className="text-xs px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, rgba(249,83,198,0.2), rgba(168,85,247,0.2))", border: "1px solid rgba(249,83,198,0.3)", color: "#f953c6" }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#f953c6" }}>Обо мне</span>
              <h2 className="font-display text-5xl font-bold text-white mb-6">Привет, я <span className="gradient-text">Константин</span></h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Дизайнер лендингов с 6 годами опыта. Делаю только посадочные страницы — и делаю их хорошо. Каждый лендинг заточен под конкретную цель: заявка, звонок, покупка.
              </p>
              <p className="text-white/50 leading-relaxed mb-10">
                Работал с бизнесами разных ниш: онлайн-школы, застройщики, юристы, IT-продукты, фитнес. Мой подход: сначала стратегия, потом дизайн. Результат — страницы, которые продают.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Palette", label: "UX/UI дизайн" },
                  { icon: "Smartphone", label: "Мобильный дизайн" },
                  { icon: "TrendingUp", label: "Повышение конверсии" },
                  { icon: "Sparkles", label: "Анимация и motion" },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-3 glass p-4 rounded-xl">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, rgba(249,83,198,0.2), rgba(168,85,247,0.2))" }}>
                      <Icon name={icon} size={16} style={{ color: "#f953c6" }} />
                    </div>
                    <span className="text-white/70 text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#f953c6" }}>Услуги</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">Что я <span className="gradient-text">делаю</span></h2>
            <p className="text-white/40 max-w-lg mx-auto">Полный цикл дизайна — от концепции до передачи в разработку</p>
          </div>

          <div className="reveal rounded-3xl border overflow-hidden" style={{ borderColor: "#1e1e2e", background: "linear-gradient(135deg, rgba(249,83,198,0.05), rgba(168,85,247,0.05))" }}>
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display text-4xl font-bold text-white">Лендинг под ключ</h3>
                    <span className="text-xs px-3 py-1 rounded-full font-medium text-white" style={{ background: "linear-gradient(135deg, #f953c6, #a855f7)" }}>Единственный тариф</span>
                  </div>
                  <p className="text-white/50 text-lg max-w-xl">Полноценная продающая страница — от анализа задачи до готового макета. Всё включено, никаких скрытых доплат.</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="font-display text-5xl font-bold gradient-text">от 35 000 ₽</div>
                  <div className="flex items-center justify-end gap-2 mt-2 text-white/40 text-sm">
                    <Icon name="Clock" size={14} style={{ color: "#a855f7" }} />
                    5–7 рабочих дней
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: "Search", title: "Анализ и стратегия", desc: "Изучаю нишу, конкурентов и целевую аудиторию. Выстраиваю структуру страницы под конкретную цель — заявка, звонок или продажа." },
                  { icon: "Layout", title: "Прототип и структура", desc: "Создаю wireframe всех секций: оффер, выгоды, кейсы, отзывы, CTA. Согласовываем логику до начала дизайна." },
                  { icon: "Palette", title: "Уникальный дизайн", desc: "Разрабатываю визуал с нуля — никаких шаблонов. Фирменный стиль, типографика, цвета, иконки и иллюстрации." },
                  { icon: "Sparkles", title: "Анимации и микровзаимодействия", desc: "Добавляю плавные переходы и hover-эффекты, которые удерживают внимание и делают страницу живой." },
                  { icon: "Smartphone", title: "Адаптив под все устройства", desc: "Дизайн идеально выглядит на телефоне, планшете и десктопе. Каждый экран прорабатывается отдельно." },
                  { icon: "RefreshCw", title: "2 раунда правок", desc: "После сдачи макета вношу правки по вашим комментариям. Два полных раунда корректировок включены в стоимость." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-4 p-5 rounded-2xl glass border border-white/5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "linear-gradient(135deg, rgba(249,83,198,0.2), rgba(168,85,247,0.2))" }}>
                      <Icon name={icon} size={18} style={{ color: "#f953c6" }} />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-white mb-1">{title}</div>
                      <div className="text-white/45 text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-8 border-t border-white/5">
                <div className="flex flex-wrap gap-3">
                  {["Figma-макет", "Все исходники", "Мобильная версия", "Поддержка 30 дней"].map(tag => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full text-white/50 border border-white/10">{tag}</span>
                  ))}
                </div>
                <a
                  href="https://max.ru/u/f9LHodD0cOLZX4VGiQ8pxyjY80LO2WQqtHkg0kHVIMbuSBPjl2GT__eH5l0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #f953c6, #a855f7)" }}
                >
                  <Icon name="MessageCircle" size={16} />
                  Обсудить проект
                </a>
              </div>
            </div>
          </div>

          <div className="reveal mt-4 p-5 rounded-2xl glass border border-white/5 flex items-start gap-4">
            <Icon name="Info" size={18} style={{ color: "#f953c6" }} className="flex-shrink-0 mt-0.5" />
            <p className="text-white/50 text-sm">Итоговая стоимость зависит от объёма и сложности. Первая консультация — бесплатно.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksAboutServices;
