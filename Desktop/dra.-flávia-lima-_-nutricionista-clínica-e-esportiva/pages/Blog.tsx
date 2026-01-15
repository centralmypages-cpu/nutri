
import React from 'react';
import { Calendar, Tag, ChevronRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "5 Mitos sobre o Carboidrato à Noite",
      category: "Dicas Nutricionais",
      date: "15 Mai, 2024",
      image: "https://picsum.photos/seed/food1/800/500",
      excerpt: "Entenda por que você não deve ter medo de comer pão ou arroz no jantar se o seu objetivo é saúde..."
    },
    {
      title: "Suplementação para Corredores de Rua",
      category: "Esportiva",
      date: "10 Mai, 2024",
      image: "https://picsum.photos/seed/run/800/500",
      excerpt: "O guia completo sobre creatina, cafeína e géis de carboidrato para melhorar seu pace e endurance."
    },
    {
      title: "Como organizar a Marmita da Semana",
      category: "Vida Saudável",
      date: "05 Mai, 2024",
      image: "https://picsum.photos/seed/prep/800/500",
      excerpt: "Ganhe tempo e economize dinheiro com essas estratégias práticas de Meal Prep que funcionam de verdade."
    },
    {
      title: "Intolerância x Sensibilidade: Entenda",
      category: "Clínica",
      date: "01 Mai, 2024",
      image: "https://picsum.photos/seed/gut/800/500",
      excerpt: "Saiba identificar os sinais que o seu intestino está enviando e melhore sua digestão hoje mesmo."
    }
  ];

  return (
    <div className="animate-fade-in py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h1 className="text-5xl font-serif text-olive mb-4">Blog & Conteúdo</h1>
          <p className="text-gray-500">Informação científica traduzida para o seu dia a dia.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2rem] h-64 mb-6">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-olive flex items-center gap-2">
                  <Tag size={12} /> {post.category}
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>Por Dra. Flávia Lima</span>
              </div>
              <h2 className="text-3xl font-serif text-olive mb-4 group-hover:text-olive-light transition-colors">{post.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
              <button className="flex items-center gap-2 font-bold text-olive hover:gap-4 transition-all">
                Ler Artigo Completo <ChevronRight size={20} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
