import React from 'react';
import { Apple, Dumbbell, HeartPulse, Video, Utensils, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Apple,
      title: "Emagrecimento Consciente",
      desc: "Protocolos para perda de gordura preservando a massa magra e o equilíbrio metabólico.",
      features: ["Análise Metabólica", "Cardápio Flexível", "Suporte Contínuo"]
    },
    {
      icon: Dumbbell,
      title: "Ganho de Massa Muscular",
      desc: "Estratégias nutricionais focadas em hipertrofia e força para praticantes de musculação.",
      features: ["Timing Nutricional", "Suplementação Estratégica", "Recordatório Alimentar"]
    },
    {
      icon: HeartPulse,
      title: "Reeducação Alimentar",
      desc: "Desenvolva uma nova relação com a comida, focando em longevidade e saúde digestiva.",
      features: ["Mudança de Hábitos", "Aulas de Rotulagem", "Receitas Práticas"]
    },
    {
      icon: Zap,
      title: "Nutrição Esportiva",
      desc: "Alta performance para corredores, triatletas e ciclistas que buscam baixar seus tempos.",
      features: ["Hidratação em Provas", "Recuperação Pós-Treino", "Teste de Suor"]
    },
    {
      icon: Video,
      title: "Acompanhamento Online",
      desc: "Consulta por vídeo com a mesma qualidade do presencial, de onde você estiver.",
      features: ["Acesso via App", "Dúvidas via WhatsApp", "Plano Digital"]
    },
    {
      icon: Utensils,
      title: "Nutrição Clínica",
      desc: "Tratamento dietoterápico para diabetes, hipertensão e doenças autoimunes.",
      features: ["Exames Bioquímicos", "Controle Glicêmico", "Anti-inflamatório"]
    }
  ];

  return (
    <div className="animate-fade-in bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-olive mb-4 md:mb-6">Nossos Serviços</h1>
          <p className="text-gray-500 text-sm md:text-base px-4">Escolha a modalidade que melhor se adapta ao seu momento de vida e objetivo atual.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group p-6 md:p-8 rounded-3xl border border-gray-100 bg-softBeige/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              <div className="bg-white text-olive w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-olive group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <s.icon size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-4 text-olive group-hover:text-olive-light transition-colors">{s.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 flex-grow leading-relaxed">{s.desc}</p>
              <ul className="space-y-3 mb-8">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-[13px] text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-olive group-hover:scale-150 transition-transform" /> {f}
                  </li>
                ))}
              </ul>
              <Link 
                to="/agenda" 
                className="w-full text-center py-4 rounded-2xl bg-white border border-olive/10 text-olive font-bold hover:bg-olive hover:text-white hover:shadow-lg transition-all duration-300 text-sm md:text-base"
              >
                Saber Mais
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;