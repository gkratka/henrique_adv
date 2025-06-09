import React from 'react';
import { Award, Target, Heart, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excelência Técnica',
      description: 'Conhecimento profundo e atualizado da legislação ambiental brasileira e suas constantes mudanças.'
    },
    {
      icon: Heart,
      title: 'Compromisso Ambiental',
      description: 'Genuína paixão pela preservação do meio ambiente e desenvolvimento sustentável.'
    },
    {
      icon: Users,
      title: 'Relacionamento Duradouro',
      description: 'Construímos parcerias de longo prazo baseadas em confiança e resultados consistentes.'
    },
    {
      icon: Award,
      title: 'Integridade',
      description: 'Ética e transparência em todas as nossas ações e relacionamentos profissionais.'
    }
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Fundação',
      description: 'Silva & Associados é fundado com foco exclusivo em direito ambiental.'
    },
    {
      year: '2012',
      title: 'Expansão',
      description: 'Abertura de novos escritórios e especialização em licenciamento ambiental.'
    },
    {
      year: '2016',
      title: 'Reconhecimento',
      description: 'Premiação como um dos melhores escritórios de direito ambiental do país.'
    },
    {
      year: '2020',
      title: 'Inovação',
      description: 'Implementação de tecnologias digitais para melhor atendimento aos clientes.'
    },
    {
      year: '2024',
      title: 'Liderança',
      description: 'Consolidação como referência nacional em direito ambiental empresarial.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sobre Silva & Associados
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Há mais de 15 anos dedicados exclusivamente ao direito ambiental, 
                construímos nossa reputação baseada em conhecimento técnico, 
                ética profissional e resultados excepcionais para nossos clientes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                  <div className="text-gray-600">Casos Resolvidos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe de advogados especializados"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossa Missão
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Fornecer assessoria jurídica de excelência em direito ambiental, 
              equilibrando o desenvolvimento econômico com a preservação ambiental, 
              sempre com ética, transparência e compromisso com o futuro sustentável do Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que orientam nosso trabalho e definem nossa identidade profissional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-xl mb-6">
                  <value.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossa Trajetória
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma jornada de crescimento constante e conquistas significativas no direito ambiental.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-emerald-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="text-emerald-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Floresta amazônica - meio ambiente brasileiro"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Expertise Reconhecida
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nossa experiência abrange desde pequenas empresas até grandes corporações multinacionais, 
                sempre com a mesma dedicação e excelência técnica que nos tornou referência no mercado.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Mantemos relacionamento próximo com órgãos ambientais e acompanhamos constantemente 
                as mudanças na legislação para oferecer sempre as soluções mais atuais e eficazes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Licenciamento ambiental em todos os níveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Consultoria em compliance ambiental</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Defesa em processos administrativos e judiciais</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Assessoria em ESG e sustentabilidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;