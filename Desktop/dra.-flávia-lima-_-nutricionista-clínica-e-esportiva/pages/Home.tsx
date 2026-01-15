
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Star, ArrowRight, Apple, Activity, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-softBeige overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-olive/10 text-olive text-xs font-bold uppercase tracking-widest">
              Nutrição de Alta Performance
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-olive leading-[0.9]">
              Saúde <br /> em cada <br /> <span className="italic font-normal">escolha.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Planos alimentares inteligentes para quem busca performance, longevidade e equilíbrio real.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <Link to="/agenda" className="bg-olive text-white px-10 py-5 rounded-full font-bold hover:bg-olive-dark transition-all shadow-xl hover:-translate-y-1">
                Agendar Agora
              </Link>
              <Link to="/area-do-paciente" className="bg-white text-olive border border-olive/20 px-10 py-5 rounded-full font-bold hover:bg-softBeige transition-all">
                Área do Paciente
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block group">
            <div className="w-full h-[650px] bg-olive/5 rounded-[4rem] overflow-hidden rotate-2 group-hover:rotate-0 transition-all duration-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" 
                alt="Treino Funcional" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl flex items-center gap-6 animate-bounce-slow">
              <div className="bg-olive p-4 rounded-2xl text-white">
                <Activity size={32} />
              </div>
              <div>
                <p className="text-3xl font-serif text-olive">100%</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Personalizado</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-olive/5 -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Diferenciais */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl font-serif text-olive">O Método Flávia Lima</h2>
            <p className="text-gray-400 max-w-md mx-auto">Equilibrando bioquímica celular com rotina moderna.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: Heart, title: "Bioindividualidade", desc: "Seu metabolismo é único. Analisamos exames de sangue e DNA para precisão total.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400" },
              { icon: Activity, title: "Foco em Mitocôndrias", desc: "Nutrição celular para garantir que você tenha energia do acordar ao dormir.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" },
              { icon: Apple, title: "Sabor & Longevidade", desc: "A dieta que funciona é a que você consegue manter. Prazer e saúde andam juntos.", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400" }
            ].map((item, i) => (
              <div key={i} className="group space-y-6">
                <div className="h-64 rounded-3xl overflow-hidden shadow-lg mb-8">
                   <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="bg-olive/10 text-olive w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-olive group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif text-olive">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-softBeige">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-serif text-olive mb-20">Transformações Reais</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm text-left relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform">
                  <Star size={80} fill="#4A6741" />
                </div>
                <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                  "O acompanhamento online me deu a liberdade que eu precisava. Perdi gordura e finalmente entendi como alimentar meu corpo para as maratonas."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-olive/20">
                    <img src={`https://i.pravatar.cc/150?u=${i+5}`} alt="Paciente" />
                  </div>
                  <div>
                    <p className="font-bold text-olive">Paciente {i+1}</p>
                    <p className="text-xs text-gray-400">Atleta Amador</p>
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
