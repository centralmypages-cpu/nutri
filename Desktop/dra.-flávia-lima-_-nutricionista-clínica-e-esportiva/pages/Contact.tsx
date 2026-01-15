
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-fade-in py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif text-olive mb-4">Vamos Conversar?</h1>
          <p className="text-gray-500">Estamos prontos para te ajudar na sua jornada de saúde.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-softBeige rounded-2xl flex items-center justify-center text-olive">
                  <Phone size={24} />
                </div>
                <h3 className="font-serif text-xl">Telefone</h3>
                <p className="text-gray-500">(11) 99999-9999<br/>(11) 4004-0000</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-softBeige rounded-2xl flex items-center justify-center text-olive">
                  <Mail size={24} />
                </div>
                <h3 className="font-serif text-xl">E-mail</h3>
                <p className="text-gray-500">contato@flavialima.com.br<br/>agendamentos@flavialima.com.br</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-softBeige rounded-2xl flex items-center justify-center text-olive">
                  <MapPin size={24} />
                </div>
                <h3 className="font-serif text-xl">Consultório</h3>
                <p className="text-gray-500">Av. Brg. Faria Lima, 1450<br/>Itaim Bibi - São Paulo, SP</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-softBeige rounded-2xl flex items-center justify-center text-olive">
                  <Instagram size={24} />
                </div>
                <h3 className="font-serif text-xl">Redes Sociais</h3>
                <div className="flex gap-4 text-gray-500">
                  <Instagram className="hover:text-olive cursor-pointer" />
                  <Facebook className="hover:text-olive cursor-pointer" />
                  <Youtube className="hover:text-olive cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Integrated Map View (Visual) */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-inner h-80 bg-gray-100 relative group">
              <img src="https://picsum.photos/seed/map/1200/800" alt="Localização" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-3xl shadow-2xl text-center">
                  <MapPin className="text-red-500 mx-auto mb-2" size={32} />
                  <p className="font-bold text-gray-800">Nosso Espaço</p>
                  <p className="text-xs text-gray-500">Clique para abrir no Google Maps</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-softBeige p-12 rounded-[3rem] space-y-6">
            <h3 className="text-2xl font-serif text-olive mb-4">Envie uma Mensagem</h3>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-400">Nome</label>
              <input type="text" className="w-full px-5 py-4 rounded-2xl border-none bg-white focus:ring-2 focus:ring-olive/20 outline-none" placeholder="Como podemos te chamar?" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-400">Assunto</label>
              <select className="w-full px-5 py-4 rounded-2xl border-none bg-white focus:ring-2 focus:ring-olive/20 outline-none">
                <option>Dúvidas sobre consultas</option>
                <option>Parcerias e Eventos</option>
                <option>Imprensa</option>
                <option>Outros</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-400">Mensagem</label>
              <textarea rows={6} className="w-full px-5 py-4 rounded-2xl border-none bg-white focus:ring-2 focus:ring-olive/20 outline-none" placeholder="Escreva sua mensagem aqui..."></textarea>
            </div>
            <button className="w-full bg-olive text-white py-4 rounded-2xl font-bold hover:bg-olive-dark shadow-lg transition-all">
              Enviar Mensagem por E-mail
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
