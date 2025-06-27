import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Twitter,
  Linkedin,
  Mail,
  Send,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-zinc-950 text-white font-inter overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 100
            ? "bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="text-lg sm:text-xl font-semibold tracking-tight">
              Judith Suminwa
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 lg:space-x-12">
              <button
                onClick={() => scrollToSection("about")}
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                Travail
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800/50`}
        >
          <div className="px-4 sm:px-6 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block text-zinc-400 hover:text-white transition-colors text-lg"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="block text-zinc-400 hover:text-white transition-colors text-lg"
            >
              Travail
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.primature.gouv.cd/wp-content/uploads/2024/07/PM-Photo-Small-scaled-2.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Parallax Background */}
        <div
          className="absolute inset-0 transform-gpu"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-900/30 to-zinc-950"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tighter mb-6 sm:mb-8 leading-none">
            Première
            <span className="block text-blue-500">Ministre</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 font-light tracking-wide max-w-2xl mx-auto px-4">
            Dirige le gouvernement congolais vers un avenir radieux
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("intro")}
            className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors group"
          >
            <span className="text-xs sm:text-sm font-light mb-2 tracking-widest uppercase">
              Scroll
            </span>
            <ChevronDown
              size={20}
              className="sm:w-6 sm:h-6 group-hover:transform group-hover:translate-y-1 transition-transform"
            />
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro" className="py-16 sm:py-24 lg:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight tracking-tight">
            Je crois qu'un bon leadership doit être{" "}
            <span className="block text-blue-500 mt-2 sm:mt-4">facile.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 font-light mt-8 sm:mt-12 max-w-3xl mx-auto leading-relaxed px-4">
            Chaque discours, chaque interaction, chaque moment compte pour créer
            des expériences qui résonnent avec les gens à un niveau plus
            profond.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Portrait */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="https://www.primature.gouv.cd/wp-content/uploads/2024/07/PM-Photo-Small-scaled-2.jpg"
                  alt="Judith Suminwa Portrait"
                  className="relative w-full max-w-sm sm:max-w-md mx-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-6 sm:mb-8">
                  Sur moi
                </h2>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
                  <p>
                    Judith Suminwa Tuluka (née le 19 octobre 1967) est une femme
                    politique congolaise qui occupe le poste de Premier ministre
                    de la République démocratique du Congo depuis 2024. Avant
                    d'occuper ce poste, elle était ministre d'État et ministre
                    du Plan.
                  </p>
                  <p>
                    Judith Suminwa Tuluka est née au Kongo Central le 19 octobre
                    1967. Son père était ambassadeur au Tchad sous la présidence
                    de Mobutu Sese Seko. Elle est titulaire d'une licence en
                    sciences économiques appliquées de l'Université catholique
                    de Mons et d'une maîtrise en économie appliquée de
                    l'Université libre de Bruxelles. Elle est rentrée en RDC en
                    1997 et a travaillé à la Citibank.
                  </p>
                  <p>
                    Suminwa a postulé au Haut-Commissariat des Nations Unies aux
                    droits de l'homme et a travaillé comme assistante
                    administrative et financière avant de devenir membre du
                    Programme des Nations Unies pour le développement. Elle est
                    membre de l'Union pour la démocratie et le progrès social
                    (UDPS). Elle a été coordinatrice adjointe du Conseil
                    présidentiel de suivi stratégique. Elle a été nommée au
                    cabinet Lukonde en tant que ministre d'État et ministre de
                    la Planification en 2023. Le Premier ministre Sama Lukonde a
                    présenté sa démission le 21 février 2021. Elle est la
                    première femme à occuper ce poste. Son cabinet compte 54
                    personnes, dont 18 femmes.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-6 sm:pt-8">
                <a
                  href="#"
                  className="group flex items-center space-x-3 text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  <Twitter
                    size={18}
                    className="group-hover:transform group-hover:-translate-y-1 transition-transform"
                  />
                  <span className="font-light">Twitter</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
                <a
                  href="#"
                  className="group flex items-center space-x-3 text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  <Linkedin
                    size={18}
                    className="group-hover:transform group-hover:-translate-y-1 transition-transform"
                  />
                  <span className="font-light">LinkedIn</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
                <a
                  href="#"
                  className="group flex items-center space-x-3 text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  <Mail
                    size={18}
                    className="group-hover:transform group-hover:-translate-y-1 transition-transform"
                  />
                  <span className="font-light">Newsletter</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-16 sm:py-24 lg:py-32 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6">
              Œuvre en vedette
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 font-light">
              Projets sélectionnés des dernières années
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="https://www.primature.gouv.cd/wp-content/uploads/2025/05/0T8A7181-scaled.jpg"
                  alt="Project 1"
                  className="w-full h-60 sm:h-72 lg:h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="text-white mb-2" size={20} />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-2 group-hover:text-blue-500 transition-colors">
                Visite officielle à Kananga
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                La Première Ministre Judith Suminwa Tuluka en visite officielle
                à Kananga pour renforcer la cohésion nationale et booster les
                projets de développement
              </p>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="https://www.primature.gouv.cd/wp-content/uploads/2025/04/PHOTO-2025-04-06-09-07-43-1170x725.jpg"
                  alt="Project 2"
                  className="w-full h-60 sm:h-72 lg:h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="text-white mb-2" size={20} />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-2 group-hover:text-blue-500 transition-colors">
                Urgence Pluviale
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Entre deux fronts, Judith Suminwa Tuluka gère l'urgence pluviale
                à Kinshasa tout en négociant l'avenir économique à Abu Dhabi
              </p>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer sm:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden rounded-2xl mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="https://www.primature.gouv.cd/wp-content/uploads/2025/03/5a5b53fa-7d5c-40dd-a256-27847239e873-scaled-1170x725.jpg"
                  alt="Project 3"
                  className="w-full h-60 sm:h-72 lg:h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="text-white mb-2" size={20} />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-2 group-hover:text-blue-500 transition-colors">
                Kikwit
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Judith Suminwa Tuluka à la population de Kikwit : "Le Congo
                restera un et indivisible. Levons-nous pour protéger notre pays"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-zinc-400 font-light text-sm sm:text-base">
              © 2025 Judith Suminwa. Tous droits réservés.
            </div>
            <div className="flex space-x-6 sm:space-x-8">
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
