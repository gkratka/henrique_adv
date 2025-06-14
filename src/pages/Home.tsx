import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, CheckCircle, Factory, Gem, Trees, Droplets, FileCheck, MapPin, Phone, Mail, Clock, Fish, Home as HomeIcon, MessageCircle } from 'lucide-react';
import henriquePhoto from '../assets/henrique-photo-zoomed.png';
import backgroundPic1 from '../assets/background-pic-1.jpeg';
import embargoAmbientalImg from '../assets/embargo-ambiental.png';
import licensiamentoAmbientalImg from '../assets/licensiamento-ambiental.png';
import recursosHidricosImg from '../assets/recursos-hidricos.png';

const scrollToContato = () => {
  const el = document.getElementById('contato');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

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
      icon: FileCheck,
      title: 'Outorga de Uso da Água',
      description: 'Outorga da água é obrigatória para uso de recursos hídricos.'
    },
    {
      icon: Fish,
      title: 'Piscicultura',
      description: 'O crescimento populacional impulsionou a degradação ambiental.'
    },
    {
      icon: HomeIcon,
      title: 'Loteamento',
      description: 'Avaliação de impactos para licenciamento de loteamentos.'
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
                <button
                  onClick={scrollToContato}
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  type="button"
                >
                  Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
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
                  src={backgroundPic1}
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
          <div className="text-center mb-8">
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
      <section className="pt-12 pb-20 bg-emerald-50">
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
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10">
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
            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-2 rounded-full mb-4">Notícias e Artigos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conhecimento que Transforma</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantenha-se atualizado com as últimas mudanças na legislação ambiental brasileira e insights práticos da nossa equipe de especialistas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
              <img src={recursosHidricosImg} alt="Outorga de Uso da Água" className="h-48 w-full rounded-t-2xl object-cover object-center" />
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">Outorga de Uso da Água</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">A importância da outorga no uso dos recursos hídricos</h3>
                <p className="text-gray-600 mb-4 flex-1">Saiba por que a outorga é fundamental para o uso legal e sustentável da água em atividades agropecuárias, industriais e de irrigação, e como garantir segurança jurídica e ambiental para seu projeto.</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="mr-2">Fonte: Itamarandiba Hoje</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>21 de outubro, 2024</span>
                  <a href="https://www.itamarandibahoje.com.br/noticias/agro-hoje/a-importancia-da-outorga-no-uso-dos-recursos-hidricos.html" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold hover:underline flex items-center">Ler mais <ArrowRight className="ml-1 h-4 w-4" /></a>
                </div>
              </div>
            </div>
            {/* Placeholder Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
              <img src={licensiamentoAmbientalImg} alt="Licenciamento Ambiental" className="h-48 w-full rounded-t-2xl object-cover object-center" />
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">Licenciamento Ambiental</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Estudos Ambientais e Licenciamento: O que você precisa saber</h3>
                <p className="text-gray-600 mb-4 flex-1">Descubra a importância dos estudos ambientais e do licenciamento para empreendimentos, etapas do processo, exigências legais e como garantir a regularidade ambiental do seu projeto.</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="mr-2">Fonte: Premium Agroambiental</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Atualizado em 2024</span>
                  <a href="https://www.premiumagroambiental.com.br/estudos-ambientais-licenciamento-ambiental?" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold hover:underline flex items-center">Ler mais <ArrowRight className="ml-1 h-4 w-4" /></a>
                </div>
              </div>
            </div>
            {/* Placeholder Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
              <img src={embargoAmbientalImg} alt="Embargo Ambiental" className="h-48 w-full rounded-t-2xl object-cover object-center" />
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">Embargo Ambiental</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Multa e Embargo Ambiental: O que fazer?</h3>
                <p className="text-gray-600 mb-4 flex-1">Entenda o que é embargo ambiental, as principais causas, consequências e como agir diante de uma multa ou embargo ambiental, incluindo direitos, defesa e medidas judiciais.</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="mr-2">Fonte: Laporte & Queiroz</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>10 de janeiro, 2023</span>
                  <a href="https://laportequeiroz.adv.br/multa-e-embargo-ambiental/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold hover:underline flex items-center">Ler mais <ArrowRight className="ml-1 h-4 w-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section className="py-20 bg-gray-50">
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5562999940583"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-200"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
        aria-label="Fale conosco no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.421h-.001a8.933 8.933 0 0 1-4.548-1.252l-.326-.194-3.382.889.902-3.293-.213-.338a8.922 8.922 0 0 1-1.373-4.726c.001-4.941 4.011-8.951 8.954-8.951 2.389 0 4.637.933 6.324 2.623a8.822 8.822 0 0 1 2.624 6.326c-.003 4.941-4.013 8.951-8.954 8.951m7.688-16.611A10.92 10.92 0 0 0 12.051 0C5.495 0 .052 5.444.049 12c0 2.116.552 4.184 1.6 5.998L0 24l6.184-1.618A11.01 11.01 0 0 0 12.051 24c6.557 0 11.999-5.443 12-12.001.001-2.652-.82-5.197-2.368-7.207"/>
        </svg>
      </a>
    </div>
  );
};

export default Home;