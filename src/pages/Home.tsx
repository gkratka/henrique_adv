import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, CheckCircle, Factory, Gem, Trees, Droplets, FileCheck, MapPin, Phone, Mail, Clock } from 'lucide-react';
import henriquePhoto from '../assets/henrique-photo-zoomed.png';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Proteção Legal Completa',
      description: 'Defendemos seus interesses com expertise em todas as áreas do direito ambiental brasileiro.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção dedicada e soluções jurídicas adaptadas às suas necessidades específicas.'
    },
    {
      icon: Award,
      title: '15+ Anos de Experiência',
      description: 'Histórico comprovado de sucesso em casos complexos de direito ambiental e regulatório.'
    }
  ];

  const services = [
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Prestamos serviços para obtenção de licenças ambientais para indústrias.'
    },
    {
      icon: Gem,
      title: 'Mineral',
      description: 'A mineração é essencial para a cadeia produtiva e o dia a dia da sociedade.'
    },
    {
      icon: Trees,
      title: 'Florestal',
      description: 'Suporte técnico e jurídico para licenciamento ambiental e outorga na zona rural.'
    },
    {
      icon: Droplets,
      title: 'Irrigação',
      description: 'Irrigação envolve reservatórios, captação, distribuição e drenagem.'
    },
    {
      icon: FileCheck,
      title: 'Outorga de Uso da Água',
      description: 'Outorga da água é obrigatória para uso de recursos hídricos.'
    },
    {
      icon: MapPin,
      title: 'Georreferenciamento',
      description: 'Realizamos o Georreferenciamento para a regularização da sua propriedade rural.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Casos Resolvidos', icon: Shield },
    { number: '200+', label: 'Clientes Ativos', icon: Users },
    { number: '15+', label: 'Anos de Experiência', icon: Award }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
                Especialistas em Direito Ambiental
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Protegemos o{' '}
                <span className="text-emerald-600">Meio Ambiente</span>{' '}
                e Seu{' '}
                <span className="text-emerald-600">Negócio</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Há mais de 15 anos oferecendo assessoria jurídica especializada em direito ambiental para empresas e 
                indivíduos em todo o Brasil. Comunicação clara, disponibilidade total.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/servicos"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all duration-200"
                >
                  Nossos Serviços
                </Link>
              </div>
              
              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-left">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <stat.icon className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
                    </div>
                    <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Natureza brasileira - Floresta preservada"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Principais Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções jurídicas especializadas para atender todas as suas necessidades 
              em direito ambiental e regulatório.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-lg mb-6">
                  <service.icon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <Link 
                  to="/servicos" 
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                >
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher Henrique Kratka Advogados?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos expertise técnica, experiência prática e atendimento humanizado 
              para oferecer as melhores soluções em direito ambiental.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-xl mb-6 group-hover:bg-emerald-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Nossa História Subsection */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10 mb-20">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Nossa História</h3>
              <p className="text-lg text-gray-700 mb-6">
                Natural de Goiânia, Henrique é especialista em Direito e Processo Penal, com MBA em Perícia, Auditoria e Gestão Ambiental.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Desde 2006, atua na área ambiental, inicialmente como consultor, atendendo produtores rurais, empresas e empreendedores em processos de licenciamento, regularização fundiária e gestão junto a órgãos ambientais.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Com ampla experiência prática e estratégica, integrou sua atuação técnica ao campo jurídico, oferecendo soluções completas e sustentáveis no setor ambiental e do agronegócio.
              </p>
              <p className="text-lg text-gray-700">
                Seu trabalho é pautado pela ética, <span className="font-semibold text-emerald-700">responsabilidade e compromisso com a segurança jurídica e ambiental de seus clientes</span>, sempre visando ao desenvolvimento econômico aliado à preservação dos recursos naturais.
              </p>
            </div>
            <div className="flex flex-col items-start md:w-96 w-full justify-start">
              <img
                src={henriquePhoto}
                alt="Henrique Kratka"
                className="w-full h-[420px] object-cover rounded-2xl shadow-lg mt-10"
                style={{ maxWidth: '420px', objectPosition: 'center 30%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conhecimento que Transforma Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-2 rounded-full mb-4">Conhecimento que Transforma</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conhecimento que Transforma</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantenha-se atualizado com as últimas mudanças na legislação ambiental brasileira e insights práticos da nossa equipe de especialistas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="h-48 w-full rounded-t-2xl bg-cover bg-center" style={{backgroundImage: 'url(https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&fit=crop&w=800&q=80)'}}></div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">Compliance</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance Ambiental: Guia Prático para PMEs</h3>
                <p className="text-gray-600 mb-4 flex-1">Como pequenas e médias empresas podem implementar programas efetivos de compliance ambiental.</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="mr-2">👩‍⚕️ Dra. Ana Oliveira</span>
                  <span className="mx-2">•</span>
                  <span>7 min</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>10 de março, 2024</span>
                  <Link to="#" className="text-emerald-600 font-semibold hover:underline flex items-center">Ler mais <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </div>
              </div>
            </div>
            {/* Placeholder Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="h-48 w-full rounded-t-2xl bg-cover bg-center" style={{backgroundImage: 'url(https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&fit=crop&w=800&q=80)'}}></div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">Jurisprudência</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Áreas de Preservação Permanente: Novos Entendimentos</h3>
                <p className="text-gray-600 mb-4 flex-1">Jurisprudência recente sobre delimitação e uso de APPs em propriedades rurais e urbanas.</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="mr-2">👨‍⚖️ Dr. Roberto Santos</span>
                  <span className="mx-2">•</span>
                  <span>6 min</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>5 de março, 2024</span>
                  <Link to="#" className="text-emerald-600 font-semibold hover:underline flex items-center">Ler mais <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </div>
              </div>
            </div>
            {/* Placeholder Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="h-48 w-full rounded-t-2xl bg-cover bg-center" style={{backgroundImage: 'url(https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&fit=crop&w=800&q=80)'}}></div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">Corporativo</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Due Diligence Ambiental em Fusões e Aquisições</h3>
                <p className="text-gray-600 mb-4 flex-1">Principais riscos ambientais a serem avaliados em processos de M&A e como mitigá-los.</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="mr-2">👩‍💼 Dra. Mariana Costa</span>
                  <span className="mx-2">•</span>
                  <span>8 min</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>28 de fevereiro, 2024</span>
                  <Link to="#" className="text-emerald-600 font-semibold hover:underline flex items-center">Ler mais <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info Column */}
            <div className="space-y-6">
              {/* Telefone */}
              <div className="bg-white p-6 rounded-2xl flex items-start gap-4 border border-emerald-100">
                <div className="flex items-center justify-center">
                  <Phone className="h-7 w-7 text-emerald-600 stroke-2" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-1">Telefone</div>
                  <div className="text-gray-800 text-base">(62) 99994-0583</div>
                  <div className="text-gray-500 text-sm">WhatsApp disponível</div>
                </div>
              </div>
              {/* E-mail */}
              <div className="bg-white border border-emerald-100 p-6 rounded-2xl flex items-start gap-4">
                <div className="flex items-center justify-center">
                  <Mail className="h-7 w-7 text-emerald-600 stroke-2" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-1">E-mail</div>
                  <div className="text-gray-800 text-base">hbconsultoriaambiental@gmail.com</div>
                  <div className="text-gray-500 text-sm">Resposta em até 2h</div>
                </div>
              </div>
              {/* Endereço */}
              <div className="bg-white border border-emerald-100 p-6 rounded-2xl flex items-start gap-4">
                <div className="flex items-center justify-center">
                  <MapPin className="h-7 w-7 text-emerald-600 stroke-2" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-1">Endereço</div>
                  <div className="text-gray-800 text-base">5° Avenida, n° 182, Quadra 102, Lote 13,<br />Setor Leste Universitário, Goiânia - GO<br />CEP: 74605-040</div>
                </div>
              </div>
              {/* Horários */}
              <div className="bg-white border border-emerald-100 p-6 rounded-2xl flex items-start gap-4">
                <div className="flex items-center justify-center">
                  <Clock className="h-7 w-7 text-orange-600 stroke-2" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-1">Horários</div>
                  <div className="text-gray-800 text-base">Segunda à Sexta: 8h às 18h<br />Sábado: 8h às 12h<br />Emergências: 24h</div>
                </div>
              </div>
            </div>
            {/* Form Column */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Solicite uma Consulta</h2>
                <p className="text-lg text-gray-600">Preencha o formulário abaixo e nossa equipe entrará em contato em breve.</p>
              </div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-base font-semibold text-gray-800 mb-2">Nome Completo</label>
                  <input type="text" id="nome" name="nome" placeholder="João Silva" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-base" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-gray-800 mb-2">E-mail</label>
                  <input type="email" id="email" name="email" placeholder="joao@exemplo.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-base" />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-base font-semibold text-gray-800 mb-2">Telefone</label>
                  <input type="tel" id="telefone" name="telefone" placeholder="(11) 98765-4321" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-base" />
                </div>
                <div>
                  <label htmlFor="assunto" className="block text-base font-semibold text-gray-800 mb-2">Assunto</label>
                  <select id="assunto" name="assunto" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-base">
                    <option>Selecione uma área de atuação</option>
                    <option>Embargos / Infrações Ambientais</option>
                    <option>Industrial</option>
                    <option>Mineral</option>
                    <option>Florestal</option>
                    <option>Irrigação</option>
                    <option>Outorga de Uso da Água</option>
                    <option>Piscicultura</option>
                    <option>Loteamento</option>
                    <option>Georreferenciamento</option>
                    <option>Outro Assunto</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-base font-semibold text-gray-800 mb-2">Sua Mensagem</label>
                  <textarea id="mensagem" name="mensagem" rows={5} placeholder="Por favor, descreva brevemente sua questão legal." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-base resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;