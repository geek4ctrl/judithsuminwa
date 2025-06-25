import React, { useState, useEffect } from 'react';
import { ChevronDown, Twitter, Linkedin, Mail, Send, ArrowUpRight, Menu, X } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-zinc-950 text-white font-inter overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 100 ? 'bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-xl font-semibold tracking-tight">
              Judith Suminwa
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12">
              <button onClick={() => scrollToSection('about')} className="text-zinc-400 hover:text-white transition-colors duration-300">About</button>
              <button onClick={() => scrollToSection('work')} className="text-zinc-400 hover:text-white transition-colors duration-300">Work</button>
              {/* <button onClick={() => scrollToSection('contact')} className="text-zinc-400 hover:text-white transition-colors duration-300">Contact</button> */}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800/50`}>
          <div className="px-6 py-8 space-y-6">
            <button onClick={() => scrollToSection('about')} className="block text-zinc-400 hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('work')} className="block text-zinc-400 hover:text-white transition-colors">Work</button>
            <button onClick={() => scrollToSection('contact')} className="block text-zinc-400 hover:text-white transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 transform-gpu"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-900/30 to-zinc-950"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter mb-8 leading-none">
            Prime
            <span className="block text-blue-500">Minister</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide max-w-2xl mx-auto">
            Leading the Congolese government for a bright future
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('intro')}
            className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors group"
          >
            <span className="text-sm font-light mb-2 tracking-widest uppercase">Scroll</span>
            <ChevronDown size={24} className="group-hover:transform group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro" className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
            Je crois qu'un bon leadership doit être <span className="block text-blue-500 mt-4">facile.</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 font-light mt-12 max-w-3xl mx-auto leading-relaxed">
            Chaque discours, chaque interaction, chaque moment compte pour créer des expériences qui résonnent avec les gens à un niveau plus profond.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Portrait */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="https://www.primature.gouv.cd/wp-content/uploads/2024/07/PM-Photo-Small-scaled-2.jpg" 
                  alt="Alex Chen Portrait"
                  className="relative w-full max-w-md mx-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
                  About Me
                </h2>
                <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                  <p>
                    Judith Suminwa Tuluka (born 19 October 1967) is a Congolese politician who has served as Prime Minister of the Democratic Republic of the Congo since 2024. Prior to her tenure as prime minister she was Minister of State and Minister of Planning.
                  </p>
                  <p>
                    Judith Suminwa Tuluka was born in Kongo Central, on 19 October 1967. Her father was the ambassador to Chad during Mobutu Sese Seko's presidency. She graduated from the Catholic university of Mons with a bachelor's degree in applied economic sciences and from Université libre de Bruxelles with a master's degree in applied economics. She returned to the DRC in 1997, and worked at Citibank.
                  </p>
                  <p>
                    Suminwa applied to the Office of the United Nations High Commissioner for Human Rights and worked as an administrative and financial assistant before becoming a member of the United Nations Development Programme.

She is a member of Union for Democracy and Social Progress (UDPS). She was deputy coordinator of the Presidential Council for Strategic Monitoring. She was appointed to the Lukonde cabinet as Minister of State and Minister of Planning in 2023.

Prime Minister Sama Lukonde submitted his resignation on 21 February 2021. She is the first woman to serve as prime minister.Her cabinet contains 54 people, with 18 being women.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 pt-8">
                <a href="#" className="group flex items-center space-x-3 text-zinc-400 hover:text-blue-500 transition-colors">
                  <Twitter size={20} className="group-hover:transform group-hover:-translate-y-1 transition-transform" />
                  <span className="font-light">Twitter</span>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="group flex items-center space-x-3 text-zinc-400 hover:text-blue-500 transition-colors">
                  <Linkedin size={20} className="group-hover:transform group-hover:-translate-y-1 transition-transform" />
                  <span className="font-light">LinkedIn</span>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="group flex items-center space-x-3 text-zinc-400 hover:text-blue-500 transition-colors">
                  <Mail size={20} className="group-hover:transform group-hover:-translate-y-1 transition-transform" />
                  <span className="font-light">Newsletter</span>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-32 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-zinc-400 font-light">
              Selected projects from recent years
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src="https://www.primature.gouv.cd/wp-content/uploads/2025/05/0T8A7181-scaled.jpg"
                  alt="Project 1"
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="text-white mb-2" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-blue-500 transition-colors">
                Visite officielle à Kananga
              </h3>
              <p className="text-zinc-400 font-light">
                La Première Ministre Judith Suminwa Tuluka en visite officielle à Kananga pour renforcer la cohésion nationale et booster les projets de développement
              </p>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src="https://www.primature.gouv.cd/wp-content/uploads/2025/04/PHOTO-2025-04-06-09-07-43-1170x725.jpg"
                  alt="Project 2"
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="text-white mb-2" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-blue-500 transition-colors">
                Urgence Pluviale
              </h3>
              <p className="text-zinc-400 font-light">
                Entre deux fronts, Judith Suminwa Tuluka gère l’urgence pluviale à Kinshasa tout en négociant l’avenir économique à Abu Dhabi
              </p>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src="https://www.primature.gouv.cd/wp-content/uploads/2025/03/5a5b53fa-7d5c-40dd-a256-27847239e873-scaled-1170x725.jpg"
                  alt="Project 3"
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="text-white mb-2" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-blue-500 transition-colors">
                Kikwit
              </h3>
              <p className="text-zinc-400 font-light">
                Judith Suminwa Tuluka à la population de Kikwit : “Le Congo restera un et indivisible. Levons-nous pour protéger notre pays”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Let's Create Something
              <span className="block text-blue-500">Amazing Together</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light">
              Ready to start your next project? Drop me a line.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-sm font-medium text-zinc-400 mb-3 tracking-wide uppercase">
                  Name
                </label>
                <input 
                  type="text"
                  className="w-full bg-transparent border-b border-zinc-700 py-4 text-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 group-hover:border-zinc-600"
                  placeholder="Your name"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-zinc-400 mb-3 tracking-wide uppercase">
                  Email
                </label>
                <input 
                  type="email"
                  className="w-full bg-transparent border-b border-zinc-700 py-4 text-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 group-hover:border-zinc-600"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="group">
              <label className="block text-sm font-medium text-zinc-400 mb-3 tracking-wide uppercase">
                Message
              </label>
              <textarea 
                rows={6}
                className="w-full bg-transparent border-b border-zinc-700 py-4 text-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none group-hover:border-zinc-600"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <div className="pt-8">
              <button 
                type="submit"
                className="group inline-flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-full font-medium transition-all duration-300 hover:transform hover:scale-105"
              >
                <span>Send Message</span>
                <Send size={20} className="group-hover:transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section> */} 

      {/* Footer */}
      <footer className="py-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zinc-400 font-light mb-4 md:mb-0">
              © 2025 Judith Suminwa. All rights reserved.
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;