
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
    <div className="animate-fade-in bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h1 className="text-5xl font-serif text-olive mb-6">Nossos Serviços</h1>
          <p className="text-gray-500">Escolha a modalidade que melhor se adapta ao seu momento de vida e objetivo atual.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-gray-100 hover:border-olive/20 hover:shadow-2xl transition-all duration-300 flex flex-col h-full bg-softBeige/50">
              <div className="bg-white text-olive w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-olive group-hover:text-white transition-colors">
                <s.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-olive">{s.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow">{s.desc}</p>
              <ul className="space-y-3 mb-8">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-olive" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/agenda" className="w-full text-center py-3 rounded-full bg-olive/5 text-olive font-bold hover:bg-olive hover:text-white transition-all">
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
