import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, CheckCircle, Factory, Gem, Trees, Droplets, FileCheck, MapPin } from 'lucide-react';
import henriquePhoto from '../assets/henrique-photo-office-2.png';

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
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Nossa História</h3>
              <p className="text-lg text-gray-700 mb-6">
                Há mais de 15 anos, temos o privilégio de atuar na vanguarda do direito ambiental brasileiro, acompanhando as transformações da legislação e as crescentes demandas por sustentabilidade em todos os setores da economia.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nossa trajetória começou com um propósito claro: <span className="font-semibold text-emerald-700">tornar o direito ambiental acessível</span>, traduzindo a complexidade legal em soluções práticas e comunicação transparente para nossos clientes.
              </p>
              <p className="text-lg text-gray-700">
                Hoje, somos reconhecidos como referência nacional em assessoria jurídica ambiental, atendendo desde pequenos empreendedores até grandes corporações, sempre mantendo nosso compromisso com a <span className="font-semibold text-emerald-700">disponibilidade total e relacionamento próximo</span>.
              </p>
            </div>
            <div className="flex flex-col items-start md:w-96 w-full justify-start">
              <img
                src={henriquePhoto}
                alt="Henrique Kratka"
                className="w-full h-[420px] object-cover rounded-2xl shadow-lg mt-10"
                style={{ maxWidth: '420px', objectPosition: 'center 55%', transform: 'scale(1.35)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-2 rounded-full mb-4">Fale Conosco</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vamos Conversar sobre Seu Projeto</h2>
            <p className="text-lg text-gray-600">Nossa equipe está sempre disponível para esclarecer dúvidas e oferecer soluções personalizadas. Entre em contato e agende sua consulta gratuita.</p>
          </div>
          <form className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="Seu nome completo" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="seu@email.com" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
              <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none" placeholder="Descreva sua necessidade ou dúvida..."></textarea>
            </div>
            <button type="submit" className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">Enviar Mensagem</button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Precisa de Assessoria Jurídica Ambiental?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Nossa equipe está pronta para ajudar. Agende uma consulta gratuita e 
            descubra como podemos proteger seus interesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg"
            >
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/equipe"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-200"
            >
              Conhecer a Equipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;