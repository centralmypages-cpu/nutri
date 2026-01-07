
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado! Recebemos sua mensagem. Entraremos em contato em breve.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-5/12">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Contato</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
            Pronto para transformar o seu sorriso?
          </h3>
          <p className="text-slate-600 mb-12 text-lg">
            Estamos localizados em uma área privilegiada, com estacionamento privativo e infraestrutura completa para o seu bem-estar.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-blue-600 shrink-0">
                <i className="fas fa-location-dot text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Localização</h4>
                <p className="text-slate-600">Av. Batel, 1500 - Ed. Business Tower, Sala 802 <br /> Curitiba - PR</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-blue-600 shrink-0">
                <i className="fas fa-phone text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Telefone & WhatsApp</h4>
                <p className="text-slate-600">(41) 98888-7777 <br /> (41) 3333-2222</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-blue-600 shrink-0">
                <i className="fas fa-clock text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Horário de Atendimento</h4>
                <p className="text-slate-600">Segunda à Sexta: 08:30 às 18:30 <br /> Sábados: Sob agendamento</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
             <a href="https://wa.me/5541988887777" className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-xl shadow-green-500/20">
               <i className="fab fa-whatsapp text-2xl"></i> Conversar pelo WhatsApp
             </a>
          </div>
        </div>

        <div className="lg:w-7/12">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-900 mb-8">Solicite uma avaliação</h4>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Seu nome aqui"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">E-mail</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="email@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Telefone</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Interesse</label>
                <select 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Selecione o serviço</option>
                  <option value="estetica">Estética Dental</option>
                  <option value="implante">Implantes</option>
                  <option value="ortodontia">Ortodontia</option>
                  <option value="clinica">Clínica Geral</option>
                  <option value="outro">Outros</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Sua Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Conte-nos como podemos ajudar..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20 text-lg"
                >
                  Enviar Solicitação
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  Seus dados estão seguros conosco e serão usados apenas para contato profissional.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
