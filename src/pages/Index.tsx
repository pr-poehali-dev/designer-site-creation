import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import WorksAboutServices from "@/components/WorksAboutServices";
import ProcessFaqContacts from "@/components/ProcessFaqContacts";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-dark-base text-white min-h-screen font-body overflow-x-hidden" style={{ backgroundColor: "#0a0a0f" }}>
      <HeroSection scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <WorksAboutServices />
      <ProcessFaqContacts />
    </div>
  );
};

export default Index;
