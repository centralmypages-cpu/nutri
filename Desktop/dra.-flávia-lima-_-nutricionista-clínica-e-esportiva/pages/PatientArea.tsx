import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Apple, Activity, CheckCircle2, 
  Info, LogIn, Plus, Users, TrendingUp, 
  Save, Trash2, UserPlus, Utensils, Calendar,
  Clock, Target, FileText, LogOut, Zap, Coffee, Sun, Moon, Carrot
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';

const INITIAL_PATIENTS = [
  {
    id: '1',
    nome: 'João Silva',
    email: 'joao@email.com',
    senha: '123',
    pesoData: [
      { name: 'Jan', peso: 85 }, { name: 'Fev', peso: 83.5 },
      { name: 'Mar', peso: 81.2 }, { name: 'Abr', peso: 79.8 },
      { name: 'Mai', peso: 78.5 }
    ],
    dieta: [
      { id: 'd1', time: "07:30", meal: "Café da Manhã", items: "Ovos mexidos (2un) + 1 fatia de pão integral + 100g Mamão" },
      { id: 'd2', time: "12:30", meal: "Almoço", items: "150g Frango Grelhado + 100g Arroz Integral + Salada Verde à vontade" },
      { id: 'd3', time: "16:00", meal: "Lanche da Tarde", items: "1 Iogurte Natural + 15g de Mix de Nuts + 1 Maçã" },
      { id: 'd4', time: "19:30", meal: "Jantar", items: "Sopa de legumes com patinho moído ou Omelete de 3 ovos" }
    ],
    exercicios: "Cardio: 40 min de caminhada (3x/semana)\nMusculação: Treino focado em hipertrofia.",
    proximaConsulta: "2024-06-15",
    objetivo: "Emagrecimento"
  }
];

