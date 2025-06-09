import React from 'react';
import { FileText, Scale, Leaf, Shield, Users, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: FileText,
      title: 'Licenciamento Ambiental',
      description: 'Assessoria completa em processos de licenciamento junto aos órgãos ambientais competentes.',
      details: [
        'Licenças Prévia, de Instalação e de Operação',
        'Renovação e alteração de licenças existentes',
        'Licenciamento de atividades industriais, minerárias e energéticas',
        'Acompanhamento de processos nos órgãos estaduais e federais'
      ],
      color: 'emerald'
    },
    {
      icon: Scale,
      title: 'Consultoria Jurídica',
      description: 'Orientação estratégica para compliance ambiental e prevenção de riscos legais.',
      details: [
        'Auditoria de compliance ambiental',
        'Due diligence ambiental',
        'Elaboração de políticas internas',
        'Treinamento de equipes'
      ],
      color: 'teal'
    },
    {
      icon: Leaf,
      title: 'Defesa Ambiental',
      description: 'Representação em processos administrativos e judiciais relacionados ao meio ambiente.',
      details: [
        'Defesa em autos de infração ambiental',
        'Recursos administrativos junto aos órgãos ambientais',
        'Ações judiciais ambientais',
        'Negociação de TACs (Termos de Ajustamento de Conduta)'
      ],
      color: 'green'
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: 'Compliance Ambiental',
      description: 'Implementação de programas de conformidade ambiental adequados ao seu negócio.'
    },
    {
      icon: Users,
      title: 'Consultoria ESG',
      description: 'Assessoria em práticas ambientais, sociais e de governança corporativa.'
    },
    {
      icon: AlertTriangle,
      title: 'Gestão de Crises',
      description: 'Resposta rápida e eficaz em situações de emergência ambiental.'
    },
    {
      icon: CheckCircle,
      title: 'Auditoria Legal',
      description: 'Revisão abrangente da conformidade legal ambiental da sua empresa.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Análise do caso e identificação das necessidades específicas do cliente.'
    },
    {
      step: '02',
      title: 'Diagnóstico',
      description: 'Avaliação técnica detalhada e identificação de riscos e oportunidades.'
    },
    {
      step: '03',
      title: 'Estratégia',
      description: 'Desenvolvimento de plano de ação customizado para cada situação.'
    },
    {
      step: '04',
      title: 'Execução',
      description: 'Implementação das soluções com acompanhamento constante e transparente.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Soluções jurídicas especializadas em direito ambiental, 
            adaptadas às necessidades específicas de cada cliente.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Solicite uma Proposta
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Serviços Principais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise especializada nas áreas mais importantes do direito ambiental brasileiro.
            </p>
          </div>
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-xl mb-6">
                    <service.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`mt-12 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={
                      index === 0 
                        ? "https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=800"
                        : index === 1 
                        ? "https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=800"
                        : "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=800"
                    }
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Serviços Complementares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções adicionais para atender todas as suas necessidades em direito ambiental.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-lg mb-6">
                  <service.icon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossa Metodologia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo estruturado que garante resultados eficazes e transparência total.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 text-white font-bold text-xl rounded-full mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Precisa de Assessoria Especializada?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Nossa equipe está pronta para analisar seu caso e oferecer as melhores soluções 
            em direito ambiental. Entre em contato para uma consulta gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg"
            >
              Consulta Gratuita
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

export default Services;