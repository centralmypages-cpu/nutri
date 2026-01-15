
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Apple, Activity, Book, CheckCircle2, 
  Info, ChevronRight, LogIn, Plus, Users, TrendingUp, 
  ClipboardList, Save, Trash2, UserPlus, Utensils, Calendar,
  Clock, Weight, Target, FileText, LogOut, Zap
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';

// --- INITIAL STATE ---
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
      { id: 'd3', time: "19:30", meal: "Jantar", items: "Sopa de legumes com patinho moído ou Omelete de 3 ovos" }
    ],
    exercicios: "Cardio: 40 min de caminhada (Frequência: 3x na semana)\nMusculação: Treino A/B focado em hipertrofia.",
    proximaConsulta: "2024-06-15",
    objetivo: "Emagrecimento e Definição"
  }
];

const PatientArea = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('overview'); // overview, diet, workout, progress
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem('nutri_pro_db_v3');
    return saved ? JSON.parse(saved) : INITIAL_PATIENTS;
  });
  const [selectedPatientId, setSelectedPatientId] = useState(INITIAL_PATIENTS[0].id);
  const [activePatient, setActivePatient] = useState(null);

  useEffect(() => {
    localStorage.setItem('nutri_pro_db_v3', JSON.stringify(patients));
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
        alert('Credenciais inválidas!\nAdmin: admin@flavia.com / admin123\nPaciente: joao@email.com / 123');
      }
    }
  };

  // Funções de Login Rápido (Teste)
  const quickLoginAdmin = () => {
    setIsAdmin(true);
    setIsLoggedIn(true);
    setUserEmail('admin@flavia.com');
  };

  const quickLoginPatient = () => {
    const p = patients.find(p => p.email === 'joao@email.com');
    if (p) {
      setActivePatient(p);
      setIsAdmin(false);
      setIsLoggedIn(true);
      setUserEmail('joao@email.com');
    }
  };

  const getPatient = () => patients.find(p => p.id === selectedPatientId) || patients[0];

  const updatePatient = (updatedPatient) => {
    setPatients(patients.map(p => p.id === updatedPatient.id ? updatedPatient : p));
  };

  // --- ADMIN ACTIONS ---
  const addMeal = (pId) => {
    const p = patients.find(x => x.id === pId);
    const newMeal = { id: Date.now().toString(), time: "00:00", meal: "Nova Refeição", items: "Descreva os alimentos..." };
    updatePatient({ ...p, dieta: [...p.dieta, newMeal] });
  };

  const updateMeal = (pId, mealId, field, value) => {
    const p = patients.find(x => x.id === pId);
    const newDieta = p.dieta.map(m => m.id === mealId ? { ...m, [field]: value } : m);
    updatePatient({ ...p, dieta: newDieta });
  };

  const removeMeal = (pId, mealId) => {
    const p = patients.find(x => x.id === pId);
    updatePatient({ ...p, dieta: p.dieta.filter(m => m.id !== mealId) });
  };

  const handleAddWeight = (pId, weight) => {
    if (!weight) return;
    const p = patients.find(x => x.id === pId);
    const month = new Date().toLocaleDateString('pt-BR', { month: 'short' });
    const newWeightData = [...p.pesoData, { name: month, peso: parseFloat(weight) }];
    updatePatient({ ...p, pesoData: newWeightData });
  };

  if (!isLoggedIn) {
    return (
      <div className="animate-fade-in flex items-center justify-center min-h-[85vh] bg-softBeige p-6">
        <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl max-w-lg w-full text-center space-y-8 border border-olive/10">
          <div className="inline-flex p-6 bg-olive text-white rounded-[2rem] shadow-xl">
            <LayoutDashboard size={40} />
          </div>
          <div>
            <h1 className="text-4xl font-serif text-olive mb-2 tracking-tight">Portal Exclusivo</h1>
            <p className="text-gray-400 font-medium italic">Acesso Restrito: Dra. Flávia & Pacientes</p>
          </div>
          <div className="space-y-4 text-left">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-400 ml-4">E-mail</label>
              <input 
                type="email" placeholder="exemplo@email.com" 
                value={userEmail}
                className="w-full px-6 py-4 rounded-2xl bg-softBeige border border-transparent focus:border-olive/30 outline-none transition-all"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-400 ml-4">Senha</label>
              <input 
                type="password" placeholder="••••••••" 
                className="w-full px-6 py-4 rounded-2xl bg-softBeige border border-transparent focus:border-olive/30 outline-none transition-all"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button 
            onClick={handleLogin}
            className="w-full bg-olive text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-olive-dark shadow-xl hover:-translate-y-1 active:scale-95 transition-all"
          >
            <LogIn size={20} /> Entrar no Sistema
          </button>

          {/* ÁREA DE TESTE RÁPIDO */}
          <div className="pt-6 mt-6 border-t border-gray-100 space-y-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap size={14} className="text-orange-400 fill-orange-400" />
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Acesso Rápido para Testes</span>
              <Zap size={14} className="text-orange-400 fill-orange-400" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={quickLoginAdmin}
                className="bg-softBeige text-olive border border-olive/10 py-3 rounded-xl text-xs font-bold hover:bg-olive hover:text-white transition-all flex flex-col items-center gap-1"
              >
                <Users size={16} /> Entrar como Nutri
              </button>
              <button 
                onClick={quickLoginPatient}
                className="bg-softBeige text-olive border border-olive/10 py-3 rounded-xl text-xs font-bold hover:bg-olive hover:text-white transition-all flex flex-col items-center gap-1"
              >
                <UserPlus size={16} /> Entrar como Paciente
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW: ADMINISTRADOR (DRA. FLÁVIA) ---
  if (isAdmin) {
    const p = getPatient();
    return (
      <div className="min-h-screen bg-softBeige p-4 md:p-10 flex flex-col gap-8">
        {/* Header Admin */}
        <header className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-8 rounded-[3rem] shadow-sm">
          <div className="flex items-center gap-5">
            <div className="bg-olive p-4 rounded-3xl text-white"><Users size={28} /></div>
            <div>
              <h1 className="text-3xl font-serif text-olive">Área de Prescrição</h1>
              <p className="text-gray-400">Gerenciando: <span className="text-olive font-bold">{p.nome}</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <select 
              className="bg-softBeige px-4 py-3 rounded-xl border-none font-bold text-olive outline-none"
              onChange={(e) => setSelectedPatientId(e.target.value)}
              value={selectedPatientId}
            >
              {patients.map(pat => <option key={pat.id} value={pat.id}>{pat.nome}</option>)}
            </select>
            <button onClick={() => setIsLoggedIn(false)} className="p-3 rounded-xl bg-red-50 text-red-500 hover:bg-red-100"><LogOut size={20}/></button>
          </div>
        </header>

        {/* Tab Navigation Admin */}
        <div className="max-w-7xl mx-auto w-full flex bg-white/50 p-2 rounded-2xl gap-2 overflow-x-auto">
          {[
            { id: 'overview', label: 'Cadastro', icon: UserPlus },
            { id: 'diet', label: 'Dieta', icon: Utensils },
            { id: 'workout', label: 'Exercícios', icon: Activity },
            { id: 'progress', label: 'Evolução', icon: TrendingUp },
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-olive text-white shadow-lg' : 'text-gray-400 hover:bg-white'}`}
            >
              <tab.icon size={18} /> {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Admin */}
        <main className="max-w-7xl mx-auto w-full">
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              <div className="bg-white p-10 rounded-[3rem] shadow-sm space-y-6">
                <h3 className="text-2xl font-serif text-olive">Dados do Paciente</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase ml-2">Objetivo Principal</label>
                    <input 
                      className="w-full p-4 rounded-2xl bg-softBeige border-none outline-none mt-1" 
                      defaultValue={p.objetivo} 
                      onBlur={(e) => updatePatient({ ...p, objetivo: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase ml-2">Próxima Consulta</label>
                    <input 
                      type="date"
                      className="w-full p-4 rounded-2xl bg-softBeige border-none outline-none mt-1" 
                      defaultValue={p.proximaConsulta} 
                      onChange={(e) => updatePatient({ ...p, proximaConsulta: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-olive text-white p-10 rounded-[3rem] shadow-xl flex flex-col justify-center text-center">
                <h4 className="text-xl font-serif mb-4">Novo Paciente?</h4>
                <p className="opacity-70 text-sm mb-8">Clique abaixo para adicionar um novo cadastro na sua base de dados.</p>
                <button 
                  onClick={() => {
                    const name = prompt("Nome completo:");
                    if(name) {
                      const email = prompt("E-mail:");
                      const newP = { ...INITIAL_PATIENTS[0], id: Date.now().toString(), nome: name, email: email, pesoData: [{name: 'Ini', peso: 80}], dieta: [], exercicios: '' };
                      setPatients([...patients, newP]);
                      setSelectedPatientId(newP.id);
                    }
                  }}
                  className="bg-white text-olive py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
                >
                  Cadastrar Agora
                </button>
              </div>
            </div>
          )}

          {activeTab === 'diet' && (
            <div className="bg-white p-10 rounded-[4rem] shadow-sm animate-fade-in">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-serif text-olive flex items-center gap-3"><Utensils /> Montar Cardápio</h3>
                <button onClick={() => addMeal(p.id)} className="flex items-center gap-2 bg-olive text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:bg-olive-dark transition-all">
                  <Plus size={20} /> Adicionar Refeição
                </button>
              </div>
              <div className="space-y-6">
                {p.dieta.map((m) => (
                  <div key={m.id} className="grid md:grid-cols-6 gap-4 bg-softBeige p-6 rounded-[2rem] relative group border border-transparent hover:border-olive/20 transition-all">
                    <div className="md:col-span-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Horário</label>
                      <input type="time" defaultValue={m.time} onBlur={(e) => updateMeal(p.id, m.id, 'time', e.target.value)} className="w-full bg-white p-2 rounded-xl border-none outline-none" />
                    </div>
                    <div className="md:col-span-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Refeição</label>
                      <input defaultValue={m.meal} onBlur={(e) => updateMeal(p.id, m.id, 'meal', e.target.value)} className="w-full bg-white p-2 rounded-xl border-none outline-none font-bold" />
                    </div>
                    <div className="md:col-span-3">
                      <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Itens e Quantidades</label>
                      <textarea defaultValue={m.items} onBlur={(e) => updateMeal(p.id, m.id, 'items', e.target.value)} className="w-full bg-white p-2 rounded-xl border-none outline-none text-sm min-h-[60px]" />
                    </div>
                    <div className="md:col-span-1 flex items-center justify-end">
                      <button onClick={() => removeMeal(p.id, m.id)} className="text-red-300 hover:text-red-600 p-2"><Trash2 size={20}/></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'workout' && (
            <div className="bg-white p-10 rounded-[4rem] shadow-sm animate-fade-in">
              <h3 className="text-2xl font-serif text-olive mb-8 flex items-center gap-3"><Activity /> Prescrição de Atividades</h3>
              <textarea 
                defaultValue={p.exercicios} 
                onBlur={(e) => updatePatient({ ...p, exercicios: e.target.value })}
                className="w-full h-80 bg-softBeige p-8 rounded-[3rem] border-none outline-none font-medium text-gray-700 leading-relaxed"
                placeholder="Ex: Treino A: Peito e Tríceps... 20 min de HIIT..."
              />
              <div className="mt-6 flex justify-end">
                 <p className="text-xs text-gray-400 flex items-center gap-2"><Save size={14}/> Alterações salvas automaticamente ao sair do campo.</p>
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
              <div className="md:col-span-1 bg-white p-10 rounded-[3rem] shadow-sm space-y-6">
                <h3 className="text-xl font-serif text-olive">Novo Peso</h3>
                <div className="space-y-4">
                   <input id="weightInput" type="number" placeholder="Peso (kg)" className="w-full p-4 rounded-2xl bg-softBeige outline-none border-none" />
                   <button 
                    onClick={() => {
                      const input = document.getElementById('weightInput') as HTMLInputElement;
                      handleAddWeight(p.id, input.value);
                      input.value = '';
                    }}
                    className="w-full bg-olive text-white py-4 rounded-2xl font-bold shadow-lg"
                   >
                     Atualizar Evolução
                   </button>
                </div>
              </div>
              <div className="md:col-span-2 bg-white p-10 rounded-[3rem] shadow-sm">
                <h3 className="text-xl font-serif text-olive mb-8">Histórico Gráfico</h3>
                <div className="h-64">
                   <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={p.pesoData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                      <XAxis dataKey="name" hide />
                      <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
                      <Tooltip />
                      <Area type="monotone" dataKey="peso" stroke="#4A6741" strokeWidth={3} fill="#4A674120" />
                    </AreaChart>
                   </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }

  // --- VIEW: PACIENTE (JOÃO SILVA) ---
  const p = activePatient;
  return (
    <div className="animate-fade-in min-h-screen bg-softBeige p-4 md:py-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Paciente */}
        <header className="flex flex-col md:flex-row justify-between items-center bg-white p-10 rounded-[3.5rem] shadow-sm border border-olive/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-olive"></div>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-3xl bg-olive text-white flex items-center justify-center text-3xl font-serif shadow-xl rotate-3 group-hover:rotate-0 transition-transform">
              {p.nome[0]}
            </div>
            <div>
              <h1 className="text-3xl font-serif text-olive">Bem-vindo, {p.nome.split(' ')[0]}!</h1>
              <div className="flex items-center gap-3 mt-1">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1"><Target size={12}/> {p.objetivo}</span>
                 <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                 <span className="text-xs font-bold text-olive uppercase tracking-widest flex items-center gap-1"><Calendar size={12}/> Retorno: {p.proximaConsulta ? new Date(p.proximaConsulta).toLocaleDateString('pt-BR') : 'A definir'}</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsLoggedIn(false)} className="px-6 py-2 rounded-xl text-gray-400 hover:text-red-500 font-bold transition-all">Sair do App</button>
        </header>

        {/* Tab Navigation Paciente */}
        <div className="flex bg-white/50 p-2 rounded-2xl gap-2 overflow-x-auto no-scrollbar">
          {[
            { id: 'diet', label: 'Minha Dieta', icon: Utensils },
            { id: 'workout', label: 'Meus Treinos', icon: Activity },
            { id: 'progress', label: 'Minha Evolução', icon: TrendingUp },
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all whitespace-nowrap ${activeTab === tab.id || (activeTab === 'overview' && tab.id === 'diet') ? 'bg-olive text-white shadow-xl -translate-y-1' : 'text-gray-400 hover:bg-white'}`}
            >
              <tab.icon size={18} /> {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Paciente */}
        <main>
          {(activeTab === 'diet' || activeTab === 'overview') && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white p-10 rounded-[3.5rem] shadow-sm">
                <h2 className="text-2xl font-serif text-olive mb-8">Plano Alimentar Estratégico</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {p.dieta.length > 0 ? p.dieta.map((m, i) => (
                    <div key={m.id} className="bg-softBeige/50 p-8 rounded-[2.5rem] border border-olive/5 hover:border-olive/20 transition-all flex gap-6">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-olive shadow-sm">
                           <Clock size={24} />
                        </div>
                        <span className="text-sm font-bold text-olive">{m.time}</span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-serif text-olive">{m.meal}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{m.items}</p>
                      </div>
                    </div>
                  )) : (
                    <div className="col-span-2 text-center py-20 bg-softBeige rounded-[3rem] border-2 border-dashed border-olive/10">
                       <p className="text-gray-400 font-medium">Sua nova dieta está sendo enviada pela Nutri...</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'workout' && (
            <div className="bg-white p-10 rounded-[4rem] shadow-sm animate-fade-in">
              <div className="flex items-center gap-4 mb-10">
                 <div className="bg-olive/10 p-4 rounded-3xl text-olive"><Activity size={32}/></div>
                 <h2 className="text-3xl font-serif text-olive">Protocolo de Treino</h2>
              </div>
              <div className="p-10 bg-softBeige/60 rounded-[3rem] border border-olive/10">
                 <p className="text-gray-700 font-medium text-lg leading-loose whitespace-pre-line">
                    {p.exercicios || 'Aguarde a Dra. Flávia prescrever seus exercícios personalizados.'}
                 </p>
              </div>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                 <div className="bg-blue-50 p-6 rounded-3xl flex items-center gap-4">
                    <Info className="text-blue-500" />
                    <p className="text-sm text-blue-800">Dúvida sobre execução? Mande vídeo no WhatsApp da Dra.</p>
                 </div>
                 <div className="bg-orange-50 p-6 rounded-3xl flex items-center gap-4">
                    <CheckCircle2 className="text-orange-500" />
                    <p className="text-sm text-orange-800">Lembre-se de registrar suas cargas no diário.</p>
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
              <div className="md:col-span-2 bg-white p-12 rounded-[4rem] shadow-sm">
                <div className="flex justify-between items-center mb-10">
                   <h2 className="text-2xl font-serif text-olive">Trajetória de Peso</h2>
                   <div className="px-6 py-2 bg-olive/10 rounded-full text-olive font-bold text-sm">
                      {p.pesoData[p.pesoData.length-1].peso} kg Atuais
                   </div>
                </div>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={p.pesoData}>
                      <defs>
                        <linearGradient id="colorP" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4A6741" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#4A6741" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#999'}} dy={10} />
                      <YAxis hide domain={['dataMin - 3', 'dataMax + 3']} />
                      <Tooltip contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'}} />
                      <Area type="monotone" dataKey="peso" stroke="#4A6741" strokeWidth={5} fill="url(#colorP)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="md:col-span-1 space-y-6">
                <div className="bg-olive text-white p-10 rounded-[3.5rem] shadow-xl">
                  <h4 className="text-sm font-bold uppercase tracking-widest opacity-70 mb-4">Meta Atual</h4>
                  <p className="text-3xl font-serif mb-6">Redução de 5% de Gordura Corporal</p>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-white w-[65%] h-full"></div>
                  </div>
                  <p className="text-right text-[10px] font-bold mt-2">65% CONCLUÍDO</p>
                </div>
                <div className="bg-white p-10 rounded-[3.5rem] shadow-sm">
                  <h4 className="text-olive font-serif text-xl mb-4">Destaques</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-olive rounded-full"></div> Perda constante de peso
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-olive rounded-full"></div> Melhora no sono reportada
                    </li>
                  </ul>
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