const PatientArea = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('diet');
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem('nutri_pro_db_v4');
    return saved ? JSON.parse(saved) : INITIAL_PATIENTS;
  });
  const [selectedPatientId, setSelectedPatientId] = useState(INITIAL_PATIENTS[0].id);
  const [activePatient, setActivePatient] = useState(null);

  useEffect(() => {
    localStorage.setItem('nutri_pro_db_v4', JSON.stringify(patients));
  }, [patients]);

  const handleLogin = () => {
    if (userEmail === 'admin@flavia.com' && password === 'admin123') {
      setIsAdmin(true);
      setIsLoggedIn(true);
    } else {
      const p = patients.find(p => p.email === userEmail && p.senha === password);
      if (p) {
        setActivePatient(p);
        setIsAdmin(false);
        setIsLoggedIn(true);
      } else {
        alert('Credenciais inválidas!');
      }
    }
  };

  const getMealIcon = (mealName) => {
    const name = mealName.toLowerCase();
    if (name.includes('café') || name.includes('cafe')) return <Coffee className="text-amber-600" />;
    if (name.includes('almoço') || name.includes('almoco')) return <Sun className="text-orange-500" />;
    if (name.includes('jantar') || name.includes('ceia')) return <Moon className="text-indigo-600" />;
    if (name.includes('lanche')) return <Carrot className="text-orange-600" />;
    if (name.includes('treino')) return <Zap className="text-yellow-500" />;
    return <Utensils className="text-olive" />;
  };

  const p = isAdmin ? (patients.find(x => x.id === selectedPatientId) || patients[0]) : activePatient;

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-[80vh] px-4 py-12">
        <div className="bg-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl max-w-md w-full text-center space-y-6 border border-olive/5">
          <div className="inline-flex p-4 md:p-5 bg-olive text-white rounded-3xl shadow-lg">
            <LayoutDashboard size={28} />
          </div>
          <h1 className="text-2xl md:text-3xl font-serif text-olive">Área Exclusiva</h1>
          <div className="space-y-4 text-left">
            <input 
              type="email" placeholder="E-mail" 
              className="w-full px-5 py-4 rounded-2xl bg-softBeige outline-none border border-transparent focus:border-olive/20 transition-all text-sm"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input 
              type="password" placeholder="Senha" 
              className="w-full px-5 py-4 rounded-2xl bg-softBeige outline-none border border-transparent focus:border-olive/20 transition-all text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin} className="w-full bg-olive text-white py-4 rounded-2xl font-bold shadow-xl hover:bg-olive-dark transition-all text-sm md:text-base">
            Entrar no Portal
          </button>
          <div className="pt-4 grid grid-cols-2 gap-3">
             <button onClick={() => {setUserEmail('admin@flavia.com'); setPassword('admin123')}} className="text-[9px] md:text-[10px] font-bold text-gray-400 border border-gray-100 py-2 rounded-lg hover:bg-gray-50 uppercase">Demo Admin</button>
             <button onClick={() => {setUserEmail('joao@email.com'); setPassword('123')}} className="text-[9px] md:text-[10px] font-bold text-gray-400 border border-gray-100 py-2 rounded-lg hover:bg-gray-50 uppercase">Demo Paciente</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-softBeige pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-4 md:pt-8 space-y-6 md:space-y-8">
        {/* Header */}
        <header className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-olive text-white flex items-center justify-center text-xl md:text-2xl font-serif shadow-lg flex-shrink-0">
              {p?.nome?.[0]}
            </div>
            <div className="overflow-hidden">
              <h1 className="text-xl md:text-2xl font-serif text-olive truncate">Olá, {p?.nome?.split(' ')[0]}</h1>
              <p className="text-[11px] md:text-sm text-gray-400 font-medium truncate">Objetivo: <span className="text-olive font-bold">{p?.objetivo}</span></p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            {isAdmin && (
              <select className="bg-softBeige px-4 py-2 rounded-xl text-xs md:text-sm font-bold text-olive outline-none flex-grow md:flex-grow-0" onChange={(e) => setSelectedPatientId(e.target.value)} value={selectedPatientId}>
                {patients.map(pat => <option key={pat.id} value={pat.id}>{pat.nome}</option>)}
              </select>
            )}
            <button onClick={() => setIsLoggedIn(false)} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-colors flex-shrink-0"><LogOut size={20}/></button>
          </div>
        </header>

        {/* Tabs */}
        <nav className="flex bg-white/50 p-1.5 rounded-2xl gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {[
            { id: 'diet', label: 'Dieta', icon: Utensils },
            { id: 'workout', label: 'Treinos', icon: Activity },
            { id: 'progress', label: 'Evolução', icon: TrendingUp },
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap text-xs md:text-sm ${activeTab === tab.id ? 'bg-olive text-white shadow-md' : 'text-gray-400 hover:bg-white'}`}>
              <tab.icon size={16} /> {tab.label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <main className="animate-fade-in">
          {activeTab === 'diet' && (
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center justify-between px-2">
                <div>
                  <h2 className="text-xl md:text-2xl font-serif text-olive">Plano Alimentar</h2>
                  <p className="text-[11px] md:text-sm text-gray-400">Nutrição de alta performance personalizada.</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-olive/10">
                   <FileText size={14} className="text-olive" />
                   <span className="text-[9px] font-bold text-olive uppercase">Ref: Verão 2024</span>
                </div>
              </div>

              {/* GRID RESPONSIVO DE CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {p?.dieta?.map((m) => (
                  <div key={m.id} className="group bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-olive/5 rounded-bl-[3.5rem] -mr-6 -mt-6 group-hover:bg-olive/10 transition-colors"></div>
                    
                    <div className="flex items-start justify-between mb-4 md:mb-6 relative z-10">
                      <div className="p-3 md:p-4 bg-softBeige rounded-2xl group-hover:bg-olive transition-colors group-hover:text-white">
                        {getMealIcon(m.meal)}
                      </div>
                      <div className="text-right">
                        <span className="flex items-center gap-1 text-olive font-bold text-base md:text-lg">
                          <Clock size={14} /> {m.time}
                        </span>
                        <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Horário</p>
                      </div>
                    </div>

                    <div className="flex-grow space-y-2 md:space-y-3 relative z-10">
                      <h3 className="text-lg md:text-xl font-serif text-olive border-b border-olive/5 pb-2">{m.meal}</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed whitespace-pre-line font-medium bg-softBeige/30 p-3 md:p-4 rounded-2xl">
                        {m.items}
                      </p>
                    </div>

                    <div className="mt-6 md:mt-8 pt-4 border-t border-gray-50 flex items-center justify-between text-[9px] font-bold text-gray-400 uppercase tracking-tighter">
                       <span className="flex items-center gap-1"><CheckCircle2 size={10} className="text-olive"/> Nutritivo</span>
                       <button className="text-olive hover:underline">Substituições</button>
                    </div>
                  </div>
                ))}
                
                {(!p?.dieta || p.dieta.length === 0) && (
                  <div className="col-span-full py-12 md:py-20 bg-white/40 rounded-[2rem] border-2 border-dashed border-olive/10 text-center">
                    <Apple size={32} className="mx-auto text-olive/20 mb-4" />
                    <p className="text-gray-400 text-sm">Sua nova dieta está sendo preparada.</p>
                  </div>
                )}
              </div>

              <div className="bg-olive text-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-xl flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="bg-white/10 p-4 md:p-5 rounded-2xl hidden md:block"><Zap size={28} /></div>
                <div className="flex-grow text-center md:text-left">
                  <h4 className="text-lg md:text-xl font-serif">Dica da Nutri</h4>
                  <p className="opacity-80 text-[11px] md:text-sm">O sucesso vem do que você faz consistentemente. Mantenha o foco!</p>
                </div>
                <button className="w-full md:w-auto bg-white text-olive px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-transform whitespace-nowrap text-xs md:text-sm">Baixar PDF</button>
              </div>
            </div>
          )}

          {activeTab === 'workout' && (
            <div className="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[4rem] shadow-sm space-y-6 md:space-y-8">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="bg-olive/10 p-3 md:p-4 rounded-2xl text-olive"><Activity size={24} /></div>
                <h2 className="text-xl md:text-2xl font-serif text-olive">Protocolo de Treino</h2>
              </div>
              <div className="bg-softBeige/50 p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-olive/5">
                <p className="text-gray-700 text-sm md:text-lg leading-relaxed whitespace-pre-line font-medium">
                  {p?.exercicios || "Treino em análise..."}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="p-4 md:p-6 bg-blue-50 rounded-2xl md:rounded-3xl flex items-center gap-3 md:gap-4">
                  <Info className="text-blue-500 flex-shrink-0" size={20} />
                  <p className="text-[10px] md:text-xs text-blue-900 font-medium">Dúvidas na execução? Mande um vídeo no WhatsApp.</p>
                </div>
                <div className="p-4 md:p-6 bg-green-50 rounded-2xl md:rounded-3xl flex items-center gap-3 md:gap-4">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                  <p className="text-[10px] md:text-xs text-green-900 font-medium">Lembre-se do descanso: 7-8h de sono são cruciais.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="md:col-span-2 bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[4rem] shadow-sm">
                <h2 className="text-xl md:text-2xl font-serif text-olive mb-6 md:mb-10">Evolução do Peso</h2>
                <div className="h-64 md:h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={p?.pesoData || []}>
                      <defs>
                        <linearGradient id="colorPeso" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4A6741" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#4A6741" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#ccc', fontSize: 10}} dy={10} />
                      <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
                      <Tooltip contentStyle={{borderRadius: '15px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontSize: '12px'}} />
                      <Area type="monotone" dataKey="peso" stroke="#4A6741" strokeWidth={3} fill="url(#colorPeso)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[4rem] shadow-sm space-y-6 md:space-y-8 flex flex-col justify-center text-center">
                 <div>
                    <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Peso Atual</p>
                    <p className="text-5xl md:text-6xl font-serif text-olive">{p?.pesoData?.[p?.pesoData.length-1]?.peso || '--'}<span className="text-lg md:text-xl">kg</span></p>
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-between text-xs md:text-sm">
                       <span className="text-gray-400 font-medium">Meta Final</span>
                       <span className="text-olive font-bold">72 kg</span>
                    </div>
                    <div className="w-full bg-softBeige h-2.5 md:h-3 rounded-full overflow-hidden">
                       <div className="bg-olive w-[75%] h-full rounded-full"></div>
                    </div>
                    <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">75% Concluído</p>
                 </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PatientArea;