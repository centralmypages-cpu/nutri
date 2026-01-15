
import React, { useState } from 'react';
import { Calendar, Clock, MessageSquare, Send } from 'lucide-react';

const Schedule = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    data: '',
    tipo: 'Emagrecimento',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Dra. Flávia! Gostaria de agendar uma consulta.%0A%0A*Dados:*%0A- Nome: ${formData.nome}%0A- Email: ${formData.email}%0A- WhatsApp: ${formData.whatsapp}%0A- Data Sugerida: ${formData.data}%0A- Objetivo: ${formData.tipo}%0A%0A*Mensagem:*%0A${formData.mensagem}`;
    const url = `https://wa.me/5511999999999?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="animate-fade-in py-20 bg-softBeige min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="bg-olive text-white p-12 md:w-1/3">
            <h2 className="text-3xl font-serif mb-8">Agende sua Consulta</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Clock className="flex-shrink-0" />
                <div>
                  <p className="font-bold">Horários</p>
                  <p className="text-sm opacity-80">Seg - Sex: 08h às 19h</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Calendar className="flex-shrink-0" />
                <div>
                  <p className="font-bold">Locais</p>
                  <p className="text-sm opacity-80">Presencial em SP ou Online (Vídeo)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageSquare className="flex-shrink-0" />
                <div>
                  <p className="font-bold">WhatsApp</p>
                  <p className="text-sm opacity-80">(11) 99999-9999</p>
                </div>
              </div>
            </div>
            <div className="mt-12 p-6 bg-white/10 rounded-2xl border border-white/20 italic text-sm">
              "Investir na sua alimentação é o caminho mais curto para a saúde."
            </div>
          </div>

          {/* Form Side */}
          <form onSubmit={handleSubmit} className="p-12 md:w-2/3 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">Nome Completo</label>
                <input 
                  required
                  type="text" 
                  placeholder="Seu nome aqui"
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive/20 transition-all"
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">E-mail</label>
                <input 
                  required
                  type="email" 
                  placeholder="email@exemplo.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive/20 transition-all"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">WhatsApp</label>
                <input 
                  required
                  type="tel" 
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive/20 transition-all"
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">Data Preferencial</label>
                <input 
                  required
                  type="date" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive/20 transition-all"
                  onChange={(e) => setFormData({...formData, data: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-400">Objetivo da Consulta</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive/20 transition-all"
                onChange={(e) => setFormData({...formData, tipo: e.target.value})}
              >
                <option>Emagrecimento</option>
                <option>Ganho de Massa</option>
                <option>Nutrição Esportiva</option>
                <option>Saúde e Longevidade</option>
                <option>Gestante</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-400">Mensagem Adicional (Opcional)</label>
              <textarea 
                rows={4}
                placeholder="Conte-me um pouco sobre seus objetivos..."
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive/20 transition-all"
                onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-olive text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-olive-dark shadow-lg hover:shadow-xl transition-all">
              <Send size={20} /> Solicitar Agendamento via WhatsApp
            </button>
            <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              Respondemos em até 2 horas úteis
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
