import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Star, ArrowRight, Apple, Activity, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-softBeige overflow-hidden py-12 md:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-olive/10 text-olive text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Nutrição de Alta Performance
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif text-olive leading-[1.1] md:leading-[0.9]">
              Saúde <br className="hidden md:block" /> em cada <br /> <span className="italic font-normal">escolha.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Planos alimentares inteligentes para quem busca performance, longevidade e equilíbrio real.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
              <Link to="/agenda" className="w-full sm:w-auto bg-olive text-white px-10 py-5 rounded-full font-bold hover:bg-olive-dark transition-all shadow-xl hover:-translate-y-1 text-center">
                Agendar Agora
              </Link>
              <Link to="/area-do-paciente" className="w-full sm:w-auto bg-white text-olive border border-olive/20 px-10 py-5 rounded-full font-bold hover:bg-softBeige transition-all text-center">
                Área do Paciente
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block group">
            <div className="w-full h-[500px] lg:h-[650px] bg-olive/5 rounded-[4rem] overflow-hidden rotate-2 group-hover:rotate-0 transition-all duration-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" 
                alt="Treino Funcional" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 lg:p-8 rounded-[2.5rem] shadow-2xl flex items-center gap-4 lg:gap-6 animate-bounce-slow">
              <div className="bg-olive p-3 lg:p-4 rounded-2xl text-white">
                <Activity size={24} />
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-serif text-olive">100%</p>
                <p className="text-[9px] lg:text-[10px] text-gray-400 font-bold uppercase tracking-widest">Personalizado</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-olive/5 -skew-x-12 translate-x-1/2 hidden lg:block"></div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-olive">O Método Flávia Lima</h2>
            <p className="text-gray-400 max-w-md mx-auto">Equilibrando bioquímica celular com rotina moderna.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
            {[
              { icon: Heart, title: "Bioindividualidade", desc: "Seu metabolismo é único. Analisamos exames de sangue e DNA para precisão total.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400" },
              { icon: Activity, title: "Foco em Mitocôndrias", desc: "Nutrição celular para garantir que você tenha energia do acordar ao dormir.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" },
              { icon: Apple, title: "Sabor & Longevidade", desc: "A dieta que funciona é a que você consegue manter. Prazer e saúde andam juntos.", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400" }
            ].map((item, i) => (
              <div key={i} className="group space-y-6">
                <div className="h-56 md:h-64 rounded-3xl overflow-hidden shadow-lg mb-4 md:mb-8">
                   <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="bg-olive/10 text-olive w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center group-hover:bg-olive group-hover:text-white transition-all">
                  <item.icon size={24} />
                </div>
                <h3 className="text-2xl font-serif text-olive">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-softBeige">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-olive mb-12 md:mb-20">Transformações Reais</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className={`bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-sm text-left relative overflow-hidden group ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 md:opacity-10 group-hover:scale-150 transition-transform">
                  <Star size={60} fill="#4A6741" />
                </div>
                <p className="text-gray-600 italic mb-6 md:mb-8 relative z-10 leading-relaxed text-sm md:text-base">
                  "O acompanhamento online me deu a liberdade que eu precisava. Perdi gordura e finalmente entendi como alimentar meu corpo para as maratonas."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-olive/20">
                    <img src={`https://i.pravatar.cc/150?u=${i+5}`} alt="Paciente" />
                  </div>
                  <div>
                    <p className="font-bold text-olive text-sm md:text-base">Paciente {i+1}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Atleta Amador</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;